import React from "react";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";
import FormikTextInput from "./src/components/FormikTextInput";

export default () => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
};
