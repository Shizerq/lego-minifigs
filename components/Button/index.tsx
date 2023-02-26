import {
  TouchableOpacity,
  Text,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";

interface Props extends TouchableOpacityProps {
  children: string;
}

export function Button({ children, style, ...rest }: Props) {
  return (
    <TouchableOpacity style={[styles.container, style]} {...rest}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#018DEC",
    borderRadius: 30,

    alignItems: "center",
    justifyContent: "center",

    minWidth: 250,

    shadowColor: "#000",
    shadowOpacity: 0.75,
    shadowRadius: 10,
  },

  text: {
    color: "#FFFFFF",
    textTransform: "uppercase",
    fontWeight: "800",
  },
});
