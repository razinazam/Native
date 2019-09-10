import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  WebView,
  ScrollView,
  TextInput,
  Button
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { getdata } from "../action/index"
import { connect } from "react-redux";

class Header extends Component {
  state = {
    auth: true,
    query: "",
  };
  onclick = () => {
    this.setState({
      auth: false
    });
  };
  handelChange = (value) => {
    this.setState({
      query: value
    })
  }
  onhandelclick=()=>{
    this.props.getdata(this.state.query)
  }
  render() {
    
      
    return this.state.auth == true ? (
      <View style={{ flexDirection: "row", marginRight: 10 }}>
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Icon name="cast" size={25} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Icon name="videocam" size={25} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.onclick}
          style={{ paddingHorizontal: 15 }}
        >
          <Icon name="search" size={25} color={"#fff"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ paddingHorizontal: 15 }}>
          <Icon name="account-circle" size={25} color={"#fff"} />
        </TouchableOpacity>
      </View>
    ) : (
        <View style={{ flexDirection: "row", width: 250 }}>
          <TextInput
            onChangeText={(text) => this.handelChange(text)}
            placeholder="search"
            style={{ borderWidth: 1, borderColor: "black", width: 200, color: "#fff" }}
          />
          <TouchableOpacity onPress={this.onhandelclick} style={{ backgroundColor: "black" }}>
            <Text style={{ color: "#000", backgroundColor: "#fff", width: 100, padding: 10 }}>Serach</Text>
          </TouchableOpacity>
        </View>
      );
  }
} 
const mapStateToProps = (state) => {
  return state
}
export default connect(mapStateToProps, { getdata })(Header)