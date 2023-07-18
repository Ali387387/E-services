import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

//components
import Screen from "./../components/Screen";
import MyAppButton from "./../components/common/MyAppButton";
//config
import Colors from "../config/Colors";

function ReviewScreen(props) {
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
          <TouchableOpacity activeOpacity={0.8}>
            <Image style={{ width: RFPercentage(2.6), height: RFPercentage(2) }} source={require("../../assets/Images/back.png")} />
          </TouchableOpacity>
          <Text style={{ marginLeft: RFPercentage(1.5), color: "#15228F", fontSize: RFPercentage(2.1), fontWeight: "bold" }}>Reviews</Text>
        </View>
      </View>

      <View
        style={{ marginTop: RFPercentage(5), width: "90%", height: RFPercentage(12), backgroundColor: "#EAE8FE", borderRadius: RFPercentage(2), justifyContent: "center", alignItems: "flex-start" }}
      >
        <View style={{ justifyContent: "center", alignItems: "flex-start", marginLeft: RFPercentage(5) }}>
          <Text style={{ color: "#080F18", fontSize: RFPercentage(2), opacity: 0.5 }}>Computer Scientist</Text>
          <Text style={{ color: "#FF6610", fontSize: RFPercentage(2.2), marginTop: RFPercentage(0.5), fontFamily: "Poppins_500Medium" }}>Fatima Anjum</Text>
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(5), width: "90%", height: RFPercentage(12), backgroundColor: "#F9F9FC", borderRadius: RFPercentage(2), justifyContent: "center", alignItems: "center" }}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#08F18", fontSize: RFPercentage(2), opacity: 0.5 }}>Momina</Text>
          <Text style={{ color: "#000", fontSize: RFPercentage(1.8), marginTop: RFPercentage(0.5), fontFamily: "Poppins_500Medium" }}>Good Job Farwa.</Text>
          <Text style={{ color: "#000", fontSize: RFPercentage(1.8), marginTop: RFPercentage(0.5), fontFamily: "Poppins_500Medium" }}>I like your service.Thanks!</Text>
        </View>
      </View>

      {/* Button */}
      <View style={{ width: "100%", alignItems: "center", position: "absolute", bottom: RFPercentage(6) }}>
        <MyAppButton
          title="Continue"
          //   onPress={() => props.navigation.navigate("StartedScreen")}
          padding={RFPercentage(2)}
          backgroundColor={Colors.primary}
          borderColor={Colors.primary}
          borderWidth={RFPercentage(0.2)}
          color={Colors.white}
          bold={false}
          fontSize={RFPercentage(2)}
          fontFamily={"Poppins_500Medium"}
          borderRadius={RFPercentage(1.6)}
          width={"60%"}
        />
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

export default ReviewScreen;
