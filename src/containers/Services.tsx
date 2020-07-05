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
            <Subheader>Free netsoc.co domain</Subheader>
            <p>
              When you sign up to our services via{' '}
              <a href="http://admin.netsoc.co/"> Netsoc Admin</a> you'll a free{' '}
              <i>username.netsoc.co</i> domain that points to your website or
              blog.
            </p>
            <p>
              If you'd rather a custom domain, you can register one and follow
              the steps on Netsoc Admin to get it to point to your website.
            </p>
          </Box>
          <Box color="transparent" textColor="#fff">
            <Subheader>Free Server Space</Subheader>
            <p>
              Netsoc provide free hosting services available to all UCC students
              and societies. If you'd like to avail of these services, feel free
              to try them out via{' '}
              <a href="http://admin.netsoc.co/"> Netsoc Admin</a>. You can use
              the server space to host anything from HTML to Python CGI.
            </p>
          </Box>
          <Box color="transparent" textColor="#fff">
            <Subheader>Free Wordpress hosting</Subheader>
            <p>
              Netsoc provides free WordPress hosting which is available to all
              UCC students.
            </p>
            <p>
              WordPress is a free and open-source content management system that
              allows you to post and manage your content with ease. Whether its
              a blog or a portfolio, it can be managed with WordPress. Go to
              <a href="http://admin.netsoc.co/"> Netsoc Admin</a> to signup for
              free wordpress hosting.
            </p>
          </Box>
        </div>
      </Container>
    </div>
  );
}
