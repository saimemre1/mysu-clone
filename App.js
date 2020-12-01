import React from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { View, Text } from "react-native";

export default class App extends React.PureComponent {
  constructor(props){
    super(props)

    this.state = {
      assetReady: false,
      userReady: false,
      isLogin: false
    }
  } 

  componentDidMount() {
    this.checkUser()
  }

  checkUser = () => {
    this.setState({userReady: true, isLogin: false})
  }


  _loadResourcesAsync = async () => {
    await Font.loadAsync({
      'c1': require('./assets/fonts/c1.otf'),
      'c2': require('./assets/fonts/c2.otf'),
      'c3': require('./assets/fonts/c3.otf'),
      'c4': require('./assets/fonts/c4.otf'),
      'c5': require('./assets/fonts/c5.otf'),
      'c6': require('./assets/fonts/c6.otf'),
      'c7': require('./assets/fonts/c7.otf'),
      'c8': require('./assets/fonts/c8.otf'),
    })
  };


  render() {
    const MainStack = createStackNavigator({
      MainScreen: MainScreen,
      PostDetail: PostDetail
    },
    {
      headerMode: "none",
      initialRouteName: "MainScreen"
    })

    const RegisterStack = createStackNavigator({
      Register: Register
    },
    {
      headerMode: "none",
      initialRouteName: "Register"
    })

    const SwitchStack = createSwitchNavigator({
      MainStack: MainStack,
      RegisterStack: RegisterStack,
    },
    {
      initialRouteName: this.state.isLogin ? "MainStack" : "RegisterStack"
    }
    )

    const AppContainer = createAppContainer(SwitchStack)

    if(!this.state.assetReady || !this.state.userReady){
      return (
        <AppLoading
          onFinish={() => this.setState({assetReady: true})}
          startAsync={this._loadResourcesAsync}
          onError={(e) => console.warn(e)}
        />
      )
    }
    
    return (
      <AppContainer/>
    );
  }
}


import MainScreen from "./screens/MainScreen.js"
import Register from "./screens/Register.js"
import PostDetail from "./screens/PostDetail.js"

