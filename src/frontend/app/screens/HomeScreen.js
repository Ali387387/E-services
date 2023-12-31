import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, ScrollView } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

//components
import MyAppButton from "./../components/common/MyAppButton";
import Screen from "../components/Screen";

//config
import Colors from "../config/Colors";

function HomeScreen(props) {
  const categoriesData = [
    {
      imageSource: require("../../assets/Images/p2.png"),
      title: "Massage",
    },
    {
      imageSource: require("../../assets/Images/p1.png"),
      title: "Clean",
    },
    {
      imageSource: require("../../assets/Images/p3.png"),
      title: "Repair",
    },
    {
      imageSource: require("../../assets/Images/p1.png"),
      title: "Auto",
    },
    {
      imageSource: require("../../assets/Images/p2.png"),
      title: "Clean",
    },
  ];

  // const categoriesData = [];
  // try {
  //   const response = await fetch("http://192.168.158.88:3000/get-services-list", {
  //     method: "GET",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     }
  //   });
  //   if (await response.ok) {
  //     var object = await response.json();
  //     console.log(object);
  //     object.servicesList.forEach(element => {
  //       console.log(element);
  //       categoriesData.push({
  //         imageSource: null,
  //         title: element.name
  //       })
  //       console.log(categoriesData);
  //     });
  //   }
  //   else {
  //     const message = await response.json();
  //     console.log(message.msg);
  //     alert(message.msg);
  //   }
  // } catch (error) {
  //   alert("Error");
  // }

  return (
    <View style={styles.screen}>
      {/* Nav */}
      <View
        style={{
          width: "100%",
          height: RFPercentage(38),
          backgroundColor: "#EAE8FE",
          justifyContent: "flex-start",
          alignItems: "center",
          borderBottomLeftRadius: RFPercentage(10),
          borderBottomRightRadius: RFPercentage(10),
        }}
      >
        <View style={{ width: "90%", justifyContent: "flex-start", alignItems: "center", marginTop: RFPercentage(8), flexDirection: "row" }}>
          <View style={{ justifyContent: "center", alignItems: "flex-start" }}>
            <Text style={{ color: "#17278D", fontSize: RFPercentage(3), fontWeight: "bold", fontFamily: "Poppins_700Bold" }}>Hello MM!</Text>
            <Text style={{ color: "#080F18", fontSize: RFPercentage(1.7), marginTop: RFPercentage(0.4), fontFamily: "Poppins_400Regular" }}>Need a Help?</Text>
          </View>
          <TouchableOpacity activeOpacity={0.8} style={{ position: "absolute", right: 0 }}>
            <Image style={{ width: RFPercentage(11), height: RFPercentage(11) }} source={require("../../assets/Images/icon.png")} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: RFPercentage(5),
            borderRadius: RFPercentage(1),
            width: "90%",
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

        <View style={{ flexDirection: "row", justifyContent: "flex-start", alignItems: "center", marginTop: RFPercentage(2) }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {categoriesData.map((item, i) => (
              <TouchableOpacity
                key={i}
                activeOpacity={0.8}
                style={{
                  left: RFPercentage(2),
                  justifyContent: "center",
                  alignItems: "center",
                  width: RFPercentage(13),
                  height: RFPercentage(17),
                  borderRadius: RFPercentage(3),
                  backgroundColor: "#F9F9FC",
                  marginLeft: i !== 0 ? RFPercentage(2) : 0,
                  marginRight: i == 4 ? RFPercentage(4) : 0,
                }}
              >
                <Image style={{ width: RFPercentage(6), height: RFPercentage(6) }} source={item.imageSource} />
                <Text style={{ marginTop: RFPercentage(3), color: "#17278D", fontSize: RFPercentage(1.8) }}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>

      <View style={{ marginTop: RFPercentage(12), width: "86%", flexDirection: "row", justifyContent: "flex-start", alignItems: "center" }}>
        <TouchableOpacity activeOpacity={0.8}>
          <Text style={{ color: "#080F18", fontSize: RFPercentage(2), fontWeight: "600" }}>Our Services</Text>
        </TouchableOpacity>
      </View>

      <View style={{ width: "90%", justifyContent: "center", alignItems: "center", marginTop: RFPercentage(5), flexDirection: "row" }}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate("OrderProcessScreen")}
          style={{ width: RFPercentage(20), height: RFPercentage(25), borderRadius: RFPercentage(2), backgroundColor: "#F9F9FC", justifyContent: "center", alignItems: "center" }}
        >
          <Text style={{ color: "#080F18", fontSize: RFPercentage(2), fontWeight: "600" }}>AC Service</Text>
          <Image style={{ marginTop: RFPercentage(2), width: RFPercentage(4), height: RFPercentage(4) }} source={require("../../assets/Images/ima.png")} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => props.navigation.navigate("OrderProcessScreen")}
          style={{
            marginLeft: RFPercentage(3),
            width: RFPercentage(20),
            height: RFPercentage(25),
            borderRadius: RFPercentage(2),
            backgroundColor: "#F9F9FC",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#080F18", fontSize: RFPercentage(2), fontWeight: "600" }}>Fan Service</Text>
          <Image style={{ marginTop: RFPercentage(2), width: RFPercentage(4), height: RFPercentage(4) }} source={require("../../assets/Images/ima.png")} />
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

export default HomeScreen;
