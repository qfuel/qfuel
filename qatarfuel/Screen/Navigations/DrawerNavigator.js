import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabNavigator from "./BottomTabNavigator";
import OrderHistory from "../OrderHistory";
import Icon from "react-native-vector-icons/Ionicons";
import CustomDrawer from "./Custom/CustomDrawer";
import Profile from "../Profile";
import Setting from "../Setting";

import Support from "../Support";
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "#00448A",
        drawerActiveTintColor: "white",
        drawerLabelStyle: {
          marginLeft: -20,
        },
      }}
    >
      <Drawer.Screen
        name={"HomeBottomNavig"}
        component={BottomTabNavigator}
        options={{
          title: "Home",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="home-sharp" size={18} color={color} />
          ),
        }}
      />

      <Drawer.Screen
        name={"OrderHistory"}
        component={OrderHistory}
        options={{
          title: "Order History",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="time" size={19} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={"Profile"}
        component={Profile}
        options={{
          title: "Profile",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="person" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={"Setting"}
        component={Setting}
        options={{
          title: "Setting",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="settings" size={18} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name={"Support"}
        component={Support}
        options={{
          title: "Support",
          drawerIcon: ({ focused, color, size }) => (
            <Icon name="people" size={18} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
