import React from "react";
import { View } from "react-native";
import Pedometer from "../components/Pedometer/Pedometer";
import Navigation from "../components/Navigation";

export default function Home({ navigation }) {
  return (
    <View>
      <Pedometer />
      {/* <Navigation navigation={navigation} /> */}
    </View>
  );
}
