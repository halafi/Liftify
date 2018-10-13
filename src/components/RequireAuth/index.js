// @flow strict
import React from 'react';
import styled from 'styled-components';
import { Text, TextInput, View } from 'react-native';
import Button from '../Button/index';

const Error = styled(View)`
  padding: 12px;
  background-color: red;
  border-radius: 3px;
`;

const ErrorText = styled(Text)`
  color: white;
  font-size: 16px;
`;

const StyledTextInput = styled(TextInput)`
  height: 50px;
  font-size: 24px;
`;

type Props = {
  error: ?string,
  email: string,
  password: string,
  disabled: boolean,
  onChange: ('email' | 'password', string) => void,
  onLogin: () => void,
};

const RequireAuth = ({ error, email, password, disabled, onChange, onLogin }: Props) => (
  <>
    {Boolean(error) && (
      <Error>
        <ErrorText>{error}</ErrorText>
      </Error>
    )}
    <StyledTextInput
      placeholder="Email"
      value={email}
      onChangeText={text => onChange('email', text)}
    />
    <StyledTextInput
      placeholder="Password"
      value={password}
      onChangeText={text => onChange('password', text)}
      secureTextEntry
    />
    <Button disabled={disabled} onPress={onLogin}>
      Sign In
    </Button>
  </>
);

export default RequireAuth;
