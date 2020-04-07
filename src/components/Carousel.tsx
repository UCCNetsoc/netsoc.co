import * as React from 'react';
import styled from 'styled-components';
import imgMain from '../../public/img/1.jpg';
import logoImg from '../../public/img/logo.svg';

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
  margin-top: 100px;
  width: 200px;
`;

export interface CarouselProps extends RootProps {}
export default function (
  props: CarouselProps
): React.ReactElement<CarouselProps> {
  return (
    <Root>
      <Background src={imgMain} alt="" />
      <div style={{ marginTop: '-80vh', textAlign: 'center' }}>
        <Logo src={logoImg} />
      </div>
    </Root>
  );
}
