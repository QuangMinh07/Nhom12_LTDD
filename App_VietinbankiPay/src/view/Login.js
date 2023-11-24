import React, { useState } from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  TextInput,
  Pressable,
  Image
} from "react-native";

export default function Login({ navigation }) {
  var error = "";
  const [inputPass, setInputPass] = useState("24032002Nghi@");
  const [inputName, setInputName] = useState("0396356806");
  const [showPassword, setShowPassword] = useState(false);
  const user = [
    { inputName: "0396356806", inputPass: "24032002Nghi@" },
  ];
  const Login = () => {
    const User = user.find(
      (user) => user.inputName === inputName && user.inputPass === inputPass
    );
    console.log(User);
    if (User) {
      navigation.navigate("Home");
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  };
  return (
    <ScrollView>
      <ImageBackground
        source={require("../image/th.jpg")}
        style={{ width: "428px", height:"800px" }}
      >
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View>
            <Image
              source={require("../image/Vector.png")}
              style={{
                width: "22px",
                height: "22px",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            ></Image>
          </View>
          <Text
            style={{
              fontSize: "20px",
              color: "white",
              marginTop: "18px",
              marginLeft: "100px",
              fontWeight: "bold",
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
              marginTop: "-200px",
              marginLeft: "45px",
              fontWeight: "bold",
            }}
          >
            Đăng nhập vào iPay
          </Text>
        </View>

        <View style={{ flex: 4 }}>
          <View
            style={{
              width: "458px",
              height: 200,
              justifyContent: "center",
              alignItems: "center",
              marginTop: "-200px",
            }}
          >
            <View
              style={{
                width: "458px",
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
              <View style={{ width: "350px", borderWidth: "1px" }}></View>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#BABABA",
                  marginTop: "10px",
                  marginLeft: "180px",
                }}
              >
                Quên tên đăng nhập ?
              </Text>
            </View>

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
                    <AntDesign name="eye" size={20} color="#116CF5" />
                  ) : (
                    <Entypo name="eye-with-line" size={20} color="#116CF5" />
                  )}
                </Pressable>
              </View>
              <View style={{ width: "350px", borderWidth: "1px" }}></View>
              <Text
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  color: "#BABABA",
                  marginTop: "10px",
                  marginLeft: "220px",
                }}
              >
                Quên mật khẩu ?
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
            onPress={Login}
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
              marginTop: "40px",
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
          <View
            style={{
              width: 170,
              height: 60,
              borderColor: "#333",
              borderWidth: 2,
              borderRadius: 15,
              borderColor: "#0C036E",
              marginTop: "25px",
              marginLeft: "180px",
              backgroundColor: "#0C036E",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "white",
                fontWeight: "bold",
                marginLeft: "20px",
              }}
            >
              Bạn cần hỗ trợ?
            </Text>
          </View>
          <View
            style={{
              width: "80px",
              height: "80px",
              borderColor: "#333",
              borderWidth: "2px",
              borderRadius: "90px",
              borderColor: "#116CF5",
              marginTop: "15px",
              marginLeft: "-20px",
              backgroundColor: "white",
            }}
          >
            <Image
              source={require("../image/2.png")}
              style={{
                width: "30px",
                height: "30px",
                marginTop: "20px",
                marginLeft: "23px",
              }}
            ></Image>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
}
