import * as React from "react";
import { StyleSheet, ActivityIndicator, Alert, View } from "react-native";

import { Background, Button } from "../../components";

import { axiosInstance } from "../../helpers/axios";

import { getRandomFigures } from "../../helpers/getRandomFigures";
import { harryPotterThemeId } from "../../constants/themeId";

import { RootStackScreenProps } from "../../types/navigation";
import { MiniFiguresResponse } from "../../types/miniFigs";

export function BeginDrawingScreen({
  navigation,
}: RootStackScreenProps<"BeginDrawing">) {
  const [loading, setLoading] = React.useState(false);

  const handleBeginDrawing = React.useCallback(async () => {
    setLoading(true);

    try {
      // API doesn't have any endpoint that would randomly return minifigs
      // so we fetch how many minifigs are in the theme and then fetch all of them on a single page
      // then we randomly select 3 of them
      const initialFetch = await axiosInstance.get<MiniFiguresResponse>(
        "/minifigs/",
        {
          params: {
            in_theme_id: harryPotterThemeId,
          },
        }
      );

      const allMinifigs = await axiosInstance.get<MiniFiguresResponse>(
        "/minifigs/",
        {
          params: {
            in_theme_id: harryPotterThemeId,
            page_size: initialFetch.data.count,
          },
        }
      );

      const randomFigures = getRandomFigures(allMinifigs.data.results, 3);

      setLoading(false);

      navigation.navigate("SelectFigure", {
        figures: randomFigures,
      });
    } catch (error) {
      Alert.alert("Something went wrong");
    }
  }, [axiosInstance]);

  if (loading) {
    return (
      <Background>
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      </Background>
    );
  }

  return (
    <Background>
      <View style={styles.container}>
        <Button onPress={handleBeginDrawing}>Begin Drawing</Button>
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
