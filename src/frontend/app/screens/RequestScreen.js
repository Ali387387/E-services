import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons, Feather } from "@expo/vector-icons";

//components

//config
import Colors from "../config/Colors";

function RequestScreen(props) {
  return (
    <View style={styles.screen}>
      {/* Nav */}
      <View style={{ justifyContent: "flex-start", alignItems: "center", backgroundColor: "#EAE8FE", width: "100%", height: RFPercentage(30) }}>
        <View style={{ marginTop: RFPercentage(10), width: "85%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
          <TouchableOpacity activeOpacity={0.6} onPress={() => props.navigation.navigate("WelcomeScreen")}>
            <Ionicons name="arrow-back-outline" style={{ fontSize: RFPercentage(3.2) }} color="#131B92" />
          </TouchableOpacity>
          <View style={{ marginLeft: RFPercentage(1) }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2.2), fontFamily: "Poppins_500Medium" }}>Request Services</Text>
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
      </View>

      <View style={{ marginTop: RFPercentage(-3), flexDirection: "row", justifyContent: "flex-start", alignItems: "center", width: "90%" }}>
        <TouchableOpacity activeOpacity={0.8} style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Image style={{ width: RFPercentage(5), height: RFPercentage(5) }} source={require("../../assets/Images/cancel.png")} />
          <Text style={{ marginLeft: RFPercentage(1), fontSize: RFPercentage(1.8), color: Colors.black, fontFamily: "Poppins_500Medium" }}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
          <View style={{ width: RFPercentage(10), height: RFPercentage(4), borderRadius: RFPercentage(1), backgroundColor: "#FF6610", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ color: Colors.white }}>Submit</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Input field */}
      <View style={{ justifyContent: "center", alignItems: "center", width: "100%" }}>
        <TextInput placeholder="Write Something..." style={{ width: "90%", marginTop: RFPercentage(10) }} />
      </View>
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

export default RequestScreen;
