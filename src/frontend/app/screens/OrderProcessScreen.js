import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//components

//config
import Colors from "../config/Colors";

function OrderProcessScreen(props) {
  return (
    <View style={styles.screen}>
      {/* Nav */}
      <View
        style={{
          width: "100%",
          height: RFPercentage(28),
          backgroundColor: "#EAE8FE",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          borderBottomLeftRadius: RFPercentage(7),
          borderBottomRightRadius: RFPercentage(7),
        }}
      >
        <View style={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(8), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate("HomeTab")}>
            <Image style={{ width: RFPercentage(2.6), height: RFPercentage(2) }} source={require("../../assets/Images/back.png")} />
          </TouchableOpacity>
          <Text style={{ marginLeft: RFPercentage(1.5), color: "#15228F", fontSize: RFPercentage(2.1), fontWeight: "bold" }}>Order Detail</Text>
        </View>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{ justifyContent: "center", alignItems: "center", top: RFPercentage(-10), width: "90%", height: RFPercentage(12), backgroundColor: "#F9F9FC", borderRadius: RFPercentage(2.5) }}
      >
        <Image style={{ width: RFPercentage(10), height: RFPercentage(18), position: "absolute", left: 0 }} source={require("../../assets/Images/box.png")} />
        <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
          <Text style={{ color: "#15228F", fontSize: RFPercentage(2.3), fontWeight: "bold" }}>Lets Order</Text>
          <Text style={{ color: "#080F18", fontSize: RFPercentage(1.6), marginTop: RFPercentage(0.5) }}>Please check your details</Text>
        </View>
      </TouchableOpacity>

      {/* Body */}
      <ScrollView style={{ flex: 1, width: "100%", marginTop: RFPercentage(-5) }}>
        <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
          <View
            style={{
              width: "90%",
              height: RFPercentage(25),
              borderRadius: RFPercentage(2),
              backgroundColor: "#F9F9FC",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <View style={{ width: "90%", justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
              <Image style={{ marginTop: RFPercentage(2.5), width: RFPercentage(5), height: RFPercentage(5) }} source={require("../../assets/Images/loc.png")} />
              <Text style={{ top: RFPercentage(1), marginLeft: RFPercentage(2), fontSize: RFPercentage(2), color: "#080F18", fontFamily: "Poppins_500Medium" }}>Service Location</Text>
              <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
                <MaterialIcons name="navigate-next" style={{ top: RFPercentage(1), fontSize: RFPercentage(3.5) }} color="orange" />
              </TouchableOpacity>
            </View>
            <Image style={{ position: "absolute", bottom: 0, width: "100%", height: RFPercentage(15) }} source={require("../../assets/Images/map1.png")} />
          </View>

          <View
            style={{
              width: "90%",
              height: RFPercentage(12),
              borderRadius: RFPercentage(2),
              backgroundColor: "#F9F9FC",
              justifyContent: "center",
              alignItems: "center",
              marginTop: RFPercentage(5),
            }}
          >
            <View style={{ width: "90%", justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
              <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require("../../assets/Images/loc.png")} />
              <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(2), color: "#080F18", fontFamily: "Poppins_500Medium" }}>Service Time</Text>
                <Text style={{ marginLeft: RFPercentage(2), fontSize: RFPercentage(1.5), marginTop: RFPercentage(0.5), color: "#2D333C" }}>Sat,29 Dec 2022,10:00 PM</Text>
              </View>
              <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
                <MaterialIcons name="navigate-next" style={{ fontSize: RFPercentage(3.5) }} color="orange" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{ marginBottom: RFPercentage(20) }} />
      </ScrollView>
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

export default OrderProcessScreen;
