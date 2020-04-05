import React, { Component } from "react";
import { Pedometer } from "expo-legacy";
import { Text, View, StyleSheet } from "react-native";
import { Styles } from '../../styles/styles';

export default class AndroidPedometer extends Component<{}> {
  render() {
    return (
      <View style={styles.card}>
        <Text style={[Styles.smallTitle, {color: 'white'}]}>ℹ️ Daily steps</Text>
        <View style={{opacity:0.3, backgroundColor: 'white', height: 1, width: '100%', marginTop: 10, marginBottom: 12}}></View>
        <Text style={[Styles.bodyLarge, {color: 'white'}]}>
        You took 635 steps in the last 24 hours. You barely moved at all today ! Good job, keep going.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 4,
    backgroundColor: "#8AD879",
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 12,
    shadowOpacity: 1
  }
})