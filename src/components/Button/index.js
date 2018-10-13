// @flow
import * as React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  align-items: center;
  width: 100%;
  background-color: ${({ disabled }) => (disabled ? 'gray' : '#2196f3')};
`;

const StyledText = styled(Text)`
  padding: 10px;
  color: white;
  font-size: 18px;
`;

type Props = {
  onPress: any => void,
  children: React.Node,
  disabled?: boolean,
};

const Button = ({ children, onPress, disabled }: Props) => (
  <TouchableNativeFeedback disabled={disabled} onPress={onPress}>
    <StyledView disabled={disabled}>
      <StyledText>{children}</StyledText>
    </StyledView>
  </TouchableNativeFeedback>
);

Button.defaultProps = {
  disabled: false,
};

export default Button;
