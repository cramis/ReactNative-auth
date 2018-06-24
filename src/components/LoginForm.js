
import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Input, Spinner } from './common';


class LoginForm extends React.Component {
  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    // const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    // firebase.auth().signInWithEmailAndPassword(email, password)
    // .then(this.onLoginSuccess.bind(this))
    // .catch(() => {
    //   firebase.auth().createUserWithEmailAndPassword(email, password)
    //   .then(this.onLoginSuccess.bind(this))
    //   .catch(this.onLoginFail.bind(this));
    // });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  onLoginFail() {
    this.setState({      
      loading: false,
      error: 'Auth fail...'
    });
  }

  renderButton() {
    if (this.state.loading){
      return <Spinner size='small' />;
    }

    return (
      <Button onPress={this.onButtonPress}>
        Log in
      </Button>
    );
  }
  
  render() {
    return (
      <Card>
          <CardSection>
            <Input 
              placeholder='user@test.com'
              label='email'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
             />
          </CardSection>
          <CardSection>
            <Input 
              secureTextEntry
              placeholder='input password'
              label='password'               
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>
          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>
          <CardSection>
            {this.renderButton()}
          </CardSection>          
      </Card>
    );
  }
  
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
