import * as React from 'react';
import Box from '../components/Box';
import Header from '../components/Header';
import styled from 'styled-components';
import Background from '../../public/servers.mp4';
import CloudLogo from '../../public/img/cloud-logo.svg';

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
              <Subheader>Free Cloud Hosting</Subheader>
              <div>
                <p>
                  Netsoc provides free Cloud hosting services available to all
                  UCC students and societies. If you'd like to avail of these
                  services, feel free to try them out via{' '}
                  <a href="http://netsoc.cloud/"> Netsoc Cloud</a>. You can
                  request free VPS's (Virtual Private Servers) or Containers.
                </p>
                <p>
                  These allow you to run whatever software stack you want on our
                  servers.
                </p>
              </div>
              <Subheader>Free netsoc.cloud Domains</Subheader>
              <p>
                When you sign up to our cloud services via{' '}
                <a href="http://netsoc.cloud/"> Netsoc Cloud</a> you'll be able
                to claim <i>*.netsoc.cloud</i> domains that point to your cloud
                instances.
              </p>
              <p>
                If you'd rather a custom domain, you can register one and follow
                the steps on Netsoc Cloud to get it to point to your instance.
              </p>
              <Subheader>Free Blog Hosting</Subheader>
              <p>
                We provide container templates that allows you to get up and
                running with a <b>WordPress</b> or <b>GhostCMS</b> instantly.
              </p>
              <Subheader>Free Game Server Hosting</Subheader>
              <div>
                <p>
                  Since we provide free containers, you can delpoy any game
                  server you want on our services by simply using the terminal
                  provided by Netsoc Cloud!
                </p>
              </div>
            </Box>
          </div>
          <div
            className="admin"
            style={{ justifySelf: 'center', alignSelf: 'center' }}
          >
            <div style={{ width: '50vh' }}>
              <div style={{ textAlign: 'center' }}>
                <img width="320" src={CloudLogo} alt="Netsoc Cloud" />
              </div>
              <h1 style={{ textAlign: 'center', fontFamily: 'Roboto' }}>
                <a
                  style={{ fontSize: '1.35em', textDecoration: 'underline' }}
                  href="https://netsoc.cloud"
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
