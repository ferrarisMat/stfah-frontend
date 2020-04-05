import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, AsyncStorage, ScrollView } from "react-native";
import Navigation from "../components/Navigation";
import Charts from "../components/Charts";
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
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView style={[Styles.container]}>
          <Text style={[Styles.title, {marginTop: 20, marginRight: 20}]}>Hi {userName}, here is your inactivity recap :</Text>
          <Text style={{marginTop: 10}}>Total</Text>
          <View style={Styles.textRow}><Text style={[Styles.redTitle, {marginRight: 7}]}>-60</Text><Text style={Styles.body}>pts</Text></View>
          <Charts />
        </SafeAreaView>
        <SafeAreaView style={{flex: 1, backgroundColor: '#F4F4F4', marginTop: 20}}>
          <Stats />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  }
});
