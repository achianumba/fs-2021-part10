import React from "react";
import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.dark,
    paddingTop: Constants.statusBarHeight,
    marginBottom: theme.spacer[2],
    // paddingTop: theme.spacer[2],
    paddingBottom: theme.spacer[2],
    paddingLeft: theme.spacer[2],
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab text="Repositories" />
    </View>
  );
};

export default AppBar;
