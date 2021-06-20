import React from "react";
import { View, Pressable, StyleSheet } from "react-native";
import { Formik } from "formik";

import Text from "./Text";
import theme from "../theme";
import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  container: {
    paddingTop: theme.spacer[5],
    paddingRight: theme.spacer[2],
    paddingBottom: theme.spacer[5],
    paddingLeft: theme.spacer[2],
  },
  signIn: {
    color: theme.colors.light,
    backgroundColor: theme.colors.primary,
    fontSize: theme.fontSizes.subheading,
    textAlign: "center",
    padding: theme.spacer[2],
    borderRadius: theme.spacer[1],
  },
});

const SignIn = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const submitHandler = (values) => {
    console.log(values);
  };

  const handleValidate = (values) => {
    const errors = {};
    return errors;
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validate={handleValidate}
    >
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignInForm = ({ onSubmit }) => {
  return (
    <View style={styles.container}>
      <FormikTextInput
        label="Username"
        name="username"
        placeholder="e.g. johndoe1"
        testID="usernameField"
      />

      <FormikTextInput
        label="Password"
        secureTextEntry
        name="password"
        placeholder="Create a secure password"
        testID="passwordField"
      />

      <Pressable onPress={onSubmit} testId="submitButton">
        <Text style={styles.signIn}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
