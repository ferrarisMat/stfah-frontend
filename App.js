import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { View, Text } from "react-native";
import Home from "./pages/Home";
import Actions from "./pages/Actions";

const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator headerMode="none">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Actions" component={Actions} />
          </Stack.Navigator>
        </NavigationContainer>
        <View style={{ position:"absolute" }}><Text>Home</Text></View>
      </View>
    </SafeAreaProvider>
  );
}
