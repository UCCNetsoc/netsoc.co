import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  color: string;
}
const Root = styled.div<RootProps>`
  color: #fff;
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.color};
  padding-left: 20%;
  margin-top: -1px;
  & p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    display: block;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    width: 50%;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
  & > img {
    width: 30%;
    float: right;
    right: 0;
    position: absolute;
  }
  @media screen and (max-width: 850px) {
    padding-left: 10%;
    & p {
      width: 90%;
    }
    & > img {
      width: 112%;
      position: relative;
    }
  }
`;

export interface BoxProps extends RootProps {
  value: string;
  image: string;
}
export default function (props: BoxProps): React.ReactElement<BoxProps> {
  return (
    <Root color={props.color}>
      <img src={props.image} alt="Image" />
      <p>{props.value}</p>
    </Root>
  );
}
