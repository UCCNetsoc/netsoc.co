import * as React from 'react';
import styled from 'styled-components';
import logoHorizontal from '../../public/img/logo-horizontal.svg';

interface RootProps {
  shrink: boolean;
}
const Root = styled.nav<RootProps>`
  position: fixed;
  font-family: 'Bebas Neue', sans-serif;
  padding: 0 2em;
  padding-right: 0;
  display: flex;
  background-color: #1616164d;
  align-items: center;
  width: calc(100% - 2em);
  height: ${({ shrink }) => (shrink ? '60px' : '100px')};
  transition: all 0.2s linear;
  border-bottom: 2px rgba(0, 0, 0, 0.3) solid;
  backdrop-filter: blur(30px); /* A nice to have but not necessary */
  justify-content: space-between;
  & .logo {
    height: ${({ shrink }) => (shrink ? '20px' : '40px')};
    width: auto;
  }
  & ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  & ul a {
    overflow: hidden;
  }
  & li {
    padding: 1em 0.5em;
    vertical-align: middle;
    font-size: ${({ shrink }) => (shrink ? '1.2em' : '2em')};
    letter-spacing: 2px;
    background: linear-gradient(
        90deg,
        rgba(0, 123, 222, 1) 0%,
        rgba(0, 123, 222, 1) 100%
      )
      no-repeat 0 110px;
    transition: all 0.15s ease-in-out;
  }
  & li:hover {
    background: linear-gradient(
        90deg,
        rgba(0, 123, 222, 1) 0%,
        rgba(0, 123, 222, 1) 100%
      )
      no-repeat 0 0;
  }
  & .discord,
  & .discord:hover {
    background: #003e70;
  }
  & .admin {
    background: #0c8df5;
  }
  & .admin:hover,
  & .discord:hover {
    background: #111;
  }
`;

export interface NavBarProps extends RootProps {}
export default function(props: NavBarProps): React.ReactElement<NavBarProps> {
  return (
    <Root shrink={props.shrink}>
      <img className="logo" src={logoHorizontal} alt="NETSOC" />
      <ul>
        <a href="#">
          <li>HOME</li>
        </a>
        <a href="#">
          <li>ABOUT</li>
        </a>
        <a href="#">
          <li>NEWS</li>
        </a>
        <a href="#">
          <li>SERVICES</li>
        </a>
        <a href="http://discord.netsoc.co/" target="_blank">
          <li className="discord">DISCORD</li>
        </a>
        <a href="http://admin.netsoc.co" target="_blank">
          <li className="admin">ADMIN PANEL</li>
        </a>
      </ul>
    </Root>
  );
}
