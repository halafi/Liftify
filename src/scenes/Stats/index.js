// @flow strict
import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import Button from '../../components/Button/index';
import * as AuthContext from '../../services/authContext';
import requireAuth from '../../services/requireAuth/index';

const Body = styled(View)`
  margin-bottom: 20px;
  padding: 10px;
`;

// const Messages = styled(ScrollView).attrs({
//   contentContainerStyle: {
//     paddingVertical: 20,
//   },
//   bounces: true,
// })`
//   max-height: 200px;
//   margin: 10px 0;
// `;

class Stats extends React.Component<> {
  render() {
    // const { user, email, password, error, loading } = this.state;
    // const disabled = loading || !email.length || !password.length;

    return (
      <AuthContext.Consumer>
        {({ logout }) => (
          <Body>
            <View>
              <Button onPress={logout}>Logout</Button>
            </View>
          </Body>
        )}
      </AuthContext.Consumer>
    );
  }
}

export default requireAuth(Stats);
