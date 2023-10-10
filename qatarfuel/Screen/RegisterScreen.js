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
import { useNavigation } from "@react-navigation/native";
import validator from "validator";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { db } from "../Firebase";
import {
  doc,
  setDoc,
  addDoc,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  deleteDoc,
  updateDoc,
  deleteField,
} from "firebase/firestore";

//things need to do
//laber for the input
//error with forgot ajecment

const RegisterScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then(() => {
        console.log("registend done");
        navigation.navigate("DrawerNavigator");
        add();
      })
      .catch((error) => console.log(error.message));
    //add();
  };

  const add = async () => {
    const docRef = doc(db, "Customer", email);
    await setDoc(docRef, {
      email: email,
      registerdate: new Date(),
      gender: "",
      image:
        "https://as2.ftcdn.net/v2/jpg/02/45/28/17/1000_F_245281721_2uYVgLSFnaH9AlZ1WWpkZavIcEEGBU84.jpg",
      birthdate: new Date(),
      phone: number,
      city: city,
    })
      .then(() => {
        console.log("data submitted");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const [emailErro, setEmailError] = useState("");
  const [email, setEmail] = useState("");

  const [passErro, setPassError] = useState("");
  const [pass, setPass] = useState("");

  const [numberErro, setNumberError] = useState("");
  const [number, setNumber] = useState("");

  //const [numberErro, setNumberError] = useState("");
  const [city, setCity] = useState("");

  const register = async () => {
    if (validator.isEmail(email)) {
      setEmailError("");
    } else {
      setEmailError("The email is not vaildate");
    }

    if (
      validator.isStrongPassword(pass, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPassError("");
    } else {
      setPassError(
        "Enter A Password A Strong Password Must Be 8 Chars Use A Mix Of Lowercase,Uppercase,Numbers and Symbols"
      );
    }

    if (number.length === 8) {
      setNumberError("");
    } else {
      setNumberError("Enter Valid Number");
    }

    if (
      validator.isEmail(email) &&
      validator.isStrongPassword(pass, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      }) &&
      number.length === 8
    ) {
      console.log("okay");
      handleRegister();
    }
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
                //marginBottom: 20,
                //marginTop: 20,
              }}
            >
              <Image
                style={{ width: 160, height: 160 }}
                // source={{
                //   uri: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
                // }}
                source={require("../assets/logo22.png")}
                resizeMode="contain"
              />

              {/* <Text style={{ color: "#4B7AAC" }}>create a new Account</Text> */}
            </View>
            <Text></Text>

            <Text style={{ fontSize: 18, color: "#00448A", marginBottom: 10 }}>
              Create Account
            </Text>
            <View style={styles.fieldContainer}>
              <View style={styles.iconContainer}>
                <Feather name="mail" size={20} color="#00448A" />
              </View>
              <TextInput
                style={styles.input}
                value={email}
                onChangeText={setEmail}
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
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
                <Feather name="phone" size={20} color="#00448A" />
              </View>
              <View style={styles.inputContainer}>
                {/* <Text style={styles.label}>Phone Number</Text> */}
                <TextInput
                  style={styles.input}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  value={number}
                  onChangeText={setNumber}
                />
              </View>
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
              {numberErro}
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
                autoCorrect={false}
                autoCapitalize="none"
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
            ></View>
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
            <View style={styles.fieldContainer}>
              <View style={styles.iconContainer}>
                <Feather name="map-pin" size={20} color="#00448A" />
              </View>
              <TextInput
                style={styles.input}
                placeholder="City"
                secureTextEntry
                value={city}
                onChangeText={setCity}
                autoCorrect={false}
                autoCapitalize="none"
              />
            </View>
            {/* <Text
              style={{
                //textAlign: "center",
                color: "red",
                //fontWeight: "bold",
                fontSize: 17,
                marginTop: 4,
              }}
            >
              {CityErro}
            </Text> */}

            <TouchableOpacity
              style={styles.signUpButton}
              //onPress={() => navigation.navigate("OPTCode")}
              onPress={() => register()}
            >
              <Text style={styles.signUpButtonText}>Create Account</Text>
            </TouchableOpacity>

            <Pressable onPress={() => navigation.navigate("StartScreen")}>
              <Text
                style={{
                  color: "#4B7AAC",
                  fontSize: 15,
                  fontWeight: "600",
                  letterSpacing: 0.5,
                  textAlign: "center",
                }}
              >
                Already have an account?{" "}
                <Text style={styles.signUpp}>Login</Text>
              </Text>
            </Pressable>
          </KeyboardAwareScrollView>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00448A",
    alignItems: "center",
    justifyContent: "center",
  },
  whiteContainer: {
    width: 380,
    height: 740,
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
});
