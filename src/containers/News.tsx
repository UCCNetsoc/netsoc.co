import * as React from 'react';
import styled from 'styled-components';
import loader from '../../public/img/loader.svg';
import { Converter } from 'showdown';
import { API_URL } from '../config';

const converter = new Converter({
  simplifiedAutoLink: true,
  simpleLineBreaks: true,
  underline: true,
});
const replacer = (message: string): [string, boolean] => {
  const emojis = message.match(/<:[^:]*:([^>]*)>/);
  const emojisA = message.match(/<a:[^:]*:([^>]*)>/);
  const elem = (s: string) =>
    `<i class="emoji" style="background-image: url(${s});"></i>`;
  if (emojis) {
    return [
      message.replace(
        emojis[0],
        elem(`https://cdn.discordapp.com/emojis/${emojis[1]}.png`)
      ),
      true,
    ];
  } else if (emojisA) {
    return [
      message.replace(
        emojisA[0],
        elem(`https://cdn.discordapp.com/emojis/${emojisA[1]}.gif`)
      ),
      true,
    ];
  }
  return [message, false];
};

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
  & .announce .emoji {
    width: 20px;
    height: 20px;
    background-size: 100%;
    display: inline-block;
    vertical-align: top;
  }
  & a {
    color: #92f5ff !important;
    opacity: 0.75;
    text-decoration: none;
  }
  & a:hover {
    text-decoration: underline;
    opacity: 1;
  }
  & a {
    transition: all 0.3s;
  }
  & .error {
    font-family: 'Lato', sans-serif;
    color: #fff;
    font-size: 1.5em;
    margin-left: 10%;
    line-height: 100px;
  }
  & .announce {
    margin-left: 10%;
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
  & .announce h2 {
    font-family: 'Lato', sans-serif;
    font-size: 36px;
    padding-top: 10px;
    text-transform: uppercase;
    margin: 0;
    color: #005ca7;
  }
  & .announce > p {
    font-family: 'Roboto', sans-serif;
    color: #fff;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
    width: 80%;
    text-overflow: wrap;
  }
  & .announce .imgContent {
    width: 50%;
  }
  & .announce img {
    width: 55vh;
    position: absolute;
    right: 25%;
    top: 50%;
    transform: translate(50%,-50%);
    border: solid 5px #003e7029;
  }
  @media screen and (max-width: 850px) {
    & .announce img {
      display: none;
    }
    & .announce > p,
    & .announce .imgContent {
      width: 90%;
    }
    & .announce {
      margin-left: 10%;
    }
    & .announce h1 {
      font-size: 36px;
    }
    & .announce h2 {
      font-size: 16px;
    }
    & .error {
      margin-left: 10%;
      font-size: 0.8em;
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
        const data = await fetch(`${API_URL}/announcements?q=5`);
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
            for (let i = 0; i < announcements.length; i++) {
              try {
                const announce = announcements[i];
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
                let str = announce.content;
                if (str.includes("<#")) {
                  str = str.replace(/\<#\d+>/g, "<a href='http://discord.netsoc.co/'>Discord</a>")
                }
                str = str.charAt(0).toUpperCase() + str.slice(1)
                let changed = true;
                while (changed) {
                  [str, changed] = replacer(str);
                }
                str = converter.makeHtml(str);
                const h = new Intl.DateTimeFormat('en', {
                  hour: '2-digit',
                  hour12: false,
                }).format(date);
                const min = new Intl.DateTimeFormat('en', {
                  minute: '2-digit',
                  hour12: false,
                }).format(date);
                let dateHead = null;
                let timeHead = (
                  <h2>{`${('0' + h).slice(-2)} : ${('0' + min).slice(-2)}`}</h2>
                );
                if (
                  (i == 0 &&
                    String(announcements[i].date).substring(0, 5) !=
                      String(announcements[i + 1].date).substring(0, 5)) ||
                  (i == announcements.length - 1 &&
                    String(announcements[i].date).substring(0, 5) !=
                      String(announcements[i - 1].date).substring(0, 5)) ||
                  ((i!=0 && (String(announcements[i].date).substring(0, 5) !=
                      String(announcements[i - 1].date).substring(0, 5))) && 
                  ((i!=announcements.length - 1 && String(announcements[i].date).substring(0, 5) !=
                      String(announcements[i + 1].date).substring(0, 5))))
                ) {
                  timeHead = null;
                }
                if (
                  i == 0 ||
                  String(announcements[i].date).substring(0, 5) !=
                    String(announcements[i - 1].date).substring(0, 5)
                ) {
                  dateHead = <h1>{`${da} ${mo} ${ye}`}</h1>;
                }
                const element = (
                  <div key={announce.date} className="announce">
                    {announce.image_url && (
                      <img src={announce.image_url} alt="Announcement" />
                    )}
                    {dateHead}
                    {timeHead}
                    <p
                      className={announce.image_url && 'imgContent'}
                      dangerouslySetInnerHTML={{ __html: str }}
                    ></p>
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
