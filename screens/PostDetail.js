import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet, Dimensions, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../utils/Colors"
import FontStyles from "../utils/FontStyles"
import { AntDesign, FontAwesome, Feather } from "@expo/vector-icons"
import Constants from 'expo-constants';
import { FlatList } from 'react-native-gesture-handler';
import KeyboardSpacer from 'react-native-keyboard-spacer';

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

export default class PostDetail extends React.PureComponent {
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
        <TouchableOpacity style={{}} onPress={() => this.props.navigation.goBack()}>
          <Feather name={"chevron-left"} color={Colors.white} size={24}/>
        </TouchableOpacity>
        <Text style={[FontStyles.body, {color: Colors.white, marginLeft: 16, marginTop: 16, marginBottom: 16}]}>
          Detail
        </Text>
      </View>
    )
  }

  renderItem = ({item, index}) => {
    return (
      <TouchableOpacity onPress={() => {}} activeOpacity={0.9} style={styles.rowContainer}>
        <Image source={require("../assets/images/user1.png")}/>
        <View style={{flex: 1, marginLeft: 16}}>
          <View style={{flexDirection: "row", marginBottom: 8, justifyContent: "space-between",}}>
            <Text numberOfLines={2} style={[FontStyles.body, {fontFamily: "c5"}]}>
              username
            </Text>
            <Text numberOfLines={2} style={[FontStyles.caption1, {color: Colors.black4, fontFamily: "c5"}]}>
              Nov, 12, 15:06
            </Text>
          </View>
          
          <Text numberOfLines={2} style={[FontStyles.body, {lineHeight: 26,  fontFamily: "c6"}]}>
            Merhaba, stata konusunda deneyim biri benimle iletişime geçebilir mi? fkdsaf kdsanf kdsan nfkasnfk sadmkf a
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

  headerList = () => {
    return (
      <View style={styles.postContainer}>
        <View style={{flexDirection: "row", alignItems: "center"}}>
          <Image source={require("../assets/images/user1.png")}/>
          <View style={{marginLeft: 16}}>
            <Text style={[FontStyles.subhead, {}]}>
              {"MBilgehan"}
            </Text>
            <Text style={[FontStyles.caption1, {marginTop: 4, color: Colors.black2, fontFamily: "c6"}]}>
              {"yesterday, 20:51"}
            </Text>
          </View>
        </View>
        <Text style={[FontStyles.title3, {color: Colors.primary1, marginTop: 16, lineHeight: 26}]}>
          {"Ödüllü yarışma, SU Öğrencileri arasında..."}
        </Text>
        <Text style={[FontStyles.body, {color: Colors.black1, marginTop: 12, fontFamily: "c6", lineHeight: 26}]}>
          {"Lorem ipsum dolor sit amet,t dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        </Text>
        <View style={{paddingHorizontal: 8, alignSelf: "baseline", marginTop: 8, paddingVertical: 8, backgroundColor: Colors.black6, borderRadius: 5}}>
            <Text style={[FontStyles.footnote, {}]}>
              {"General Discussion"}
            </Text>
          </View>
      </View>
    )
  }

  commentInput = () => {
    return (
      <View style={styles.commentContainer}>
        <TextInput
          multiline
          placeholder={"Share your comment..."}
          style={[FontStyles.subhead, styles.commentInput]}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Feather name={"send"} size={24} color={Colors.primary2}/>
        </TouchableOpacity>
      </View>
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
          contentContainerStyle={{}}
          renderItem={this.renderItem}
          ListHeaderComponent={this.headerList}
        />
        {
          this.commentInput()
        }
        <KeyboardSpacer/>
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
  commentContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: SCREEN_WIDTH, 
    backgroundColor: Colors.black6
  },
  sendButton: {
    paddingTop: 2,
    justifyContent: 'center',
    alignItems: "center"
  },
  commentInput: {
    backgroundColor: Colors.white,
    paddingHorizontal: 16,
    flex: 1,
    borderRadius: 20,
    marginRight: 16,
    paddingTop: 8,
    paddingBottom: 8,
    maxHeight: 150
  },
  postContainer: {
    width: SCREEN_WIDTH, 
    paddingHorizontal: 16,
    paddingVertical: 16, 
    borderBottomWidth: 1,
    borderColor: Colors.black6,
    backgroundColor: "white"
  },
  rowContainer: {
    width: SCREEN_WIDTH,
    paddingHorizontal: 16,
    backgroundColor: Colors.white,
    alignSelf: "center",
    paddingVertical: 16,
    flexDirection: "row",
    borderRadius: 8,
    borderBottomWidth: 0.5,
    borderColor: Colors.black6
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
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


