// @flow strict
import React from 'react';
import styled from 'styled-components';
import { View, Text } from 'react-native';
// import Button from '../../components/Button/index';
// import * as AuthContext from '../../services/authContext';
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

const Stats = () => (
  // <AuthContext.Consumer>
  //   {({  }) => (
  <Body>
    <View>
      <Text>Home</Text>
    </View>
  </Body>
  //   )}
  // </AuthContext.Consumer>
);

export default requireAuth(Stats);
