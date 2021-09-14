import * as React from 'react';
import Header from '../components/Header';
import styled from 'styled-components';

const Root = styled.div`
  background: #552cd0;
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
  return (
    <div>
      <Header value="Events Calendar" color="#552cd0" />
      <Root>
          <span>
            <a target="_blank" href="http://netsoc.co/go/calendar">Click here to add the events calendar to your Google Calendar.</a>
          </span>
      </Root>
    </div>
  );
}
