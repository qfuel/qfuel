import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { TabBarIcon } from "@react-navigation/bottom-tabs";
import React from "react";

const CustomHeader = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Image
        source={{
          uri: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
        }}
        style={{ width: 30, height: 30, marginLeft: 10 }}
      />
      <TabBarIcon
        name="menu" // Replace with the name of your menu icon
        size={30}
        color="black"
        onPress={() => {
          // Handle the menu icon press here
        }}
      />
    </View>
  );
};
