import * as React from "react";
import styled from "styled-components";

interface RootProps {}
const Root = styled.nav<RootProps>`
  padding: 0;
`;

export interface NavBarProps {}
export default function(props: NavBarProps): React.ReactElement<NavBarProps> {
  return <Root></Root>;
}
