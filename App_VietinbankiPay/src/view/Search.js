import { View, Text, ScrollView, ImageBackground, Image, Pressable } from "react-native";
import React from "react";

export default function Search({ navigation }) {
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require("../image/th.jpg")}
          style={{
            width: "428px",
            height: "84px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: "299px",
                height: "47px",
                borderRadius: "20px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <Image
                source={require("../image/tim1.png")}
                style={{ width: "30px", height: "30px", marginLeft: "20px" }}
              ></Image>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#75737D",
                  marginLeft: "10px",
                }}
              >
                Bạn đang muốn tìm gì?
              </Text>
            </View>
            <Pressable style={{ alignItems: "center", justifyContent: "center" }} onPress={() => {
              navigation.navigate("Home");
            }}>
              <Text style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#116CF5",
                marginLeft: "20px",
              }}
              >Thoát</Text>
            </Pressable>
          </View>
        </ImageBackground>
        <View>
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#053684",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            TỪ KHÓA HOT
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: "170px",
              height: "27px",
              borderRadius: "5px",
              backgroundColor: "#FFFFFF",
              borderWidth: "1px",
              marginLeft: "10px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#75737D",
                marginLeft: "10px",
              }}
            >
              Xác thực khuôn mặt
            </Text>
          </View>
          <View
            style={{
              width: "170px",
              height: "27px",
              borderRadius: "5px",
              backgroundColor: "#FFFFFF",
              borderWidth: "1px",
              marginLeft: "10px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#75737D",
                marginLeft: "10px",
              }}
            >
              Chuyển tiền nhanh
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              width: "170px",
              height: "27px",
              borderRadius: "5px",
              backgroundColor: "#FFFFFF",
              borderWidth: "1px",
              marginLeft: "10px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#75737D",
                marginLeft: "10px",
              }}
            >
              Miễn phí
            </Text>
          </View>
          <View
            style={{
              width: "170px",
              height: "27px",
              borderRadius: "5px",
              backgroundColor: "#FFFFFF",
              borderWidth: "1px",
              marginLeft: "10px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#75737D",
                marginLeft: "10px",
              }}
            >
              Chuyển tiền nhanh
            </Text>
          </View>
        </View>

        <View>
          <View
            style={{
              width: "250px",
              height: "27px",
              borderRadius: "5px",
              backgroundColor: "#FFFFFF",
              borderWidth: "1px",
              marginLeft: "10px",
              marginTop: "20px",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#75737D",
                marginLeft: "10px",
              }}
            >
              Ngân hàng số 1 Việt Nam
            </Text>
          </View>
        </View>

        <View>
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#053684",
              marginLeft: "10px",
              marginTop: "20px",
            }}
          >
            GỢI Ý
          </Text>
        </View>

        <View
          style={{
            width: "428px",
            height: "40px",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: "10px",
            marginTop: "20px",
          }}
        >
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#053684",
            }}
          >
            Quý khách có thể tìm kiếm chức năng, tên ngân hàng, đối tác thanh
            toán hóa đơn...
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}
