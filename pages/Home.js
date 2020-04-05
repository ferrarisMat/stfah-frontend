import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, AsyncStorage } from "react-native";
import Pedometer from "../components/Pedometer/Pedometer";
import Navigation from "../components/Navigation";
import Chart from "../components/Chart";
import Stats from "../components/Stats";
import SafeAreaView from 'react-native-safe-area-view';
import { Styles } from '../styles/styles';

export default function Home({ navigation }) {
  const [userName, updateUserName] = useState("");

  useEffect(() => { getNameFromStorage() }, []);

  useEffect(() => { navigation.addListener('focus', () => {
    getNameFromStorage();
  }); }, []);

  const getNameFromStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      updateUserName(value);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={Styles.container}>
        <Text style={Styles.title}>{userName}</Text>
        <Text style={{marginTop: 10}}>Total</Text>
        <View style={Styles.textRow}><Text style={[Styles.redTitle, {marginRight: 7}]}>-60</Text><Text style={Styles.body}>pts</Text></View>
        <Pedometer />
        <Chart />
      </View>
      <Stats />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: "white",
  }
});
