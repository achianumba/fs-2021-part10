import React from "react";
import { StyleSheet, View } from "react-native";
import { useField } from "formik";

import TextInput from "./TextInput";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacer[2],
  },
  label: {
    marginBottom: theme.spacer[1] / 2,
    fontSize: theme.fontSizes.body,
    fontWeight: theme.fontWeights.bold,
  },
  textInput: {
    padding: theme.spacer[1],
    fontSize: theme.fontSizes.subheading,
    borderWidth: 1,
    borderRadius: theme.spacer[1],
  },
  errorText: {
    marginTop: 5,
    color: "crimson",
  },
});

const FormikTextInput = ({ name, label, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={[
          styles.textInput,
          showError
            ? { borderColor: "#d73a4a" }
            : { borderColor: theme.colors.textSecondary },
        ]}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;
