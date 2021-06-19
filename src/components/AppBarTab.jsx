import React from "react";
import { Pressable } from "react-native";
import AppBar from "./AppBar";
import Text from "./Text";

const AppBarTab = ({ text }) => {
  return (
    <Pressable onPress={null}>
      <Text fontWeight="bold" fontSize="subheading" color="light">
        {text}
      </Text>
    </Pressable>
  );
};

export default AppBarTab;
