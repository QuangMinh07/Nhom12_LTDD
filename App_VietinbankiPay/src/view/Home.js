import {
  View,
  Text,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  FlatList,
} from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

export default function Home({ navigation }) {
  const arr = [
    {
      image1: require("../image/fluent_lottery-20-regular.png"),
      name1: "Đặt vé xổ số",
    },
    {
      image1: require("../image/noto_popcorn.png"),
      name1: "Mua vé xem phim",
    },
    {
      image1: require("../image/mingcute_sticker-line.png"),
      name1: "Đặt sân Golf/Mua đồ Golf",
    },
    {
      image1: require("../image/icon-park-outline_shopping.png"),
      name1: "Mua sắm VnShop",
    },
  ];
  const arr1 = [
    {
      image2: require("../image/fluent-emoji-flat_admission-tickets.png"),
    },
    {
      image2: require("../image/maki_shoe.png"),
    },
    {
      image2: require("../image/noto-v1_ferris-wheel.png"),
    },
    {
      image2: require("../image/ph_dots-three-bold.png"),
    },
  ];
  const arr2 = [
    {
      image3: require("../image/clarity_plane-line.png"),
      name2: "Đặt vé máy bay",
    },
    {
      image3: require("../image/fluent-emoji-flat_hotel.png"),
      name2: "Đặt phòng khách sạn",
    },
    {
      image3: require("../image/xe.png"),
      name2: "VNPAY Taxi",
    },
    {
      image3: require("../image/emojione-monotone_ship.png"),
      name2: "Đặt vé tàu",
    },
  ];
  const arr3 = [
    {
      image4: require("../image/mdi_bus.png"),
      name3: "Đặt vé xe",
    },
  ];
  const arr4 = [
    {
      image5: require("../image/mdi_truck-delivery.png"),
      name4: "Giao hàng",
    },
  ];
  const arr5 = [
    {
      image6: require("../image/cil_medical-cross.png"),
      name5: "Mua bảo hiểm",
    },
    {
      image6: require("../image/bi_file-medical.png"),
      name5: "Đặt lịch khám sức khỏe",
    },
    {
      image6: require("../image/medical-icon_medical-records.png"),
      name5: "Đặt chỗ tiêm vacxin",
    },
    {
      image6: require("../image/fluent-emoji-flat_medical-symbol.png"),
      name5: "Bác sĩ gia đình",
    },
  ];
  return (
    <ScrollView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../image/th.jpg")}
        style={{ width: "428px", height: "249px" }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <Text
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: "20px",
              marginLeft: "20px",
              fontWeight: 700,
            }}
          >
            VietinBankiPay
          </Text>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                width: 60,
                height: 60,
                borderColor: "#333",
                borderWidth: 2,
                borderRadius: 90,
                borderColor: "#116CF5",
                marginTop: "15px",
                marginLeft: "130px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../image/quà.png")}
                style={{ width: "34px", height: "35px" }}
              ></Image>
            </View>

            <Pressable
              onPress={() => {
                navigation.navigate("Search");
              }}
              style={{
                width: 60,
                height: 60,
                borderColor: "#333",
                borderWidth: 2,
                borderRadius: 90,
                borderColor: "#116CF5",
                marginTop: "15px",
                marginLeft: "10px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("../image/material-symbols_search.png")}
                style={{ width: "34px", height: "35px" }}
              ></Image>
            </Pressable>
          </View>
        </View>

        <View style={{ flex: 3, flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Login");
            }}
            style={{
              width: 170,
              height: 60,
              borderColor: "#333",
              borderWidth: 2,
              borderRadius: 15,
              borderColor: "#116CF5",
              marginTop: "25px",
              marginLeft: "80px",
              backgroundColor: "#116CF5",
              flexDirection: "row",
            }}
          >
            <Image
              source={require("../image/clarity_lock-line.png")}
              style={{
                width: "29px",
                height: "34px",
                marginLeft: "30px",
                marginTop: "10px",
              }}
            ></Image>
            <Text
              style={{
                marginLeft: "15px",
                marginTop: "15px",
                color: "white",
                fontSize: "15px",
                fontWeight: "bold",
                fontWeight: 700,
              }}
            >
              Đăng nhập
            </Text>
          </Pressable>
          <View
            style={{
              width: 80,
              height: 80,
              borderColor: "#333",
              borderWidth: 2,
              borderRadius: 90,
              borderColor: "#116CF5",
              marginTop: "15px",
              marginLeft: "-220px",
              backgroundColor: "#BAB5B5",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 40, fontWeight: 700 }}>KN</Text>
          </View>
        </View>
      </ImageBackground>

      <View
        style={{
          width: "281px",
          height: "66px",
          borderRadius: "10px",
          backgroundColor: "#FFFBFB",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          marginLeft: "70px",
          marginTop: "-35px",
        }}
      >
        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            source={require("../image/et_wallet.png")}
            style={{ width: "38px", height: "32px" }}
          ></Image>
          <Text style={{ fontSize: "15px", fontWeight: "Medium" }}>
            Tài khoản
          </Text>
        </View>

        <View
          style={{
            height: "66px",
            borderWidth: "1px",
            borderColor: "#DDDDDD",
          }}
        ></View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("Card");
            }}
          >
            <Image
              source={require("../image/solar_card-2-line-duotone.png")}
              style={{ width: "38px", height: "32px" }}
            ></Image>
          </Pressable>
          <Text style={{ fontSize: "15px", fontWeight: "Medium" }}>
            Dịch vụ thẻ
          </Text>
        </View>

        <View
          style={{
            height: "66px",
            borderWidth: "1px",
            borderColor: "#DDDDDD",
          }}
        ></View>

        <View style={{ flexDirection: "column", alignItems: "center" }}>
          <Image
            source={require("../image/heroicons_qr-code.png")}
            style={{ width: "38px", height: "32px" }}
          ></Image>
          <Text style={{ fontSize: "15px", fontWeight: "Medium" }}>QR Pay</Text>
        </View>
      </View>

      <Text
        style={{
          fontSize: "15px",
          fontWeight: 700,
          marginLeft: "20px",
          marginTop: "10px",
        }}
      >
        Tính năng
      </Text>

      <View style={{ flex: 4 }}>
        <View style={{ flex: 2, flexDirection: "row", marginTop: "10px" }}>
          <View style={{ flexDirection: "column" }}>
            <View
              style={{
                width: "51px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "30px",
              }}
            >
              <Image
                source={require("../image/chuyentien.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View style={{ width: "95px", marginLeft: "20px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#116CF5",
                }}
              >
                Chuyển tiền & nhận tiền
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "51px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/icon-park_bill.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View style={{ width: "95px", marginLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#116CF5",
                }}
              >
                Thanh toán hóa đơn
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "51px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/noto_money-bag.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View style={{ width: "95px", marginLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#116CF5",
                }}
              >
                Dịch vụ vay & tín dụng
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "51px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/tabler_pig-money.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>
            <View style={{ width: "95px", marginLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#116CF5",
                }}
              >
                Dịch vụ tiết kiệm
              </Text>
            </View>
          </View>
        </View>

        <View style={{ flex: 2, flexDirection: "row", marginTop: "40px" }}>
          <View>
            <View
              style={{
                width: "51px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "30px",
              }}
            >
              <Image
                source={require("../image/bi_phone.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View style={{ width: "95px", marginLeft: "20px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#116CF5",
                }}
              >
                Nạp tiền điện thoại
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "51px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/basil_card-outline.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View style={{ width: "95px", marginLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#116CF5",
                }}
              >
                Mở thẻ mới
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "51px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/ph_flag.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View style={{ width: "95px", marginLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#116CF5",
                }}
              >
                Thuế & phí dịch vụ công
              </Text>
            </View>
          </View>

          <View>
            <View
              style={{
                width: "51px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#D9D9D9",
                alignItems: "center",
                justifyContent: "center",
                marginLeft: "20px",
              }}
            >
              <Image
                source={require("../image/bi_phone-fill.png")}
                style={{ width: "30px", height: "30px" }}
              ></Image>
            </View>

            <View style={{ width: "95px", marginLeft: "10px" }}>
              <Text
                style={{
                  fontSize: "13px",
                  fontWeight: "bold",
                  marginTop: "10px",
                  color: "#116CF5",
                }}
              >
                Xem Thêm
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: "15px",
            fontWeight: 700,
            marginLeft: "20px",
            marginTop: "50px",
          }}
        >
          Ưu đãi & khuyến mãi
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: "15px",
            color: "#1E50A0",
            marginLeft: "350px",
            textDecorationLine: "underline",
          }}
        >
          Xem tất cả
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <Image
          source={require("../image/Rectangle 46.png")}
          style={{ width: "164px", height: "162px" }}
        ></Image>
        <Image
          source={require("../image/Rectangle 47.png")}
          style={{ width: "164px", height: "162px" }}
        ></Image>
      </View>

      <View>
        <Text
          style={{
            fontSize: "15px",
            fontWeight: 700,
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          Mua sắm & giải trí
        </Text>
      </View>

      <View style={{ flexDirection: "row" }}>
        <FlatList
          data={arr}
          numColumns={2}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 3, marginLeft: "20px", marginTop: "20px" }}>
                <View
                  style={{
                    width: "51px",
                    height: "50px",
                    backgroundColor: "#FFFBFB",
                    borderRadius: "8px",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image1}
                    style={{ width: "40px", height: "40px" }}
                  ></Image>
                </View>
                <View style={{ width: "70px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      marginTop: "10px",
                      color: "#116CF5",
                    }}
                  >
                    {item.name1}
                  </Text>
                </View>
              </View>
            );
          }}
        ></FlatList>

        <View>
          <FlatList
            data={arr1}
            numColumns={2}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    width: "90px",
                    backgroundColor: "#D9D9D9",
                    height: "100px",
                  }}
                >
                  <View
                    style={{
                      marginLeft: "20px",
                      marginTop: "20px",
                    }}
                  >
                    <View
                      style={{
                        width: "51px",
                        height: "50px",
                        backgroundColor: "#FFFBFB",
                        borderRadius: "8px",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        source={item.image2}
                        style={{ width: "40px", height: "40px" }}
                      ></Image>
                    </View>
                  </View>
                </View>
              );
            }}
          ></FlatList>
          <View
            style={{
              width: "150px",
              marginLeft: "10px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                marginTop: "10px",
                color: "#116CF5",
                textAlign: "center",
              }}
            >
              Đặt vé sự kiện thể thao, khu vui chơi
            </Text>
          </View>
        </View>
      </View>

      <View>
        <Text
          style={{
            fontSize: "15px",
            fontWeight: 700,
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          Du lịch & vận chuyển
        </Text>
      </View>

      <View>
        <FlatList
          data={arr2}
          numColumns={4}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, marginLeft: "20px", marginTop: "20px" }}>
                <View
                  style={{
                    width: "51px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: "#FFFBFB",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image3}
                    style={{ width: "40px", height: "40px" }}
                  ></Image>
                </View>

                <View style={{ width: "70px", marginLeft: "-10px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      marginTop: "10px",
                      color: "#116CF5",
                      textAlign: "center",
                    }}
                  >
                    {item.name2}
                  </Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>

      <View style={{ flexDirection: "row", marginTop: "20px" }}>
        <FlatList
          data={arr3}
          numColumns={1}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, marginLeft: "20px" }}>
                <View
                  style={{
                    width: "51px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: "#FFFBFB",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image4}
                    style={{ width: "40px", height: "40px" }}
                  ></Image>
                </View>

                <View style={{ width: "70px", marginLeft: "-10px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      marginTop: "10px",
                      color: "#116CF5",
                      textAlign: "center",
                    }}
                  >
                    {item.name3}
                  </Text>
                </View>
              </View>
            );
          }}
        ></FlatList>

        <FlatList
          data={arr4}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, marginLeft: "30px" }}>
                <View
                  style={{
                    width: "51px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: "#FFFBFB",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image5}
                    style={{ width: "40px", height: "40px" }}
                  ></Image>
                </View>

                <View style={{ width: "70px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      marginTop: "10px",
                      color: "#116CF5",
                      textAlign: "center",
                    }}
                  >
                    {item.name4}
                  </Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>

      <View>
        <Text
          style={{
            fontSize: "15px",
            fontWeight: 700,
            marginLeft: "20px",
            marginTop: "10px",
          }}
        >
          Sức Khỏe & đời sống
        </Text>
      </View>

      <View>
        <FlatList
          data={arr5}
          numColumns={4}
          renderItem={({ item }) => {
            return (
              <View style={{ flex: 1, marginLeft: "20px", marginTop: "20px" }}>
                <View
                  style={{
                    width: "51px",
                    height: "50px",
                    borderRadius: "8px",
                    backgroundColor: "#FFFBFB",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Image
                    source={item.image6}
                    style={{ width: "40px", height: "40px" }}
                  ></Image>
                </View>

                <View style={{ width: "70px", marginLeft: "-10px" }}>
                  <Text
                    style={{
                      fontSize: "13px",
                      fontWeight: "bold",
                      marginTop: "10px",
                      color: "#116CF5",
                      textAlign: "center",
                    }}
                  >
                    {item.name5}
                  </Text>
                </View>
              </View>
            );
          }}
        ></FlatList>
      </View>

      <View
        style={{
          marginTop: "20px",
        }}
      >
        <Image
          source={require("../image/hinh-dai-dien-1.webp")}
          style={{ width: "428px", height: "249px" }}
        ></Image>
      </View>
    </ScrollView>
  );
}
