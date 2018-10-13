// @flow strict
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

const Actions = styled(View)`
  margin-top: 20px;
`;

const Header = styled(Text)`
  font-size: 24px;
  line-height: 30;
`;

const Item = styled(Text)`
  font-size: 14px;
  line-height: 22;
`;

const Strong = styled(Text)`
  font-weight: bold;
  font-size: 14px;
  line-height: 22;
`;

const DeleteButton = styled(Button)`
  margin-top: 10px;
`;

type Props = {
  navigation: any,
};

const Profile = ({ navigation }: Props) => (
  <AuthContext.Consumer>
    {({ logout, user, deleteUser, credential }) => {
      // eslint-disable-next-line no-underscore-dangle
      const userData = user._user;

      return (
        <Body>
          <Header>GDPR stuff</Header>
          <Item>Find all the stuff we have on you here</Item>
          <Item>
            <Strong>Email:</Strong> {userData.email}
          </Item>
          <Item>
            <Strong>Last Sign In:</Strong> {userData.metadata.lastSignInTime}
          </Item>
          <Item>
            <Strong>Joined:</Strong> {userData.metadata.creationTime}
          </Item>
          <Actions>
            <Button
              onPress={() => {
                logout();
                setTimeout(() => {
                  navigation.navigate('Home');
                }, 250);
              }}
            >
              Sign Out
            </Button>
            <DeleteButton kind="danger" onPress={deleteUser} disabled={!credential}>
              Delete Account
            </DeleteButton>
            {!credential && <Item>If you wish to delete your account please Sign In again.</Item>}
          </Actions>
        </Body>
      );
    }}
  </AuthContext.Consumer>
);

export default requireAuth(Profile);
