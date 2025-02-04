import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  Image,
  StyleSheet,
TouchableOpacity,
  
  Dimensions,
  Pressable,
} from "react-native";

const { width } = Dimensions.get("window");

function Navbr() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  // Define toggleMenu function
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.navbar}>
     
      <View style={styles.icon}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image
          style={{ top: 2, left: 2, height: 12, width: 15 }}
          source={require('../Images/arrow-left-line (1).png')}
        />
      </Pressable>
        <Image
          source={require("../Images/salat_9953654.png")}
          style={styles.food_icon}
        />
        <Text
          style={{
            alignContent: "center",
            color: "white",
            fontSize: 13,
            left:30,
            fontFamily: "Time New Roman",
            fontWeight: "bold",
          }}
        >
          Prayer Time
        </Text>
      </View>

      {menuVisible && (
        <View style={styles.links}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Screen1")}
          >
            <Text id="rr" style={styles.text}>Salah Tracker</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Screen2",{selectedDate:0})}
          >
            <Text style={styles.text}>Namaz</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Screen3")}
          >
            <Text style={styles.text}>Streak</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Screen4")}
          >
            <Text style={styles.text}>Record</Text>
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <View style={{ fontSize: 9, color: "white" }}>
          {menuVisible ? (
            <Image source={require("../Images/menu-line (1).png") } style={{}}></Image>
          ) : (
            <Image source={require("../Images/menu-fill (1).png")}></Image>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menuButton: { height: 20, width: 40 },
  icon: { flexDirection: "column" },
  text: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Time New Roman",
  },
  navbar: {
    flexDirection: "row",
    position: "absolute",
    top: 0,
    height: 100,
    width: width,
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    justifyContent:"space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  links: {
    flexDirection: "column",
    top: 100,
    right: 0,
    backgroundColor: "black",
    opacity: 0.9,
    height: 190,
    width: 100,
    position: "absolute",
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 5,
    zIndex:0
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
  
    marginLeft: 10,
  },
  food_icon: { left:30,height: 40, width: 40 },
});

export default Navbr;
