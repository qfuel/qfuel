import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
  Pressable,
  Image,
} from "react-native";
import React from "react";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

import { useNavigation } from "@react-navigation/native";
//680deg style={{ backgroundColor: "red" }}  chevron-right
const StarttScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View>
        <Image
          source={require("../assets/pump.jpg")}
          style={{
            width: 430,
            height: 430,
            transform: [{ rotate: "700deg" }],
            marginLeft: 222,
            marginTop: 50,
          }}
        />
      </View>

      <View>
        <Text style={{ fontSize: 50 }}>Fast & Reliable</Text>
        <Text style={{ fontSize: 20 }}>
          Get fuel whenever you need, we are there
        </Text>
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate("StartScreen")}>
          <Text style={styles.signUpButtonText}>Get Started </Text>
          <Feather name={"chevron-right"} size={30} color="#ffff" />
        </TouchableOpacity>
      </View>
      <Text></Text>
      <Text></Text>
      {/* <View style={{ width: 480, height: 520 }}> */}
      <View style={{ width: 480, height: 430 }}>
        <LottieView
          source={require("../assets/animation_lm18fjbc.json")}
          autoPlay
          style={{ marginLeft: 5 }}
          resizeMode="cover"
          //loop={false}
          //onAnimationFinish={onAnimationFinish}
        />
      </View>
    </View>
  );
};

export default StarttScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  signUpButton: {
    backgroundColor: "#00448A",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    //marginHorizontal: "15%",
    width: 180,
    marginVertical: "4%",
    //marginTop: 35,
    marginBottom: 25,
    flexDirection: "row",
  },
  signUpButtonText: {
    color: "#ffffff",
    fontSize: 22,
    textAlign: "center",
    letterSpacing: 0.5,
  },
});
