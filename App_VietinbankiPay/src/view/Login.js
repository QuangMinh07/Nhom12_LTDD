import {
  View,
  Text,
  ImageBackground,
  Image,
  Pressable,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Login({ navigation }) {
  var error = "";
  const [showPassword, setShowPassword] = useState(false);
  const [inputName, setInputName] = useState("0941432773");
  const [inputPass, setInputPass] = useState("07102002Minh@");
  const users = [
    { inputName: "0941432773", inputPass: "07102002Minh@" },
    { inputName: "user2", inputPass: "password2" },
    // Thêm thông tin đăng nhập khác tại đây
  ];
  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.inputName === inputName && user.inputPass === inputPass
    );
    console.log(foundUser);
    if (foundUser) {
      navigation.navigate("Home");
    } else {
      alert("Tên đăng nhập hoặc mật khẩu không chính xác");
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../image/th.jpg")}
        style={{ width: "428px", height: "840px" }}
      >
        <View style={{ flex: 3, flexDirection: "row" }}>
          <Pressable
            onPress={() => {
              navigation.goBack(); // quay trở về trang trước đó
            }}
          >
            <Image
              source={require("../image/Vector.png")}
              style={{
                width: "22px",
                height: "22px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            ></Image>
          </Pressable>
          <Text
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: "18px",
              marginLeft: "100px",
              fontWeight: 700,
            }}
          >
            VietinBankiPay
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: "-150px",
              marginLeft: "40px",
              fontWeight: 700,
            }}
          >
            Đăng nhập vào iPay
          </Text>
        </View>
        {/* Input */}
        <View style={{ flex: 4 }}>
          <View
            style={{
              width: "428px",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-200px",
            }}
          >
            {/* name */}
            <View
              style={{
                width: "428px",
                height: "82px",
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  placeholder="Tên đăng nhập"
                  value={inputName}
                  onChangeText={setInputName}
                  style={{
                    width: "200px",
                    height: "38px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#BABABA",
                    outlineStyle: "none",
                  }}
                ></TextInput>
                <Image
                  source={require("../image/1.png")}
                  style={{ width: "20px", height: "20px", marginLeft: "120px" }}
                ></Image>
              </View>
              <View style={{ width: "341px", borderWidth: "2px" }}></View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#BABABA",
                  marginTop: "10px",
                  marginLeft: "180px",
                }}
              >
                Quên tên đăng nhập?
              </Text>
              <Text style={{ color: "red", fontWeight: "bold" }}>
                {error != null ? error : ""}
              </Text>
            </View>
            {/* pas */}
            <View
              style={{
                width: "428px",
                height: "82px",
                marginTop: 24,
                alignItems: "center",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  placeholder="Mật khẩu"
                  value={inputPass}
                  onChangeText={setInputPass}
                  secureTextEntry={!showPassword}
                  style={{
                    width: "200px",
                    height: "38px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#BABABA",
                    outlineStyle: "none",
                  }}
                ></TextInput>
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={{ marginLeft: "120px" }}
                >
                  {showPassword == true ? (
                    <AntDesign name="eye" size={24} color="#116CF5" />
                  ) : (
                    <Entypo name="eye-with-line" size={24} color="#116CF5" />
                  )}
                </Pressable>
              </View>
              <View style={{ width: "341px", borderWidth: "2px" }}></View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#BABABA",
                  marginTop: "10px",
                  marginLeft: "220px",
                }}
              >
                Quên mật khẩu?
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 3,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "20px",
            marginTop: "-450px",
          }}
        >
          <Pressable
            onPress={handleLogin}
            style={{
              width: "350px",
              height: "50px",
              backgroundColor: "#FFFFFF",
              borderRadius: "5px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "blue",
                fontWeight: 700,
              }}
            >
              Đăng nhập
            </Text>
          </Pressable>
          <Pressable
            style={{
              width: "350px",
              height: "50px",
              backgroundColor: "#0C036E",
              borderRadius: "5px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "white",
                fontWeight: 700,
              }}
            >
              Chưa có tên đăng nhập/mật khẩu
            </Text>
          </Pressable>
        </View>
        <View style={{ flex: 2, flexDirection: "row" }}>
          <Pressable
            style={{
              width: 170,
              height: 60,
              borderColor: "#333",
              borderWidth: 2,
              borderRadius: 15,
              borderColor: "#116CF5",
              marginTop: "25px",
              marginLeft: "180px",
              backgroundColor: "#116CF5",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "white",
                fontWeight: 700,
                marginLeft: "20px",
              }}
            >
              Bạn cần hỗ trợ?
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
              marginLeft: "-20px",
              backgroundColor: "white",
            }}
          >
            <Image
              source={require("../image/2.png")}
              style={{
                width: 40,
                height: 40,
                marginTop: "18px",
                marginLeft: "18px",
              }}
            ></Image>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
