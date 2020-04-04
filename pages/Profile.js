import React, { useState, useEffect } from "react";
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

  useEffect(() => getNameFromStorage());

  const updateNameInStorage = async (newName) => {
    try {
      await AsyncStorage.setItem("name", newName);
    } catch (e) {
      console.log(e);
    }
  };

  const getNameFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      if (value !== null) {
        updateName(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Your name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => updateName(text)}
        value={name}
      />
      <Button title="Save" onPress={updateNameInStorage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "lightgreen",
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 4,
  },
});
