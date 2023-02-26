import { Text, TextProps, StyleSheet } from "react-native";

interface Props extends TextProps {
  variant?: "default" | "primary";
}

export function Heading({ variant = "default", style, ...props }: Props) {
  return <Text {...props} style={[styles.heading, styles[variant], style]} />;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "900",
    textTransform: "uppercase",
  },

  default: {
    color: "#FFFFFF",
  },

  primary: {
    color: "#1F2136",
  },
});
