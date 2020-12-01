import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../utils/Colors"
import FontStyles from "../utils/FontStyles"
import { AntDesign, Feather, FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons"
import Constants from 'expo-constants';

const iconSize = 22
const SCREEN_WIDTH = Dimensions.get("screen").width
const SCREEN_HEIGHT = Dimensions.get("screen").height
const cards = [
  {
    title: "Shuttle",
    price: "-14.00",
    iconName: "bus",
    color: Colors.secondary3
  },
  {
    title: "Meal",
    price: "24.00",
    iconName: "cutlery",
    color: Colors.secondary1
  },
  {
    title: "Copy",
    price: "4.00",
    iconName: "files-o",
    color: Colors.secondary2
  }
]

const tools = [
  {
    title: "SuTicket",
    icon: "file-text-o",
    color: Colors.primary1
  },
  {
    title: "Directory",
    icon: "search",
    color: Colors.primary1
  },
  {
    title: "SuCourse+",
    icon: "plus-circle",
    color: Colors.secondary1
  },
  {
    title: "BannerWeb",
    icon: "laptop",
    color: Colors.secondary1
  },
  {
    title: "Service Providers",
    icon: "cube",
    color: Colors.secondary4
  },
  {
    title: "Academic Calendar",
    icon: "calendar-o",
    color: Colors.secondary4
  },
  {
    title: "Printer Locations",
    icon: "print",
    color: Colors.secondary2
  },
  {
    title: "Emergency Number",
    icon: "phone",
    color: Colors.secondary2
  }
]


export default class Home extends React.PureComponent {
  constructor(props){
    super(props)


    this.state = {
      loading: false,
      selectedToolsFilterIndex: 1
    }
  } 

  componentDidMount() {
  }


  header = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={{flexDirection: "row", justifyContent: "flex-end"}}>
          <TouchableOpacity style={styles.headerButton} onPress={() => {}}> 
            <MaterialCommunityIcons name="account-search-outline" size={20} color={Colors.white}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton} onPress={() => {}}> 
            <FontAwesome name="navicon" size={20} color={Colors.white}/>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: "row", }}>
          <Image style={styles.userImage} source={require("../assets/images/user2.png")}/>
          <View style={{marginLeft: 16, paddingBottom: 16}}>
            <Text style={[FontStyles.title3, {color: Colors.white, fontFamily: "c3", marginBottom: 8}]}>
              Tolga Atam
            </Text>
            <Text style={[FontStyles.footnote, {color: Colors.white, }]}>
              Faculty of Engineering
            </Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          {
            cards.map((item, index) => {
              return (
                <TouchableOpacity style={[styles.cardButton, {backgroundColor: item.color}]}>
                  <View style={styles.circle}>
                    <FontAwesome name={item.iconName} size={28} color={item.color}/>
                  </View>
                  <Text style={[FontStyles.callout, {color: Colors.whiteAlp.alpha07}]}>
                    {item.title}
                  </Text>
                  <Text style={[FontStyles.body, {color: Colors.white, fontFamily: "c3", marginTop: 5}]}>
                    {item.price}₺
                  </Text>
                </TouchableOpacity> 
              )
            })
          }
        </View>
      </View>
    )
  }

  tools = () => {
    return (
      <View style={styles.toolsContainer}>
        <View style={{flexDirection: "row", paddingHorizontal: 16, width: SCREEN_WIDTH, marginTop: 16, marginBottom: 8}}>
          <Text style={[FontStyles.body, {fontFamily: "c4", flex: 1, color: Colors.primary1}]}>
            Tools
          </Text>
          <TouchableOpacity style={styles.toolsButton} onPress={() => this.setState({selectedToolsFilterIndex: 0})}>
            <Feather name="grid" size={20} color={this.state.selectedToolsFilterIndex == 0 ? Colors.primary1 : Colors.primary3}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.toolsButton} onPress={() => this.setState({selectedToolsFilterIndex: 1})}>
          <Feather name="list" size={20} color={this.state.selectedToolsFilterIndex == 1 ? Colors.primary1 : Colors.primary3}/>
          </TouchableOpacity>
        </View>
        {
          tools.map((item, index) => {
            if(this.state.selectedToolsFilterIndex == 1){
              return(
                <TouchableOpacity style={styles.toolsRowButtonLong}>
                  <Text style={[FontStyles.body, {color: Colors.black2, flex: 1 }]}>
                    {item.title}
                  </Text>
                  <FontAwesome  name={item.icon} size={20} color={item.color}/>
                </TouchableOpacity>
              )
            }
            return(
              <TouchableOpacity style={styles.toolsRowButton}>
                <Text style={[FontStyles.title3, {color: item.color, }]}>
                  {item.title}
                </Text>
                <FontAwesome style={{opacity: 0.5, position: "absolute", bottom: 16, right: 16}} name={item.icon} size={34} color={item.color}/>
              </TouchableOpacity>
            )
          })
        }
      </View>
    )
  }

  todaysShuttle = () => {
    return (
      <View style={styles.menuContainer}>
        <View style={{flexDirection: "row", borderBottomWidth: 0.5, borderColor: Colors.secondary1Alp.alpha05, alignItems: "center", paddingBottom: 16}}>
          <Text style={[FontStyles.body, {color: Colors.secondary3, flex: 1}]}>
            Today's Shuttle
          </Text>
          <TouchableOpacity>
            <Text style={[FontStyles.footnote, {textDecorationLine: "underline"}]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[FontStyles.callout, {lineHeight: 25, marginTop: 16, marginRight: 50, color: Colors.secondary3}]}>
          {"Campus > Kadıköy"}
        </Text>
        <View style={{flexDirection: "row", marginTop: 8 }}>
          <Text style={[FontStyles.callout, {lineHeight: 25, marginRight: 16, color: Colors.secondary3}]}>
            {"12:30"}
          </Text>
          <Feather name="list" size={20} color={Colors.secondary3}/>
          <Text style={[FontStyles.callout, {lineHeight: 25, marginLeft: 16,  color: Colors.secondary3}]}>
            {"SW Route"}
          </Text>
        </View>
        <View style={[styles.foodCircle, {backgroundColor: Colors.secondary3}]}>
          <FontAwesome name="bus" size={34} color={Colors.white}/>
        </View>
      </View>
      
    )
  }

  menuOfTheDay = () => {
    return (
      <View style={styles.menuContainer}>
        <View style={{flexDirection: "row", borderBottomWidth: 0.5, borderColor: Colors.secondary1Alp.alpha05, alignItems: "center", paddingBottom: 16}}>
          <Text style={[FontStyles.body, {color: Colors.secondary1, flex: 1}]}>
            Menu Of The Day
          </Text>
          <TouchableOpacity>
            <Text style={[FontStyles.footnote, {textDecorationLine: "underline"}]}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={[FontStyles.callout, {lineHeight: 25, marginTop: 16, marginRight: 50, color: Colors.secondary1}]}>
          {"- Tarhana Soup  - meatballs In Pan  - Cauliflower With Tomato  - Rice with Vermicelli"}
        </Text>
        <View style={styles.foodCircle}>
          <FontAwesome name="cutlery" size={34} color={Colors.white}/>
        </View>
      </View>
      
    )
  }
  render() { 
    return (
      <View style={styles.container}>
        <ScrollView
          bounces={false}
          style={{backgroundColor: Colors.primary1, flex: 1}}
        >
          {this.header()}
          <View style={{flex: 1, zIndex: -1, backgroundColor: Colors.black7, width: SCREEN_WIDTH, paddingVertical: SCREEN_WIDTH * 0.1 + 16}}>
            {this.todaysShuttle()}
            {this.menuOfTheDay()}
            {this.tools()}
          </View>
        </ScrollView>
        
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
  cardContainer: {
    marginBottom: -SCREEN_WIDTH * 0.1,
    marginTop: 8,
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: 8,
    alignItems: "center",
    width: SCREEN_WIDTH
  },
  menuContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingTop: 16,
    marginVertical: 8,
    paddingBottom: 40,
    borderRadius: 5,
    overflow: "hidden",
    width: SCREEN_WIDTH - 32, 
    alignSelf: "center",
    borderWidth: 2,
    borderColor: Colors.black7
  },
  foodCircle: {
    backgroundColor: Colors.secondary1,
    width: 100,
    height: 100,
    position: "absolute",
    bottom: -20,
    paddingLeft: 30,
    paddingTop: 30,
    borderRadius: 50,
    right: -20
  },
  cardButton: {
    flex: 1, 
    overflow: "hidden",
    borderRadius: 5,
    height: SCREEN_WIDTH * 0.3,
    width: SCREEN_WIDTH * 0.3,
    marginHorizontal: 8,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  toolsRowButtonLong: {
    flexDirection: "row",
    width: SCREEN_WIDTH - 32,
    borderRadius: 5,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 8,

  },
  toolsContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  toolsButton: {
    width: 30,
    height: 30,
    
  },
  toolsRowButton: {
    width: SCREEN_WIDTH * 0.45,
    marginBottom: 8,
    height: 90,
    borderRadius: 5,
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  circle: {
    backgroundColor: Colors.white,
    width: SCREEN_WIDTH * 0.25,
    height: SCREEN_WIDTH * 0.25,
    borderRadius: SCREEN_WIDTH * 0.125,
    position: "absolute",
    top: -SCREEN_WIDTH * 0.09,
    left: -SCREEN_WIDTH * 0.09,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: SCREEN_WIDTH * 0.06,
    paddingBottom: SCREEN_WIDTH * 0.06
  },
  headerButton: {
    paddingTop: 8,
    width: 36,
    height: 36,
    alignItems: "flex-end"
  },
  userImage: {
    width: 50,
    height: 50,
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
  addPostButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: Colors.secondary2,
    height: 50, 
    width: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: "center",
  }
})


