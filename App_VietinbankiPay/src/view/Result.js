import { View, Text, Image, TextInput, Pressable } from "react-native";
import React from "react";
import { ScrollView } from "react-native";

export default function Result({navigation}) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0C036E" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../image/mdi_home-outline.png")}
            style={{
              width: "22px",
              height: "25px",
              marginLeft: "40px",
              marginTop: "30px",
            }}
          ></Image>
        </Pressable>
        <View style={{ marginTop: "30px", marginLeft: "70px" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}>
            Kết quả giao dịch
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "345px",
            height: "590px",
            backgroundColor: "#FFFFFF",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: "20px", marginTop: "10px" }}>
              <Text
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#0C036E",
                }}
              >
                VietinBank
              </Text>
            </View>

            <Image
              source={require("../image/Ellipse 9.png")}
              style={{ width: "35px", height: "35px" }}
            ></Image>

            <View style={{ marginLeft: "30px", marginTop: "20px" }}>
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#676060",
                }}
              >
                08/11/2023
              </Text>
            </View>
          </View>

          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "30px",
            }}
          >
            <View
              style={{
                width: "330px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#A2F1AA",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1F9824",
                }}
              >
                Chuyển tiền thành công !
              </Text>
            </View>
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
                width: "351px",
                borderWidth: "1px",
                borderColor: "#CAC7C7",
              }}
            ></View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "40px",
              marginTop: "20px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#111010",
                }}
              >
                Từ tài khoản
              </Text>
            </View>
            <View style={{ marginLeft: "100px" }}>
              <TextInput placeholder="tiền"></TextInput>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "40px",
              marginTop: "40px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#111010",
                }}
              >
                Đến tài khoản
              </Text>
            </View>
            <View style={{ marginLeft: "100px" }}>
              <TextInput placeholder="tiền"></TextInput>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "40px",
              marginTop: "40px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#111010",
                }}
              >
                Số tiền
              </Text>
            </View>
            <View style={{ marginLeft: "100px" }}>
              <TextInput placeholder="tiền"></TextInput>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "40px",
              marginTop: "40px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#111010",
                }}
              >
                Nội dung
              </Text>
            </View>
            <View style={{ marginLeft: "100px" }}>
              <TextInput placeholder="tiền"></TextInput>
            </View>
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
                width: "351px",
                borderWidth: "1px",
                borderColor: "#CAC7C7",
              }}
            ></View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Image
              source={require("../image/Frame 9.png")}
              style={{ width: "299px", height: "106px" }}
            ></Image>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0C036E",
                }}
              >
                Tải về
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0C036E",
                }}
              >
                Chia sẻ
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("BankVietin");
          }}
          style={{
            width: "360px",
            height: "50px",
            borderRadius: "8px",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: "20px", fontWeight: "bold", color: "#0C036E" }}
          >
            Giao dich tiếp
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}