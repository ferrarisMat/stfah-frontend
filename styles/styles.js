import { StyleSheet } from "react-native";

export let Styles = StyleSheet.create({
  // ==========
  // TEXTS
  // ==========
  title: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'Rosario Bold'
  },
  redTitle: {
    color: '#F3533A',
    fontSize: 25,
    fontFamily: 'Rosario Bold'
  },
  body: {
    fontSize: 14,
    fontFamily: 'Rosario Regular'
  },

  // ==========
  // LAYOUT
  // ==========
  textRow: {
    flexDirection: 'row',
    alignItems: 'baseline'
  }
});