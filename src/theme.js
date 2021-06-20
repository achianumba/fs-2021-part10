import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    primary: "#0366d6",
    dark: "#24292e",
    light: "#ffffff",
    danger: "#d73a4a",
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
  spacer: {
    1: 8,
    2: 16,
    3: 24,
    4: 32,
    5: 40,
  },
};

export default theme;
