import React, { useState, useEffect, useCallback } from "react";
import SafeAreaView from "react-native-safe-area-view";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  AsyncStorage,
} from "react-native";

export default function () {
  const [name, updateName] = useState("");
  const [garden, updateGarden] = useState(false);
  const [terrace, updateTerrace] = useState(false);

  useEffect(() => {
    getValueFromStorage("name", () => updateName(name));
    getValueFromStorage("garden", () => updateName(garden));
    getValueFromStorage("terrace", () => updateName(terrace));
  }, []);

  const updateValueInStorage = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      console.log(e);
    }
  };

  const getValueFromStorage = async (key, cb) => {
    try {
      const storedValue = await AsyncStorage.getItem(key);
      if (storedValue !== null) {
        cb();
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ paddingTop: 50 }}>
        <View>
          <Text>Your name</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => updateName(text)}
              value={name}
            />
            <Button
              title="Save"
              onPress={() =>
                updateValueInStorage("name", () => updateName(name))
              }
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Do you have a garden ?</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Button
              title="yes"
              style={!garden && { color: "#fff" }}
              onPress={() =>
                updateValueInStorage("garden", () => updateGarden(true))
              }
            />
            <Button
              title="no"
              style={garden && { color: "#fff" }}
              onPress={() =>
                updateValueInStorage("garden", () => updateGarden(false))
              }
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Do you have a terrace ?</Text>
          <View style={{ flex: 1, flexDirection: "row" }}>
            <Button
              title="yes"
              style={!terrace && { color: "#fff" }}
              onPress={() =>
                updateValueInStorage("terrace", () => updateTerrace(true))
              }
            />
            <Button
              title="no"
              style={terrace && { color: "#fff" }}
              onPress={() =>
                updateValueInStorage("terrace", () => updateTerrace(false))
              }
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "lightgreen",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 4,
  },
});
