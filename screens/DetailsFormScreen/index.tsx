import { Dimensions, StyleSheet, View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { useForm } from "react-hook-form";

import { Background, Button, Heading, Input } from "../../components";

import { validateEmail } from "../../helpers/validateEmail";
import { RootStackScreenProps } from "../../types/navigation";

import { DetailsFormModel } from "../../types/detailsForm";

const screenHeight = Dimensions.get("window").height;

export function DetailsFormScreen({
  navigation,
  route,
}: RootStackScreenProps<"DetailsForm">) {
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm<DetailsFormModel>({
    reValidateMode: "onBlur",
  });

  const onSubmit = handleSubmit((data) => {
    if (isValid) {
      navigation.navigate("Summary", {
        user: data,
        figureId: route.params.figureId,
      });
    }
  });

  return (
    <Background>
      <KeyboardAwareScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Heading>Personal Details</Heading>
          <View style={styles.form}>
            <Input control={control} name="fullName" label="Full Name" />
            <Input
              control={control}
              rules={{
                validate: (value) => validateEmail(value) || "Invalid email",
              }}
              name="email"
              label="Email"
              keyboardType="email-address"
            />
            <Input control={control} name="address" label="Address" />
            <Input control={control} name="city" label="City" />
            <Input control={control} name="state" label="State" />
            <Input control={control} name="zipCode" label="Zip code" />
          </View>
          <Button onPress={onSubmit} style={styles.button}>
            View Summary
          </Button>
        </View>
      </KeyboardAwareScrollView>
    </Background>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingVertical: 30,
  },

  container: {
    minHeight: screenHeight * 0.75,
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: "8%",

    // makes eye-pleasant space if scroll is enabled
    marginBottom: 50,
  },

  form: {
    width: "100%",
  },

  button: {
    // make space on small screens
    marginTop: 20,
  },
});
