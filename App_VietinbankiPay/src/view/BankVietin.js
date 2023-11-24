import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";

export default function BankVietin({ navigation }) {
  const [soTien, setSoTien] = useState("");
  const [soTK, setSoTK] = useState("");
  const [tenTK, settenTK] = useState("");
  const [chuTK, setChuTK] = useState("012456789");
  const [tentk, setChuTk1] = useState("Nguyễn Thị Kiều Nghi");
  const [noiDung, setNoiDung] = useState("");
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
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>{chuTK} </Text>
        <Text style={{ fontSize: "20px", fontWeight: "bold" }}>{tentk} </Text>
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
          style={{
            width: "164px",
            height: "50px",
            fontSize: "20px",
            outlineStyle: "none",
          }}
          onChange={(tk) => setSoTK(tk.target.value)}
          value={soTK} 
          onChange1={(tk1) => setSoTK(tk1.target.value1)}
          value1={tenTK}
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
          onChange={(st) => setSoTien(st.target.value)}
          value={soTien}
          style={{
            width: "164px",
            height: "50px",
            fontSize: "20px",
            outlineStyle: "none",
          }}
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
        <View
          style={{
            marginTop: "20px",
            width: "100%",
            height: "50px",
          }}
        >
          <TextInput
            placeholder="Nội dung "
            onChange={(nd) => setNoiDung(nd.target.value)}
            value={noiDung}
            style={{
              width: "100%",
              height: "30px",
              fontSize: "20px",
              outlineStyle: "none",
            }}
          ></TextInput>
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
            navigation.navigate("BankVietin2", {
              soTK,
              chuTK,
              tentk,
              soTien,
              noiDung,
            });
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
