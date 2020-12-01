import React from 'react';
import { View, Text, TextInput, StatusBar, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../utils/Colors"
import FontStyles from "../utils/FontStyles"
import { AntDesign, FontAwesome } from "@expo/vector-icons"

import Home from "./Home"
import Events from "./Events"
import CampusNet from "./CampusNet"
import Search from "./Search"
import Announcements from "./Announcements"

const iconSize = 22
const iconColor = Colors.primary2
const selectedColor = Colors.primary1
const SCREEN_WIDTH = Dimensions.get("screen").width
const SCREEN_HEIGHT = Dimensions.get("screen").height

export default class MainScreen extends React.PureComponent {
  constructor(props){
    super(props)


    this.state = {
      selectedTabIndex: 0
    }
  } 

  onPressTab = (index) => {
    this.mainScroll.scrollTo({x: SCREEN_WIDTH*index, y: 0, animated: false})
    this.setState({selectedTabIndex: index})
  }

  tabbar = () => {
    return (
      <View style={styles.tabContainer}>
        {
          ["home", "bullhorn", "comment-o", "calendar-o", "search"].map((item, index) => {
            return (
              <TouchableOpacity style={styles.tabButton} onPress={() => this.onPressTab(index)}>
                <FontAwesome name={item} size={iconSize} color={this.state.selectedTabIndex === index ? selectedColor : iconColor}/>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }
  render() {
    
    return (
      <View style={styles.container}>
        <StatusBar animated barStyle="light-content" />
        <ScrollView
          ref={ref => this.mainScroll = ref}
          style={{flex: 1}}
          contentContainerStyle={{}}
          horizontal
          pagingEnabled
          scrollEnabled={false}
        >
          <Home
            navigation={this.props.navigation}
          />
          <Announcements/>
          <CampusNet
            navigation={this.props.navigation}
          />
          <Events/>
          <Search/>
        </ScrollView>
        {this.tabbar()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    width: SCREEN_WIDTH,
    height: 50,
    flexDirection: "row",
    borderTopWidth: 1,
    borderColor: Colors.black6
  },
  tabButton: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: "center",
  }
})


