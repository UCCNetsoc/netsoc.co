import * as React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

interface ILink {
  name: string;
  url: string;
}

const links: ILink[] = [
  { name: 'Netsoc Admin', url: 'https://admin.netsoc.co/' },
  { name: 'GitHub', url: 'https://github.com/UCCNetsoc/' },
  { name: 'Wiki', url: 'https://wiki.netsoc.co/' },
  { name: 'Dev Blog', url: 'https://blog.netsoc.co/' },
  { name: 'Constitution', url: 'https://constitution.netsoc.co/' },
  { name: 'Minecraft Server', url: 'https://minecraft.netsoc.co/' },
  { name: 'HLM Nominations', url: 'https://hlm.netsoc.co/' },
  { name: 'Docker Registry', url: 'https://docker.netsoc.co/' },
];

const Container = styled.article`
  background: #252525;
  border-top: 5px solid #252525;
  margin-top: -1px;
  padding: 1em 0;
  & ul {
    margin: 0;
    padding: 0 20%;
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    font-size: 1.2em;
  }
  & a:hover {
    color: #0cebd7;
  }
  & a {
    transition: all 0.3s;
  }
  & li {
    list-style: none;
    padding: 0.3em 0;
    border-bottom: 2px #171616 solid;
  }
`;

export default function (): React.ReactElement {
  return (
    <div>
      <Header value="Links" color="#252525" />
      <Container>
        <ul>
          {(() => {
            const output: JSX.Element[] = [];
            for (let link of links) {
              output.push(
                <li key={link.url}>
                  <a href={link.url} target="_blank">
                    {link.name}
                  </a>
                </li>
              );
            }
            return output;
          })()}
        </ul>
      </Container>
    </div>
  );
}
