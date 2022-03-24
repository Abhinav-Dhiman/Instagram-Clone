/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/core";
import { Divider } from "react-native-elements";
import Validator from "email-validator";
//import HomeScreen from '../../screens/HomeScreen';
import LoginScreen from "../../screens/LoginScreen";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase-config";
import {
  collection,
  addDoc,
  getFirestore,
  setDoc,
  doc,
} from "firebase/firestore";

const db = getFirestore();

const registerSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .min(6, "Password should be at least 6 characters long"),
  userName: Yup.string()
    .required()
    .min(2, "User Name should be at least 3 characters long "),
});

const getRandomProfilePicture = async () => {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  return data.results[0].picture.large;
};

const SignUpForm = () => {
  const { navigate } = useNavigation();
  const colRef = collection(db, "users");

  const onSignUp = async (userName, email, password) => {
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User Sign Up Successful", email, password);
      await setDoc(doc(colRef, authUser.user.email), {
        owner_uid: authUser.user.uid,
        userName: userName,
        email: email,
        profile_picture: await getRandomProfilePicture(),
      })
        .then(() => console.log("Added User to the Database"))
        .catch((err) => console.log(err.message));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <Formik
          initialValues={{ email: "", password: "", userName: "" }}
          onSubmit={(values) => {
            onSignUp(values.userName, values.email, values.password);
          }}
          validationSchema={registerSchema}
          validateOnMount={true}
        >
          {({ handleSubmit, handleBlur, handleChange, isValid, values }) => (
            <>
              <View
                style={[
                  styles.input,
                  {
                    borderColor:
                      values.userName.length < 1 || values.userName.length >= 3
                        ? "grey"
                        : "#ff0000",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#777"
                  placeholder="Enter User Name  ..."
                  autoCapitalize="none"
                  keyboardType="default"
                  autoFocus={true}
                  autoCorrect={false}
                  textContentType="name"
                  onChangeText={handleChange("userName")}
                  onBlur={handleBlur("userName")}
                  value={values.userName}
                />
              </View>
              <View
                style={[
                  styles.input,
                  {
                    borderColor:
                      values.email.length < 1 ||
                      Validator.validate(values.email)
                        ? "grey"
                        : "#ff0000",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#777"
                  placeholder="Enter Email, Phone No. or Username"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  //autoFocus={true}
                  textContentType="emailAddress"
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
              </View>
              <View
                style={[
                  styles.input,
                  {
                    borderColor:
                      values.password.length < 1 || values.password.length >= 6
                        ? "grey"
                        : "#ff0000",
                  },
                ]}
              >
                <TextInput
                  placeholderTextColor="#777"
                  placeholder="Enter Password"
                  autoCapitalize="none"
                  keyboardType="default"
                  autoCorrect={false}
                  textContentType="password"
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
              </View>

              <TouchableOpacity
                disabled={!isValid}
                style={styles.buttonWrapper(isValid)}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText(isValid)}>REGISTER</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <Divider width={0.2} color="#f0f0f099" style={{ marginTop: 100 }} />
      <View style={styles.footerWrapper}>
        <Text style={{ fontSize: 13, color: "black" }}>
          Already have an account !!
        </Text>
        <TouchableOpacity onPress={() => navigate(LoginScreen)}>
          <Text style={{ color: "red", marginLeft: 10, fontWeight: "bold" }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginTop: 20,
    padding: 5,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: "#ffffff90",
  },
  buttonWrapper: (isValid) => ({
    backgroundColor: isValid ? "#00000199" : "#90909090",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginHorizontal: 8,
    marginTop: 30,
  }),
  buttonText: (isValid) => ({
    color: isValid ? "white" : "#ffffff90",
    fontWeight: "bold",
    fontSize: 17,
  }),
  footerWrapper: {
    flexDirection: "row",
    padding: 10,
    paddingRight: 40,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
  },
});
export default SignUpForm;
