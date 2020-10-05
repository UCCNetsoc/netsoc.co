import * as React from 'react';
import styled from 'styled-components';
import imgMain from '../../public/img/1.jpg';
import logo from '../../public/img/logo.svg';
import loader from '../../public/img/loader.svg';
import { Converter } from 'showdown';
import { API_URL } from '../config';

const converter = new Converter({ simplifiedAutoLink: true });

interface RootProps {}
const Root = styled.div<RootProps>`
  height: 85vh;
  overflow: hidden;
  width: 100%;
  box-shadow: inset 0px 0px 1000px 100px rgba(0, 0, 0, 0.78);
  z-index: 0;
  & .loading {
    position: relative;
    top: 30vh;
    height: 6vh;
  }
  & .logo {
    position: relative;
    top: 20vh;
    height: 30vh;
    filter: drop-shadow(rgba(0, 0, 0, 0.5) 0px 0px 15px);
  }
`;

const Background = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  z-index: -100;
  position: relative;
`;
const Logo = styled.img`
  width: 300px;
  display: inline-block;
`;
const News = styled.div`
  width: 100%;
  height: 77vh;
  margin-top: 30px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 10px 0;
  & a:hover {
    color: #0cebd7;
  }
  & a {
    transition: all 0.3s;
  }
  & .error {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: #fff;
    top: 10vh;
    font-size: 2em;
    position: relative;
  }
  & h1 {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: #fff;
  }
  & > h1 {
    margin: 0;
    margin-top: 2vh;
    position: relative;
    font-size: 4em;
  }
  & .eventContainer {
    display: flex;
    justify-content: space-evenly;
    width: 80%;
    margin: auto;
  }
  & .event {
    color: #fff;
    font-family: 'Roboto', sans-serif;
    text-align: center;
    max-width: 30%;
  }
  & .event img {
    max-width: 100%;
    max-height: 30vh;
    margin-top: 1em;
    border-radius: 0.3em;
  }
  & .event h1 {
    font-size: 2em;
    margin-bottom: 0;
  }
  & .event h2 {
    position: relative;
    font-style: italic;
    font-size: 1em;
    margin: 0;
  }
  & .event p {
    font-size: 0.95em;
  }
  & .event > p {
    height: 17vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: transparent;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #ffffff56;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #fff;
    }
  }
  @media screen and (max-height: 900px) {
    & > h1 {
      font-size: 2em;
    }
    & .event h1 {
      font-size: 1em;
    }
    & .event h2 {
      font-size: 0.7em;
    }
    & .event img {
      max-width: 75%;
      margin-top: 1em;
      border-radius: 0.3em;
    }
    & .event > p {
      height: 20vh;
    }
  }

  @media screen and (max-width: 850px) {
    & > h1 {
      font-size: 2em;
    }
    & .event h1 {
      font-size: 1em;
    }
    & .event h2 {
      font-size: 0.7em;
    }
    & .event p {
      font-size: 0.9em;
    }
    & .eventContainer {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    & .event {
      max-width: 60%;
    }
    & .event:nth-child(2) {
      display: none;
    }
  }
`;

interface IEvent {
  title: string;
  description: string;
  image_url: string;
  date: number;
}

export interface CarouselProps extends RootProps {}
export default function (
  props: CarouselProps
): React.ReactElement<CarouselProps> {
  const [events, setEvents] = React.useState<IEvent[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState('');
  React.useEffect(() => {
    (async () => {
      try {
        const data = await fetch(`${API_URL}/events?q=2`);
        const recieved = (await data.json()) as IEvent[];
        setEvents(recieved);
        console.log(recieved);
        if (recieved.length === 0) {
          setError('logo');
        }
      } catch ({ message }) {
        console.error(message);
        setError('An error occurred fetching events');
      }
      setLoading(false);
    })();
  }, []);
  return (
    <Root>
      <Background src={imgMain} alt="" />
      <div style={{ marginTop: '-81vh', textAlign: 'center' }}>
        {loading ? (
          <img className="loading" src={loader} alt="Loading" />
        ) : error === 'logo' ? (
          <img className="logo" src={logo} alt="NETSOC" />
        ) : (
          <News>
            <h1>Events</h1>
            {error ? (
              <span className="error">{error}</span>
            ) : (
              <div className="eventContainer">
                {(() => {
                  const output: JSX.Element[] = [];
                  for (let event of events) {
                    try {
                      const date = new Date(event.date * 1000);
                      const element = (
                        <div key={event.date} className="event">
                          <h1>{event.title}</h1>
                          <h2>
                            {(date.getMonth() > 8
                              ? date.getMonth() + 1
                              : '0' + (date.getMonth() + 1)) +
                              '/' +
                              (date.getDate() > 9
                                ? date.getDate()
                                : '0' + date.getDate()) +
                              '/' +
                              date.getFullYear()}
                          </h2>
                          <img src={event.image_url} alt="" />
                          <p
                            dangerouslySetInnerHTML={{
                              __html: converter.makeHtml(event.description),
                            }}
                          ></p>
                        </div>
                      );
                      output.push(element);
                    } catch ({ message }) {
                      console.error(message);
                    }
                  }
                  return output;
                })()}
              </div>
            )}
          </News>
        )}
      </div>
    </Root>
  );
}
