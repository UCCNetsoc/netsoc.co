import * as React from 'react';
import styled from 'styled-components';
import { API_URL } from '../config';

interface IMembers {
  count: number;
}

interface RootProps {}
const Root = styled.div<RootProps>`
  background: #007bde;
  margin-top: -2px;
  margin: 0;
  padding: 0;
  padding: 50px 10%;
  & span {
    font-family: 'Lato', sans-serif;
    color: #fff;
    font-size: 1.5em;
  }
  & strong {
    text-shadow: 0px 0px 10px #0000007a;
  }
  @media screen and (max-width: 800px) {
    padding: 30px 10%;
    & span {
      font-size: 1em;
    }
  }
`;
export default function (): React.ReactElement {
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`${API_URL}/getMembers`);
        setNumber(((await data.json()) as IMembers).count);
      } catch ({ message }) {
        console.error(message);
      }
    })();
  }, []);
  return (
    <Root>
      <span>
        The current number of members in our Discord server is:{' '}
        <strong>{number}</strong>
      </span>
    </Root>
  );
}
