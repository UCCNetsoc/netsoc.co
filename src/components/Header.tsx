import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  color: string;
}
const Root = styled.div<RootProps>`
  background: #fff;
  height: 56px;
  & span {
    font-family: 'Lato', sans-serif;
    color: ${(props) => props.color};
  }
`;

export interface HeaderProps extends RootProps {
  value: string;
}
export default function (props: HeaderProps): React.ReactElement<HeaderProps> {
  return (
    <Root color={props.color}>
      <span>{props.value}</span>
    </Root>
  );
}
