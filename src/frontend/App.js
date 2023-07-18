import React from "react";
import { View, ActivityIndicator, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { Fontisto, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  useFonts,
} from "@expo-google-fonts/poppins";
import { RFPercentage } from "react-native-responsive-fontsize";

//screens
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SignInScreen from "./app/screens/SignInScreen";
import SignUpScreen from "./app/screens/SignUpScreen";
import StartedScreen from "./app/screens/StartedScreen";
import HomeScreen from "./app/screens/HomeScreen";
import OrderDetailScreen from "./app/screens/OrderDetailScreen";
import OrderProcessScreen from "./app/screens/OrderProcessScreen";
import OrderSuccessScreen from "./app/screens/OrderSuccessScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import ReviewScreen from "./app/screens/ReviewScreen";
import AccountScreen from "./app/screens/AccountScreen";
import Messages2Screen from "./app/screens/Messages2Screen";
import OrderHistoryScreen from "./app/screens/OrderHistoryScreen";
import RequestScreen from "./app/screens/RequestScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  // Font
  const [fontsLoaded] = useFonts({
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
    Poppins_800ExtraBold,
  });

  if (!fontsLoaded)
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size={RFPercentage(6)} color={Colors.primary} />
      </View>
    );

  // Bottom Tab
  const HomeTab = () => (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { height: RFPercentage(10) },
        showLabel: false,
        // style: { height: RFPercentage(20) },
        tabStyle: { backgroundColor: Colors.white },
        // activeTintColor: Colors.primary,
        tabBarActiveTintColor: "#f77c37",
        tabBarInactiveTintColor: "#051441",
      }}
    >
      <Tab.Screen
        name="Home"
        // options={{ header: () => null }}
        component={HomeScreen}
        options={{
          header: () => null,
          tabBarLabelStyle: {
            fontSize: RFPercentage(1.3),
            top: Platform.OS == "android" ? RFPercentage(-2) : RFPercentage(0.2),
          },
          tabBarIcon: ({ color }) => <Feather name="home" color={color} style={{ fontSize: RFPercentage(3.2) }} />,
        }}
      />
      <Tab.Screen
        name="Order History"
        // options={{ header: () => null }}
        component={OrderHistoryScreen}
        options={{
          header: () => null,
          tabBarLabelStyle: {
            fontSize: RFPercentage(1.3),
            top: Platform.OS == "android" ? RFPercentage(-2) : RFPercentage(0.2),
          },
          tabBarIcon: ({ color }) => <Fontisto name="history" color={color} style={{ fontSize: RFPercentage(3.2) }} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        // options={{ header: () => null }}
        component={MessagesScreen}
        options={{
          header: () => null,
          tabBarLabelStyle: {
            fontSize: RFPercentage(1.3),
            top: Platform.OS == "android" ? RFPercentage(-2) : RFPercentage(0.2),
          },
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="android-messages" color={color} style={{ fontSize: RFPercentage(3.2) }} />,
        }}
      />
      <Tab.Screen
        name="Account"
        // options={{ header: () => null }}
        component={AccountScreen}
        options={{
          header: () => null,
          tabBarLabelStyle: {
            fontSize: RFPercentage(1.3),
            top: Platform.OS == "android" ? RFPercentage(-2) : RFPercentage(0.2),
          },
          tabBarIcon: ({ color }) => <MaterialIcons name="switch-account" color={color} style={{ fontSize: RFPercentage(3.2) }} />,
        }}
      />
    </Tab.Navigator>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="WelcomeScreen">
        <Stack.Screen name="HomeTab" component={HomeTab} />
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="StartedScreen" component={StartedScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
        <Stack.Screen name="OrderProcessScreen" component={OrderProcessScreen} />
        <Stack.Screen name="OrderSuccessScreen" component={OrderSuccessScreen} />
        <Stack.Screen name="MessagesScreen" component={MessagesScreen} />
        <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
        <Stack.Screen name="AccountScreen" component={AccountScreen} />
        <Stack.Screen name="Messages2Screen" component={Messages2Screen} />
        <Stack.Screen name="RequestScreen" component={RequestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Happy Coding :)
