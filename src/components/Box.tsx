import * as React from 'react';
import styled from 'styled-components';

interface RootProps {
  color: string;
  textColor?: string;
  padding?: boolean;
  image?: string;
  offsetColor?: string;
}
const Root = styled.div<RootProps>`
  color: ${(props) => props.textColor ?? '#fff'};
  margin: 0;
  padding: 0;
  overflow: hidden;
  position: relative;
  background: ${(props) => props.color};
  padding-left: ${(props) => (props.padding ? '10%' : '10%')};
  margin-top: -1px;
  display: flex;
  & p {
    margin: 0;
    font-size: 1.08em;
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
  & > .image {
    width: 30%;
    height: 100%;
    float: right;
    right: 0;
    position: absolute;
    bottom: 0;
    filter: grayscale(100%) contrast(1);
    mix-blend-mode: multiply;
    background-image: linear-gradient(
        -90deg,
        transparent,
        ${(props) => props.offsetColor}
      ),
      url(${(props) => props.image});
    background-size: 100%;
    background-position-y: bottom;
  }
  @media screen and (max-width: 850px) {
    padding-left: 10%;
    flex-direction: column;
    & p {
      width: 90%;
    }
    & > .image {
      background-image: url(${(props) => props.image});
      float: none;
      height: 300px;
      position: static;
      width: 130%;
      margin-left: -15%;
    }
  }
`;

export interface BoxProps extends RootProps {
  children?: Array<React.ReactText | JSX.Element> | JSX.Element;
  image?: string;
  offsetColor?: string;
}
export default function (props: BoxProps): React.ReactElement<BoxProps> {
  return (
    <Root
      color={props.color}
      textColor={props.textColor}
      padding={props.padding}
      image={props.image}
      offsetColor={props.offsetColor}
    >
      <section>{props.children}</section>
      {props.image && <div className="image"></div>}
    </Root>
  );
}
