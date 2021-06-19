import React from "react";
import { View, Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 0,
    maxWidth: "100%",
  },
  number: {
    fontWeight: theme.fontWeights.bold,
    textAlign: "center",
  },
  description: {
    color: theme.colors.textSecondary,
    textAlign: "center",
  },
});

const Stat = ({ number, description }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>
        {number >= 1e3 ? `${(number / 1e3).toFixed(1)}k` : number}
      </Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default Stat;
