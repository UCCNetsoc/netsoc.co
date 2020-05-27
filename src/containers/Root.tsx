import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Carousel from './Carousel';
import Header from '../components/Header';
import News from './News';
import About from './About';

const Root = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function (props: RootProps): React.ReactElement<RootProps> {
  const [navShrink, setNavShrink] = React.useState(false);
  return (
    <Root {...props}>
      <NavBar shrink={navShrink} />
      <Carousel />
      <Header value="News" color="#007BDE" />
      <News />
      <Header value="About" color="#0CEBD7" />
      <About />
    </Root>
  );
}
