import * as React from 'react';
import Box from '../components/Box';
import Header from '../components/Header';
import styled from 'styled-components';
import Background from '../../public/servers.mp4';
import AdminLogo from '../../public/img/admin-logo.svg';

const Subheader = styled.h1`
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 1.3em;
  color: #0ccaf5;
`;
const Container = styled.article`
  border-bottom: 5px solid #252525;
  border-top: 5px solid #252525;
  margin-top: -1px;
  display: flex;
  flex: 1 1 0px;
  flex-flow: column;
  & > div {
    background-image: linear-gradient(
      to left,
      transparent 20%,
      rgba(22, 22, 22, 0.9) 80%
    );
    display: grid;
    padding: 5%;
    margin-bottom: -1em;
    grid-template-columns: 1fr 1fr;
  }

  & p {
    width: 100%;
  }
  & p a {
    color: #0ccaf5;
  }

  overflow: hidden;
  & .bg {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -1000;
  }
  z-index: 2;
  @media screen and (max-width: 950px) {
    & > div {
      grid-template-columns: none;
    }
    & .admin {
      display: none;
    }
  }
`;

export default function (): React.ReactElement {
  return (
    <div>
      <Header value="Member Services" color="#fff" />
      <Container>
        <video className="bg" loop autoPlay muted>
          <source src={Background} type="video/mp4" />
        </video>
        <div>
          <div>
            <Box color="transparent" textColor="#fff">
              <Subheader>Free netsoc.co Domain</Subheader>
              <p>
                When you sign up to our services via{' '}
                <a href="http://admin.netsoc.co/"> Netsoc Admin</a> you'll get a
                free <i>username.netsoc.co</i> domain that points to your
                website or blog.
              </p>
              <p>
                If you'd rather a custom domain, you can register one and follow
                the steps on Netsoc Admin to get it to point to your website.
              </p>
              <Subheader>Free Game Server Hosting</Subheader>
              <div>
                <p>
                  Netsoc provides free <b>game server hosting</b> available to
                  all Netsoc members. We offer premade server templats for games
                  such as <i>Minecraft</i>, <i>Rust</i>, <i>Terraria</i>,{' '}
                  <i>Counter Strike: Global Offensive</i> and many more.
                </p>
                <p>
                  Head on over to{' '}
                  <a href="http://games.netsoc.co/"> Netsoc Games</a> to get
                  started!
                </p>
              </div>
              <Subheader>Free Server Space</Subheader>
              <div>
                <p>
                  Netsoc provides free hosting services available to all UCC
                  students and societies. If you'd like to avail of these
                  services, feel free to try them out via{' '}
                  <a href="http://admin.netsoc.co/"> Netsoc Admin</a>. You can
                  use the server space to host anything from HTML to Python CGI.
                </p>
              </div>
              <Subheader>Free WordPress Hosting</Subheader>
              <p>
                In addition to our free hosting services, Netsoc also makes it
                easy to set up your own WordPress website, available to all UCC
                students and societies.
              </p>
              <p>
                WordPress is a free and open-source content management system
                that allows you to post and manage your content with ease.
                Whether it's a blog or a portfolio, it can be managed with
                WordPress. To signup for your free WordPress hosting, just go to
                <a href="http://admin.netsoc.co/"> Netsoc Admin</a> and create
                your account.
              </p>
            </Box>
          </div>
          <div
            className="admin"
            style={{ justifySelf: 'center', alignSelf: 'center' }}
          >
            <div style={{ width: '50vh' }}>
              <div style={{ textAlign: 'center' }}>
                <img width="320" src={AdminLogo} alt="Netsoc Admin"/>
              </div>
              <h1 style={{ textAlign: 'center', fontFamily: 'Roboto' }}>
                <a
                  style={{ fontSize: '1.35em', textDecoration: 'underline' }}
                  href="https://admin.netsoc.co"
                >
                  open
                </a>
              </h1>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
