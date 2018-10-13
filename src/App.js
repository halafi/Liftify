// @flow strict
import React from 'react';
import styled from 'styled-components';
import { Text, View } from 'react-native';
import Tabs from './scenes/Tabs';
import * as AuthContext from './services/authContext';

const Flex = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledView = styled(View)`
  flex: 1;
  background-color: #fff;
`;

const Title = styled(View)`
  justify-content: center;
  align-items: center;
  padding: 12px 0;
  background-color: #001f3f;
`;

const TitleText = styled(Text)`
  color: white;
  font-size: 24px;
`;

const SubTitleText = styled(Text)`
  color: white;
  font-size: 14px;
`;

// eslint-disable-next-line
class App extends React.Component<> {
  render() {
    return (
      <AuthContext.Provider>
        <StyledView>
          <Title>
            <TitleText>Liftify 🏋️‍♂️</TitleText>
            <Flex>
              <SubTitleText>Simple progress tracker</SubTitleText>
            </Flex>
          </Title>
          <Tabs />
        </StyledView>
      </AuthContext.Provider>
    );
  }
}
export default App;
