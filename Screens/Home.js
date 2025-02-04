import * as React from "react";
import {
  ImageBackground,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  Dimensions,
} from "react-native";
import Navbr from "./Navbr.js";

const Screen11 = () => {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../Images/background.jpg")} // Changed image format to PNG
        style={styles.bg}
      >
        <Navbr />
        <View style={styles.container}>
          <Image
            style={styles.img}
            source={require("../Images/mosque_4398795.png")}
          />
          <Text style={styles.txt}>Welcome To Prayer Reorder! </Text>
          <Text style={styles.txt1}>
            Prayer is foundational at WorldVenture. Let's pray together!
          </Text>
          <Text style={styles.txt2}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo magnam
            dolor porro deleniti earum nemo fugiat, expedita velit labore
            necessitatibus!
          </Text>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  img: {
    height: 70,
    width: 70,
    marginBottom: 20, // Changed bottom to marginBottom
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    height: 736,
    width: width,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 220, // Changed top to marginTop
    marginLeft: 40, // Changed left to marginLeft
    marginRight: 40, // Added marginRight
  },
  txt1: {
    color: "white",
    fontFamily: "Arial", // Changed font family
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  txt: {
    color: "yellow",
    textAlign: "center",
    fontFamily: "Arial", // Changed font family
    fontSize: 26,
    fontWeight: "bold",
  },
  txt2: {
    color: "white",
    textAlign: "center",
    fontFamily: "Arial", // Changed font family
    fontSize: 15,
    marginTop: 20, // Changed top to marginTop
    marginBottom: 20, // Added marginBottom
  },
});

export default Screen11;
