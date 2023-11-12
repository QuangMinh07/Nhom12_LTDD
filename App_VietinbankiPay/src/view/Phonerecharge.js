import {
  View,
  Text,
  ScrollView,
  Pressable,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React from "react";

export default function Phonerecharge({ navigation }) {
  const arr6 = [
    { number: "10,000" },
    { number: "20,000" },
    { number: "30,000" },
    { number: "50,000" },
    { number: "100,000" },
    { number: "200,000" },
    { number: "300,000" },
    { number: "500,000" },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../image/den.png")}
            style={{
              width: "22px",
              height: "25px",
              marginLeft: "40px",
              marginTop: "30px",
            }}
          ></Image>
        </Pressable>
        <View style={{ marginTop: "30px", marginLeft: "50px" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            Nạp tiền điện thoại
          </Text>
        </View>
      </View>

      <View style={{ marginTop: "20px", marginLeft: "50px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
          Nguồn thanh toán
        </Text>
      </View>
      <View style={{ marginLeft: "70px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>012456789 </Text>
      </View>
      <View style={{ marginLeft: "70px" }}>
        <Text
          style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
        >
          222,222,222 VND
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
          style={{ width: "351px", borderWidth: "1px", borderColor: "#CAC7C7" }}
        ></View>
      </View>

      <View style={{ marginTop: "20px", marginLeft: "50px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
          Đến số điện thoại
        </Text>
      </View>

      <View
        style={{
          marginLeft: "50px",
          marginTop: "20px",
          width: "164px",
          height: "50px",
        }}
      >
        <TextInput
          placeholder="Số điện thoại "
          style={{ width: "164px", height: "50px", fontSize: "20px" }}
        ></TextInput>
      </View>

      <View style={{ marginTop: "10px", marginLeft: "50px" }}>
        <Text
          style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
        >
          Bỏ trống để nạp cho mình: 01****5678
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
          style={{ width: "351px", borderWidth: "1px", borderColor: "#CAC7C7" }}
        ></View>
      </View>

      <View style={{ marginTop: "20px", marginLeft: "50px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>Mệnh giá</Text>
      </View>

      <FlatList
        data={arr6}
        numColumns={3}
        renderItem={({ item }) => {
          return (
            <View>
              <View
                style={{
                  width: "100px",
                  height: "71px",
                  borderRadius: "8px",
                  borderWidth: "1px",
                  marginLeft: "30px",
                  marginTop: "20px",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    color: "#0C036E",
                    fontSize: "20px",
                    fontWeight: "bold",
                  }}
                >
                  {item.number}
                </Text>
              </View>
            </View>
          );
        }}
      ></FlatList>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <Pressable
          style={{
            width: "360px",
            height: "50px",
            borderRadius: "8px",
            backgroundColor: "#1E50A0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
          >
            Tiếp tục
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
