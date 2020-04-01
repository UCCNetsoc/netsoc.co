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
  display: flex;
  background-color: #1616164d;
  align-items: center;
  width: calc(100% - 4em);
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
  }
  & li {
    width: 50%;
    padding-left: 1em;
    font-size: 2em;
    letter-spacing: 2px;
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
          <li></li>
        </a>
      </ul>
    </Root>
  );
}
