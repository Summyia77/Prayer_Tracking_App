import React, { useState, useEffect } from "react";
import { ImageBackground, ScrollView, TouchableOpacity, StyleSheet, View, Text, Dimensions, Alert } from "react-native";
import Navbr from "./Navbr.js";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Screen11 = () => {
  const navigation = useNavigation();
  const [streak, setStreak] = useState(0);
  const [prayerdatesArray, setPrayerdatesArray] = useState([]);

  useEffect(() => {
    const retrievePrayerDates = async () => {
      try {
        const prayerdatesString = await AsyncStorage.getItem('prayerdates');
        if (prayerdatesString !== null) {
          const prayerdates = JSON.parse(prayerdatesString);
          const prayerdatesArray = Object.values(prayerdates);
          setPrayerdatesArray(prayerdatesArray);
          const lastData = prayerdatesArray[prayerdatesArray.length - 1];
          if (lastData.includes(-1)) {
            setStreak(0);
          } else {
            if (lastData.includes(1) || lastData.includes(0)) {
              setStreak(lastStreak => lastStreak + 1);
            }
          }
        } else {
          setStreak(0); // Reset streak if no prayer dates found
        }
      } catch (error) {
        console.error('Error retrieving prayer dates:', error);
        Alert.alert('Error', 'Failed to retrieve prayer dates.');
      }
    };
    retrievePrayerDates();
  }, []);

  return (
    <ScrollView>
      <ImageBackground source={require("../Images/screen4_bg.jpg")} style={styles.bg} />
      <Navbr />
      <View style={styles.circle1}>
        <View style={styles.circle2}>
          <Text style={styles.streakText}>Streak</Text>
          <Text style={styles.streakCount}>{streak}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate("Screen4")}>
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    resizeMode: "cover",
    height: height,
    width: width,
  },
  circle1: {
    top: 250,
    left: 40,
    height: 300,
    width: 300,
    borderColor: "grey",
    backgroundColor: "white",
    borderRadius: 1000,
    position: "relative",
    alignContent: "center",
    borderWidth: 3,
  },
  circle2: {
    top: 8,
    left: 8,
    height: 280,
    width: 280,
    borderColor: "grey",
    backgroundColor: "white",
    borderRadius: 1000,
    position: "relative",
    alignContent: "center",
    borderWidth: 3,
  },
  streakText: {
    textAlign: "center",
    fontFamily: "Times New Roman",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 30,
  },
  streakCount: {
    textAlign: "center",
    fontFamily: "Times New Roman",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 10,
  },
  btn: {
    top: 290,
    position: "relative",
    height: 40,
    width: 70,
    borderWidth: 1,
    borderRadius: 9,
    alignSelf: "center",
    borderColor: "white",
    backgroundColor: "blue",
  },
  btnText: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    top: 7,
    fontWeight: "bold",
  },
});

export default Screen11;
