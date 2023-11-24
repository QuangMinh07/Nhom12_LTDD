import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";

export default function Result({ navigation }) {
  const [currentDay, setCurrentDay] = useState("");
  const rou = useRoute();
  useEffect(() => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    var hours = new Date().getHours();
    var minutes = new Date().getMinutes();
    setCurrentDay(
      hours + ":" + minutes + " ,  " + date + "/" + month + "/" + year
    );
    const apiUrl = "https://654ad3515b38a59f28ee4286.mockapi.io/bank1";

    // Dữ liệu để gửi lên API
    const transactionData = {
      chuTK: rou.params?.chuTK,
      tentk: rou.params?.tentk,
      soTK: rou.params?.soTK,
      soTien: rou.params?.soTien,
      noiDung: rou.params?.noiDung,
    };

    // Gửi yêu cầu POST đến API
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Thêm các header khác nếu cần
      },
      body: JSON.stringify(transactionData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu giao dịch gửi thành công:", data);
        // Xử lý logic sau khi gửi dữ liệu thành công
      })
      .catch((error) => {
        console.error("Lỗi khi gửi dữ liệu giao dịch:", error);
        // Xử lý lỗi
      });
  }, []);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#0C036E" }}>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../image/mdi_home-outline.png")}
            style={{
              width: "22px",
              height: "25px",
              marginLeft: "20px",
              marginTop: "30px",
            }}
          ></Image>
        </Pressable>
        <View style={{ marginTop: "30px", marginLeft: "70px" }}>
          <Text
            style={{ fontSize: "20px", fontWeight: "bold", color: "white" }}
          >
            Kết quả giao dịch
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <View
          style={{
            width: "355px",
            height: "590px",
            backgroundColor: "#FFFFFF",
            marginTop: "20px",
            borderRadius: "8px",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <View style={{ marginLeft: "20px", marginTop: "10px" }}>
              <Text
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  color: "#0C036E",
                }}
              >
                VietinBank
              </Text>
            </View>

            <Image
              source={require("../image/Ellipse 9.png")}
              style={{ width: "35px", height: "35px" }}
            ></Image>

            <View
              style={{
                marginLeft: "40px",
                width: "100px",
              }}
            >
              <Text
                style={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  color: "#676060",
                  textAlign: "center",
                }}
              >
                {currentDay}
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
                width: "330px",
                height: "50px",
                borderRadius: "8px",
                backgroundColor: "#A2F1AA",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#1F9824",
                }}
              >
                Chuyển tiền thành công !
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
                borderWidth: "1px",
                borderColor: "#CAC7C7",
              }}
            ></View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "40px",
              marginTop: "20px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#111010",
                }}
              >
                Từ tài khoản
              </Text>
            </View>
            <View style={{ marginLeft: "80px", flexDirection: "column" }}>
              <Text>{rou.params?.chuTK}</Text>
              <Text>{rou.params?.tentk}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "40px",
              marginTop: "40px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#111010",
                }}
              >
                Đến tài khoản
              </Text>
            </View>
            <View style={{ marginLeft: "70px" }}>
              <Text>{rou.params?.soTK}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "40px",
              marginTop: "40px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#111010",
                }}
              >
                Số tiền
              </Text>
            </View>
            <View style={{ marginLeft: "119px" }}>
              <Text>{rou.params?.soTien}</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginLeft: "40px",
              marginTop: "40px",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "15px",
                  fontWeight: "bold",
                  color: "#111010",
                }}
              >
                Nội dung
              </Text>
            </View>
            <View style={{ marginLeft: "100px", width: "135px" }}>
              <Text>{rou.params?.noiDung}</Text>
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
                borderWidth: "1px",
                borderColor: "#CAC7C7",
              }}
            ></View>
          </View>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <Image
              source={require("../image/Frame 9.png")}
              style={{ width: "299px", height: "106px" }}
            ></Image>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: "20px",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0C036E",
                }}
              >
                Tải về
              </Text>
            </View>

            <View>
              <Text
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#0C036E",
                }}
              >
                Chia sẻ
              </Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Pressable
          onPress={() => {
            navigation.navigate("BankVietin");
          }}
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
            style={{ fontSize: "20px", fontWeight: "bold", color: "#0C036E" }}
          >
            Giao dich tiếp
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
