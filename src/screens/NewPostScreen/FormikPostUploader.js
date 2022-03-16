import {
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import validUrl from "valid-url";
import { useNavigation } from "@react-navigation/core";

const postUploaderSchema = Yup.object().shape({
  imageUrl: Yup.string().url().required("please enter a URL *"),
  caption: Yup.string()
    .required("caption is a required field *")
    .max(2200, "caption has reached it's max length *"),
});

const placeholderImage =
  "https://lanecdr.org/wp-content/uploads/2019/08/placeholder.png";

const FormikPostUploader = () => {
  const { goBack } = useNavigation();
  const [thumbnail, setThumbnail] = useState(placeholderImage);
  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ caption: "", imageUrl: "" }}
        onSubmit={(values) => {
          console.log(values);
          console.log("Your Data is submitted");
          goBack();
        }}
        validationSchema={postUploaderSchema}
        //validateOnMount={true}
      >
        {/* caption,url */}

        {({
          handleChange,
          handleSubmit,
          handleBlur,
          errors,
          values,
          isValid,
        }) => (
          <>
            <View style={styles.thumbnailWrapper}>
              <Image
                source={{
                  uri: validUrl.isUri(thumbnail) ? thumbnail : placeholderImage,
                }}
                style={styles.thumbnail}
              />
              <View style={styles.captionContainer}>
                <TextInput
                  placeholder="Enter Caption"
                  placeholderTextColor="aliceblue"
                  multiline
                  style={{ color: "white", fontSize: 15 }}
                  onChangeText={handleChange("caption")}
                  onBlur={handleBlur("caption")}
                  value={values.caption}
                />
                {errors.caption && (
                  <Text style={styles.errorsText}>{errors.caption}</Text>
                )}
              </View>
            </View>

            <TextInput
              onChange={(e) => setThumbnail(e.nativeEvent.text)}
              style={styles.textInput}
              placeholder="Enter Image Url"
              placeholderTextColor="lightgrey"
              onChangeText={handleChange("imageUrl")}
              onBlur={handleBlur("imageUrl")}
              value={values.imageUrl}
            />
            {errors.imageUrl && (
              <Text
                style={[styles.errorsText, { marginLeft: 20, marginTop: 5 }]}
              >
                {errors.imageUrl}
              </Text>
            )}

            <View style={styles.button}>
              <TouchableOpacity onPress={handleSubmit} disabled={!isValid}>
                <Text
                  style={{
                    color: "greenyellow",
                    fontSize: 20,
                    fontWeight: "bold",
                  }}
                >
                  Share
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 30,
    padding: 2,
  },
  thumbnailWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    flexDirection: "row",
  },
  thumbnail: {
    height: 160,
    width: 160,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#80808050",
  },
  captionContainer: {
    marginHorizontal: 10,
    padding: 10,
    width: 170,
    borderRadius: 20,
  },
  textInput: {
    color: "whitesmoke",
    marginLeft: 10,
    fontSize: 14,
    backgroundColor: "#081818",
    borderRadius: 20,
    padding: 10,
    width: "80%",
    fontWeight: "900",
  },
  errorsText: {
    color: "#ff000099",
    fontSize: 12,
    fontWeight: "200",
  },
  button: {
    backgroundColor: "#80808090",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    marginLeft: "65%",
    marginTop: "15%",
  },
});

export default FormikPostUploader;
