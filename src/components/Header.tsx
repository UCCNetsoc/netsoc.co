import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  color: string;
}
const Root = styled.div<RootProps>`
  background: rgb(33, 33, 33);
  height: 66px;
  margin: 0;
  padding: 0;
  overflow: hidden;
  & span {
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    color: ${(props) => props.color};
    margin-left: 10%;
    font-size: 56px;
    display: block;
    position: relative;
    top: 10px;
  }
  @media screen and (max-width: 850px) {
    height: 40px;
    & span {
      margin-left: 0;
      font-size: 30px;
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
