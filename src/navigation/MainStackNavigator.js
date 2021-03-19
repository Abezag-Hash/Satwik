import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

//Stack Screens
import Home from "../screens/Home";
import MapScreen from "../screens/MapScreen";
import LogIn from "../screens/Login";
const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LogIn} />

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
