import * as React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

interface ILink {
  name: string;
  url: string;
}

const links: ILink[] = [
  { name: 'Netsoc Wiki', url: 'https://wiki.netsoc.co/' },
  { name: 'Netsoc Cloud', url: 'https://netsoc.cloud' },
  { name: 'Netsoc Blog', url: 'https://blog.netsoc.co/' },
  { name: 'Our GitHub', url: 'https://github.com/UCCNetsoc/' },
  { name: 'Our Constitution', url: 'https://constitution.netsoc.co/' },
];

const Container = styled.article`
  display: flex;
  background: #252525;
  border-top: 5px solid #252525;
  width: min-content;
  margin-left: 8%;
  padding: 1em 0;
  & ul {
    margin: 0;
    width: 250px;
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
    padding: 0.75em 0;
    border-bottom: 1px rgba(233, 233, 233, 0.4) solid;
  }
  @media screen and (max-width: 1300px) {
    flex-direction: row;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    width: 70%;
    & ul {
      width: 100%;
    }
  }
`;

const SocialWrap = styled.section`
  display: flex;

  max-height: 480px;
  overflow: hidden;

  & * {
    height: 480px !important;
  }

  & > * {
    padding: 0 1em;
    width: 300px;
  }

  & .fb-page {
    border-radius: 8px !important;
  }

  @media screen and (max-width: 1400px) {
    & > * {
      width: auto;
    }
  }
  @media screen and (max-width: 1300px) {
    padding-top: 10px;
    & .fb-page {
      display: none;
    }
    & .twitter-timeline {
      display: none !important;
    }
    & :nth-child(n + 2) {
      padding: 0 1em;
      max-width: 0;
    }
  }
  @media screen and (max-width: 480px) {
    & * {
      display: none !important;
    }
  }
`;

export default function (): React.ReactElement {
  return (
    <div style={{ background: '#252525' }}>
      <Header value="Links / Social" color="#fff" />
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
        <SocialWrap>
          <div>
            <iframe
              src="https://discordapp.com/widget?id=248421213628530688&theme=dark"
              width="300"
              height="250"
              allowTransparency={true}
              frameBorder="0"
            ></iframe>
          </div>
          <div>
            <a
              className="twitter-timeline"
              data-width="300"
              data-height="250"
              data-dnt="true"
              data-theme="dark"
              href="https://twitter.com/UCCNetsoc?ref_src=twsrc%5Etfw"
            >
              Tweets by UCCNetsoc
            </a>
          </div>
        </SocialWrap>
      </Container>
    </div>
  );
}
