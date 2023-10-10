import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../Firebase";

const HomeScreen = () => {
  const navigation = useNavigation();
  const user = auth.currentUser;
  console.log(user.uid);
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="white"
        barStyle="dark-content"
        animated={true}
      />
      <View style={{ padding: 20 }}>
        {/* <Text></Text>
        <Text></Text> */}

        {/* <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: 355,
              marginTop: 9,
              //backgroundColor: "blue",
            }}
          >
            <View>
              <Text style={{ fontSize: 19 }}>Welcome to QFuel</Text>
              <Text style={{ fontSize: 17 }}>Amna Ikram</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{ margin: 0, padding: 0 }}
            >
              <Icon name="menu" size={55} style={{ margin: 0, padding: 0 }} />
            </TouchableOpacity>
          </View> */}

        <View style={{ height: 150 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
          >
            <View
              style={{
                flexDirection: "row",
                height: 150,
                width: 350,
                marginLeft: 0,
                //borderWidth: 1,
                //margin: "2%",
                backgroundColor: "#cccc",
              }}
            >
              <View
                style={{ width: 350, hight: 150, backgroundColor: "#cccc" }}
              >
                <Image
                  source={{
                    uri: "https://www.allrideapps.com/wp-content/uploads/2020/01/Expert_Fuel_Delivery_Growth.jpg",
                  }}
                  style={{
                    height: 150,
                    marginBottom: 5,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: 150,
                //borderWidth: 1,
                marginLeft: 19,
                backgroundColor: "#cccc",
              }}
            >
              <View
                style={{ width: 350, hight: 150, backgroundColor: "#cccc" }}
              >
                <Image
                  source={{
                    uri: "https://www.wedowebapps.com/wp-content/uploads/2021/06/START-YOUR-ONLINE-FUEL-DELIVERY-SERVICE-WITH-THESE-SIMPLE-STEPS-1.jpg",
                  }}
                  style={{
                    height: 150,
                    marginBottom: 5,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: 150,
                //borderWidth: 1,
                marginLeft: 19,
                backgroundColor: "#cccc",
              }}
            >
              <View
                style={{ width: 350, hight: 150, backgroundColor: "#cccc" }}
              >
                <Image
                  source={{
                    uri: "https://www.constructionweekonline.in/cloud/2021/11/24/DgCSItgm-fuel-delivery-to-home-1.jpg",
                  }}
                  style={{
                    height: 150,
                    marginBottom: 5,
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <Text></Text>
        <Text style={{ fontSize: 22, marginBottom: 15 }}>Petrol prices</Text>

        <View style={{ height: 225, marginBottom: 10 }}>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={1}
          >
            <View
              style={{
                flexDirection: "row",
                height: 225,
                marginLeft: 0,
                //borderWidth: 1,
                //margin: "2%",
                //backgroundColor: "red",
              }}
            >
              <View
                style={{
                  width: 120,
                  hight: 240,
                  backgroundColor: "white",
                  borderColor: "#5A5A5A",
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontSize: 19, color: "#00448A", fontWeight: "bold" }}
                >
                  Gasoline premium (91)
                </Text>
                <Text></Text>
                <Text style={{ fontSize: 19, color: "#5A5A5A" }}>
                  1.90 QR/Liter
                </Text>
                <Text></Text>
                <Image
                  source={require("../assets/green.png")}
                  style={{
                    height: 50,
                    width: 50,
                    margin: 5,
                    marginLeft: 5,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                height: 225,
                marginLeft: 15,
                //borderWidth: 1,
                //margin: "2%",
                //backgroundColor: "red",
              }}
            >
              <View
                style={{
                  width: 120,
                  hight: 240,
                  backgroundColor: "white",
                  borderColor: "#5A5A5A",
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontSize: 19, color: "#00448A", fontWeight: "bold" }}
                >
                  Gasoline Super (95)
                </Text>
                <Text></Text>

                <Text style={{ fontSize: 19, color: "#5A5A5A" }}>
                  2.10 QR/Liter
                </Text>
                <Text></Text>
                <Image
                  source={require("../assets/blue.png")}
                  style={{
                    height: 50,
                    width: 50,
                    margin: 10,
                  }}
                />
              </View>
            </View>

            <View
              style={{
                flexDirection: "row",
                height: 225,
                marginLeft: 15,
                //borderWidth: 1,
                //margin: "2%",
                //backgroundColor: "red",
              }}
            >
              <View
                style={{
                  width: 120,
                  hight: 240,
                  backgroundColor: "white",
                  borderColor: "#5A5A5A",
                  borderWidth: 1,
                  borderRadius: 15,
                  padding: 10,
                }}
              >
                <Text
                  style={{ fontSize: 19, color: "#00448A", fontWeight: "bold" }}
                >
                  Diesel
                </Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>
                <Text></Text>

                <Text style={{ fontSize: 19, color: "#5A5A5A" }}>
                  2.05 QR/Liter
                </Text>
                <Text></Text>

                <Image
                  source={require("../assets/yellow.png")}
                  style={{
                    height: 50,
                    width: 50,
                    margin: 10,
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            height: 170,
            width: "100%",
            //backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: "100%",
              flexDirection: "row",
              height: 150,
              //backgroundColor: "yellow",
              // justifyContent: "center",
              // alignItems: "center",
            }}
            // onPress={() => navigation.navigate("Companies")}
          >
            <View
              style={{
                width: 190,
                hight: 150,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 5,
                //margin: 100,
                marginBottom: 0,
                marginTop: 0,
                borderColor: "#5A5A5A",
                //backgroundColor: "red",
              }}
            >
              <Image
                source={require("../assets/gas-station.png")}
                style={{
                  height: 75,
                  width: 75,
                  margin: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                fuel booking
              </Text>
            </View>

            <View
              style={{
                width: 190,
                hight: 150,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 1,
                borderRadius: 5,
                margin: 10,
                marginBottom: 0,
                marginTop: 0,
                borderColor: "#5A5A5A",
                //backgroundColor: "red",
              }}
            >
              <Image
                source={require("../assets/map.png")}
                style={{
                  height: 75,
                  width: 75,
                  margin: 10,
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                }}
                onPress={() => navigation.navigate("NearPetrol")}
              >
                Near petrol station
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
