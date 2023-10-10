import React, { useEffect, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerActions,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "@rneui/themed";
import Icon from "react-native-vector-icons/Ionicons";

const CustomDrawer = (props) => {
  const navigation = useNavigation();
  // let user = auth?.currentUser?.email;

  //   const [image, setImage] = useState("")
  //  useEffect(() => {
  //     readUser()
  //   }, [user]);

  //  const readUser = async () => {
  //   const docRef = doc(db, "Customer", user);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log("Document data:", docSnap.data());
  //     //setData(docSnap.data());
  //     setImage(docSnap.data().image)
  //   } else {
  //     console.log("No such document!");
  //   }
  // };
  const backImage = {
    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrSb3AyAY673_G20qCpr0tEpC8gVmyPO5b2w&usqp=CAU",
  };
  return (
    <DrawerContentScrollView {...props}>
      <View
        style={{
          height: 150,
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#00448A",
        }}
      >
        {/* <Image
          source={{
            uri: "https://yt3.ggpht.com/ytc/AMLnZu9L_HR7L8qXr_LEkaiW6_diy6_-47fX84g0Qjn2=s900-c-k-c0x00ffffff-no-rj",
          }}
          style={styles.userImg}
        /> */}

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,
          }}
        >
          <Avatar
            onPress={() => navigation.navigate("Profile")}
            size={100}
            rounded
            source={{
              uri: "https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg",
            }}
            style={{
              height: 100,
              width: 100,
            }}
            containerStyle={{
              backgroundColor: "grey",
              top: 50,
              borderWidth: 4,
              borderColor: "white",
            }}
          >
            <Avatar.Accessory size={23} />
          </Avatar>
        </View>
      </View>

      <View style={styles.drawerListWrapper}>
        <DrawerItemList {...props} />
      </View>

      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="share-social" size={22} color={"#5A5A5A"} />
            <Text
              style={{
                fontSize: 15,
                color: "#5A5A5A",
                marginLeft: 5,
              }}
            >
              Tell a Friend
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Icon name="exit" size={22} color={"#5A5A5A"} />
            <Text
              style={{
                fontSize: 15,
                color: "#5A5A5A",
                marginLeft: 5,
              }}
            >
              Sign Out
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  drawerListWrapper: {
    marginTop: 65,
    marginBottom: 140,
  },
});
