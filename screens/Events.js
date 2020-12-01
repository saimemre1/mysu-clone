import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../utils/Colors"
import FontStyles from "../utils/FontStyles"
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';

const iconSize = 22
const SCREEN_WIDTH = Dimensions.get("screen").width
const SCREEN_HEIGHT = Dimensions.get("screen").height

const months = ["November", "December", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October"]
const weeklyData = [
  {
    image: require("../assets/images/event1.png"),
    title: "Muzikus Concert",
    location: "Online",
    time: "17:40",
    color: Colors.secondary1
  },
  {
    image: require("../assets/images/event2.png"),
    title: "Oda Tiyatrosu - Çorap Günü",
    location: "Gürsel Yanı",
    time: "13:40",
    color: Colors.secondary2
  },
  {
    image: require("../assets/images/event3.png"),
    title: "Additive Max. Distance Seperable Codes",
    location: "Online",
    time: "14:40",
    color: Colors.secondary3
  },
  {
    image: require("../assets/images/event4.png"),
    title: "Muzikus Concert",
    location: "Sabancı Çim",
    time: "23:40",
    color: Colors.secondary4
  }
]
export default class Events extends React.PureComponent {
  constructor(props){
    super(props)

    this.state = {
      loading: false,
      selectedMonth: 0
    }
  } 

  componentDidMount() {
  }


  header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[FontStyles.title3, {color: Colors.white, fontFamily: "c3", marginBottom: 16}]}>
          Events
        </Text>
        <ScrollView 
          style={{width: SCREEN_WIDTH}}
          contentContainerStyle={{}}
          horizontal
        >
          {
            months.map((item, index) => {
              return (
                <TouchableOpacity onPress={() => this.setState({selectedMonth: index})} style={styles.monthsButton}>
                  <Text style={[this.state.selectedMonth === index ? FontStyles.title1 : FontStyles.title3, { color: this.state.selectedMonth === index ? Colors.white : Colors.whiteAlp.alpha05}]}>
                    {item}
                  </Text>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }

  renderItem = () => {
    return (
      <TouchableOpacity style={styles.eventsRowContainer}>
        <View style={{}}>
          <Text style={[FontStyles.title1, {color: Colors.primary2}]}>
            25
          </Text>
          <Text style={[FontStyles.body, {color: Colors.primary2, marginTop:5}]}>
            Nov.
          </Text>
        </View>
        <View style={{marginLeft: 16}}>
          <Text style={[FontStyles.body, {fontFamily: "c6", color: Colors.black1}]}>
            FASS Latex Traning
          </Text>
          <Text style={[FontStyles.footnote, {color: Colors.black3, marginTop:5}]}>
            WebinarJam
          </Text>
          <Text style={[FontStyles.footnote, {color: Colors.black3, marginTop:5}]}>
            11:00
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  renderCards = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.weeklyCardContainer}>
        <View style={styles.weeklyImageContainer}>
          <Image style={styles.weeklyImage} source={item.image} resizeMode="cover"/>
          <View style={[styles.colorView, {backgroundColor: item.color}]}/>
        </View>
        <Text style={[FontStyles.body, {flex: 1, marginRight: 16, marginTop: 16, color: Colors.secondary4}]}>
          {item.title}
        </Text>
        <View style={{marginTop: 8, alignItems: "center",flexDirection: "row"}}>
          <Feather color={Colors.secondary4} size={16} name={"map-pin"}/>
          <Text style={[FontStyles.footnote, {flex: 1, marginLeft: 8, color: Colors.black3}]}>
            {item.location}
          </Text> 
        </View>

        <View style={{marginTop: 8,alignItems: "center", flexDirection: "row"}}>
          <Feather color={Colors.secondary4} size={16} name={"clock"}/>
          <Text style={[FontStyles.footnote, {flex: 1, marginLeft: 8, color: Colors.black3}]}>
            {item.time}
          </Text> 
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={[FontStyles.footnote, {color: Colors.white}]}>
              Details
            </Text>
          </TouchableOpacity>
        </View>
        
      </TouchableOpacity>
    )
  }


  listHeader = () => {
    return (
      <View style={styles.listContainer}>
        <View style={styles.listInnerContainer}>
          <Text style={[FontStyles.title3, {marginLeft: 16, marginTop: 8, color:Colors.primary1}]}>
            This Week On Campus
          </Text>
          <FlatList
            data={weeklyData}
            horizontal
            pagingEnabled
            pagin={SCREEN_WIDTH * 0.8}
            showsHorizontalScrollIndicator={false}
            style={{width: SCREEN_WIDTH, marginTop: 16, }}
            contentContainerStyle={{paddingHorizontal: 16}}
            renderItem={this.renderCards}
          />
        </View>
      
        <Text style={[FontStyles.title3, {color: Colors.primary1, marginLeft: 18, marginTop: 24}]}>
          Future Events
        </Text>
      </View>
    )
  }

  render() { 
    return (
      <View style={styles.container}>
        {this.header()}
        <FlatList
          style={{flex: 1, backgroundColor: Colors.black7, width:SCREEN_WIDTH}}
          data={["a","b","c", "d", "e", "f"]}
          renderItem={this.renderItem}
          ListHeaderComponent={this.listHeader}
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
  listContainer: {
    width: SCREEN_WIDTH, 
  },

  monthsButton: {
    paddingBottom: 16,
    marginRight: 16,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  detailsButton: {
    backgroundColor: Colors.secondary4,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 5,
    marginRight: 16
  },

  weeklyImageContainer: {
    width: SCREEN_WIDTH * 0.8,
    borderRadius: 10,
    overflow: "hidden",
    marginRight: 16
  },
  weeklyImage: {
    width: SCREEN_WIDTH * 0.8,
    height: SCREEN_WIDTH * 0.4

  },
  colorView: {
    position: "absolute",
    opacity: 0.5,
    top: 0, 
    bottom: 0, 
    right: 0,
    left: 0
  },

  listInnerContainer: {
    backgroundColor: Colors.white,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderColor: Colors.black6
  },
  eventsRowContainer: {
    backgroundColor: Colors.white,
    width: SCREEN_WIDTH - 32, 
    alignSelf: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: Colors.black7
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
    paddingTop: 16 + Constants.statusBarHeight,
  },
})


