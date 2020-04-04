import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet, Button, TextInput, Keyboard, ScrollView } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import ActionsData from "../data/actions";

function BooleanAction(props) {
  return (<View style={styles.actionRow}>
    <Text>{props.action.name}</Text>
    <View style={styles.addButton}>
      <Button title="+" color="#fff" />
    </View>
  </View>)
}

function NumberAction(props) {
  let value = 0;
  return (<View style={styles.actionRow}>
    <Text style={{ width:100 }}>{props.action.name}</Text>
    <TextInput keyboardType="numeric" style={{ marginLeft: 'auto', marginRight: 10, width: 80, height: 40, textAlign:'right', padding: 10, backgroundColor: '#fff' }} placeholder="0"></TextInput>
    <View style={styles.addButton}>
      <Button title="+" color="#fff" />
    </View>
  </View>)
}

export default function () {
  var actions = [];
  ActionsData.forEach((action, i) => {
    if (action.type === "boolean") {
      actions.push(<BooleanAction action={action} key={i}></BooleanAction>);
    } else if (action.type === "number") {
      actions.push(<NumberAction action={action} key={i}></NumberAction>);
    }
  })

  return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <ScrollView>
            <SafeAreaView style={styles.container}>
              <View style={{ paddingLeft: 20, paddingRight: 20 }}>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>Add activity</Text>
                {actions}
              </View>
            </SafeAreaView>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
  },
  actionRow: {
    borderColor: '#000',
    borderBottomWidth:1,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  addButton: {
    backgroundColor: '#000',
    color: '#fff' 
  }
});
