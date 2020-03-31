import * as React from 'react';
import styled from 'styled-components';
import logoHorizontal from '../../public/img/logo-horizontal.svg';

interface RootProps {
  shrink: boolean;
}
const Root = styled.nav<RootProps>`
  position: fixed;
  padding: 0 2em;
  display: flex;
  background-color: #1616164d;
  align-items: center;
  width: 100%;
  height: ${({ shrink }) => (shrink ? '60px' : '100px')};
  transition: all 0.2s linear;
  border-bottom: 5px #0c8df5 solid;
  backdrop-filter: blur(30px); /* A nice to have but not necessary */
  & .logo {
    height: ${({ shrink }) => (shrink ? '20px' : '40px')};
    width: auto;
  }
`;

export interface NavBarProps extends RootProps {}
export default function(props: NavBarProps): React.ReactElement<NavBarProps> {
  return (
    <Root shrink={props.shrink}>
      <img className="logo" src={logoHorizontal} alt="NETSOC" />
    </Root>
  );
}
