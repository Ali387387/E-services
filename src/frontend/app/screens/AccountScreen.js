import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import Screen from "./../components/Screen";
import MyAppButton from "./../components/common/MyAppButton";
//config
import Colors from "../config/Colors";

function AccountScreen(props) {
  return (
    <View style={styles.screen}>
      {/* Nav */}
      <View
        style={{
          width: "100%",
          height: RFPercentage(25),
          backgroundColor: "#EAE8FE",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          borderBottomLeftRadius: RFPercentage(7),
          borderBottomRightRadius: RFPercentage(7),
        }}
      >
        <View style={{ marginLeft: RFPercentage(2), marginTop: RFPercentage(8), flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Text style={{ marginLeft: RFPercentage(1.5), color: "#15228F", fontSize: RFPercentage(2.1), fontWeight: "bold" }}>Profile</Text>
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(4), width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <Text style={{ fontSize: RFPercentage(2.1), fontFamily: "Poppins_400Regular" }}>Balance</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: RFPercentage(2), width: "90%", height: RFPercentage(16), borderRadius: RFPercentage(2), backgroundColor: "#FF6610" }}>
        <View style={{ width: "80%", justifyContent: "flex-start", alignItems: "center", flexDirection: "row" }}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: RFPercentage(2), color: Colors.white }}>Balance</Text>
            <Text style={{ fontSize: RFPercentage(3), color: Colors.white, fontFamily: "Poppins_600SemiBold" }}>$240.00</Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center", position: "absolute", right: 0 }}>
            <Text style={{ fontSize: RFPercentage(2), color: Colors.white }}>Points</Text>
            <Text style={{ fontSize: RFPercentage(3), color: Colors.white, fontFamily: "Poppins_600SemiBold" }}>1850</Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(4), width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <Text style={{ fontSize: RFPercentage(2.1), fontFamily: "Poppins_400Regular" }}>Profit Details</Text>
      </View>

      <View style={{ marginTop: RFPercentage(2), width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require("../../assets/Images/p.png")} />
        <Text style={{ marginLeft: RFPercentage(3), color: Colors.black, fontSize: RFPercentage(2), fontFamily: "Poppins_400Regular" }}>Fatima Anjum</Text>
        <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
          <Text style={{ marginLeft: RFPercentage(3), color: "#080F18", fontSize: RFPercentage(1.8), fontFamily: "Poppins_400Regular", opacity: 0.5 }}>edit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: RFPercentage(4), width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require("../../assets/Images/mail.png")} />
        <Text style={{ marginLeft: RFPercentage(3), color: Colors.black, fontSize: RFPercentage(2), fontFamily: "Poppins_400Regular" }}>Fatima@gmail.com</Text>
        <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
          <Text style={{ marginLeft: RFPercentage(3), color: "#080F18", fontSize: RFPercentage(1.8), fontFamily: "Poppins_400Regular", opacity: 0.5 }}>edit</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: RFPercentage(4), width: "90%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={require("../../assets/Images/call.png")} />
        <Text style={{ marginLeft: RFPercentage(3), color: Colors.black, fontSize: RFPercentage(2), fontFamily: "Poppins_400Regular" }}>Farwa</Text>
        <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
          <Text style={{ marginLeft: RFPercentage(3), color: "#080F18", fontSize: RFPercentage(1.8), fontFamily: "Poppins_400Regular", opacity: 0.5 }}>edit</Text>
        </TouchableOpacity>
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

export default AccountScreen;
