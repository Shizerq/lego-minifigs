import { View, Text, Image, StyleSheet } from "react-native";

import { Part } from "../../types/miniFigs";

interface Props {
  data: Part;
}

export function FigurePart({ data }: Props) {
  const { part } = data;
  return (
    <View style={styles.container}>
      {part.part_img_url && (
        <Image source={{ uri: part.part_img_url }} style={styles.image} />
      )}
      <View style={styles.text}>
        <Text style={styles.name} numberOfLines={1}>
          {part.name}
        </Text>
        <Text style={styles.number} numberOfLines={1}>
          {part.part_num}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",

    flexDirection: "row",

    paddingVertical: 10,
  },

  image: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },

  text: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    color: "#1F2136",
    fontWeight: "800",
  },

  number: {
    color: "#f9882C",
    fontWeight: "600",
  },
});
