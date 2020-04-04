import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import IOSPedometer from './components/Pedometer/IOSPedometer';
import AndroidPedometer from './components/Pedometer/AndroidPedometer';
// import {IOSPedometer, AndroidPedometer} from './components/Pedometer';

function App(){
  return (
    <AndroidPedometer />
  )
};

export default App;
