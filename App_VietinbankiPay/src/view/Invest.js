import {
  View,
  Text,
  ImageBackground,
  Image,
  FlatList,
  ScrollView,
} from "react-native";
import React from "react";

export default function Invest() {
  const item = [
    {
      image: require("../image/openmoji_flag-united-states.png"),
      name: "USD",
      price1: "23,285",
      price2: "23,705",
    },
    {
      image: require("../image/openmoji_flag-european-union.png"),
      name: "EUR",
      price1: "24,969",
      price2: "26,259",
    },
    {
      image: require("../image/openmoji_flag-australia.png"),
      name: "AUD",
      price1: "171,07",
      price2: "180,62",
    },
    {
      image: require("../image/openmoji_flag-japan.png"),
      name: "JPY",
      price1: "15,421",
      price2: "16,121",
    },
    {
      image: require("../image/openmoji_flag-canada.png"),
      name: "CAD",
      price1: "17,052",
      price2: "17,752",
    },
  ];
  return (
    <ScrollView
      style={{
        flex: 1,
        width: "428px",
        backgroundColor: "white",
      }}
    >
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontSize: "20",
            fontWeight: "bold",
            fontWeight: 700,
            marginLeft: "15px",
            marginTop: "10px",
          }}
        >
          Đầu tư
        </Text>
        <View
          style={{
            width: "428px",
            borderColor: "black",
            borderWidth: "2px",
            marginTop: "10px",
          }}
        ></View>
      </View>
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={require("../image/Rectangle 10.png")}
          style={{ height: "308px", width: "428px", marginTop: "-35px" }}
        >
          <View style={{ flex: 1, flexDirection: "row" }}>
            <View
              style={{
                width: "60px",
                height: "58px",
                borderRadius: "6px",
                backgroundColor: "#BDBDBD",
                marginTop: "20px",
                marginLeft: "30px",
              }}
            >
              <Image
                source={require("../image/d1.png")}
                style={{
                  width: "38px",
                  height: "37px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></Image>
            </View>
            <View
              style={{
                width: "60px",
                height: "58px",
                borderRadius: "6px",
                backgroundColor: "#BDBDBD",
                marginLeft: "45px",
                marginTop: "20px",
              }}
            >
              <Image
                source={require("../image/d2.png")}
                style={{
                  width: "38px",
                  height: "37px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></Image>
            </View>
            <View
style={{
                width: "60px",
                height: "58px",
                borderRadius: "6px",
                backgroundColor: "#BDBDBD",
                marginLeft: "50px",
                marginTop: "20px",
              }}
            >
              <Image
                source={require("../image/d3.png")}
                style={{
                  width: "38px",
                  height: "37px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></Image>
            </View>
            <View
              style={{
                width: "60px",
                height: "58px",
                borderRadius: "6px",
                backgroundColor: "#BDBDBD",
                marginLeft: "45px",
                marginTop: "20px",
              }}
            >
              <Image
                source={require("../image/d4.png")}
                style={{
                  width: "38px",
                  height: "37px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></Image>
            </View>
          </View>
          <View style={{ flex: 1, flexDirection: "row", marginTop: "15px" }}>
            <Text
              style={{
                width: "98px",
                height: "60px",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#116CF5",
                textAlign: "center",
                marginLeft: "10px",
              }}
            >
              Chuyển tiền chứng khoán
            </Text>
            <Text
              style={{
                width: "98px",
                height: "60px",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#116CF5",
                textAlign: "center",
                marginLeft: "10px",
              }}
            >
              Kết nối tài khoản chứng khoán
            </Text>
            <Text
              style={{
                width: "98px",
                height: "60px",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#116CF5",
                textAlign: "center",
                marginLeft: "10px",
              }}
            >
              Mở tài khoản chứng khoán
            </Text>
            <Text
              style={{
                width: "98px",
                height: "60px",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#116CF5",
                textAlign: "center",
                marginLeft: "10px",
              }}
            >
              Giao dịch chứng khoán CTS
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View
              style={{
                width: "60px",
                height: "58px",
                borderRadius: "6px",
                backgroundColor: "#BDBDBD",
marginLeft: "30px",
              }}
            >
              <Image
                source={require("../image/d5.png")}
                style={{
                  width: "38px",
                  height: "37px",
                  marginTop: "10px",
                  marginLeft: "10px",
                }}
              ></Image>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                width: "100px",
                height: "60px",
                fontSize: "15px",
                fontWeight: "bold",
                color: "#116CF5",
                textAlign: "center",
                marginLeft: "10px",
              }}
            >
              Giao dịch chứng chỉ quỷ
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "black",
                marginLeft: "15px",
              }}
            >
              TỶ GIÁ
            </Text>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#116CF5",
                marginLeft: "280px",
                textDecorationLine: "underline",
              }}
            >
              Xem thêm
            </Text>
          </View>
        </ImageBackground>
      </View>
      <View style={{ flex: 7 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            marginTop: "210px",
          }}
        >
          <Text>Tiền tệ</Text>
          <Text>Mua</Text>
          <Text>Bán</Text>
        </View>
        <FlatList
          data={item}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flex: 3,
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: "8px",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Image
                    source={item.image}
                    style={{
                      height: "52px",
                      width: "55px",
                      resizeMode: "contain",
                    }}
                  />
                  <Text>{item.name}</Text>
                </View>
                <Text>{item.price1}</Text>
                <Text>{item.price2}</Text>
              </View>
            );
          }}
        ></FlatList>
      </View>
      <View style={{ flex: 1, alignItems: "center", marginTop: "20px" }}>
        <View
          style={{
            width: "333px",
            height: "39px",
            borderRadius: "10px",
            backgroundColor: "#116CF5",
alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{ fontSize: "15px", fontWeight: "bold", color: "#300BC3" }}
          >
            Chuyển đổi ngoại tệ
          </Text>
        </View>
      </View>
      <View style={{ flex: 2 }}>
        <ImageBackground
          source={require("../image/Rectangle 8.png")}
          style={{ width: "428px", height: "60px" }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "black",
                marginLeft: "15px",
              }}
            >
              LÃI SUẤT
            </Text>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#116CF5",
                marginLeft: "240px",
                textDecorationLine: "underline",
              }}
            >
              Xem thêm
            </Text>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}