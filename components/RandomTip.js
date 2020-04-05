import React, { useState, useEffect } from "react";
import SafeAreaView from "react-native-safe-area-view";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import { Styles } from '../styles/styles';

const tips = [
    'Save some steps by watching TV from your toilets.',
    'The light from your screens is an effective replacement for sunlight.',
    'Did you know you can reuse the same underwear up to 3 days ?'
]

export default function () {
  return (
    <SafeAreaView style={styles.card}>
        <Text style={[Styles.smallTitle, {color: 'white'}]}>💡 Daily tip</Text>
        <View style={{opacity:0.3, backgroundColor: 'white', height: 1, width: '100%', marginTop: 10, marginBottom: 12}}></View>
        <Text style={[Styles.bodyLarge, {color: 'white'}]}>{tips[Math.floor(Math.random() * tips.length)]}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    card: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 10,
      paddingBottom: 20,
      borderRadius: 4,
      backgroundColor: "#F3533A",
      shadowColor: 'rgba(0,0,0,0.2)',
      shadowOffset: { width: 0, height: 16 },
      shadowRadius: 12,
      shadowOpacity: 1
    }
  })