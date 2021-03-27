import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

//Stack Screens
import Home from "../screens/Home";
import MapScreen from "../screens/MapScreen";
import LogIn from "../screens/Login";
import log from "../screens/login1";
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function login1()
{
  return (
    <Drawer.Navigator drawerStyle={{
      backgroundColor: '#c6cbef',
      // paddingTop:20,
    }}>
      <Drawer.Screen name="Feed" component={log} />
      <Drawer.Screen name="Login" component={LogIn} />
    </Drawer.Navigator>
    );
    
}
function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login1" component={login1} />

        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Map Screen" }}
        />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

export default MainStackNavigator;
