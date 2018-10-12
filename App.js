// @flow strict
import React, { Component } from 'react';
import styled from 'styled-components';
import { Platform, Text, View } from 'react-native';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #F5FCFF;
`;

const Welcome = styled(Text)`
  margin: 10px;
  font-size: 20px;
  text-align: center;
`;

const Instructions = styled(Text)`
  margin-bottom: 5px;
  color: #333333;
  text-align: center;
`;

type Props = {};

// eslint-disable-next-line react/prefer-stateless-function
export default class App extends Component<Props> {
  render() {
    return (
      <Container>
        <Welcome>Welcome to React Native!</Welcome>
        <Instructions>To get started, edit App.js</Instructions>
        <Instructions>{instructions}</Instructions>
      </Container>
    );
  }
}
