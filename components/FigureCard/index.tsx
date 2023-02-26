import * as React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

import * as WebBrowser from "expo-web-browser";

import { MiniFigure } from "../../types/miniFigs";

interface Props {
  figure: MiniFigure;
  active: boolean;
}

export function FigureCard({ figure, active }: Props) {
  const showDetails = React.useCallback(async () => {
    await WebBrowser.openBrowserAsync(figure.set_url);
  }, [figure]);

  return (
    <View style={[styles.container, active && styles.active]}>
      {figure.set_img_url ? (
        <Image style={styles.image} source={{ uri: figure.set_img_url }} />
      ) : (
        <Text style={styles.imageMissing}>Image missing</Text>
      )}
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{figure.name}</Text>
      </View>
      <TouchableOpacity onPress={showDetails}>
        <Text style={styles.details}>Show Details</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 340,

    borderWidth: 6,
    borderColor: "transparent",

    marginHorizontal: 10,

    borderRadius: 10,

    backgroundColor: "#FFFFFF",

    padding: 30,
    alignItems: "center",
  },

  active: {
    borderColor: "#f9882C",
  },

  image: {
    width: 175,
    height: 175,
    resizeMode: "contain",
  },

  imageMissing: {
    width: 175,
    height: 175,
    textAlign: "center",
  },

  nameContainer: {
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontWeight: "700",
    textAlign: "center",
  },

  details: {
    color: "#f9882C",
    fontWeight: "800",
  },
});
