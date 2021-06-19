import React from "react";
import Main from "./src/components/Main";
import { NativeRouter } from "react-router-native";

export default () => {
  return (
    <NativeRouter>
      <Main />
    </NativeRouter>
  );
};
