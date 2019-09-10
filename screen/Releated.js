import React, { Component } from 'react'
import {
    View,
    Text,
    Image,
    StatusBar,
    SafeAreaView,
    TouchableOpacity,
    WebView,
    ScrollView
} from "react-native";
export default class Releated extends Component {
    render() {
        return (
            <View>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ width: "50%" }}>
                        <Image source={require("../assets/default.jpg")} style={{height:100,width:100}} />
                    </Text>
                    <Text style={{ width: "50%" }}>dsvsfdbb</Text>

                </View>
            </View>
        )
    }
}
