import * as React from 'react';
import styled from 'styled-components';
import imgMain from '../../public/img/1.jpg';

interface RootProps {}
const Root = styled.div<RootProps>`
  height: 80vh;
  overflow: hidden;
  width: 100%;
`;

const Background = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export interface CarouselProps extends RootProps {}
export default function(
  props: CarouselProps
): React.ReactElement<CarouselProps> {
  return (
    <Root>
      <Background src={imgMain} alt="" />
    </Root>
  );
}
