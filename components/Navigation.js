import React from "react";
import { StyleSheet, Button, View } from "react-native";

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="🏠" onPress={() => navigation.navigate("Home")} />
      <Button title="➕" onPress={() => navigation.navigate("Actions")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
