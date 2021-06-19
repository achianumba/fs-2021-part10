import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    paddingTop: Constants.statusBarHeight,
    marginBottom: theme.spacer[2],
    paddingBottom: theme.spacer[2],
    paddingLeft: theme.spacer[2],
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <ScrollView horizontal style={styles.container}>
      <AppBarTab text="Repositories" to="/" />
      <AppBarTab text="Sign in" to="sign-in" />
    </ScrollView>
  );
};

export default AppBar;
