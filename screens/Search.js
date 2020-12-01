import React from 'react';
import { View, Text, TextInput, ScrollView, Animated, StyleSheet, Dimensions, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../utils/Colors"
import FontStyles from "../utils/FontStyles"
import { AntDesign, FontAwesome } from "@expo/vector-icons"
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

const iconSize = 22
const SCREEN_WIDTH = Dimensions.get("screen").width
const SCREEN_HEIGHT = Dimensions.get("screen").height
const buttons = [
  {
    title: "Staff",
    onPress: () => {}
  },
  {
    title: "Assistant",
    onPress: () => {}
  },
  {
    title: "Other",
    onPress: () => {}
  }
]
const data = [
  {
    title: "Covid-19 Status on campus -4",
    category: "POP",
    date: "25 Nov."
  },
  {
    title: "ADP Peer Study and discussion sessions (20Nov.)",
    category: "POP",
    date: "22 Nov."
  },
  {
    title: "title",
    category: "POP",
    date: "25 Nov."
  },
  {
    title: "title",
    category: "POP",
    date: "25 Nov."
  },
  {
    title: "title",
    category: "POP",
    date: "25 Nov."
  },
  {
    title: "title",
    category: "POP",
    date: "25 Nov."
  },
]

export default class Announcements extends React.PureComponent {
  constructor(props){
    super(props)

    this.thinValue = new Animated.Value(0)
    this.animatedThin = {
      transform: [
        {
          translateX: this.thinValue.interpolate({
            inputRange: [0, 1, 2],
            outputRange: [0, SCREEN_WIDTH/3, (SCREEN_WIDTH/3)*2 ],
          })
        }
      ]
    }

    this.state = {
    }
  } 

  header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[FontStyles.title1, {color: Colors.white, marginTop: 24, marginBottom: 16}]}>
          Directory
        </Text>
        <View style={styles.searchContainer}>
          <FontAwesome name={"search"} color={Colors.black5} size={20}/>
          <TextInput
            style={[FontStyles.callout, styles.searchInput, {color: Colors.primary1}]}
            placeholder={"Search..."}
          />
        </View>
      </View>
    )
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => {}} activeOpacity={0.9} style={styles.rowContainer}>
        <Image style={styles.userImage} source={require("../assets/images/user1.png")}/>
        <View style={{flex: 1, marginLeft: 16}}>
          <Text style={[FontStyles.body, {color: Colors.primary1, lineHeight: 26, fontFamily: "c5"}]}>
            Albert Levi
          </Text>
          <Text  style={[FontStyles.subhead, {lineHeight: 26, fontFamily: "c5"}]}>
            Faculty of Engineering and Natural Science
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  emptyList = () => {
    return (
      <Text style={[FontStyles.body, {color: Colors.black3, marginTop: 24, textAlign: "center", alignSelf: "center", }]}>
        Please type min 3 char for search.
      </Text>
    )
  }

  onPressFilter = (index) => {
    Animated.spring(this.thinValue, {
      toValue: index,
      friction: 6,
      useNativeDriver: true
    }).start()
  }

  render() { 
    return (
      <View style={styles.container}>
        {this.header()}
        <View style={styles.filterContainer}>
          {
            buttons.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => this.onPressFilter(index)} style={styles.filterButton}>
                  <Text style={[FontStyles.footnote, {color: Colors.primary1}]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
          <Animated.View style={[styles.thinLine, this.animatedThin]}/>
        </View>
        <FlatList
          data={[]}
          ListEmptyComponent={this.emptyList}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={this.renderItem}
        />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: SCREEN_WIDTH,
    backgroundColor: Colors.black7
  },
  filterContainer: {
    flexDirection: "row",
    borderBottomWidth: 2,
    borderColor: Colors.black5
  },
  thinLine: {
    height: 2,
    backgroundColor: Colors.primary1,
    width: SCREEN_WIDTH / 3,
    position: "absolute",
    bottom: -2
  },
  filterButton: {
    flex: 1,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: "center",
    paddingVertical: 16,
  },
  rowContainer: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    alignSelf: "center",
    paddingVertical: 16,
    flexDirection: "row",
    borderRadius: 8,
    borderBottomWidth: 1,
    borderColor: Colors.black6
  },
  headerContainer: {
    backgroundColor: Colors.primary1,
    paddingHorizontal: 16,
    paddingTop: Constants.statusBarHeight
  },
  searchContainer: {
    backgroundColor: Colors.white,
    marginBottom: 16,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16
  },
  searchInput: {
    paddingVertical: 10,
    marginLeft: 16,
    fontFamily: "c6"
  },
  userImage: {
    width: 40,
    height: 40,

  }
})


