import React from "react";
import { View, StyleSheet } from "react-native";
import Pedometer from "../components/Pedometer/Pedometer";
import SafeAreaView from 'react-native-safe-area-view';
import Navigation from "../components/Navigation";

export default function Home({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Pedometer />
        <Navigation navigation={navigation} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
});
