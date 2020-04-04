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
    getValueFromStorage("name", (name) => updateName(name));
    getValueFromStorage("garden", (garden) => updateName(garden));
    getValueFromStorage("terrace", (terrace) => updateName(terrace));
  }, ['name','garden','terrace']);

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
        cb(storedValue);
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
          <View style={{ flexDirection: "row" }}>
            <TextInput
              style={styles.input}
              onChangeText={(text) => updateName(text)}
              value={name}
            />
            <Button
              title="Save"
              onPress={() => {
                  updateName(name);
                  updateValueInStorage("name", name);
                }
              }
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Do you have a garden ?</Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              title="yes"
              style={!garden && { color: "#fff" }}
              onPress={() => {
                  updateGarden(true);
                  updateValueInStorage("garden", true)
                }
              }
            />
            <Button
              title="no"
              style={garden && { color: "#fff" }}
              onPress={() => {
                  updateGarden(false);
                  updateValueInStorage("garden", false)
                }
              }
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Do you have a terrace ?</Text>
          <View style={{ flexDirection: "row" }}>
            <Button
              title="yes"
              style={!terrace && { color: "#fff" }}
              onPress={() => {
                  updateTerrace(true);
                  updateValueInStorage("terrace", true)
                }
              }
            />
            <Button
              title="no"
              style={terrace && { color: "#fff" }}
              onPress={() => {
                  updateTerrace(false);
                  updateValueInStorage("terrace", false)
                }
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
    width: '40%',
    height: 40,
    borderWidth: 1,
    padding: 4,
  },
});
