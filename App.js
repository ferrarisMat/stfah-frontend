import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from 'expo-font';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { View, Text } from "react-native";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Actions from "./pages/Actions";
import { Navigation, navigationRef } from "./components/Navigation";

const Stack = createStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    'Rosario Light': require('./assets/fonts/Rosario_Light.ttf')
  });
};

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setLoading(false)} />
    )
  } else {
    return (
      <SafeAreaProvider>
        <View style={{flex: 1 }}>
          <NavigationContainer ref={navigationRef}>
            <Stack.Navigator headerMode="none" mode="modal">
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Actions" component={Actions} />
              <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
          </NavigationContainer>
          <SafeAreaView style={{ position: 'absolute', top: 0, left: 0, width:"100%", height: "100%"}} pointerEvents="box-none">
            <View style={{flex:1}} pointerEvents="box-none">
              <Navigation />
            </View>
          </SafeAreaView>
        </View>
      </SafeAreaProvider>
    );
  }
}
