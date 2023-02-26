import * as React from "react";

import {
  Alert,
  Image,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";

import { Background, Button, Heading, FigurePart } from "../../components";
import { RootStackScreenProps } from "../../types/navigation";

import { MiniFigure, PartsResponse, Part } from "../../types/miniFigs";
import { axiosInstance } from "../../helpers/axios";

export function SummaryScreen({
  navigation,
  route,
}: RootStackScreenProps<"Summary">) {
  const { figureId, user } = route.params;

  const [miniFigure, setMiniFigure] = React.useState<MiniFigure | null>(null);
  const [parts, setParts] = React.useState<Part[] | null>(null);

  React.useEffect(() => {
    Promise.all([
      axiosInstance.get<MiniFigure>(`/minifigs/${figureId}/`),
      axiosInstance.get<PartsResponse>(`/minifigs/${figureId}/parts/`),
    ]).then((responses) => {
      setMiniFigure(responses[0].data);
      // virtually none of the minifigs have more than few parts that wouldn't
      // fit on a single page, so I'm not going to worry about pagination
      setParts(responses[1].data.results);
    });
  }, []);

  const onSubmit = React.useCallback(() => {
    try {
      /* await axiosInstance.post(
        "localhost/submit",
        {
          ...user,
          figureId,
        },
        {
          baseURL: undefined,
        }
      );
      */
      Alert.alert("Submitted!");
      navigation.popToTop();
    } catch (error) {
      console.log(error);
    }
  }, [user, figureId]);

  if (miniFigure && parts) {
    // normally I would use a library like i18n-js to handle this
    const partsText = (numParts: number) => {
      const singular = `is ${numParts} part`;
      const plural = `are ${numParts} parts`;

      return numParts > 1 ? plural : singular;
    };

    return (
      <Background variant="white">
        <ScrollView contentContainerStyle={styles.container}>
          <Heading variant="primary">Summary</Heading>
          {miniFigure.set_img_url && (
            <Image
              source={{ uri: miniFigure.set_img_url }}
              style={styles.image}
            />
          )}
          <Text style={styles.name}>{miniFigure.name}</Text>
          <Text style={styles.partsTitle}>
            There {partsText(miniFigure.num_parts)} in this minifig:
          </Text>
          <View style={styles.partsContainer}>
            {parts.map((part) => (
              <FigurePart key={part.part.part_num} data={part} />
            ))}
          </View>

          <Button style={styles.button} onPress={onSubmit}>
            Submit
          </Button>
        </ScrollView>
      </Background>
    );
  }

  return (
    <Background variant="white">
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    </Background>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-between",

    paddingVertical: 40,
    paddingHorizontal: 40,
  },

  image: {
    width: 180,
    height: 180,
    resizeMode: "contain",

    marginTop: 50,
  },

  name: {
    textAlign: "center",
    color: "#1F2136",
    fontWeight: "800",

    marginTop: 10,
  },

  partsTitle: {
    alignSelf: "flex-start",
    color: "#1F2136",
    fontWeight: "800",

    marginTop: 40,
  },

  partsContainer: {
    width: "100%",
    marginTop: 20,
  },

  button: {
    marginTop: 35,
    shadowOpacity: 0,
  },
});
