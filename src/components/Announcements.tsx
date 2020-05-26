import * as React from 'react';
import styled from 'styled-components';
import { API_URL } from '../config';

interface RootProps {}
const Root = styled.div<RootProps>`
  background: #007bde;
  margin-top: -1px;
  & .announce {
    margin-left: 20%;
  }
  & .announce h1 {
    font-family: 'Lato', sans-serif;
    font-size: 56px;
    text-transform: uppercase;
    margin: 0;
    color: #003e70;
  }
  & .announce p {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    width: 80%;
    text-overflow: wrap;
  }
`;

interface IAnnouncement {
  date: number;
  content: string;
  image_url?: string;
}

export interface AnnouncementsProps extends RootProps {}
export default function (
  props: AnnouncementsProps
): React.ReactElement<AnnouncementsProps> {
  const [announcements, setAnnouncements] = React.useState<IAnnouncement[]>([]);
  React.useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`${API_URL}/announcements?q=3`);
        const recieved = (await data.json()) as IAnnouncement[];
        setAnnouncements(recieved);
        console.log(recieved);
      } catch ({ message }) {
        console.error(message);
      }
    })();
  }, []);
  return (
    <Root>
      <section className="eventContainer">
        {(() => {
          const output: JSX.Element[] = [];
          for (let announce of announcements) {
            try {
              const date = new Date(announce.date * 1000);
              const ye = new Intl.DateTimeFormat('en', {
                year: 'numeric',
              }).format(date);
              const mo = new Intl.DateTimeFormat('en', {
                month: 'short',
              }).format(date);
              const da = new Intl.DateTimeFormat('en', {
                day: '2-digit',
              }).format(date);
              const element = (
                <div key={announce.date} className="announce">
                  <h1>{`${da} ${mo} ${ye}`}</h1>
                  <p>{announce.content}</p>
                  {announce.image_url && (
                    <img src={announce.image_url} alt="" />
                  )}
                </div>
              );
              output.push(element);
            } catch ({ message }) {
              console.error(message);
            }
          }
          return output;
        })()}
      </section>
    </Root>
  );
}
