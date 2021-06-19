import React from "react";
import { Pressable } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";
import theme from "../theme";

const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to} style={{ marginRight: theme.spacer[2] }}>
      <Text fontWeight="bold" fontSize="subheading" color="light">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
