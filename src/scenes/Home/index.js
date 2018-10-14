// @flow strict
import React from 'react';
import styled from 'styled-components';
import { format } from 'date-fns';
import { Text } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button/index';
// import * as AuthContext from '../../services/authContext';
import requireAuth from '../../services/requireAuth/index';
import Flex from '../../primitives/Flex/index';
import { DATE_FORMAT_SHORT } from '../../consts/dateTime';

// const Workouts = styled(ScrollView).attrs({
//   // contentContainerStyle: {
//   //   paddingVertical: 20,
//   // },
//   bounces: true,
// })`
//   max-height: 200px;
// `;

const Body = styled(Flex)`
  margin-bottom: 20px;
  padding: 10px;
`;

const Stats = () => (
  // <AuthContext.Consumer>
  //   {({  }) => (
  <Body justifyContent="space-between">
      <Text>{format(new Date(), DATE_FORMAT_SHORT)}</Text>
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex flex={2}>
          <Text>Bench</Text>
        </Flex>
        <Flex flex={1}>
          <Text>60kg</Text>
        </Flex>
        <Flex flex={1}>
          <Text>30</Text>
        </Flex>
      </Flex>
      {/* <Flex flexDirection="row">
        <Text>Pullups</Text>
        <Text>---</Text>
        <Text>12 reps</Text>
      </Flex> */}
    <Button onPress={() => {}}>
      <Ionicons name="ios-add-circle" size={20} /> New Workout
    </Button>
  </Body>
  //   )}
  // </AuthContext.Consumer>
);

export default requireAuth(Stats);
