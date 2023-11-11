import { View, Text, Image, Pressable, ImageBackground } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export default function Card({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          marginLeft: "20px",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.goBack("Home"); // quay trở về trang trước đó
          }}
        >
          <Image
            source={require("../image/den.png")}
            style={{ width: "22px", height: "25px" }}
          ></Image>
        </Pressable>

        <View style={{ marginLeft: "100px" }}>
          <Text style={{ fontSize: 20, fontWeight: 700 }}>Thẻ của tôi</Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <ImageBackground
          source={require("../image/Rectangle 68.png")}
          style={{ width: "351px", height: "273px" }}
        >
          <View style={{ marginLeft: "20px", marginTop: "20px" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Thẻ tín dụng</Text>
          </View>

          <View style={{ marginTop: "30px", marginLeft: "30px" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>
              Quý khách chưa có thẻ tín dụng Mở thẻ ngây nhận ưu đãi
            </Text>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <View
              style={{
                width: "284px",
                borderWidth: "1px",
              }}
            ></View>
          </View>

          <View style={{ flexDirection: "row", marginTop: "20px" }}>
            <Image
              source={require("../image/iconoir_new-tab.png")}
              style={{ width: "60px", height: "60px", marginLeft: "20px" }}
            ></Image>

            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: "#053684",
                  marginLeft: "30px",
                }}
              >
                Mở Thẻ Mới
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <ImageBackground
          source={require("../image/Rectangle 68.png")}
          style={{ width: "351px", height: "81px", flexDirection: "row" }}
        >
          <View style={{ marginLeft: "20px", marginTop: "20px" }}>
            <Text style={{ fontSize: 20, fontWeight: 700 }}>Thẻ ghi nợ </Text>
          </View>

          <Image
            source={require("../image/iconamoon_arrow-down-2.png")}
            style={{
              width: "30px",
              height: "30px",
              marginTop: "20px",
              marginLeft: "180px",
            }}
          ></Image>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}
