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
import Ionicons from "react-native-vector-icons/Ionicons"
import Icon from "react-native-vector-icons/AntDesign"
class Likecomponent extends Component {
    render() {
        let res = this.props.channellist.items.map((res, i) => {
            return (
                <React.Fragment key={i}>
                    <View style={{ flexDirection: "row", width: "100%", height: 100, flexWrap: "wrap" }}>
                        <Text style={{ width: "70%", fontSize: 20, padding: 10, fontWeight: "bold" }}>KIJviowjbiovejivjeifvjfiojbijefoibjoiejvjnjvjijvijvjv</Text>
                        <TouchableOpacity style={{ width: "10%", marginLeft: 70, marginTop: 20 }}>
                            <Icon name="caretdown" style={{ fontSize: 15, color: "grey" }} />
                        </TouchableOpacity>
                        <Text style={{ color: "grey", paddingLeft: 15 }}>Views({res.statistics.viewCount})</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", height: 100, width: "100%", borderBottomWidth: 1, borderBottomColor: "grey", justifyContent: "space-evenly" }}>
                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <Icon name="like2" size={30} />
                            <Text>{res.statistics.likeCount}</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <Icon name="dislike2" size={30} />
                            <Text>{res.statistics.dislikeCount}</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <Ionicons name="md-share-alt" size={30} />
                            <Text>1.3k</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <Icon name="download" size={30} />
                            <Text>Download</Text>
                        </View>
                        <View style={{ justifyContent: "center", alignItems: "center", }}>
                            <Icon name="save" size={30} />
                            <Text>save</Text>
                        </View>
                    </View>
                </React.Fragment>
            )
        })
        return (
            <View>
                {res}
            </View>
        )
    }
}
const matStateToProps = (state) => {
    return {
        ...state,
        channellist: state.channeldata
    }
}
export default connect(matStateToProps)(Likecomponent)