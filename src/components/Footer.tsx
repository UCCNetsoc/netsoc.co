import * as React from 'react';
import styled from 'styled-components';
import logo from '../../public/img/logo-horizontal.svg';
import github from '../../public/img/social/github.svg';
import twitter from '../../public/img/social/twitter.svg';
import facebook from '../../public/img/social/facebook.svg';
import instagram from '../../public/img/social/instagram.svg';

const Root = styled.footer`
  background: #353a40;
  padding: 10px 50px;
  color: #fff;
  & .logo {
    height: 18px;
    flex-grow: 1;
    position: absolute;
    left: 55px;
  }
  & > div {
    border-bottom: 2px solid #2f3338;
    margin: 10px 0;
  }
  & .social {
    color: #fff;
    width: 25px;
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
  }
`;

export interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function (props: FooterProps) {
  return (
    <Root {...props}>
      <div></div>
      <nav>
        <a
          href="https://github.com/UCCNetsoc/"
          target="_blank"
          title="@UCCNetsoc"
        >
          <img className="social" src={github} alt="" />
        </a>
        <a
          href="https://www.twitter.com/UCCNetsoc"
          target="_blank"
          title="@UCCNetsoc"
        >
          <img className="social" src={twitter} alt="" />
        </a>
        <a
          href="https://www.facebook.com/NetsocUCC/"
          target="_blank"
          title="@NetsocUCC"
        >
          <img className="social" src={facebook} alt="" />
        </a>
        <a
          href="https://www.instagram.com/uccnetsoc/"
          target="_blank"
          title="@UCCNetsoc"
        >
          <img className="social" src={instagram} alt="" />
        </a>
        <img className="logo" src={logo} alt="NETSOC" />
      </nav>
    </Root>
  );
}
