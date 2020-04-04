import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import { View } from "react-native";
import Home from "./pages/Home";
import Actions from "./pages/Actions";
import { Navigation, navigationRef } from "./components/Navigation";

const Stack = createStackNavigator();

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function ModalScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

function MainStackScreen() {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
    </MainStack.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <View style={{flex: 1 }}>
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator headerMode="none" mode="modal">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Actions" component={Actions} />
          </Stack.Navigator>
        </NavigationContainer>
        <SafeAreaView style={{ position: 'absolute', top: 0, left: 0, width:"100%", height: "100%"}}>
          <View style={{flex:1, pointerEvents:'none'}} pointerEvents="box-none" >
            <Navigation />
          </View>
        </SafeAreaView>
      </View>
    </SafeAreaProvider>
  );
}
