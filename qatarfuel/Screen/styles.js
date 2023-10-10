import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");
//["#ff5d8f", "#ff97b7", "#ffacc5", "#ffcad4", "#fadde1"]
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  button: {
    //backgroundColor: "#e9b6bd",
    backgroundColor: "#fa73a4",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    // marginHorizontal: "30",marginVertical: 5,
    marginHorizontal: "15%",
    marginVertical: "4%",
    //borderWidth: 1,
    //borderColor: "white",
  },
  buttonText: {
    fontSize: 17,
    fontWeight: "600",
    color: "white",
    letterSpacing: 0.5,
    //justifyContent: "center",
    textAlign: "center",
  },
  signUp: {
    fontSize: 17,
    fontWeight: "600",
    color: "#fa73a4",
    letterSpacing: 0.5,
    textAlign: "center",
  },
  bottomContainer: {
    justifyContent: "center",
    //1.6
    height: height / 1.4,
    //backgroundColor: "#e996b1",
    backgroundColor: "white",
    borderTopLeftRadius: 100,
    //blue  rgb(230,116,168)
    // zIndex:-1
  },
  textInput: {
    height: 55,
    borderWidth: 1,
    //borderColor: "rgba(0, 0, 0, 0.2)",
    borderColor: "#fa73a4",
    marginHorizontal: 20,
    marginTop: 10,
    borderRadius: 17,
    paddingLeft: 10,
  },
  formButton: {
    backgroundColor: "rgba(123,104,238,0.8)",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  formInputContainer: {
    marginTop: "20%",
    ...StyleSheet.absoluteFill,
    zIndex: -1,
    justifyContent: "center",

    //alignItems: "center",
    // backgroundColor: "blue",
    // borderTopLeftRadius: 100,
  },
  closeButtonContainer: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 1,
    backgroundColor: "white",
    alignItems: "center",
    borderRadius: 20,
    top: -20,
    zIndex: 1,
  },
});

export default styles;
