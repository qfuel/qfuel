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
import validator from "validator";
import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../Firebase";
//things need to do
//laber for the input
//error with forgot ajecment
import { useNavigation } from "@react-navigation/native";
const StartScreen = () => {
  
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [emailErro, setEmailError] = useState("");
  const [email, setEmail] = useState("");

  const [passErro, setPassError] = useState("");
  const [pass, setPass] = useState("");
  const [signedIn, setSignedIn] = useState(false);
  console.log(email);
  console.log(pass);
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then(() => {
        let user = auth.email;
        console.log("Logged in", email);
        setSignedIn(true);
        console.log(signedIn);
        navigation.navigate("DrawerNavigator");
        //console.log(auth.email);
        // email === "admin@hotmail.com"
        //   ? navigation.navigate("HomeScreenAdmin")
        //   : navigation.navigate("Home_Navg");
      })
      .catch((error) => {
        console.log(error.message);
        setSignedIn(false);
        //alert("the account is not vaild");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.whiteContainer}>
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
            <Text style={{ fontSize: 18, color: "#00448A", marginBottom: 10 }}>
              Login To your account
            </Text>

            <View style={styles.fieldContainer}>
              <View style={styles.iconContainer}>
                <Feather name="mail" size={20} color="#00448A" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                autoFocus={true}
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
              />
            </View>
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
              {emailErro}
            </Text>
            <View style={styles.fieldContainer}>
              <View style={styles.iconContainer}>
                <Feather name="lock" size={20} color="#00448A" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={!showPassword}
                value={pass}
                onChangeText={setPass}
              />
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <Feather
                  name={showPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#888888"
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  //textAlign: "center",
                  color: "red",
                  //fontWeight: "bold",
                  fontSize: 17,
                  marginTop: 4,
                }}
              >
                {passErro}
              </Text>
              <Pressable onPress={() => navigation.navigate("ForgetPassword")}>
                <Text style={styles.signUp}>Forget Password?</Text>
              </Pressable>
            </View>

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={() => handleLogin()}
              //onPress={() => navigation.navigate("handleLogin")}
            >
              <Text style={styles.signUpButtonText}>Login</Text>
            </TouchableOpacity>

            <Pressable onPress={() => navigation.navigate("RegisterScreen")}>
              <Text
                style={{
                  color: "#4B7AAC",
                  fontSize: 15,
                  fontWeight: "600",
                  letterSpacing: 0.5,
                  textAlign: "center",
                }}
              >
                Dont have an account?
                <Text style={styles.signUpp}>Sign up</Text>
              </Text>
            </Pressable>

            <Text></Text>
            <Text></Text>

            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
              <View>
                <Text style={{ width: 50, textAlign: "center", color: "gray" }}>
                  Or
                </Text>
              </View>
              <View style={{ flex: 1, height: 1, backgroundColor: "gray" }} />
            </View>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => navigation.navigate("DrawerNavigator")}
            >
              <Image
                source={require("../assets/google_icon.png")}
                style={styles.icon}
              />
              <Text style={styles.text}>Continue with Google</Text>
            </TouchableOpacity>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
};

export default StartScreen;

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
    height: 710,
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
