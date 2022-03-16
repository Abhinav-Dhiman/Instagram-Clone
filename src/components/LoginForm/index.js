import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigation } from "@react-navigation/core";
import HomeScreen from "../../screens/HomeScreen";
import { Divider } from "react-native-elements";
import Validator from "email-validator";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string()
    .required()
    .min(6, "Password should be at least 6 characters long"),
});
const LoginForm = () => {
  const { navigate } = useNavigation();
  return (
    <>
      <KeyboardAvoidingView style={styles.container} behavior="position">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {
            console.log(values);
            navigate(HomeScreen);
          }}
          validationSchema={loginSchema}
          validateOnMount={true}
        >
          {({ handleSubmit, handleBlur, handleChange, isValid, values }) => (
            <>
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
                <Text style={styles.buttonText(isValid)}>Log In</Text>
              </TouchableOpacity>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
      <Divider width={0.2} color="#505050" style={{ marginTop: 100 }} />
      <View style={styles.footerWrapper}>
        <Text style={{ fontSize: 13 }}>Don't have an account ? </Text>
        <TouchableOpacity>
          <Text
            style={{ color: "#621BD6", marginLeft: 10, fontWeight: "bold" }}
          >
            Sign Up
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
    backgroundColor: "#90909010",
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
export default LoginForm;
