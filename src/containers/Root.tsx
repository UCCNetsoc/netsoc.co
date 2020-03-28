import * as React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const Root = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

export interface RootProps extends React.HTMLAttributes<HTMLDivElement> {}

export default function(props: RootProps): React.ReactElement<RootProps> {
  return (
    <Root {...props}>
      <NavBar />
    </Root>
  );
}
