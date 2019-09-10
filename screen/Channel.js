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
import { connect } from "react-redux"
import { ChanneId } from "../action/index"
import Icon from "react-native-vector-icons/AntDesign"
class Channel extends Component {
    componentDidMount() {
        this.props.ChanneId(this.props.channelId)
    }

    render() {
        const map = this.props.channelIdD.items.map((res, i) => {
            return (
                <React.Fragment key={i}>
                    <View style={{ height: 50, width: 50, borderRadius: 100, backgroundColor: "blue", overflow: "hidden", margin: 15 }}>
                        <Image source={{ uri: res.snippet.thumbnails.default.url }} style={{height:50,width:50}} />
                    </View>
                    <View style={{ padding: 15 }}>
                        <Text>{res.snippet.localized.title}</Text>
                        <Text>{res.statistics.subscriberCount}</Text>
                    </View>
                    <TouchableOpacity>
                        <View style={{ alignContent: "center", height: 20, width: 100, flexDirection: "row", marginTop: 20, }}>
                            <Icon name="youtube" size={20} style={{ color: "red" }} />
                            <Text style={{ color: "red" }}>Subscribe</Text>
                        </View>
                    </TouchableOpacity>
                </React.Fragment>
            )
        })
        return (
            <View style={{ flexDirection: "row", height: 80, width: "100%", justifyContent: "space-evenly", borderBottomColor: "grey", borderBottomWidth: 1 }}>
                {map}
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        channelIdD: state.channelIddata
    }
}
export default connect(mapStateToProps, { ChanneId })(Channel)