
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner, CardSection, Card } from './components/common';
import LoginForm from './components/LoginForm';
import firebase from 'firebase';


class App extends Component {

  // 로그인 여부
  state = {
    loggedIn: false
  }

  componentWillMount() {
    // firebase 설정
    this.initializeFirebase();


    // firebase 로그인 여부 확인
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
  
  // 로그인 여부에 따른 컨텐츠 여부
  renderContent() {
    switch (this.state.loggedIn) {
      case true:
      return (
        <Card>
        <CardSection>
        <Button onPress={() => firebase.auth().signOut()}>
          Sign out
          </Button>
        </CardSection>
        </Card>
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
          <View>
          {this.renderContent()}
          </View>
      </View>
    );
  }

  
}

export default App;
