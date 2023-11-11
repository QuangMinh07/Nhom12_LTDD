import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";
import React from "react";

export default function Store({navigation}) {
  return (
    <ScrollView>
      <ImageBackground
        source={require("../image/th.jpg")}
        style={{
          width: "428px",
          height: "200px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            marginLeft: "-250px",
            marginTop: "-10px",
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
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#FFFFFF",
              marginLeft: "20px",
            }}
          >
            Vị trí của bạn
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginLeft: "-200px",
            marginTop: "10px",
          }}
        >
          <Image
            source={require("../image/vitri.png")}
            style={{ width: "15px", height: "25px" }}
          ></Image>
          <Text
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: "#FFFFFF",
              marginLeft: "20px",
            }}
          >
            Chưa xác định
          </Text>
        </View>

        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <View
            style={{
              width: "390px",
              height: "47px",
              borderRadius: "20px",
              backgroundColor: "#D9D9D9",
              alignItems: "center",
              flexDirection: "row",
              marginTop: "40px",
            }}
          >
            <Text
              style={{
                fontSize: "15px",
                fontWeight: "bold",
                color: "#75737D",
                marginLeft: "10px",
              }}
            >
              Tìm kiếm theo thương hiệu ,địa chỉ ..
            </Text>
            <Image
              source={require("../image/tim1.png")}
              style={{ width: "30px", height: "30px", marginLeft: "10px" }}
            ></Image>
          </View>
        </View>
      </ImageBackground>

      <View>
        <Text
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#053684",
            marginLeft: "10px",
            marginTop: "20px",
          }}
        >
          TỪ KHÓA HOT
        </Text>
      </View>

      <View
        style={{
          width: "170px",
          height: "27px",
          borderRadius: "5px",
          backgroundColor: "#FFFFFF",
          borderWidth: "1px",
          marginLeft: "10px",
          marginTop: "30px",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#75737D",
            marginLeft: "10px",
          }}
        >
          Xác định vị trí
        </Text>
      </View>

      <View
        style={{
          width: "170px",
          height: "27px",
          borderRadius: "5px",
          backgroundColor: "#FFFFFF",
          borderWidth: "1px",
          marginLeft: "10px",
          marginTop: "30px",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#75737D",
            marginLeft: "10px",
          }}
        >
          Thương hiệu
        </Text>
      </View>

      <View>
        <Text
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#053684",
            marginLeft: "10px",
            marginTop: "40px",
          }}
        >
          GỢI Ý
        </Text>
      </View>

      <View
        style={{
          width: "428px",
          height: "40px",
          justifyContent: "center",
          marginLeft: "10px",
          marginTop: "15px",
        }}
      >
        <Text
          style={{
            fontSize: "15px",
            fontWeight: "bold",
            color: "#053684",
          }}
        >
          Quý khách có thể tìm kiếm theo thương hiệu ,địa chỉ ..
        </Text>
      </View>
    </ScrollView>
  );
}
