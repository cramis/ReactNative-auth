
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';


class App extends Component {

  componentWillMount() {
    this.initializeFirebase();
  }

  initializeFirebase() {
    const config = {
      apiKey: 'AIzaSyB07nziUdYak6op42iboQAAV5yVGb3JiiE',
      authDomain: 'react-native-auth-3a0c6.firebaseapp.com',
      databaseURL: 'https://react-native-auth-3a0c6.firebaseio.com',
      projectId: 'react-native-auth-3a0c6',
      storageBucket: 'react-native-auth-3a0c6.appspot.com',
      messagingSenderId: '103328163678'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View>
          <Header headerText="auth" />
          <LoginForm />
      </View>
    );
  }

  
}

export default App;
