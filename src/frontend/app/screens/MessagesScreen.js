import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, TextInput, KeyboardAvoidingView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";

//components
import MyAppButton from "./../components/common/MyAppButton";
import InputField from "../components/common/InputField";

//config
import Colors from "../config/Colors";

function MessagesScreen(props) {
  return (
    <View style={styles.screen}>
      {/* Nav */}
      <View style={{ justifyContent: "flex-start", alignItems: "center", backgroundColor: "#EAE8FE", width: "100%", height: RFPercentage(30) }}>
        <View style={{ marginTop: RFPercentage(10), width: "85%", flexDirection: "row", justifyContent: "flex-start", alignItems: "flex-start" }}>
          <View style={{ marginLeft: RFPercentage(1) }}>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(2), fontFamily: "Poppins_500Medium" }}>M...M!</Text>
            <Text>Online</Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            backgroundColor: Colors.white,
            width: "100%",
            height: RFPercentage(8),
            borderTopRightRadius: RFPercentage(4),
            borderTopLeftRadius: RFPercentage(4),
          }}
        />
      </View>

      <View
        style={{
          width: "90%",
          height: RFPercentage(8),
          backgroundColor: "#F9F9FC",
          borderRadius: RFPercentage(2),
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
          position: "absolute",
          bottom: RFPercentage(1),
        }}
      >
        <View style={{ width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
          <TextInput placeholder="Type something" style={{ width: "90%" }} />
          <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
            <Image style={{ width: RFPercentage(3), height: RFPercentage(3) }} source={require("../../assets/Images/mg.png")} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default MessagesScreen;
