import * as React from 'react';
import styled from 'styled-components';
import imgMain from '../../public/img/1.jpg';

interface RootProps {}
const Root = styled.div<RootProps>`
  height: 85vh;
  overflow: hidden;
  width: 100%;
  box-shadow: inset 0px 0px 1000px 100px rgba(0, 0, 0, 0.78);
  z-index: 0;
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
  margin-top: 7vh;
  width: 100%;
  height: 75vh;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  padding: 20px 0;
  & h1 {
    font-family: 'Lato', sans-serif;
    text-transform: uppercase;
    color: #fff;
  }
  & > h1 {
    margin: 0;
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
    width: 100%;
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

  @media screen and (max-height: 800px) {
    & > h1 {
      font-size: 2em;
    }
    margin-top: 75px;
    & .event p {
      font-size: 0.7em;
    }
    & .event h1 {
      font-size: 1em;
    }
    & .event h2 {
      font-size: 0.7em;
    }
    & .event img {
      width: 75%;
      margin-top: 1em;
      border-radius: 0.3em;
    }
  }

  @media screen and (max-width: 850px) {
    margin-top: 40px;
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
      font-size: 0.7em;
    }
    & .eventContainer {
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
    & .event {
      max-width: 60%;
    }
    & .event:last-child {
      display: none;
    }
  }
`;

export interface CarouselProps extends RootProps {}
export default function (
  props: CarouselProps
): React.ReactElement<CarouselProps> {
  return (
    <Root>
      <Background src={imgMain} alt="" />
      <div style={{ marginTop: '-80vh', textAlign: 'center' }}>
        <News>
          <h1>Events</h1>
          <div className="eventContainer">
            <div className="event">
              <h1>Gamer time</h1>
              <h2>1/1/1970</h2>
              <img
                src="https://scontent-ams4-1.xx.fbcdn.net/v/t1.0-9/87009171_3249079355153927_6271120072882782208_o.jpg?_nc_cat=103&_nc_sid=b386c4&_nc_ohc=ZXXfT7CQbpoAX-wtBKB&_nc_ht=scontent-ams4-1.xx&oh=580504501839e51aec91463abd4310f5&oe=5EB63593"
                alt=""
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem officia assumenda iure libero repellendus ad veritatis
                possimus, dolores eveniet. Labore laudantium tempora harum
                dignissimos sequi architecto accusantium itaque natus rerum.
              </p>
            </div>
            <div className="event">
              <h1>Tech Time</h1>
              <h2>3/1/1970</h2>
              <img
                src="https://scontent-amt2-1.xx.fbcdn.net/v/t1.0-9/83852108_3253488654712997_6761968224167788544_o.jpg?_nc_cat=108&_nc_sid=b386c4&_nc_ohc=v30OxkcNSzoAX8puEc6&_nc_ht=scontent-amt2-1.xx&oh=ec13e3244f1fc8f27af8142177e6416c&oe=5EB4ED2D"
                alt=""
              />
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Dolorem officia assumenda iure libero repellendus ad veritatis
                possimus, dolores eveniet. Labore laudantium tempora harum
                dignissimos sequi architecto accusantium itaque natus rerum.
              </p>
            </div>
          </div>
        </News>
      </div>
    </Root>
  );
}
