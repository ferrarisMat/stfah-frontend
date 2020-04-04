import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import Pedometer from "./components/Pedometer/Pedometer";
import Chart from "./components/Chart";


function App(){
  return (
    <View>
      <Pedometer />
      <Chart />
    </View>
  )
};

export default App;
