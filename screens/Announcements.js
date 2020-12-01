import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../utils/Colors"
import FontStyles from "../utils/FontStyles"
import { AntDesign, FontAwesome } from "@expo/vector-icons"
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

const iconSize = 22
const SCREEN_WIDTH = Dimensions.get("screen").width
const SCREEN_HEIGHT = Dimensions.get("screen").height
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


    this.state = {
    }
  } 

  header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[FontStyles.title1, {color: Colors.white, marginTop: 24, marginBottom: 16}]}>
          Announcements
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
        <View style={{flexDirection: "row", justifyContent: "space-between",}}>
          <View style={{paddingHorizontal: 8, paddingVertical: 4, backgroundColor: Colors.black6, borderRadius: 5}}>
            <Text style={[FontStyles.footnote, {}]}>
              {item.category}
            </Text>
          </View>
          <Text style={[FontStyles.caption1, {color: Colors.black3, fontFamily: "c6"}]}>
            {item.date}
          </Text>
        </View>
        <Text style={[FontStyles.body, {fontFamily: "c4", marginTop: 16, color: Colors.black2, lineHeight: 24}]}>
          {item.title}
        </Text>
      </TouchableOpacity>
    )
  }

  render() { 
    return (
      <View style={styles.container}>
        {this.header()}
        <FlatList
          data={data}
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
  rowContainer: {
    width: SCREEN_WIDTH - 16,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    alignSelf: "center",
    marginTop: 16,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 2,
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
  }
})


