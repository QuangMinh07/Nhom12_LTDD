import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import React from "react";

export default function Transfer({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#D8E0EC" }}>
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
        <View style={{ marginTop: "30px", marginLeft: "70px" }}>
          <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
            Chuyển & nhận tiền
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <Pressable
            onPress={() => {
              navigation.navigate("BankVietin");
            }}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/Ellipse 10.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </Pressable>
          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Chuyển trong ngân hàng
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/mdi_bank-transfer.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </View>

          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Chuyển liên ngân hàng
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/ant-design_stock-outlined.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </View>

          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Chuyển tiền chứng khoán
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/nimbus_gift-box.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </View>

          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Gửi tiền mừng
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/grommet-icons_currency.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </View>
          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Bán ngoại tệ
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/icon-park-outline_currency.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </View>

          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Mua bán ngoại tệ
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/heroicons_qr-code.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </View>

          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              24/7 mã QR
            </Text>
          </View>
        </View>

        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/icon-park-outline_healthy-recognition.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </View>

          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Qũy Vacxin
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "8px",
              alignItems: "center",
              marginLeft: "25px",
              backgroundColor: "#FFFFFF",
              marginTop: "30px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../image/simple-icons_westerndigital.png")}
              style={{ width: "50px", height: "50px" }}
            ></Image>
          </View>
          <View
            style={{
              width: "100px",
              marginLeft: "5px",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Western union
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            width: "185px",
            height: "55px",
            borderRadius: "15px",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            marginTop: "20px",
            flexDirection: "row",
            marginLeft: "20px",
          }}
        >
          <Image
            source={require("../image/solar_calendar-line-duotone.png")}
            style={{ width: "30px", height: "30px", marginLeft: "10px" }}
          ></Image>

          <View style={{ marginLeft: "10px" }}>
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Đặt lịch chuyển tiền
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "185px",
            height: "55px",
            borderRadius: "15px",
            backgroundColor: "#FFFFFF",
            alignItems: "center",
            marginTop: "20px",
            flexDirection: "row",
            marginLeft: "20px",
          }}
        >
          <Image
            source={require("../image/fa6-solid_down-left-and-up-right-to-center.png")}
            style={{ width: "30px", height: "30px", marginLeft: "10px" }}
          ></Image>

          <View style={{ marginLeft: "10px" }}>
            <Text
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                color: "#053684",
                textAlign: "center",
              }}
            >
              Cài đặt hạn mức
            </Text>
          </View>
        </View>
      </View>

      <View style={{ flexDirection: "row" }}>
        <View style={{ marginLeft: "20px", marginTop: "20px" }}>
          <Text
            style={{
              fontSize: "18px",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Người nhận gần đây
          </Text>
        </View>

        <View style={{ marginLeft: "150px", marginTop: "20px" }}>
          <Text
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              color: "#053684",
              textDecorationLine: "underline",
            }}
          >
            Xem tất cả
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "428px",
          height: "267px",
          backgroundColor: "#BCD8ED",
          marginTop: "20px",
        }}
      >
        <View
          style={{
            width: "428px",
            height: "90px",
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "90px",
              backgroundColor: "#D9D9D9",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <Text style={{ fontSize: "25px", fontWeight: "bold" }}>QM</Text>
          </View>

          <View style={{ marginTop: "40px", marginLeft: "-15px" }}>
            <Image
              source={require("../image/Ellipse 9.png")}
              style={{ width: "20px", height: "20px" }}
            ></Image>
          </View>

          <View style={{ marginLeft: "20px" }}>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              LÊ QUANG MINH (555555555)
            </Text>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              0123456789- Viettinbank
            </Text>
            <Text
              style={{ fontSize: "15px", fontWeight: "bold", color: "gray" }}
            >
              Giao dịch :11/08/2023
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "428px",
            height: "90px",
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "90px",
              backgroundColor: "#D9D9D9",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <Text style={{ fontSize: "25px", fontWeight: "bold" }}>QM</Text>
          </View>

          <View style={{ marginTop: "40px", marginLeft: "-15px" }}>
            <Image
              source={require("../image/Ellipse 9.png")}
              style={{ width: "20px", height: "20px" }}
            ></Image>
          </View>

          <View style={{ marginLeft: "20px" }}>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              LÊ QUANG MINH (555555555)
            </Text>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              0123456789- Viettinbank
            </Text>
            <Text
              style={{ fontSize: "15px", fontWeight: "bold", color: "gray" }}
            >
              Giao dịch :11/08/2023
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "428px",
            height: "90px",
            backgroundColor: "#FFFFFF",
            flexDirection: "row",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <View
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "90px",
              backgroundColor: "#D9D9D9",
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "20px",
            }}
          >
            <Text style={{ fontSize: "25px", fontWeight: "bold" }}>QM</Text>
          </View>

          <View style={{ marginTop: "40px", marginLeft: "-15px" }}>
            <Image
              source={require("../image/Ellipse 9.png")}
              style={{ width: "20px", height: "20px" }}
            ></Image>
          </View>

          <View style={{ marginLeft: "20px" }}>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              LÊ QUANG MINH (555555555)
            </Text>
            <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
              0123456789- Viettinbank
            </Text>
            <Text
              style={{ fontSize: "15px", fontWeight: "bold", color: "gray" }}
            >
              Giao dịch :11/08/2023
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}