import React, { Component } from "react";
import { getdata } from "../action";
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
import Video from "react-native-video";
import Icon from "react-native-vector-icons/MaterialIcons";
import { connect } from "react-redux";
class Home extends Component {

  componentDidMount() {
    this.props.getdata();
  }
  render() {
    const resp = this.props.data.map((res, i) => {
      return (
        <View style={{ flex: 1, backgroundColor: "#121212" }} key={i}>
          <View
            style={{
              height: 80,
              width: "100%",
              backgroundColor: "black",
              flexDirection: "row"
            }}
          >
            <View
              style={{
                height: 60,
                width: "15%",
                backgroundColor: "red",
                borderRadius: 100,
                margin: 5,
                overflow: "hidden"
              }}
            >

              <Image
                source={{ uri: res.snippet.thumbnails.high.url }}
                style={{ height: "100%", width: "100%" }}
              />
            </View>
            <Text
              style={{
                margin: 15,
                width: "65%",
                fontWeight: "bold",
                color: "#ffff"
              }}
            >
              {res.snippet.title}
            </Text>
            <Icon
              name="more-vert"
              size={28}
              style={{ color: "#fff", width: "10%", margin: 12 }}
            />
          </View>
          <TouchableOpacity
            onPress={() => { this.props.navigation.navigate("Playvideoscreen", { id: res.id.videoId, channelid: res.snippet.channelId }) }}>
            <Image
              source={{ uri: res.snippet.thumbnails.high.url }}
              style={{ height: 300 }}

            />
          </TouchableOpacity>
          {/* <WebView
            originWhitelist={["*"]}
            javaScriptEnabled={true}
            source={{ uri: "https://www.youtube.com/embed/"+res.id.videoId }}
            style={{ height: 300, borderWidth: 2, borderColor: "white" }}
          /> */}
        </View>
      );
    });
    return (
      <View style={{ flex: 1, backgroundColor: "#121212" }}>
        <StatusBar backgroundColor={"blue"} barStyle={"light-content"} />
        <ScrollView>{resp}</ScrollView>
      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state,
  }

};
export default connect(
  mapStateToProps,
  { getdata }
)(Home);
