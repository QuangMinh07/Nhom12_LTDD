import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React from "react";

export default function User({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, alignContent: "center" }}>
      <ImageBackground
        source={require("../image/th.jpg")}
        style={{
          width: "428px",
          height: "84px",
          justifyContent: "center",
        }}
      >
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
              source={require("../image/Vector.png")}
              style={{ width: "22px", height: "25px" }}
            ></Image>
          </Pressable>
        </View>
      </ImageBackground>

      <View>
        <View
          style={{
            width: 80,
            height: 80,
            borderColor: "#333",
            borderWidth: 2,
            borderRadius: 90,
            borderColor: "#116CF5",
            marginTop: "-40px",
            marginLeft: "170px",
            backgroundColor: "#BAB5B5",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 40, fontWeight: 700 }}>KN</Text>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Text
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            fontWeight: 700,
          }}
        >
          Nguyen Thi Kieu Nghi
        </Text>

        <View style={{ marginTop: "10px" }}>
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              fontWeight: 700,
            }}
          >
            *****6806
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
            width: 170,
            height: 60,
            borderColor: "#333",
            borderWidth: 2,
            borderRadius: 15,
            borderColor: "#116CF5",
            backgroundColor: "#8ADFF1",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../image/clarity_lock-line.png")}
            style={{
              width: "35px",
              height: "34px",
            }}
          ></Image>

          <Pressable onPress={() => {
            navigation.navigate("Login");
          }}>
            <Text
              style={{
                color: "black",
                fontSize: "20px",
                fontWeight: "bold",
                fontWeight: 700,
                marginLeft: "10px",
              }}
            >
              Đăng nhập
            </Text>
          </Pressable>

        </View>
      </View>

      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <View
          style={{
            width: "380px",
            height: "60px",
            borderRadius: "15px",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../image/material-symbols_computer-outline.png")}
            style={{ width: "36px", height: "38px", marginLeft: "20px" }}
          ></Image>
          <View style={{ marginLeft: "20px" }}>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#053684",
              }}
            >
              Xác thực giao dịch từ kênh khác
            </Text>
          </View>
        </View>
      </View>

      <View style={{ marginTop: "20px", marginLeft: "20px" }}>
        <Text
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#676060",
          }}
        >
          Trợ giúp
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginLeft: "20px",
          }}
        >
          <View
            style={{
              width: "113px",
              height: "136px",
              borderRadius: "15px",
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/bi_phone.png")}
              style={{ width: "36px", height: "38px", marginLeft: "20px" }}
            ></Image>
            <View style={{ marginLeft: "20px", marginTop: "20px" }}>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#053684",
                  textAlign: "center",
                }}
              >
                Giới thiệu bạn bè
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginLeft: "20px",
          }}
        >
          <View
            style={{
              width: "113px",
              height: "136px",
              borderRadius: "15px",
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/bx_chat.png")}
              style={{ width: "36px", height: "38px", marginLeft: "20px" }}
            ></Image>
            <View style={{ marginLeft: "20px", marginTop: "20px" }}>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#053684",
                  textAlign: "center",
                }}
              >
                Câu hỏi thường gặp
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: "30px",
            marginLeft: "20px",
          }}
        >
          <View
            style={{
              width: "113px",
              height: "136px",
              borderRadius: "15px",
              backgroundColor: "#FFFFFF",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/mdi_internet.png")}
              style={{ width: "36px", height: "38px", marginLeft: "20px" }}
            ></Image>
            <View style={{ marginLeft: "20px", marginTop: "20px" }}>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#053684",
                  textAlign: "center",
                }}
              >
                Tiếng Việt/ Vietnamese
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 4,
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px",
        }}
      >
        <ImageBackground
          source={require("../image/Rectangle 16.png")}
          style={{ width: "365px", height: "160px" }}
        >
          <View style={{ flex: 1, marginLeft: "20px" }}>
            <Text
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "#053684",
              }}
            >
              Mạng lưới
            </Text>
          </View>

          <View style={{ flex: 1, marginLeft: "20px" }}>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#053684",
              }}
            >
              các Chi nhánh, Phòng giao dịch, ATM
            </Text>
          </View>

          <View style={{ flex: 2, marginLeft: "20px" }}>
            <View
              style={{
                width: "200px",
                height: "50px",
                borderRadius: "15px",
                backgroundColor: "#053684",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Xem bản đồ
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View
        style={{
          flex: 4,
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <ImageBackground
          source={require("../image/Rectangle 21.png")}
          style={{ width: "365px", height: "160px" }}
        >
          <View style={{ flex: 1, marginLeft: "20px" }}>
            <Text
              style={{
                fontSize: "25px",
                fontWeight: "bold",
                color: "#053684",
              }}
            >
              Hotline
            </Text>
          </View>

          <View style={{ flex: 1, marginLeft: "20px" }}>
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#053684",
              }}
            >
              hỗ trợ khách hàng
            </Text>
          </View>

          <View style={{ flex: 2, flexDirection: "row" }}>
            <View
              style={{
                width: "44px",
                height: "43px",
                borderRadius: "8px",
                backgroundColor: "#1E50A0",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/ph_phone.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View
              style={{
                width: "44px",
                height: "43px",
                borderRadius: "8px",
                backgroundColor: "#1E50A0",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/thu.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View
              style={{
                width: "44px",
                height: "43px",
                borderRadius: "8px",
                backgroundColor: "#1E50A0",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/pepicons-pencil_internet.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
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
        <Text
          style={{
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Phiên bản ứng dụng 5.5.5
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Text
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          2021 Bản quyền thuộc về Ngân hàng TMCP Công Thương Việt Nam
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          2021 Bản quyền thuộc về Ngân hàng TMCP Công Thương Việt Nam
        </Text>
      </View>
    </ScrollView>
  );
}
