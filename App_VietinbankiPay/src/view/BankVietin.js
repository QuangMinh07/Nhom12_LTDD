import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React from "react";

export default function BankVietin({ navigation }) {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Transfer");
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
            Chuyển trong ViettinBank
          </Text>
        </View>
      </View>

      <View style={{ marginTop: "20px", marginLeft: "50px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
          Từ tài khoản
        </Text>
      </View>
      <View style={{ marginLeft: "70px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>012456789 </Text>
      </View>
      <View style={{ marginLeft: "70px" }}>
        <Text
          style={{ fontSize: "15px", fontWeight: "bold", color: "#676060" }}
        >
          222,222,222 VND
        </Text>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <View
          style={{ width: "351px", borderWidth: "1px", borderColor: "#CAC7C7" }}
        ></View>
      </View>

      <View style={{ flexDirection: "row", marginTop: "20px" }}>
        <Image
          source={require("../image/icon-park-outline_protect.png")}
          style={{
            width: "30px",
            height: "30px",
            marginLeft: "40px",
          }}
        ></Image>
        <View style={{ marginLeft: "20px" }}>
          <Text
            style={{ fontSize: "15px", fontWeight: "bold", color: "#116CF5" }}
          >
            TKTT được Bảo hiểm VBI bảo vệ rủi ro
          </Text>
        </View>
      </View>

      <View style={{ marginTop: "20px", marginLeft: "50px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
          Đến tài khoán
        </Text>
      </View>

      <View
        style={{
          marginLeft: "50px",
          marginTop: "20px",
          width: "164px",
          height: "50px",
        }}
      >
        <TextInput
          placeholder="Số tài khoản "
          style={{ width: "164px", height: "50px", fontSize: "20px" }}
        ></TextInput>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <View
          style={{ width: "351px", borderWidth: "1px", borderColor: "#CAC7C7" }}
        ></View>
      </View>

      <View
        style={{
          marginLeft: "50px",
          marginTop: "20px",
          width: "164px",
          height: "50px",
        }}
      >
        <TextInput
          placeholder="Số tiền "
          style={{ width: "164px", height: "50px", fontSize: "20px" }}
        ></TextInput>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <View
          style={{ width: "351px", borderWidth: "1px", borderColor: "#CAC7C7" }}
        ></View>
      </View>

      <View style={{ marginTop: "20px", marginLeft: "50px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
          Thời gian chuyển
        </Text>
      </View>

      <View
        style={{ flexDirection: "row", marginTop: "20px", marginLeft: "30px" }}
      >
        <View style={{ marginLeft: "20px" }}>
          <Text style={{ fontSize: "25px", color: "Black" }}>Ngay lập tức</Text>
        </View>
        <Image
          source={require("../image/iconamoon_arrow-down-2.png")}
          style={{
            width: "30px",
            height: "30px",
            marginLeft: "200px",
          }}
        ></Image>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <View
          style={{ width: "351px", borderWidth: "1px", borderColor: "#CAC7C7" }}
        ></View>
      </View>

      <View style={{ marginTop: "20px", marginLeft: "50px" }}>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>
          Nội dung chuyển khoản
        </Text>
      </View>

      <View
        style={{ flexDirection: "row", marginTop: "20px", marginLeft: "30px" }}
      >
        <View style={{ marginLeft: "20px" }}>
          <Text
            style={{ fontSize: "20px", color: "Black", fontWeight: "bold" }}
          >
            NGUYEN THI KIEU NGHI chuyen tien
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
          style={{ width: "351px", borderWidth: "1px", borderColor: "#CAC7C7" }}
        ></View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("BankVietin2");
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
            Tiếp tục
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}