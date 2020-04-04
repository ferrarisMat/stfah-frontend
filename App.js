import React from "react";
import { StyleSheet, Text, View, Platform } from "react-native";

const Pedometer = Platform.select({
  ios: () => require('./components/Pedometer/IOSPedometer'),
  android: () => require('./components/Pedometer/AndroidPedometer'),
})();


function App(){
  return (
    <Pedometer />
  )
};

export default App;
