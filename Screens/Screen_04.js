import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Dimensions,
  View,
  Text,
} from "react-native";
import React, { useState,useEffect } from "react";
import Navbr from "./Navbr.js";
import { LineChart } from 'react-native-chart-kit';
import AsyncStorage from "@react-native-async-storage/async-storage";

const Screen11 = () => {
  const [prayerDatesArray, setPrayerDatesArray] = useState([]);
  const [graphData, setGraphData] = useState([]);

  useEffect(() => {
    const retrievePrayerDates = async () => {
      try {
        const prayerDatesString = await AsyncStorage.getItem('prayerdates');
        if (prayerDatesString !== null) {
          const prayerDates = JSON.parse(prayerDatesString);
          const prayerDatesArray = Object.values(prayerDates);
          setPrayerDatesArray(prayerDatesArray);

          // Extracting data for the last keyw
          const lastKey = Object.keys(prayerDatesArray).pop();
          const valuesArray = prayerDatesArray[lastKey];
          const integersArray = valuesArray.map(value => parseInt(value, 10));

          setGraphData(integersArray);
        }
      } catch (error) {
        console.error('Error retrieving prayer dates:', error);
      }
    };
    retrievePrayerDates();
  }, []);

  
  const chartConfig = {

    backgroundGradientFrom: 'white',
    backgroundGradientTo: 'white',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    yLabels: [-1,0,1] 
  };
  
  //console.log(integerValue)
 
  const data = {
    labels: ["Fajar","Zuhar","Asar","Magreb","Isha"],
    datasets: [
      {
        data:graphData,
      },
    ],
  };
  
  return (
    <ScrollView>
      <>
        <ImageBackground
          source={require("../Images/screen4_bg.jpg")}
          style={styles.bg}
        />
    
        <View style={styles.b1}>
          <Text style={styles.b1_txt_1}>last 7 Days</Text>
          <Text style={styles.b1_txt}>Monthy</Text>
          <Text style={styles.b1_txt}>Date Range</Text>
        </View>
       
        {/* chart  */}

       <View style={styles.container}>
      <LineChart
        data={data}
        width={330}
        height={280}
        chartConfig={chartConfig}
      />
    </View>
    {/* chart end */}
        <View style={styles.b3}>
          <View
            style={{ height: 15, width: 15, backgroundColor: "blue" }}
          ></View>
          <Text style={{ color: "white", paddingHorizontal: 10 }}>Fajar</Text>

          <View
            style={{ height: 15, width: 15, backgroundColor: "green" }}
          ></View>
          <Text style={{ color: "white", paddingHorizontal: 10 }}>Zuhar</Text>

          <View
            style={{ height: 15, width: 15, backgroundColor: "yellow" }}
          ></View>
          <Text style={{ color: "white", paddingHorizontal: 10 }}>Asar</Text>

          <View
            style={{ height: 15, width: 15, backgroundColor: "red" }}
          ></View>
          <Text style={{ color: "white", paddingHorizontal: 10 }}>Magreb</Text>

          <View
            style={{ height: 15, width: 15, backgroundColor: "purple" }}
          ></View>
          <Text style={{ color: "white", paddingHorizontal: 10 }}>Isha</Text>
        </View>
        <Text style={{position:"relative",color:"white",top:50,left:90,fontSize:17,fontWeight:"bold"}}>You Offered 0 Out Of 35</Text>
    
        <Navbr />
      </>


    </ScrollView>
  );
};
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginBottom:70,
    marginTop:0
   
  },
  range: {
    position: "relative",
    color: "white",
    marginTop: 10,
    flexDirection: "row",
  },
  range_txt: {
    marginTop: 40,
    paddingHorizontal: 17,
    color: "white",
    left: 60,
  },
  b3: { flexDirection: "row", top: 30, left: 25 },
  b2: { top: 40, justifyContent: "center", flexDirection: "row", marginTop: 1 },
  namaz_box: {
    height: 60,
    width: 290,
    borderBlockColor: "white",
    borderWidth: 1,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "grey",
  }, b1: {
    position: "relative",

    flexDirection: "row",
    color: "white",

    backgroundColor: "white",
    borderRadius: 30,
    height: 40,
    marginTop: 20,
    marginBottom:140,
    width: 300,
    left: 40,
    paddingLeft: 0,
    zIndex:1
  },
  namaz_txt: {
    width: 60,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    top: 17,

    right: 6,
  },

  b1_txt: {
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 19,

    paddingVertical: 10,
  },
  b1_txt_1: {
    fontSize: 12,
    fontWeight: "bold",
    paddingHorizontal: 23,
    borderRadius: 30,
    backgroundColor: "purple",
    paddingVertical: 10,
    color: "white",
  },
  bg: {
    flex: 1,
    resizeMode: "cover",
    height: height,
    width: width,
  },
});

export default Screen11;
