import * as React from 'react';
import styled from 'styled-components';
import logo from '../../public/img/logo-horizontal.svg';
import github from '../../public/img/social/github.svg';
import twitter from '../../public/img/social/twitter.svg';
import facebook from '../../public/img/social/facebook.svg';
import instagram from '../../public/img/social/instagram.svg';

const Root = styled.footer`
  background: #353a40;
  padding: 16px 64px;
  color: #fff;
  & .logo {
    margin-top: 4px;
    height: 24px;
    flex-grow: 1;
    position: absolute;
    left: 10%;
    opacity: 0.8;
  }
  & > div {
    border-bottom: 2px solid #2f3338;
    margin: 10px 0;
    padding-bottom: 10px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-content: space-between;
  }
  & .social {
    color: #fff;
    width: 24px;
    margin-top: 4px;
    margin-right: 5px;
    filter: invert(100%);
    transition: all 0.3s;
  }
  & .social:hover {
    filter: invert(50%);
  }
  & > nav {
    display: flex;
    flex-flow: row-reverse;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 350px) {
    & > nav {
      margin-top: 50px;
      justify-content: center;
    }
    & .logo {
      margin-top: -60px;
      position: relative;
      left: 0;
    }
  }
`;

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function (props: FooterProps) {
  return (
    <Root {...props}>
      <nav>
        <a
          href="https://github.com/UCCNetsoc/"
          target="_blank"
          title="@UCCNetsoc"
        >
          <img className="social" src={github} alt="github" />
        </a>
        <a
          href="https://www.twitter.com/UCCNetsoc"
          target="_blank"
          title="@UCCNetsoc"
        >
          <img className="social" src={twitter} alt="github" />
        </a>
        <a
          href="https://www.facebook.com/NetsocUCC/"
          target="_blank"
          title="@NetsocUCC"
        >
          <img className="social" src={facebook} alt="github" />
        </a>
        <a
          href="https://www.instagram.com/uccnetsoc/"
          target="_blank"
          title="@UCCNetsoc"
        >
          <img className="social" src={instagram} alt="github" />
        </a>
        <img className="logo" src={logo} alt="NETSOC" />
      </nav>
    </Root>
  );
}
