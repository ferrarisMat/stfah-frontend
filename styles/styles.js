import { StyleSheet } from "react-native";

export let Styles = StyleSheet.create({
  // ==========
  // TEXTS
  // ==========
  title: {
    fontSize: 24,
    color: '#2F4F4F',
    fontFamily: 'Rosario Bold'
  },
  smallTitle: {
    color: 'white',
    fontSize: 16,
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
  bodyLarge: {
    fontSize: 16,
    fontFamily: 'Rosario Regular'
  },

  // ==========
  // LAYOUT
  // ==========
  container: {
    paddingLeft: 24,
    paddingRight: 24
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'baseline'
  }
});