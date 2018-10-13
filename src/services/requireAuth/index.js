import React from 'react';
import styled from 'styled-components';
import { Text, TextInput, View } from 'react-native';
import Button from '../../components/Button/index';
import * as AuthContext from '../authContext';

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

function requireAuth(WrappedComponent) {
  const Component = props => (
    <AuthContext.Consumer>
      {({ user, error, email, password, loading, change, login }) => {
        if (!user) {
          return (
            <View>
              {error && (
                <Error>
                  <ErrorText>{error}</ErrorText>
                </Error>
              )}
              <StyledTextInput
                placeholder="Email"
                value={email}
                onChangeText={text => change('email', text)}
              />
              <StyledTextInput
                placeholder="Password"
                value={password}
                onChangeText={text => change('password', text)}
                secureTextEntry
              />
              <Button disabled={loading || !email || !password} onPress={login}>
                Sign In
              </Button>
            </View>
          );
        }
        return <WrappedComponent {...props} />;
      }}
    </AuthContext.Consumer>
  );
  return Component;
}

export default requireAuth;
