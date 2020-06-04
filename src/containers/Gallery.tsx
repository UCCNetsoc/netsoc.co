import * as React from 'react';
import styled from 'styled-components';
import {
  PhotoSwipe,
  PhotoSwipeGallery,
  PhotoSwipeGalleryItem,
} from 'react-photoswipe';
import { GITHUB_URL } from '../config';
import 'react-photoswipe/lib/photoswipe.css';
import Header from '../components/Header';
import loader from '../../public/img/loader.svg';

const Root = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  background: #111;
  border-top: solid 5px #111;
  margin-top: -1px;
  & .pswp-thumbnails {
    text-align: center;
    padding: 0 10%;
  }
  & .pswp-thumbnail {
    display: inline-block;
    padding: 0 3px;
  }
  & .pswp img {
    max-width: none;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }
  & .pswp__caption__center {
    text-align: center;
  }
  & .loading {
    width: 60px;
    position: relative;
    left: 50%;
    padding: 20px;
    margin-left: -30px;
  }
  @media screen and (max-width: 850px) {
    & .pswp-thumbnails {
      padding: 0;
    }
  }
`;
const Thumb = styled.img`
  height: 200px;
  width: auto;
  cursor: pointer;
`;

export interface GalleryProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function (
  props: GalleryProps
): React.ReactElement<GalleryProps> {
  const [items, setItems] = React.useState<PhotoSwipeGalleryItem[]>([]);
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    (async () => {
      try {
        const response = (await (await fetch(GITHUB_URL)).json()) as {
          name: string;
          download_url: string;
          type: string;
          path: string;
        }[];
        console.log(response);
        const tempArray: PhotoSwipeGalleryItem[] = [];
        for (let img of response) {
          console.log(img);
          if (img.type !== 'file') {
            continue;
          }
          let thumbIndex = img.download_url.lastIndexOf('/');
          let thumbnail = [
            img.download_url.slice(0, thumbIndex),
            '/thumbnails',
            img.download_url.slice(thumbIndex),
          ].join('');
          try {
            if ((await fetch(thumbnail)).status !== 200) {
              thumbnail = img.download_url;
            }
          } catch {
            thumbnail = img.download_url;
          }
          let item = {
            src: img.download_url,
            thumbnail,
            title: img.name.split('.')[0].replace('_', ' '),
            h: window.outerHeight,
          } as PhotoSwipeGalleryItem;
          tempArray.push(item);
        }
        setItems(tempArray);
      } catch ({ message }) {
        console.error(message);
      }
    })();
  }, []);
  const getThumbnailContent = (item: PhotoSwipeGalleryItem) => {
    return <Thumb src={item.thumbnail} onClick={() => setIsOpen(true)} />;
  };
  return (
    <div>
      <Header value="Gallery" color="#111" />
      <Root {...props}>
        {items.length ? (
          <PhotoSwipeGallery
            thumbnailContent={getThumbnailContent}
            isOpen={isOpen}
            items={items}
            options={{ showAnimationDuration: 0, hideAnimationDuration: 0 }}
            onClose={() => setIsOpen(false)}
          />
        ) : (
          <img className="loading" src={loader} alt="Loading" />
        )}
      </Root>
    </div>
  );
}
