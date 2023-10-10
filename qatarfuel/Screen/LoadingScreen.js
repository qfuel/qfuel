import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect } from "react";
import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
//2100
const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("StarttScreen");
    }, 4300);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        margin: 0,
        backgroundColor: "white",
      }}
    >
      <LottieView
        source={require("../assets/animation_lm138xin.json")}
        autoPlay
        //resizeMode="cover"
        loop={false}
        //onAnimationFinish={onAnimationFinish}
      />
    </View>
  );
};

export default LoadingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
