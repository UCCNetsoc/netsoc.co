import * as React from 'react';
import Box from '../components/Box';
import Header from '../components/Header';
import styled from 'styled-components';
import Background from '../../public/servers.mp4';

const Subheader = styled.h1`
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
`;
const Container = styled.article`
  border-bottom: 5px solid #252525;
  border-top: 5px solid #252525;
  margin-top: -1px;
  display: flex;
  flex: 1 1 0px;
  flex-flow: column;
  & > div {
    backdrop-filter: blur(4px);
  }
  & .bg {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1000;
  }
`;

export default function (): React.ReactElement {
  return (
    <div>
      <Header value="Services" color="#252525" />
      <Container>
        <video className="bg" loop autoPlay>
          <source src={Background} type="video/mp4" />
        </video>
        <div>
          <Box color="transparent" textColor="#fff">
            <Subheader>Free Server Space</Subheader>
            <p>
              Netsoc provide free hosting services available to all UCC students
              and societies. If you'd like to avail of these services, feel free
              to try them out via Netsoc Admin. You can use the server space to
              host anything from HTML to Python CGI.
            </p>
          </Box>
        </div>
        <div>
          <Box color="transparent" textColor="#fff">
            <Subheader>Free Wordpress hosting</Subheader>
          </Box>
        </div>
      </Container>
    </div>
  );
}
