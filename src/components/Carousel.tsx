import * as React from 'react';
import styled from 'styled-components';
import imgMain from '../../public/img/1.jpg';
import logoImg from '../../public/img/logo-horizontal.svg';

interface RootProps {}
const Root = styled.div<RootProps>`
  height: 80vh;
  overflow: hidden;
  width: 100%;
  box-shadow: inset 0px 0px 1000px 100px rgba(0, 0, 0, 0.78);
  z-index: 0;
`;

const Background = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -100;
  position: relative;
`;
const Logo = styled.img`
  width: 300px;
  display: inline-block;
`;
const News = styled.div`
  margin-top: 100px;
  width: 100%;
  min-height: 100px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 20px;
  & h1 {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    left: 105px;
    margin: 0;
    position: relative;
    color: #fff;
    font-size: 1.5em;
  }
`;

export interface CarouselProps extends RootProps {}
export default function (
  props: CarouselProps
): React.ReactElement<CarouselProps> {
  return (
    <Root>
      <Background src={imgMain} alt="" />
      <div style={{ marginTop: '-80vh', textAlign: 'center' }}>
        <News>
          <Logo src={logoImg} />
          <h1>Events</h1>
        </News>
      </div>
    </Root>
  );
}
