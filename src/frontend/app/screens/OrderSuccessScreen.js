import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import Screen from "./../components/Screen";
import MyAppButton from "./../components/common/MyAppButton";
//config
import Colors from "../config/Colors";

function OrderSuccessScreen(props) {
  return (
    <Screen style={styles.screen}>
      <Image style={{ width: RFPercentage(32), height: RFPercentage(38.5) }} source={require("../../assets/Images/order.png")} />

      <Text style={{ color: "#080F18", fontSize: RFPercentage(3), fontFamily: "Poppins_600SemiBold", alignSelf: "center", marginTop: RFPercentage(5) }}>Order Success</Text>

      <View style={{ width: "70%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(1) }}>
        <Text style={{ color: "#080F18", fontSize: RFPercentage(1.7), textAlign: "center", fontFamily: "Poppins_300Light" }}>
          You’re now connected with Farwa Azam. Please Check your details about the service
        </Text>
      </View>

      {/* Button */}
      <View style={{ width: "100%", alignItems: "center", position: "absolute", bottom: RFPercentage(10) }}>
        <MyAppButton
          title="Check Details"
          padding={RFPercentage(2)}
          backgroundColor={Colors.primary}
          borderColor={Colors.white}
          borderWidth={RFPercentage(0.2)}
          color={"#ffff"}
          bold={false}
          fontSize={RFPercentage(2)}
          fontFamily={"Poppins_600SemiBold"}
          borderRadius={RFPercentage(1.6)}
          width={"65%"}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default OrderSuccessScreen;
