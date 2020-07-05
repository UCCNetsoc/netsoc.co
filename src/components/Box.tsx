import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  color: string;
  textColor?: string;
  padding?: boolean;
}
const Root = styled.div<RootProps>`
  color: ${(props) => props.textColor ?? '#fff'};
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  background-color: ${(props) => props.color};
  padding-left: ${(props) => (props.padding ? '10%' : '20%')};
  margin-top: -1px;
  display: flex;
  & p {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    display: block;
    position: relative;
    margin-top: 30px;
    margin-bottom: 30px;
    width: ${(props) => (props.padding ? '80%' : '50%')};
    /* text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); */
  }
  & a {
    font-weight: bold;
    color: ${(props) => props.textColor ?? '#fff'};
  }
  & a:hover {
    text-decoration: underline;
  }
  & > img {
    width: 30%;
    float: right;
    right: 0;
    position: absolute;
    bottom: 0;
  }
  @media screen and (max-width: 850px) {
    padding-left: 10%;
    flex-direction: column;
    & p {
      width: 90%;
    }
    & > img {
      float: none;
      position: static;
      width: 130%;
      margin-left: -15%;
    }
  }
`;

export interface BoxProps extends RootProps {
  children?: Array<React.ReactText | JSX.Element> | JSX.Element;
  image?: string;
}
export default function (props: BoxProps): React.ReactElement<BoxProps> {
  return (
    <Root
      color={props.color}
      textColor={props.textColor}
      padding={props.padding}
    >
      <section>{props.children}</section>
      {props.image && <img src={props.image} alt="Image" />}
    </Root>
  );
}
