import { View, ViewProps, StyleSheet, SafeAreaView } from "react-native";

interface Props extends ViewProps {
  variant?: "default" | "white";
}

export function Background({ variant = "default", children, ...rest }: Props) {
  return (
    <View style={[styles.background, styles[variant]]} {...rest}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  default: {
    backgroundColor: "#1F2136",
  },

  white: {
    backgroundColor: "#FFFFFF",
  },

  container: {
    flex: 1,
  },
});
