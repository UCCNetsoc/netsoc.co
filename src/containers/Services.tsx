import * as React from 'react';
import Box from '../components/Box';
import Header from '../components/Header';
import styled from 'styled-components';
import Background from '../../public/switch.jpg';
import AdminLogo from '../../public/img/admin-logo.svg';

const Subheader = styled.h1`
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 1.3em;
`;
const Container = styled.article`
  border-bottom: 5px solid #252525;
  background-image: url(${Background});
  background-repeat: no-repeat;
  border-top: 5px solid #252525;
  margin-top: -1px;
  display: flex;
  flex: 1 1 0px;
  flex-flow: column;
  & > div {
    backdrop-filter: blur(2px);
    background-image: linear-gradient(
      to left,
      transparent 20%,
      rgba(22,22,22,0.9) 80%
    );
  }

  & p {
    width: 100%;
  }

  overflow: hidden;
  & .bg {
    object-fit: cover;
    box-shadow: 0 0 4px rgba(0,0,0,0.25) inset;
    position: absolute;
    margin: -160px auto 0 auto;
    min-width: 100%;
    min-height: 100%;
    z-index: -1;
  };
  z-index: 2;
`;

// <div>
// <figure>
//   <img width="240" src={AdminLogo}/>
// </figure>
// <h1>
//   <a href="https://admin.netsoc.co">Sign Up</a>
// </h1>
// </div>

export default function (): React.ReactElement {
  return (
    <div>
      <Header value="Member Services" color="#fff" />
      <Container>
        <div style={{display:"grid", padding:"5%", marginBottom:"-1em", gridTemplateColumns: "1fr 1fr"}}>
          <div>
            <Box color="transparent" textColor="#fff">
              <Subheader>Free netsoc.co Domain</Subheader>
              <p>
                When you sign up to our services via{' '}
                <a href="http://admin.netsoc.co/"> Netsoc Admin</a> you'll get a free{' '}
                <i>username.netsoc.co</i> domain that points to your website or
                blog.
              </p>
              <p>
                If you'd rather a custom domain, you can register one and follow
                the steps on Netsoc Admin to get it to point to your website.
              </p>
              <Subheader>Free Server Space</Subheader>
              <div>
                <p>
                  Netsoc provides free hosting services available to all UCC students
                  and societies. If you'd like to avail of these services, feel free
                  to try them out via{' '}
                  <a href="http://admin.netsoc.co/"> Netsoc Admin</a>. You can use
                  the server space to host anything from HTML to Python CGI.
                </p>
              </div>
              <Subheader>Free WordPress Hosting</Subheader>
              <p>
                In addition to our free hosting services, Netsoc also makes it easy to set up your 
                own WordPress website, available to all UCC students and societies.
              </p>
              <p>
                WordPress is a free and open-source content management system that
                allows you to post and manage your content with ease. Whether it's
                a blog or a portfolio, it can be managed with WordPress. To signup for your free
                WordPress hosting, just go to
                <a href="http://admin.netsoc.co/"> Netsoc Admin</a> and create your account.
              </p>
            </Box>
          </div>
          <div style={{justifySelf:"center", alignSelf:"center"}}>
           <div style={{width: "50vh"}}>
              <div style={{textAlign:"center"}}>
                <img width="320" src={AdminLogo}/>
              </div>
              <h1 style={{textAlign:"center", fontFamily:"Roboto"}}>
                <a style={{fontSize:"1.35em", textDecoration:"underline"}} href="https://admin.netsoc.co">open</a>
              </h1>
          </div>
        </div>
      </Container>
    </div>
