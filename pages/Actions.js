import React from "react";
import { TouchableWithoutFeedback, View, Text, StyleSheet, Button, TextInput, Keyboard, ScrollView } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import ActionsData from "../data/actions";
import ActionCard from '../components/ActionCard';

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


const data = [
  {
    actionName: 'Netflix',
    isGoodAction: true,
    value: 32,
    valueType: 'hours',
    actionCTAcontent: 'Watching',
    actionType: 'text',
  },
  {
    actionName: 'Gaming',
    isGoodAction: true,
    value: 12,
    valueType: 'hours',
    actionCTAcontent: 'Playing',
    actionType: 'text',
  },
  {
    actionName: 'Steps',
    isGoodAction: false,
    value: 324,
    valueType: 'steps',
    actionCTAcontent: undefined,
    actionType: 'text',
  },
  {
    actionName: 'Jogging',
    isGoodAction: false,
    value: 30,
    valueType: 'mins',
    actionCTAcontent: 'Running',
    actionType: 'text',
  },
]

export default function () {
  var actions = [];
  for (const key in ActionsData) {
    if (ActionsData[key].type === "boolean") {
      actions.push(<BooleanAction action={ActionsData[key]} key={key}></BooleanAction>);
    } else if (ActionsData[key].type === "number") {
      actions.push(<NumberAction action={ActionsData[key]} key={key}></NumberAction>);
    }
  }

  return (
      // <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {data.map((item, i) => {
            return (
              <ActionCard
                key={`${item.actionName + i}`}
                actionName={item.actionName}
                isGoodAction={item.isGoodAction}
                value={item.value}
                valueType={item.valueType}
                actionCTAcontent={item.actionCTAcontent}
                actionType={item.actionType}
              />
            )
          })}
          {/* <ScrollView>
            <SafeAreaView style={styles.safeArea}>
              <View style={{ paddingBottom: 50 }}>
                <Text style={{ fontSize: 20, marginBottom: 20 }}>Add activity</Text>
                {actions}
              </View>
            </SafeAreaView>
          </ScrollView> */}
        </View>
      // </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 150,
    paddingLeft: 20,
    paddingRight: 20,
    position: 'relative',
  },
  safeArea: {
    flex: 1,
    backgroundColor: "lightblue",
    paddingTop: 50,
    paddingLeft: 20,
    paddingRight: 20
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
