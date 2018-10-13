// @flow
import * as React from 'react';
import { TouchableNativeFeedback, View, Text } from 'react-native';
import styled from 'styled-components';

const StyledView = styled(View)`
  align-items: center;
  width: 100%;
  background-color: ${({ disabled, kind }) =>
    // eslint-disable-next-line no-nested-ternary
    disabled ? 'gray' : kind === 'danger' ? '#ff4444' : '#2196f3'};
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
  style?: any,
  kind?: 'primary' | 'danger',
};

const Button = ({ children, onPress, disabled, style, kind }: Props) => (
  <TouchableNativeFeedback disabled={disabled} onPress={onPress}>
    <StyledView style={style} disabled={disabled} kind={kind}>
      <StyledText>{children}</StyledText>
    </StyledView>
  </TouchableNativeFeedback>
);

Button.defaultProps = {
  disabled: false,
  style: null,
  kind: 'primary',
};

export default Button;
