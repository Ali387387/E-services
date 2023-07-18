import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons, Feather } from "@expo/vector-icons";

//components

//config
import Colors from "../config/Colors";

function Messages2Screen(props) {
  return (
    <View style={styles.screen}>
      {/* Nav */}
      <View style={{ justifyContent: "flex-start", alignItems: "center", backgroundColor: "#EAE8FE", width: "100%", height: RFPercentage(38) }}>
        <View style={{ marginTop: RFPercentage(10), width: "85%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("WelcomeScreen")}>
            <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.2) }} color="#131B92" />
          </TouchableOpacity>
          <View style={{ marginLeft: RFPercentage(1) }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2), fontFamily: "Poppins_500Medium" }}>Messages</Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: Colors.white,
            width: "100%",
            height: RFPercentage(8),
            borderTopRightRadius: RFPercentage(6),
            borderTopLeftRadius: RFPercentage(6),
          }}
        />
        <View
          style={{
            marginTop: RFPercentage(4),
            borderRadius: RFPercentage(1),
            width: "70%",
            height: RFPercentage(7),
            backgroundColor: Colors.white,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Feather name="search" style={{ fontSize: RFPercentage(2.3), marginLeft: RFPercentage(2) }} color="#FF6610" />
          <TextInput placeholder="Search" placeholderTextColor={"#FF6610"} style={{ left: RFPercentage(1), width: "100%", fontFamily: "Poppins_400Regular" }} />
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginTop: RFPercentage(-2), width: "90%", height: RFPercentage(14), borderRadius: RFPercentage(2), backgroundColor: "#F9F9FC", justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "90%" }}>
          <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require("../../assets/Images/ima.png")} />
          <View style={{ marginLeft: RFPercentage(2), justifyContent: "center", alignItems: "flex-start" }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2.2), fontFamily: "Poppins_500Medium" }}>Fatima Anjum</Text>
            <Text style={{ marginTop: RFPercentage(1), color: "#080F18", fontSize: RFPercentage(1.8), opacity: 0.5 }}>Okay</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0, bottom: RFPercentage(3.5) }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(1.8), opacity: 0.5 }}>10:00 PM</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginTop: RFPercentage(3), width: "90%", height: RFPercentage(14), borderRadius: RFPercentage(2), backgroundColor: "#F9F9FC", justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "90%" }}>
          <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require("../../assets/Images/ima.png")} />
          <View style={{ marginLeft: RFPercentage(2), justifyContent: "center", alignItems: "flex-start" }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2.2), fontFamily: "Poppins_500Medium" }}>Rana Usama</Text>
            <Text style={{ marginTop: RFPercentage(1), color: "#080F18", fontSize: RFPercentage(1.8), opacity: 0.5 }}>Thanks Fatima!</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0, bottom: RFPercentage(3.5) }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(1.8), opacity: 0.5 }}>10:00 PM</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginTop: RFPercentage(3), width: "90%", height: RFPercentage(14), borderRadius: RFPercentage(2), backgroundColor: "#F9F9FC", justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "90%" }}>
          <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require("../../assets/Images/ima.png")} />
          <View style={{ marginLeft: RFPercentage(2), justifyContent: "center", alignItems: "flex-start" }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2.2), fontFamily: "Poppins_500Medium" }}>Farwa Azam</Text>
            <Text style={{ marginTop: RFPercentage(1), color: "#080F18", fontSize: RFPercentage(1.8), opacity: 0.5 }}>Yup I got it!</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0, bottom: RFPercentage(3.5) }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(1.8), opacity: 0.5 }}>10:00 PM</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.8}
        style={{ marginTop: RFPercentage(3), width: "90%", height: RFPercentage(14), borderRadius: RFPercentage(2), backgroundColor: "#F9F9FC", justifyContent: "center", alignItems: "center" }}
      >
        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "90%" }}>
          <Image style={{ width: RFPercentage(4), height: RFPercentage(4) }} source={require("../../assets/Images/ima.png")} />
          <View style={{ marginLeft: RFPercentage(2), justifyContent: "center", alignItems: "flex-start" }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2.2), fontFamily: "Poppins_500Medium" }}>Hamail</Text>
            <Text style={{ marginTop: RFPercentage(1), color: "#080F18", fontSize: RFPercentage(1.8), opacity: 0.5 }}>I will!</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0, bottom: RFPercentage(3.5) }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(1.8), opacity: 0.5 }}>10:00 PM</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default Messages2Screen;
