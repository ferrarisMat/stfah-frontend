import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Navigation from "../components/Navigation";
import ActionsData from "../data/actions";

export default function ({ navigation }) {
  return (
    <View style={styles.container}>
      <View>
        <Text>Add activity</Text>
        {
          ActionsData.forEach(action => {
            if (action.type === "boolean") {
              return (<>
                <Text>Lol</Text>
                <Button title="Add"
                    onPress={() => Alert.alert('Simple Button pressed')}
                  />
              </>)
            }
          })
        }
      </View>
      <View>
        <Navigation navigation={navigation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "lightblue",
  },
});
