import React from "react";
import { StyleSheet } from "react-native";
import { Link } from "react-router-native";

import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  link: {
    paddingTop: theme.spacer[2],
    paddingBottom: theme.spacer[2],
    marginRight: theme.spacer[2],
  },
});

const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to} style={styles.link}>
      <Text fontWeight="bold" fontSize="subheading" color="light">
        {text}
      </Text>
    </Link>
  );
};

export default AppBarTab;
