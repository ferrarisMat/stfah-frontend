import React from "react";
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";

export default function ({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate("Actions")}
    >
      <Text style={styles.buttonText}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#F3533A",
    position: "absolute",
    bottom: 10,
    right: 10,
  },
  buttonText: {
    padding: 16,
    fontSize: 50,
    lineHeight: 42,
    color: "#FFFFFF",
  },
});
