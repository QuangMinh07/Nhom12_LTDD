import React, { useState, useEffect } from "react";
import { Dimensions, ScrollView } from "react-native";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import axios from "axios"; // Import thư viện Axios

export default function Notice({ navigation }) {
  const rou = useRoute();
  const [currentDay, setCurrentDay] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    setCurrentDay(
      hours + ":" + minutes + "," + date + "/" + month + "/" + year
    );

    // Gọi API
    axios
      .get("https://654ad3515b38a59f28ee4286.mockapi.io/bank1")
      .then((response) => {
        // response.data chứa dữ liệu từ API
        setApiData(response.data);
      })
      .catch((error) => {
        console.error("Lỗi khi gọi API:", error);
      });
  }, []);

  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <View style={{ flex: 1, paddingHorizontal: 20 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Image
                source={require("../image/den.png")}
                style={{ width: "22px", height: "25px" }}
              ></Image>
            </Pressable>

            <View>
              <Text
                style={{ fontSize: 20, color: "#053684", fontWeight: "bold" }}
              >
                Thông báo
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: "#ccc",
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginHorizontal: 20,
                  marginTop: "10px",
                }}
              >
                <Image
                  source={require("../image/b.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>

              <View
                style={{
                  backgroundColor: "#ccc",
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: "10px",
                }}
              >
                <Image
                  source={require("../image/a.png")}
                  style={{ width: 25, height: 25 }}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
              margin: 20,
            }}
          >
            <View
              style={{
                width: 114,
                height: 40,
                backgroundColor: "#1E50A0",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontWeight: "bold",
                  paddingHorizontal: 4,
                }}
              >
                Biến động số dư
              </Text>
            </View>
            <View
              style={{
                width: 80,
                height: 40,
                backgroundColor: "#1E50A0",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                marginHorizontal: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontWeight: "bold",
                  paddingHorizontal: 4,
                }}
              >
                Tin cá nhân
              </Text>
            </View>
            <View
              style={{
                width: 57,
                height: 40,
                backgroundColor: "#1E50A0",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                marginHorizontal: 4,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontWeight: "bold",
                  paddingHorizontal: 4,
                }}
              >
                Ưu đãi
              </Text>
            </View>
            <View
              style={{
                width: 114,
                height: 40,
                backgroundColor: "#1E50A0",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: "#fff",
                  fontWeight: "bold",
                  paddingHorizontal: 4,
                }}
              >
                Tin được chia sẽ
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            backgroundColor: "#023051",
            width: "100%",
            alignItems: "center",
          }}
        >
          {/* Hiển thị dữ liệu từ API */}
          {apiData.map((item, index) => {
            return (
              <View
                style={{
                  backgroundColor: "#fff",
                  width: 365,
                  height: 175,
                  marginVertical: 20,
                  paddingHorizontal: 20,
                  borderRadius: 6,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Image
                      source={require("../image/Ellipse 9.png")}
                      style={{ width: 30, height: 30 }}
                    />
                    <Text style={{ marginLeft: 20 }}>{currentDay}</Text>
                  </View>
                  <Image
                    source={require("../image/cil_list.png")}
                    style={{ width: 20, height: 20 }}
                  />
                </View>
                <View
                  style={{
                    width: 300,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 17,
                      color: "#333",
                      fontWeight: "bold",
                    }}
                  >
                    {/* Hiển thị dữ liệu từ state */}
                    Thời Gian: {currentDay} <br />
                    Tài Khoản: {item.soTK} <br />
                    Số tiền gửi: {item.soTien} <br />
                    Nội Dung: {item.noiDung}
                  </Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
