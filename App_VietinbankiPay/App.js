import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Account,
  BankVietin,
  Card,
  Home,
  Invest,
  Login,
  Notice,
  Phonerecharge,
  Search,
  Store,
  User,
  BankVietin2,
  Transfer,
  Result,
} from "./src/view";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons, FontAwesome5 } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
function MyTabs() {
  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      background: "#fff",
    },
  };
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Trang chủ"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 80,
                  }}
                >
                  <FontAwesome
                    name="home"
                    size={30}
                    color={focused ? "#F06145" : "#111"}
                  />
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Thông báo"
        component={Notice}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "8px",
                    width: 100,
                  }}
                >
                  <Ionicons
                    name="ios-notifications-outline"
                    size={30}
                    color={focused ? "#F06145" : "black"}
                  />
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Cửa hàng"
        component={Store}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "8px",
                    width: 80,
                  }}
                >
                  <FontAwesome5
                    name="store"
                    size={30}
                    color={focused ? "#F06145" : "black"}
                  />
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Đầu tư"
        component={Invest}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    width: 80,
                  }}
                >
                  <FontAwesome
                    name="line-chart"
                    size={30}
                    color={focused ? "#F06145" : "black"}
                  />
                </View>
              </View>
            );
          },
        }}
      />

      <Tab.Screen
        name="Trang cá nhân"
        component={User}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <View style={{ alignItems: "center", justifyContent: "center" }}>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "10px",
                    width: 80,
                  }}
                >
                  <FontAwesome5
                    name="user-circle"
                    size={30}
                    color={focused ? "#F06145" : "black"}
                  />
                </View>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={MyTabs} />
        <Stack.Screen name="Notice" component={Notice} />
        <Stack.Screen name="Invest" component={Invest} />
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Store" component={Store} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Phonerecharge" component={Phonerecharge} />
        <Stack.Screen name="BankVietin" component={BankVietin} />
        <Stack.Screen name="BankVietin2" component={BankVietin2} />
        <Stack.Screen name="Transfer" component={Transfer} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
