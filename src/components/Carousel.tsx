import * as React from 'react';
import styled from 'styled-components';

interface RootProps {}
const Root = styled.div<RootProps>``;

export interface CarouselProps extends RootProps {}
export default function(
  props: CarouselProps
): React.ReactElement<CarouselProps> {
  return <Root></Root>;
}
