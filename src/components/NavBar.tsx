import * as React from 'react';
import styled from 'styled-components';

interface RootProps {}
const Root = styled.nav<RootProps>`
  padding: 0;
  position: fixed;
  background-color: #161616;
  width: 100%;
  height: 100px;
`;

export interface NavBarProps {}
export default function(props: NavBarProps): React.ReactElement<NavBarProps> {
  return <Root></Root>;
}
