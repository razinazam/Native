import React from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity
} from "react-native";
import Playvideoscreen from "../screen/Playvideo";
import { createAppContainer, createStackNavigator } from "react-navigation";
import { BottomTabNavigator } from "./BottomtabNavigator";
import Header from "../screen/Header"
// import Model from "../screen/Model"
export const AppContainer = createAppContainer(
  createStackNavigator(
    {
      BottomTabNavigator: BottomTabNavigator,
      Playvideoscreen: {
        screen: Playvideoscreen
      },

    },
    {
      defaultNavigationOptions: ({ navigation }) => {
        return {
          headerStyle: {
            backgroundColor: "black",
            borderWidth: 0
          },
          headerLeft: (
            <Image
              source={{
                uri:
                  "https://raw.githubusercontent.com/Chandankkrr/react-native-youtube-ui/master/assets/images/yt_logo_rgb_dark.png"
              }}
              style={{ height: 22, width: 98, marginLeft: 10 }}
            />
          ),
          headerRight: (
            <Header />
          )
        }
      }
    }
  )
);
