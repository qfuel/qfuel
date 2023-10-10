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
import { Feather } from "@expo/vector-icons"; // You can use any icon library you prefer
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
const OPTCode = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.whiteContainer}>
        <TouchableOpacity
          style={{
            width: 50,
            height: 50,
            backgroundColor: "#cccc",
            borderRadius: 50,
          }}
          onPress={() => navigation.navigate("RegisterScreen")}
        >
          <Text
            style={{
              marginRight: 15,
              textAlign: "center",
            }}
          >
            <Icon name="chevron-back" size={50} color={"#00448A"} />
          </Text>
        </TouchableOpacity>
        <View>
          <KeyboardAwareScrollView>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 25,
                marginTop: 0,
              }}
            >
              {/* <Text style={{ fontSize: 35, color: "#00448A" }}>QFuel</Text> */}
              <Image
                style={{ width: 160, height: 160 }}
                // source={{
                //   uri: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
                // }}
                source={require("../assets/logo22.png")}
                resizeMode="contain"
              />
              {/* <Text style={{ color: "black" }}>Login to your account</Text> */}
            </View>

            <Text
              style={{ fontSize: 25, fontWeight: "bold", color: "#00448A" }}
            >
              OPT verifcation
            </Text>
            <Text></Text>
            <Text style={{ fontSize: 16 }}>
              Enter The OPT code sent to +972 66266880
            </Text>
            <Text></Text>
            <View style={styles.fieldContainer}>
              <View style={styles.iconContainer}>
                <Feather name="lock" size={20} color="#00448A" />
              </View>
              <View style={styles.inputContainer}>
                {/* <Text style={styles.label}>Phone Number</Text> */}
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                />
              </View>
            </View>
            <Text style={{ fontSize: 16 }}>
              I have not resived any OPT code sent again
            </Text>
            <Text
              style={{
                //textAlign: "center",
                color: "red",
                //fontWeight: "bold",
                fontSize: 17,
                marginTop: 3,
                marginBottom: 3,
              }}
            >
              xxx
            </Text>

            <TouchableOpacity style={styles.signUpButton}>
              <Text style={styles.signUpButtonText}>Done</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
};

export default OPTCode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00448A",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteContainer: {
    //  width: 350,
    width: 380,
    height: 600,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
  },
  fieldContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#dddddd",
    //marginBottom: 15,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  input: {
    flex: 1,
    color: "#333333",
  },
  signUp: {
    fontSize: 15,
    fontWeight: "600",
    color: "#00448A",
    letterSpacing: 0.5,
    //textAlign: "center",
    marginTop: 4,
  },
  signUpp: {
    fontSize: 15,
    fontWeight: "600",
    color: "#00448A",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
    //justifyContent: "center",
    textAlign: "center",
  },
  button: {
    //backgroundColor: "#e9b6bd",
    backgroundColor: "#fa73a4",
    height: 50,
    // alignItems: "center",
    // justifyContent: "center",
    borderRadius: 20,
    // marginHorizontal: "30",marginVertical: 5,
    // marginHorizontal: "15%",
    // marginVertical: "4%",
    //borderWidth: 1,
    //borderColor: "white",
  },
  signUpButton: {
    backgroundColor: "#5AB15E",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    //marginHorizontal: "15%",
    marginVertical: "4%",
    marginTop: 35,
    marginBottom: 25,
  },
  signUpButtonText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffff",
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 60,
    borderWidth: 1,
    borderColor: "#dddddd",
    marginTop: 15,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 10,
    borderRadius: 15,
  },
  text: {
    color: "#333333",
    fontSize: 15,
  },
});
