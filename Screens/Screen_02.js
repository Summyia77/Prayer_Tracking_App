import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  View,
} from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { useRoute, useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Navbr from "../Screens/Navbr";

const Screen11 = () => {
  const route = useRoute();
  const date = route.params.date;

  const [fajarisSelected, fajarsetSelection] = useState(false);
  const [zuharisSelected, zuharsetSelection] = useState(false);
  const [asarisSelected, asarsetSelection] = useState(false);
  const [magrebisSelected, magrebsetSelection] = useState(false);
  const [ishaisSelected, ishasetSelection] = useState(false);
  const [fajarisSelected2, fajarsetSelection2] = useState(false);
  const [zuharisSelected2, zuharsetSelection2] = useState(false);
  const [asarisSelected2, asarsetSelection2] = useState(false);
  const [magrebisSelected2, magrebsetSelection2] = useState(false);
  const [ishaisSelected2, ishasetSelection2] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const newprayervalue = [
      fajarisSelected ? 0 : fajarisSelected2 ? 1 : -1,
      zuharisSelected ? 0 : zuharisSelected2 ? 1 : -1,
      asarisSelected ? 0 : asarisSelected2 ? 1 : -1,
      magrebisSelected ? 0 : magrebisSelected2 ? 1 : -1,
      ishaisSelected ? 0 : ishaisSelected2 ? 1 : -1,
    ];

    const savePrayerData = async () => {
      try {
        const dates = await AsyncStorage.getItem('prayerdates');
        let prayerdates = dates ? JSON.parse(dates) : {};
        prayerdates[date] = newprayervalue;

        const sortedDates = Object.keys(prayerdates).sort((a, b) => new Date(a) - new Date(b));
        const sortedPrayerdates = {};
        sortedDates.forEach(key => {
          sortedPrayerdates[key] = prayerdates[key];
        });

        await AsyncStorage.setItem('prayerdates', JSON.stringify(sortedPrayerdates));
        console.log("locally data saved");
      } catch (error) {
        console.log("error occur", error);
      }
    };

    savePrayerData();
  }, [fajarisSelected, zuharisSelected, asarisSelected, magrebisSelected, ishaisSelected, fajarisSelected2, zuharisSelected2, asarisSelected2, magrebisSelected2, ishaisSelected2]);

  return (
    <ScrollView>
      <ImageBackground
        source={require("../Images/screen4_bg.jpg")}
        style={styles.bg}
      />
      <View style={styles.container}>
        <View style={styles.box1}>
          <Text style={styles.namaz}>Fajar</Text>
          <CheckBox
            style={styles.chkbox}
            value={fajarisSelected}
            onValueChange={(newValue) => {
              fajarsetSelection(newValue);
              fajarsetSelection2(false);
            }}
          />
          <Image
            style={styles.icon}
            source={require("../Images/single person.png")}
          />
          <CheckBox
            style={styles.chkbox}
            value={fajarisSelected2}
            onValueChange={(newValue) => {
              fajarsetSelection2(newValue);
              fajarsetSelection(false);
            }}
          />
          <Image
            style={styles.iconSmall}
            source={require("../Images/group.png")}
          />
        </View>
        <View style={styles.box1}>
          <Text style={styles.namaz}>Zuhar</Text>
          <CheckBox
            style={styles.chkbox}
            value={zuharisSelected}
            onValueChange={(newValue) => {
              zuharsetSelection(newValue);
              zuharsetSelection2(false);
            }}
          />
          <Image
            style={styles.icon}
            source={require("../Images/single person.png")}
          />
          <CheckBox
            style={styles.chkbox}
            value={zuharisSelected2}
            onValueChange={(newValue) => {
              zuharsetSelection2(newValue);
              zuharsetSelection(false);
            }}
          />
          <Image
            style={styles.iconSmall}
            source={require("../Images/group.png")}
          />
        </View>
        <View style={styles.box1}>
          <Text style={styles.namaz}>Asar</Text>
          <CheckBox
            style={styles.chkbox}
            value={asarisSelected}
            onValueChange={(newValue) => {
              asarsetSelection(newValue);
              asarsetSelection2(false);
            }}
          />
          <Image
            style={styles.icon}
            source={require("../Images/single person.png")}
          />
          <CheckBox
            style={styles.chkbox}
            value={asarisSelected2}
            onValueChange={(newValue) => {
              asarsetSelection2(newValue);
              asarsetSelection(false);
            }}
          />
          <Image
            style={styles.iconSmall}
            source={require("../Images/group.png")}
          />
        </View>
        <View style={styles.box1}>
          <Text style={styles.namaz}>Magreb</Text>
          <CheckBox
            style={styles.chkbox}
            value={magrebisSelected}
            onValueChange={(newValue) => {
              magrebsetSelection(newValue);
              magrebsetSelection2(false);
            }}
          />
          <Image
            style={styles.icon}
            source={require("../Images/single person.png")}
          />
          <CheckBox
            style={styles.chkbox}
            value={magrebisSelected2}
            onValueChange={(newValue) => {
              magrebsetSelection2(newValue);
              magrebsetSelection(false);
            }}
          />
          <Image
            style={styles.iconSmall}
            source={require("../Images/group.png")}
          />
        </View>
        <View style={styles.box1}>
          <Text style={styles.namaz}>Isha</Text>
          <CheckBox
            style={styles.chkbox}
            value={ishaisSelected}
            onValueChange={(newValue) => {
              ishasetSelection(newValue);
              ishasetSelection2(false);
            }}
          />
          <Image
            style={styles.icon}
            source={require("../Images/single person.png")}
          />
          <CheckBox
            style={styles.chkbox}
            value={ishaisSelected2}
            onValueChange={(newValue) => {
              ishasetSelection2(newValue);
              ishasetSelection(false);
            }}
          />
          <Image
            style={styles.iconSmall}
            source={require("../Images/group.png")}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          navigation.navigate("Screen3");
        }}
      >
        <Text style={styles.btnText}>
          Next
        </Text>
      </TouchableOpacity>
      <Navbr />
    </ScrollView>
  );
};
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  btn: {
    top: 130,
    position: "relative",
    height: 40,
    width: 70,
    borderWidth: 1,
    borderRadius: 9,
    alignSelf: "center",
    borderColor: "white",
    backgroundColor: "blue",
  },
  namaz: {
    fontSize: 19,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Time New Roman",
    top: 22,
    left: 15,
    width: 75,
  },
  chkbox: {
    top: 20,
    marginHorizontal: 20,
  },
  container: {
    position: "relative",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
    top: 140,
    left: 10,
    height: 470,
    width: 80,
    padding: 20,
    backgroundColor: "black",
  },
  box1: {
    position: "relative",
    backgroundColor: "white",
    width: 320,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: "grey",
    height: 70,
    flexDirection: "row",
    marginBottom: 20,
    zIndex: -1,
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    height: height,
    width: width,
  },
  counterText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
  },
});

export default Screen11;
