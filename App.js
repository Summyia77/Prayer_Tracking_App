import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screen1 from "./Screens/Screen_01.js";
import screen2 from "./Screens/Screen_02.js";
import screen3 from "./Screens/Screen_03.js";
import screen4 from "./Screens/Screen_04.js";
import Home from "./Screens/Home.js";
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import store from './Screens/store.js'; // Ensure the path is correct

const Stack = createNativeStackNavigator();

function App() {
  useEffect(() => {
    async function prepare() {
      try {
        // Prevent the splash screen from auto-hiding
        await SplashScreen.preventAutoHideAsync();
        // Pre-load any resources, e.g., fonts or data
        // Simulate a delay (e.g., to load resources)
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide the splash screen
        await SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen
            name="Screen1"
            options={{ title: "Calender" }}
            component={screen1}
          />
          <Stack.Screen
            name="Screen2"
            options={{ title: "Prayer" }}
            component={screen2}
          />
          <Stack.Screen
            name="Screen3"
            options={{ title: "Streak" }}
            component={screen3}
          />
          <Stack.Screen
            name="Home"
            options={{ title: "Home" }}
            component={Home}
          />
          <Stack.Screen
            name="Screen4"
            options={{ title: "Schedule" }}
            component={screen4}
          />
     
        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
