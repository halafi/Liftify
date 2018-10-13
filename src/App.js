// @flow strict
import React from 'react';
import styled from 'styled-components';
import { Text, View, ScrollView, TextInput } from 'react-native';
import Button from './components/Button/index';

const StyledView = styled(View)`
  flex: 1;
  margin-top: 33px;
  background-color: #fff;
`;

const Title = styled(View)`
  justify-content: center;
  align-items: center;
  height: 70px;
  background-color: navy;
`;

const TitleText = styled(Text)`
  color: white;
  font-size: 24px;
`;

const Body = styled(View)`
  flex: 2;
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

export default class App extends React.Component<{}> {
  render() {
    const input = '';
    const messages = ['bur', 'kek'];

    return (
      <StyledView>
        <Title>
          <TitleText>Welcome</TitleText>
        </Title>
        <Body>
          <StyledTextInput
            placeholder="Type your text"
            value={input}
          />
          <Messages>
            {messages.map((msg, i) => (
              // eslint-disable-next-line
              <Message key={`${msg}-${i}`}>{msg}</Message>
            ))}
          </Messages>
          <Button>Clear</Button>
        </Body>
      </StyledView>
    );
  }
}
