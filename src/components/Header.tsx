import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  color: string;
}
const Root = styled.div<RootProps>`
  background: #fff;
  height: 56px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  & span {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    color: ${(props) => props.color};
    margin-left: 20%;
    font-size: 46px;
    display: block;
    position: relative;
    top: 10px;
  }
  @media screen and (max-width: 850px) {
    & span {
      margin-left: 0;
      text-align: center;
    }
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
