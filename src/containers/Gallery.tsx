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
const Root = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  background: #111;
  border-top: solid 5px #111;
  margin-top: -1px;
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
        }[];
        for (let img of response) {
          let block = new Image();
          block.src = img.download_url;
          block.onload = () => {
            let thumbIndex = img.download_url.lastIndexOf('/');
            let thumbnail = [
              img.download_url.slice(0, thumbIndex),
              '/thumbnails',
              img.download_url.slice(thumbIndex),
            ].join('');
            let item = {
              src: img.download_url,
              thumbnail,
              title: img.name.split('.')[0].replace('_', ' '),
              w: block.width,
              h: block.height,
            } as PhotoSwipeGalleryItem;
            setItems(items.concat(item));
          };
        }
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
        <PhotoSwipeGallery
          thumbnailContent={getThumbnailContent}
          isOpen={isOpen}
          items={items}
          options={{}}
        ></PhotoSwipeGallery>
      </Root>
    </div>
  );
}
