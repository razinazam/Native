import React, { Component } from "react";
import { createBottomTabNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "../screen/Home";
import Inboxscreen from "../screen/inbox";
import Librarscreen from "../screen/Library";
import Subscribescreen from "../screen/Subscription"
import Trendingscreen from "../screen/Trending"
export const BottomTabNavigator = createBottomTabNavigator(
{
  Homescreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: "Home",
      tabBarIcon: ({ tintColor, focused }) => {
        <Icon name="mail" size={20} style={{color:tintColor}} />;
      }
    }
},
Inboxscreen: {
  screen: Inboxscreen,
  navigationOptions: {
    tabBarLabel: "inbox",
    tabBarIcon: ({ tintColor, focused }) => {
      <Icon name="mail" size={20} style={{color:tintColor}} />;
    }
  }
},
Librarscreen: {
  screen: Librarscreen,
  navigationOptions: {
    tabBarLabel: "Library",
    tabBarIcon: ({ tintColor, focused }) => {
      <Icon name="mail" size={20} style={{color:tintColor}} />;
    }
  }
},
Subscribescreen: {
  screen: Subscribescreen,
  navigationOptions: {
    tabBarLabel: "Subscribe",
    tabBarIcon: ({ tintColor, focused }) => {
      <Icon name="mail" size={20} style={{color:tintColor}} />;
    }
  }
},
Trendingscreen: {
  screen: Trendingscreen,
  navigationOptions: {
    tabBarLabel: "Trending",
    tabBarIcon: ({ tintColor, focused }) => {
      <Icon name="mail" size={20} style={{color:tintColor}} />;
    }
  }
},
},
{
    tabBarOptions: {
      activeTintColor: "white",
      inactiveTintColor: "grey",
      style: {
        backgroundColor: "black",
        borderWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: "black",
        shadowOpacity: 0.5,
        elevation: 5,
        paddingVertical: 5
      }
    }
  }
);
