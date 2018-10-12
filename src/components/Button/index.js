// @flow
import * as React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  align-items: center;
  width: 100%;
  background-color: #2196f3;
`;

const StyledText = styled(Text)`
  padding: 10px;
  color: white;
  font-size: 18px;
`;

type Props = {
  onPress: any => void,
  children: React.Node,
};

const Button = ({ children, onPress }: Props) => (
  <TouchableNativeFeedback onPress={onPress}>
    <StyledView>
      <StyledText>{children}</StyledText>
    </StyledView>
  </TouchableNativeFeedback>
);

export default Button;
