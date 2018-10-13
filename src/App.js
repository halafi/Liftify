// @flow strict
import React from 'react';
// import firebase from 'react-native-firebase';
import styled from 'styled-components';
import { Text, View, ScrollView, TextInput } from 'react-native';
import Button from './components/Button/index';

const Flex = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledView = styled(View)`
  flex: 1;
  background-color: #fff;
`;

const Title = styled(View)`
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  background-color: #001f3f;
`;

const SubTitle = styled(View)`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 4px;
  background-color: #001f3f;
`;

const TitleText = styled(Text)`
  color: white;
  font-size: 24px;
`;

const SubTitleText = styled(Text)`
  color: white;
  font-size: 14px;
`;

const Body = styled(View)`
  margin-bottom: 20px;
  padding: 10px;
`;

const Messages = styled(ScrollView).attrs({
  contentContainerStyle: {
    paddingVertical: 20,
  },
  bounces: true,
})`
  max-height: 200px;
  margin: 10px 0;
`;

const Message = styled(Text)`
  font-size: 18px;
`;

const StyledTextInput = styled(TextInput)`
  height: 50px;
  font-size: 24px;
`;

const BigText = styled(Text)`
  font-size: 80px;
`;

type State = {
  email: string,
  password: string,
  user: ?any,
};

export default class App extends React.Component<{}, State> {
  state = {
    email: '',
    password: '',
    user: null,
  };

  handleChange = (field: 'email' | 'password', value: string): void => {
    this.setState({
      [field]: value,
    });
  };

  handleLogin() {
    firebase
      .auth()
      .signInAnonymously()
      .then(credential => {
        if (credential) {
          console.log('default app user ->', credential.user.toJSON());
        }
      });
  }

  render() {
    const { email, password } = this.state;
    const input = '';

    return (
      <StyledView>
        <Title>
          <TitleText>Liftify 🏋️‍♂️</TitleText>
          <Flex>
            <SubTitleText>Simple progress tracker</SubTitleText>
          </Flex>
        </Title>
        <Body>
          {/* <Messages>
            {messages.map((msg, i) => (
              // eslint-disable-next-line
              <Message key={`${msg}-${i}`}>{msg}</Message>
            ))}
          </Messages> */}
          <StyledTextInput
            placeholder="Email"
            value={email}
            onChange={value => this.handleChange('email', value)}
          />
          <StyledTextInput
            placeholder="Password"
            value={password}
            onChange={value => this.handleChange('password', value)}
            secureTextEntry
          />
          <Button onPress={this.handleLogin}>Sign In</Button>
        </Body>
      </StyledView>
    );
  }
}
