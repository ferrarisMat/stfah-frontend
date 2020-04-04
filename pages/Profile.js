import React, { useState, useEffect } from "react";
import SafeAreaView from 'react-native-safe-area-view';
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

  useEffect(() => { getNameFromStorage() }, []);

  const updateNameInStorage = async () => {
    try {
      await AsyncStorage.setItem("name", name);
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
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, paddingTop: 50}}>
        <Text>Your name</Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => updateName(text)}
          value={name}
        />
        <Button title="Save" onPress={updateNameInStorage} />
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
