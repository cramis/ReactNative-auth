
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';


class App extends Component {

  state = {
    loggedIn: false
  }

  componentWillMount() {
    this.initializeFirebase();

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      }
      else {
        this.setState({ loggedIn: false });
      }
    });
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
  
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Sign out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner size='large' />;
    }
  }

  render() {
    return (
      <View>
          <Header headerText="auth" />
          {this.renderContent()}
      </View>
    );
  }

  
}

export default App;
