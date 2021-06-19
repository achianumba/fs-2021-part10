import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import theme from "../theme";
import Stat from "./Stat";

const styles = StyleSheet.create({
  container: {
    padding: theme.spacer[2],
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    backgroundColor: theme.colors.light,
  },
  avatar: {
    width: 48,
    height: 48,
    flex: 0,
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 48,
    marginRight: theme.spacer[2],
  },
  nameAndDesc: {
    flex: 1,
    flexGrow: 1,
    flexBasis: 260,
  },
  fullName: {
    fontWeight: theme.fontWeights.bold,
    marginBottom: theme.spacer[1] / 2,
  },
  description: {
    color: theme.colors.textSecondary,
    marginBottom: theme.spacer[1],
  },
  language: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.light,
    marginBottom: theme.spacer[2],
    padding: theme.spacer[1],
    borderRadius: 4,
    alignSelf: "flex-start", // Does not need to be a flex item to apply. It's the equivalent of "display: inline" in this case.
  },
});

const RepositoryItem = ({
  fullName,
  description,
  language,
  forksCount,
  stargazersCount,
  ratingAverage,
  reviewCount,
  ownerAvatarUrl,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
      <View style={styles.nameAndDesc}>
        <Text style={styles.fullName}>{fullName}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.language}>{language}</Text>
      </View>
      <Stat description="Stars" number={stargazersCount} />
      <Stat description="Forks" number={forksCount} />
      <Stat description="Reviews" number={reviewCount} />
      <Stat description="Rating" number={ratingAverage} />
    </View>
  );
};

export default RepositoryItem;
