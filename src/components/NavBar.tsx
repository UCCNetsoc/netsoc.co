import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  shrink: boolean;
}
const Root = styled.nav<RootProps>`
  padding: 0;
  position: fixed;
  background-color: #1616164d;
  width: 100%;
  height: ${({ shrink }) => (shrink ? '60px' : '100px')};
`;

export interface NavBarProps extends RootProps {}
export default function(props: NavBarProps): React.ReactElement<NavBarProps> {
  return <Root shrink={props.shrink}></Root>;
}
