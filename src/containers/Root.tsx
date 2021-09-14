import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';
import Carousel from './Carousel';
import Header from '../components/Header';
import News from './News';
import About from './About';
import * as Scroll from 'react-scroll';
import Services from './Services';
import GitHubGallery from './GitHubGallery';
import Footer from '../components/Footer';
import LinksSocial from './LinksSocial';
import Members from './Members';

import { GITHUB_GALLERY_URL, GITHUB_PAST_EVENTS_GALLERY_URL } from '../config';
import Calendar from './Calendar';

const Root = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function (props: RootProps): React.ReactElement<RootProps> {
  const [navShrink, setNavShrink] = React.useState(false);
  React.useEffect(() => {
    Scroll.Events.scrollEvent.register('begin', (to) => console.log(to));
    window.addEventListener('scroll', (e) => {
      setNavShrink(
        Scroll.scrollSpy.currentPositionY(document) > window.innerHeight - 300
      );
    });
    Scroll.scrollSpy.update();
  });
  return (
    <Root {...props}>
      <NavBar shrink={navShrink} />
      <Scroll.Element name="home" />
      <Carousel />
      <Scroll.Element name="news" />
      <Header value="News" color="#007BDE" />
      <News />
      <Calendar />
      <Scroll.Element name="about" />
      <About />
      <Scroll.Element name="services" />
      <Services />
      <Header value="Members" color="#007BDE" />
      <Members />
      <Scroll.Element name="gallery" />
      <GitHubGallery title="GALLERY" source={GITHUB_GALLERY_URL} />
      <GitHubGallery
        title="PAST EVENTS"
        source={GITHUB_PAST_EVENTS_GALLERY_URL}
      />
      <LinksSocial />
      <Footer />
    </Root>
  );
}
