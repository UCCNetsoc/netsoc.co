import * as React from 'react';
import styled from 'styled-components';
import loader from '../../public/img/loader.svg';
import { API_URL } from '../config';

interface RootProps {}
const Root = styled.div<RootProps>`
  background: #007bde;
  margin-top: -1px;
  & .loading {
    margin-left: calc(50% - 20px);
    width: 40px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  & .error {
    font-family: 'Lato', sans-serif;
    color: #fff;
    font-size: 1.5em;
    margin-left: 20%;
    line-height: 100px;
  }
  & .announce {
    margin-left: 20%;
    border-top: solid 5px #003e7073;
    overflow: hidden;
    position: relative;
  }
  & .announce h1 {
    font-family: 'Lato', sans-serif;
    font-size: 56px;
    padding-top: 10px;
    text-transform: uppercase;
    margin: 0;
    color: #003e70;
  }
  & .announce p {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    width: 60%;
    text-overflow: wrap;
  }
  & .announce .imgContent {
    width: 50%;
  }
  & .announce img {
    width: 40%;
    float: right;
    right: 0;
    position: absolute;
  }
  @media screen and (max-width: 850px) {
    & .announce img {
      display: none;
    }
    & .announce p,
    & .announce .imgContent {
      width: 90%;
    }
    & .announce {
      margin-left: 10%;
    }
    & .announce h1 {
      font-size: 36px;
    }
  }
`;

interface IAnnouncement {
  date: number;
  content: string;
  image_url?: string;
}

export interface NewsProps extends RootProps {}
export default function (props: NewsProps): React.ReactElement<NewsProps> {
  const [announcements, setAnnouncements] = React.useState<IAnnouncement[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`${API_URL}/announcements?q=3`);
        const recieved = (await data.json()) as IAnnouncement[];
        setAnnouncements(recieved);
        console.log(recieved);
        if (recieved.length === 0) {
          setError('No announcements currently available');
        }
      } catch ({ message }) {
        setError('An error occurred fetching announcements');
      }
      setLoading(false);
    })();
  }, []);
  return (
    <Root>
      <section className="eventContainer">
        {loading ? (
          <img className="loading" src={loader} alt="Loading" />
        ) : error ? (
          <span className="error">{error}</span>
        ) : (
          (() => {
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
                    {announce.image_url && (
                      <img src={announce.image_url} alt="" />
                    )}
                    <h1>{`${da} ${mo} ${ye}`}</h1>
                    <p className={announce.image_url && 'imgContent'}>
                      {announce.content}
                    </p>
                  </div>
                );
                output.push(element);
              } catch ({ message }) {
                console.error(message);
              }
            }
            return output;
          })()
        )}
      </section>
    </Root>
  );
}
