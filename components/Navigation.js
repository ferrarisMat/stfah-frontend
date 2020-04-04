import React from "react";
import { StyleSheet, Button, View } from "react-native";

export const navigationRef = React.createRef();

export function Navigation ({navigation}) {
  return (
    <View style={styles.container}>
      <Button title="🏠" onPress={() => navigationRef.current.navigate("Home")} />
      <Button title="➕" onPress={() => navigationRef.current.navigate("Actions")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    position: "absolute",
    top: 0,
    right: 0
  },
});
