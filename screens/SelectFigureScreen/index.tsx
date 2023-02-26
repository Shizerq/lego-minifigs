import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Background, Heading, Button, FigureCarousel } from "../../components";

import { RootStackScreenProps } from "../../types/navigation";

export function SelectFigureScreen({
  navigation,
  route,
}: RootStackScreenProps<"SelectFigure">) {
  const { figures } = route.params;
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const figure = figures[currentIndex];

  const save = React.useCallback(() => {
    navigation.navigate("DetailsForm", { figureId: figure.set_num });
  }, [figure]);

  return (
    <Background>
      <View style={styles.container}>
        <Heading>Choose your minifig</Heading>
        <FigureCarousel
          data={figures}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
        />
        <Button onPress={save}>Choose Figure</Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",

    marginVertical: 50,
  },
});
