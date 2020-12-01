import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../utils/Colors"
import FontStyles from "../utils/FontStyles"
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons"
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

export default class CampusNet extends React.PureComponent {
  constructor(props){
    super(props)


    this.state = {
      loading: false
    }
  } 

  componentDidMount() {
    this.getPosts()
  }

  getPosts = () => {
    this.setState({loading: true})
    setTimeout(() => {
      this.setState({loading: false})
    }, 1000);
  }

  header = () => {
    return (
      <View style={styles.headerContainer}>
        <Text style={[FontStyles.title1, {color: Colors.white, marginTop: 24, marginBottom: 16}]}>
          CampusNet
        </Text>
      </View>
    )
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => this.props.navigation.navigate("PostDetail", {data: item})} activeOpacity={0} style={styles.rowContainer}>
        <Image source={require("../assets/images/user1.png")}/>
        <View style={{flex: 1, marginLeft: 16}}>
          <Text numberOfLines={2} style={[FontStyles.body, {lineHeight: 26, fontFamily: "c5"}]}>
            Merhaba, stata konusunda deneyim biri benimle iletişime geçebilir mi? fkdsaf kdsanf kdsan nfkasnfk sadmkf a
          </Text>
          <View style={{paddingHorizontal: 8, alignSelf: "baseline", marginTop: 8, paddingVertical: 8, backgroundColor: Colors.black6, borderRadius: 5}}>
            <Text style={[FontStyles.footnote, {}]}>
              {"General Discussion"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  render() { 
    return (
      <View style={styles.container}>
        {this.header()}
        <FlatList
          data={data}
          refreshing={this.state.loading}
          onRefresh={this.getPosts}
          keyExtractor={(item, index) => "s" + index}
          contentContainerStyle={{paddingBottom: 20}}
          renderItem={this.renderItem}
        />
        <TouchableOpacity style={styles.addPostButton} activeOpacity={0.9} onPress={() => {}}>
          <Feather name={"plus"} size={24} color={"white"}/>
        </TouchableOpacity>
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
    width: SCREEN_WIDTH,
    zIndex: 199,
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


