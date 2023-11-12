import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React from "react";

export default function Account({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../image/th.jpg")}
        style={{ width: "428px", height: "844px" }}
      >
        <View style={{ flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Image
              source={require("../image/Vector.png")}
              style={{
                width: "22px",
                height: "25px",
                marginLeft: "40px",
                marginTop: "30px",
              }}
            ></Image>
          </Pressable>
          <View style={{ marginTop: "30px", marginLeft: "120px" }}>
            <Text
              style={{ fontSize: "15px", fontWeight: "bold", color: "white" }}
            >
              Tài Khoản
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
              height: "411px",
              backgroundColor: "#FFF",
              borderRadius: "8px",
            }}
          >
            <View style={{ flexDirection: "row", marginTop: "20px" }}>
              <View style={{ marginLeft: "20px" }}>
                <Text
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Tài khoản thanh toán
                </Text>
              </View>

              <Image
                source={require("../image/iconamoon_arrow-down-2.png")}
                style={{ width: "30px", height: "30px", marginLeft: "80px" }}
              ></Image>
            </View>

            <View style={{ flexDirection: "row", marginTop: "20px" }}>
              <View style={{ marginLeft: "30px" }}>
                <Text
                  style={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  222,222,222 VND
                </Text>
              </View>

              <Image
                source={require("../image/ph_eye.png")}
                style={{ width: "30px", height: "30px", marginLeft: "80px" }}
              ></Image>
            </View>

            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <View style={{ width: "320px", borderWidth: "1px" }}></View>
            </View>

            <View
              style={{
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
                123456789
                <br />
                NGUYEN THI KIEU NGHI
                <br />
                Khả dụng : 222,222,222 VND
                <br />
              </Text>
            </View>

            <View style={{ marginTop: "20px" }}>
              <ImageBackground
                source={require("../image/Rectangle 10.png")}
                style={{ width: "351px", height: "170px" }}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <View
                    style={{
                      width: "301px",
                      height: "50px",
                      borderRadius: "15px",
                      backgroundColor: "#FFFFFF",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                          color: "#053684",
                          textAlign: "center",
                        }}
                      >
                        Mở số đẹp
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      width: "301px",
                      height: "50px",
                      borderRadius: "15px",
                      backgroundColor: "#FFFFFF",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "20px",
                    }}
                  >
                    <View>
                      <Text
                        style={{
                          fontSize: "15px",
                          fontWeight: "bold",
                          color: "#053684",
                          textAlign: "center",
                        }}
                      >
                        Đặt & quản lý Alias
                      </Text>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "351px",
                height: "50px",
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                marginTop: "20px",
                flexDirection: "row",
              }}
            >
              <View style={{ marginLeft: "20px" }}>
                <Text
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#053684",
                    textAlign: "center",
                  }}
                >
                  Tài khoản vay
                </Text>
              </View>

              <Image
                source={require("../image/iconamoon_arrow-down-2.png")}
                style={{ width: "30px", height: "30px", marginLeft: "145px" }}
              ></Image>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "351px",
                height: "50px",
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                marginTop: "20px",
                flexDirection: "row",
              }}
            >
              <View style={{ marginLeft: "20px" }}>
                <Text
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#053684",
                    textAlign: "center",
                  }}
                >
                  Tài khoản thẻ tín dụng
                </Text>
              </View>

              <Image
                source={require("../image/iconamoon_arrow-down-2.png")}
                style={{ width: "30px", height: "30px", marginLeft: "80px" }}
              ></Image>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "351px",
                height: "50px",
                borderRadius: "15px",
                backgroundColor: "#FFFFFF",
                alignItems: "center",
                marginTop: "20px",
                flexDirection: "row",
              }}
            >
              <View style={{ marginLeft: "20px" }}>
                <Text
                  style={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#053684",
                    textAlign: "center",
                  }}
                >
                  Trái phiếu Viettinbank
                </Text>
              </View>

              <Image
                source={require("../image/iconamoon_arrow-down-2.png")}
                style={{ width: "30px", height: "30px", marginLeft: "85px" }}
              ></Image>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
