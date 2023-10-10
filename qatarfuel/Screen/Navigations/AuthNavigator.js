import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoadingScreen from "../LoadingScreen";
import StartScreen from "../StartScreen";
import RegisterScreen from "../RegisterScreen";
import DrawerNavigator from "./DrawerNavigator";
import StarttScreen from "../StarttScreen";
import NearPetrol from "../NearPetrol";
import ForgetPassword from "../ForgetPassword";
import OPTCode from "../OPTCode";
const Stack = createStackNavigator();
const AuthNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoadingScreen"
        screenOptions={{
          animationEnabled: false,
        }}
      >
        <Stack.Screen
          name="LoadingScreen"
          component={LoadingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="StarttScreen"
          component={StarttScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="NearPetrol"
          component={NearPetrol}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OPTCode"
          component={OPTCode}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;

const styles = StyleSheet.create({});
