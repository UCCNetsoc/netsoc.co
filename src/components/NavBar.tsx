import * as React from 'react';
import styled from 'styled-components';
import logoHorizontal from '../../public/img/logo-horizontal.svg';
import Menu from './MenuIcon';
import { Link } from 'react-scroll';

interface RootProps {
  shrink: boolean;
  open?: boolean;
}
const Root = styled.nav<RootProps>`
  --height: 80px;
  --logoHeight: 30px;
  --fontSize: 1.5em;
  position: fixed;
  font-family: 'Bebas Neue', sans-serif;
  font-weight: 200;
  padding: 0 2em;
  padding-right: 0;
  display: flex;
  background-color: #1616164d;
  align-items: center;
  width: calc(100% - 2em);
  z-index: 100;
  height: ${({ shrink }) => (shrink ? '60px' : 'var(--height)')};
  transition: all 0.2s linear;
  border-bottom: 2px rgba(0, 0, 0, 0.3) solid;
  backdrop-filter: blur(30px); /* A nice to have but not necessary */
  justify-content: space-between;
  & .logo {
    height: ${({ shrink }) => (shrink ? '20px' : 'var(--logoHeight)')};
    width: auto;
  }
  & ul {
    list-style: none;
    display: flex;
    justify-content: space-between;
    padding: 0;
  }
  & ul a,
  & ul .link {
    overflow: hidden;
    cursor: pointer;
  }
  & li {
    padding: 1em 0.5em;
    vertical-align: middle;
    font-size: ${({ shrink }) => (shrink ? '1.2em' : 'var(--fontSize)')};
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
  & .discord {
    background: #003e70;
  }
  & .admin {
    background: #0c8df5;
  }
  & .admin:hover,
  & .discord:hover {
    background: #111;
  }
  & .menu {
    display: none;
    padding: 0 2em;
  }

  @media screen and (max-width: 950px) {
    --height: 60px;
    --logoHeight: 20px;
    --fontSize: 1.2em;
    & .menu {
      transition: 0.3s all ease-in-out;
      transform: ${({ open }) => (open ? 'rotateY(150deg)' : 'rotateY(0deg)')};
      display: flex;
      align-items: center;
    }
    & ul {
      position: fixed;
      display: block;
      width: 100%;
      background-color: #161616a8;
      box-shadow: ${({ open }) => (open ? '0 0 200px black' : 'none')};
      top: 62px;
      margin: 0;
      left: ${({ open }) => (open ? '0' : '100%')};
      height: 100vh;
      transition: 0.3s all ease-in-out;
    }
    & li {
      padding: 1em 1em;
      text-align: center;
    }
  }
`;

export interface NavBarProps extends RootProps {}
export default function (props: NavBarProps): React.ReactElement<NavBarProps> {
  const [open, setOpen] = React.useState(false); // For mobile drawer state
  return (
    <Root open={open} shrink={props.shrink}>
      <img className="logo" src={logoHorizontal} alt="NETSOC" />
      <ul>
        <Link
          to="home"
          duration={500}
          className="link"
          smooth={true}
          spy={true}
          onClick={() => setOpen(false)}
        >
          <li>HOME</li>
        </Link>
        <Link
          to="news"
          duration={500}
          className="link"
          smooth={true}
          spy={true}
          offset={-62}
          onClick={() => setOpen(false)}
        >
          <li>NEWS</li>
        </Link>
        <Link
          to="about"
          duration={500}
          className="link"
          smooth={true}
          spy={true}
          offset={-62}
          onClick={() => setOpen(false)}
        >
          <li>ABOUT</li>
        </Link>
        <Link
          to="services"
          duration={500}
          className="link"
          smooth={true}
          spy={true}
          offset={-62}
          onClick={() => setOpen(false)}
        >
          <li>SERVICES</li>
        </Link>
        <Link
          to="gallery"
          duration={500}
          className="link"
          smooth={true}
          spy={true}
          offset={-62}
          onClick={() => setOpen(false)}
        >
          <li>GALLERY</li>
        </Link>
        <a href="http://discord.netsoc.co/" target="_blank">
          <li className="discord">DISCORD</li>
        </a>
        <a href="http://admin.netsoc.co" target="_blank">
          <li className="admin">ADMIN PANEL</li>
        </a>
      </ul>
      <div onClick={() => setOpen(!open)} className="menu">
        <Menu size={30} color={'#fff'} />
      </div>
    </Root>
  );
}
