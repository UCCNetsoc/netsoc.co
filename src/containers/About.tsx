import * as React from 'react';
import Box from '../components/Box';
import Header from '../components/Header';

export default function (): React.ReactElement {
  return (
    <div>
      <Header value="About" color="#0CEBD7" />
      <Box
        color="#0CEBD7"
        textColor="#286962"
        image="https://cdn.discordapp.com/attachments/701842871577346079/714895807161172048/poster.png"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Box>
      <Header value="Gaming" color="#0CCAF5" />
      <Box
        color="#0CCAF5"
        textColor="#0c5b6d"
        image="https://cdn.discordapp.com/attachments/701842871577346079/714895807161172048/poster.png"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Box>
      <Header value="Tech" color="#007BDE" />
      <Box
        color="#007BDE"
        image="https://cdn.discordapp.com/attachments/701842871577346079/714895807161172048/poster.png"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum
        </p>
      </Box>
    </div>
  );
}
