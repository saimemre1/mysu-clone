import React from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import Colors from "../utils/Colors"
import FontStyles from "../utils/FontStyles"
import { AntDesign } from "@expo/vector-icons"

const iconSize = 22
const iconColor = Colors.primary2
const SCREEN_WIDTH = Dimensions.get("screen").width
const SCREEN_HEIGHT = Dimensions.get("screen").height

export default class Register extends React.PureComponent {
  constructor(props){
    super(props)

    this.username = ""
    this.password = ""


    this.state = {
      loading: false
    }
  } 


  login = () => {
    console.log("helloo")
    this.setState({loading: true})
    setTimeout(() => {
      this.props.navigation.navigate("MainStack")
    }, 1000);
  }

  render() {
    
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Image source={require("../assets/images/login.png")} resizeMode="contain" style={styles.image} />
        <Text style={[FontStyles.title3, {fontFamily: "c4", marginTop: 16, color: Colors.primary1}]}>
          Login
        </Text>
        <Text style={[FontStyles.body, {fontFamily: "c5", marginTop: 16, marginBottom: 16, color: Colors.black2}]}>
          Please enter your credentials to login.
        </Text>

        <View style={styles.inputContainer}>
          <AntDesign name={"user"} size={iconSize} color={iconColor}/>
          <TextInput
            autoCapitalize={"none"}
            autoCorrect={false}
            style={[FontStyles.body, styles.textInput]}
            placeholder={"SU-Net Username"}
            onChangeText={text => this.username = text}
          />
        </View>

        <View style={styles.inputContainer}>
          <AntDesign name={"lock"} size={iconSize} color={iconColor}/>
          <TextInput
            style={[FontStyles.body, styles.textInput]}
            placeholder={"SU-Net Password"}
            secureTextEntry
            onChangeText={text => this.username = text}
          />
        </View>

        <TouchableOpacity disabled={this.state.loading} style={styles.button} activeOpacity={0.9} onPress={this.login}>
          {
            this.state.loading ? 
            <ActivityIndicator color={"white"}/>
            : 
            <Text style={[FontStyles.body, {fontFamily: "c3", color: Colors.white}]}>
              Login
            </Text>
          }
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: SCREEN_WIDTH * 0.66,
    height: SCREEN_WIDTH * 0.66,
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 16,
    textAlign: "center",
    flex: 1
  },
  inputContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    width: SCREEN_WIDTH - 44,
    marginTop: 10,
    borderRadius: 5,
    borderColor: Colors.primary2
  },
  button: {
    backgroundColor: Colors.primary1,
    paddingVertical: 15,
    width: SCREEN_WIDTH - 44,
    marginTop: 16,
    justifyContent: 'center',
    alignItems: "center",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: Colors.whiteAlp.alpha05
  }
})


