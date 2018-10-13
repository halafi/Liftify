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
  return class extends React.Component {
    render() {
      return (
        <AuthContext.Consumer>
          {({ user, error, email, password, loading, change, login }) => {
            if (!user) {
              return (
                <>
                  {Boolean(error) && (
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
                </>
              );
            }
            return <WrappedComponent {...this.props} />;
          }}
        </AuthContext.Consumer>
      );
    }
  };
}

export default requireAuth;
