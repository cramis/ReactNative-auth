
import React, { Component } from 'react';
import { View  } from 'react-native';
import { Card, CardSection, Button, Input } from './common';


class LoginForm extends Component {

  state = { email: '', password: '' };
  
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
          <CardSection>
            <Button>
              Log in
            </Button>
          </CardSection>          
      </Card>
    );
  }
  
}

export default LoginForm;
