import React from "react";
import { View, StyleSheet } from "react-native";
import Pedometer from "../components/Pedometer/Pedometer";
import Navigation from "../components/Navigation";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Pedometer />
      <Navigation navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
});
