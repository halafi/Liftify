import styled from 'styled-components';
import { View } from 'react-native';

const Flex = styled(View)`
  flex-direction: ${({ flexDirection }) => flexDirection || 'column'};
  justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
  align-items: ${({ alignItems }) => alignItems || 'flex-start'};
  align-self: ${({ alignSelf }) => alignSelf || 'stretch'};
  margin: ${({ m }) => m || 0};
  padding: ${({ p }) => p || 0};
`;

export default Flex;
