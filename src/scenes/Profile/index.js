import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
import Button from '../../components/Button/index';
import * as AuthContext from '../../services/authContext';
import requireAuth from '../../services/requireAuth/index';

const Body = styled(View)`
  margin-bottom: 20px;
  padding: 10px;
`;

// eslint-disable-next-line
class Profile extends React.Component<> {
  render() {
    return (
      <AuthContext.Consumer>
        {({ logout }) => (
          <Body>
            <View>
              <Text>GDPR stuff</Text>
              <Button onPress={logout}>Logout</Button>
            </View>
          </Body>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default requireAuth(Profile);
