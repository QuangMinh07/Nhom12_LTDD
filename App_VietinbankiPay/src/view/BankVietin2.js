import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";

export default function BankVietin2({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("BankVietin");
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
            Xác nhận giao dịch
          </Text>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", marginLeft: "40px", marginTop: "20px" }}
      >
        <View>
          <Text
            style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
          >
            Từ tài khoản
          </Text>
        </View>
        <View style={{ marginLeft: "100px" }}>
          <TextInput placeholder="tiền"></TextInput>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", marginLeft: "40px", marginTop: "40px" }}
      >
        <View>
          <Text
            style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
          >
            Đến tài khoản
          </Text>
        </View>
        <View style={{ marginLeft: "100px" }}>
          <TextInput placeholder="tiền"></TextInput>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", marginLeft: "40px", marginTop: "40px" }}
      >
        <View>
          <Text
            style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
          >
            Số tiền
          </Text>
        </View>
        <View style={{ marginLeft: "100px" }}>
          <TextInput placeholder="tiền"></TextInput>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", marginLeft: "40px", marginTop: "40px" }}
      >
        <View>
          <Text
            style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
          >
            Nội dung
          </Text>
        </View>
        <View style={{ marginLeft: "100px" }}>
          <TextInput placeholder="tiền"></TextInput>
        </View>
      </View>

      <View
        style={{ flexDirection: "row", marginLeft: "40px", marginTop: "40px" }}
      >
        <View>
          <Text
            style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
          >
            Phương thức xác thực
          </Text>
        </View>
        <View style={{ marginLeft: "100px" }}>
          <TextInput placeholder="tiền"></TextInput>
        </View>
      </View>
      <View style={{ marginLeft: "40px", marginTop: "100px" }}>
        <Text
          style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
        >
          ! Vui lòng kiểm tra kỹ thông tin
        </Text>
      </View>

      <View style={{ marginLeft: "40px", marginTop: "20px" }}>
        <Text style={{ fontSize: "15px", fontWeight: "bold", color: "Black" }}>
          Mã nhận giao dịch bằng hình thức Soft OTP của quý khách hiển thị dưới
          đây :
        </Text>
      </View>

      <View style={{ marginLeft: "40px", marginTop: "20px" }}>
        <Text style={{ fontSize: "15px", fontWeight: "bold", color: "Black" }}>
          Thời gian hiệu lực : 15s
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <View
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
            style={{ fontSize: "30px", fontWeight: "bold", color: "#053684" }}
          >
            1 2 3 4 5 6 7 8 9
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
        <Pressable
          onPress={() => {
            navigation.navigate("Result");
          }}
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
            Xác thực & hoàn tất
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}