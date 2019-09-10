import React, { Component } from "react";
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
import Likecom from './like'
import Channel from "./Channel"
import ReleatedVido from "./Releated"
import { connect } from "react-redux"
import { Like } from "../action/index"
class Playvideo extends Component {
  componentDidMount() {
    this.props.Like(this.props.navigation.state.params.id)
  }
  render() {

    return (
      <View>
        <View style={{ height: 300 }}>
          <WebView
            originWhitelist={["*"]}
            javaScriptEnabled={true}
            source={{
              uri:
                "https://www.youtube.com/embed/" +
                this.props.navigation.state.params.id
            }}
            style={{ borderWidth: 2, borderColor: "white" }}
          />
        </View>
        <Likecom />
        <Channel channelId={this.props.navigation.state.params.channelid} />
        <ReleatedVido />

      </View>
    );
  }
}

export default connect(null, { Like })(Playvideo)