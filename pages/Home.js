import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Pedometer from "../components/Pedometer/Pedometer";
import SafeAreaView from 'react-native-safe-area-view';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Pedometer />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "pink",
  }
});
