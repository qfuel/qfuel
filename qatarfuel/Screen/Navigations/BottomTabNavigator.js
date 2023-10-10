import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
  Image,
  Text,
  Button,
} from "react-native";
import { TabBarIcon } from "@react-navigation/bottom-tabs"; // Import the necessary components from your navigation library
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import HomeScreen from "../HomeScreen";
import StartScreen from "../StartScreen";
import NearPetrol from "../NearPetrol";

const Tab = createBottomTabNavigator();
const tabBarHeight = Platform.OS === "ios" ? 100 : 70;

function BottomTabNavigator() {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: "#00448A",
        tabBarInactiveTintColor: "grey",

        tabBarIcon: ({ color, size, focused }) => {
          let iconName;
          if (route.name === "HomeScreen") {
            iconName = focused ? "ios-home-sharp" : "ios-home-outline";
          } else if (route.name === "NearPetrol") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          } else if (route.name === "AllChats") {
            iconName = focused ? "chatbubbles" : "chatbubbles-outline";
          } else if (route.name === "AllNotifications") {
            iconName = focused
              ? "md-notifications-sharp"
              : "md-notifications-outline";
          } else if (route.name === "Booking") {
            iconName = focused ? "calendar-sharp" : "calendar-outline";
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        headerRight: () => (
          <View>
            <Image
              source={{
                uri: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
              }}
              style={{
                height: 45,
                width: 45,
                borderRadius: 50,
                marginRight: 20,
              }}
            />

            <Text></Text>
          </View>

          // <Button
          //   title="Parametres"
          //   //onPress={() => navigation.navigate('Parametres')}
          // />
        ),
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
            style={{ marginLeft: 10 }}
          >
            <Icon
              name="menu"
              size={55}
              style={{ margin: 0, padding: 0 }}
              color={"white"}
            />
            <Text></Text>
          </TouchableOpacity>
          // <Button
          //   title="Parametres"
          //   //onPress={() => navigation.navigate('Parametres')}
          // />
        ),
      })}
    >
      <Tab.Screen
        name={"HomeScreen"}
        component={HomeScreen}
        options={{
          headerShown: true,
          // headerTitle: " ",
          headerTintColor: "white",

          headerStyle: {
            backgroundColor: "#00448A",
            height: 125,
          },
          headerTitle: (
            props // App Logo
          ) => (
            <View style={{ marginBottom: 10 }}>
              {/* <Text></Text> */}
              <Image
                style={{ width: 210, height: 55 }}
                // source={{
                //   uri: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
                // }}
                source={require("../../assets/logo2.png")}
                resizeMode="contain"
              />
            </View>
          ),
        }}

        // options={{
        //   // tabBarLabel: " ",
        //   // title: " ",
        //   tabBarButton: (props) => <CustomTabBarButton {...props} />,
        // }}
      />
      <Tab.Screen
        name={"NearPetrol"}
        component={NearPetrol}
        // options={{
        //   tabBarButton: (props) => <CustomTabBarButton {...props} />,
        //   // tabBarLabel: " ",
        //   // title: " ",
        // }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "white",
    borderTopWidth: 0,
    //marginBottom: tabBarHeight,
    //bottom: 20,
    //right: 10,
    //left: 10,
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});

{
  /* <Tab.Screen
        name={"NearPetrol"}
        component={NearPetrol}
        //comment options
        // options={{
        //   tabBarButton: (props) => <CustomTabBarButton {...props} />,
        //   // tabBarLabel: " ",
        //   // title: " ",
        // }}
      /> */
}
