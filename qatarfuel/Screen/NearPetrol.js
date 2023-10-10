import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import * as Location from "expo-location";
import MapView, { Marker, Callout, Circle } from "react-native-maps";
import { Dropdown } from "react-native-element-dropdown";

import {
  EvilIcons,
  Feather,
  Entypo,
  Ionicons,
} from "react-native-vector-icons";
//import Tracking from "./Tracking";
export default function NearPetrol() {
  const locations = [
    { label: "Al Rayyan", value: "Al Rayyan" },
    { label: "Doha", value: "Doha" },
    { label: "Al Wukair", value: "Al Wukair" },
    { label: "Dukhan", value: "Dukhan" },
  ];
  const mapRef = useRef(null);
  const [isFocus, setIsFocus] = useState(false);
  const [location, setLocation] = useState("");
  const [permission, setPermission] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const [pin, setPin] = useState({
    latitude: 25.2854,
    longitude: 51.531,
  });

  const allbabysitter = [
    {
      id: "25taGHBvjdbhIYGuvLKh",
      latitude: 25.16058,
      longitude: 51.55916,
      companyId: "6MyBJXiz8j6MVAr3mq4H",
      city: "Wukair",
      image:
        "https://companieslogo.com/img/orig/QFLS.QA-c6681aee.png?t=1686546119",
    },
    {
      id: "9MDn549igQ1MWK6JxocO",
      latitude: 25.4327266,
      longitude: 50.7791929,
      companyId: "6MyBJXiz8j6MVAr3mq4H",
      city: "Al Dafna",
      image:
        "https://companieslogo.com/img/orig/QFLS.QA-c6681aee.png?t=1686546119",
    },
    {
      id: "EHY422xwOXDmczGlX3eK",
      latitude: 25.143494636073328,
      longitude: 51.531960647553205,
      companyId: "AyGcsFXDrbLhD5k1eUeU",
      city: "Wukair",
      image:
        "https://companieslogo.com/img/orig/QFLS.QA-c6681aee.png?t=1686546119",
    },
    {
      id: "F942yCu4VW5XK9EYuFFi",
      latitude: 25.1583648,
      longitude: 51.5291771,
      companyId: "6MyBJXiz8j6MVAr3mq4H",
      city: "Wukair",
      image:
        "https://companieslogo.com/img/orig/QFLS.QA-c6681aee.png?t=1686546119",
    },
    {
      id: "I5RCK4PdJrZKuJpTm0iD",
      latitude: 25.292978572576577,
      longitude: 51.539857406169176,
      companyId: "AyGcsFXDrbLhD5k1eUeU",
      city: "Doha",
      image:
        "https://companieslogo.com/img/orig/QFLS.QA-c6681aee.png?t=1686546119",
    },
  ];

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        setPermission(false);
        console.log(permission);
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setPermission(true);
      console.log(location);
      console.log(permission);

      setPin({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });

      const locuser = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      };

      //Animate the user to new region. Complete this animation in 3 seconds
      mapRef.current.animateToRegion(locuser, 3 * 1000);
    })();
  }, []);

  const [region, setRegion] = useState({
    latitude: 51.5079145,
    longitude: -0.0899163,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const doha = {
    latitude: 25.2854,
    longitude: 51.531,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const goToDoha = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(doha, 3 * 1000);
  };

  const Wukair = {
    latitude: 25.1561,
    longitude: 51.5477,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const goToWukair = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(Wukair, 3 * 1000);
  };

  const rayyan = {
    latitude: 25.2862,
    longitude: 51.4204,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const goToRayyan = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(rayyan, 3 * 1000);
  };

  const dukhan = {
    latitude: 25.428004,
    longitude: 50.783307,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };
  const goToDukhan = () => {
    //Animate the user to new region. Complete this animation in 3 seconds
    mapRef.current.animateToRegion(dukhan, 3 * 1000);
  };

  const moving = (valuee) => {
    if (valuee === "Doha") {
      console.log("Doha");
      goToDoha();
    }
    if (valuee === "Al Rayyan") {
      console.log("Rayyan");
      goToRayyan();
    }
    if (valuee === "Al Wukair") {
      console.log("Wukair");
      goToWukair();
    }
    if (valuee === "Dukhan") {
      console.log("Dukhan");
      goToDukhan();
    }
  };

  const markerRef = useRef(null);

  const okayy = () => {
    console.log(markerRef.current.Callout);
  };
  return (
    // <Tracking />
    <View style={styles.container}>
      <MapView
        style={styles.map}
        ref={mapRef}
        initialRegion={{
          latitude: 25.2854,
          longitude: 51.531,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
        onUserLocationChange={(e) => {
          console.log("onUserLocationChnage", e.nativeEvent);
          setPin({
            latitude: e.nativeEvent.coordinate.latitude,
            longitude: e.nativeEvent.coordinate.longitude,
          });
        }}
        onRegionChangeComplete={(region) => setRegion(region)}
      >
        {permission ? (
          <>
            <Marker
              title="Me"
              description=""
              pinColor="gold"
              draggable={true}
              coordinate={pin}
              onDragStart={(e) => {
                console.log("Drage Start", e.nativeEvent.coordinate);
              }}
              onDragEnd={(e) => {
                console.log("Drage End", e.nativeEvent.coordinate);
                setPin({
                  latitude: e.nativeEvent.coordinate.latitude,
                  longitude: e.nativeEvent.coordinate.longitude,
                });
              }}
            >
              <Callout>
                <Text>Me</Text>
              </Callout>
            </Marker>

            <Circle center={pin} radius={1900} />
          </>
        ) : null}

        {allbabysitter.map((elem, i) => (
          <Marker
            ref={markerRef[i]}
            key={elem.id}
            description="person"
            coordinate={{
              latitude: elem.latitude,
              longitude: elem.longitude,
            }}
            onPress={() => alert(elem.id)}
          >
            <Image
              style={{
                width: 40,
                height: 40,
                //borderRadius: 50,
                //borderWidth: 1,
                //borderColor: "black",
              }}
              source={{
                uri: elem.image,
              }}
            />
            {/* <Callout>
            <Text>Hi</Text>
          </Callout> */}
          </Marker>
        ))}
      </MapView>
      <View style={styles.searchBox}>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: "#333333" }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          //inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={locations}
          //search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? "Select Location" : "..."}
          searchPlaceholder="Search..."
          value={location}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            setLocation(item.value);
            setIsFocus(false);
            moving(item.value);
          }}
          //onSelect={alert("hj")}
          renderLeftIcon={() => (
            <Entypo
              style={styles.icon}
              color={isFocus ? "red" : "#333333"}
              name="location"
              size={20}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    //justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    fontSize: 20,
    backgroundColor: "lightblue",
  },
  //---------DropDown---------------------
  con: {
    width: "100%",
    backgroundColor: "#f5d1d6",
    padding: 16,
    //flex: 1,
  },
  //dropcon:{}
  dropdown: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 12,
    padding: 3,
    // marginTop: -20,
  },
  icon: {
    marginRight: 8,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  searchBox: {
    backgroundColor: "#fff",
    width: "90%",
    //alignSelf: "center",
    borderRadius: 5,
    padding: 10,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    marginTop: "10%",
    //marginBottom: "180%",
  },
});
