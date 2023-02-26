import {
  View,
  TextInput,
  TextInputProps,
  Text,
  StyleSheet,
  ViewStyle,
} from "react-native";

import {
  useController,
  FieldValues,
  UseControllerProps,
} from "react-hook-form";

type TypeSafeInputProps = Omit<TextInputProps, "defaultValue">;

interface Props<FormModel extends FieldValues>
  extends TypeSafeInputProps,
    UseControllerProps<FormModel> {
  label: string;
  style?: ViewStyle;
}

export function Input<FormModel extends FieldValues>({
  label,
  name,
  defaultValue,
  style,
  control,
  rules,
  ...rest
}: Props<FormModel>) {
  const { field, fieldState } = useController({
    control,
    name,
    defaultValue,
    rules: {
      ...rules,
      required: "This field is required",
    },
  });

  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        {...rest}
        style={styles.input}
        defaultValue={field.value}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
      />
      {fieldState.error && (
        <Text style={styles.error}>{fieldState.error.message}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },

  label: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 12,
    textTransform: "capitalize",
  },

  input: {
    marginTop: 10,

    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    padding: 12,

    color: "#505161",
    fontWeight: "800",
    fontSize: 12,
  },

  error: {
    color: "#FF0000",
    marginTop: 10,
  },
});
