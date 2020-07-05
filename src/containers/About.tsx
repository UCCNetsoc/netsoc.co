import * as React from 'react';
import Box from '../components/Box';
import Header from '../components/Header';
import gaming from '../../public/img/gaming.jpg';
import tech from '../../public/img/tech.jpg';
import about from '../../public/img/netsoc.png';

export default function (): React.ReactElement {
  return (
    <div>
      <Header value="About" color="#0CEBD7" />
      <Box color="#0CEBD7" textColor="#286962" image={about}>
        <p>
          A member of the Irish Intersocs Community, UCC Netsoc (the Networking,
          Gaming and Technology Society) runs a digital services network and
          provides educational opportunities for its members as well as weekly
          gaming and social events.
        </p>
        <p>
          For more in depth information on our society and how it runs, visit
          our <a href="https://wiki.netsoc.co">wiki</a>
        </p>
      </Box>
      <Header value="Gaming" color="#0CCAF5" />
      <Box color="#0CCAF5" textColor="#0c5b6d" image={gaming}>
        <p>
          Every Tuesday is Gaming Night at Netsoc. We host many events such as
          General Gaming, Tournaments and many others!
        </p>
        <p>
          We are also a member of the Irish Collegiate Esports. We have our own
          esports team called the 'Netsoc Rebels' who compete in games such as
          CS:GO, Overwatch, Rainbow Six Siege and League of Legends.
        </p>
      </Box>
      <Header value="Tech" color="#007BDE" />
      <Box color="#007BDE" textColor="#012848" image={tech}>
        <p>
          We host weekly tech events, from informative tech talks to
          comprehensive, hands-on tutorials. Got an interest in web dev? Want to
          gain more insight into the technologies that power our lives? You're
          sure to enjoy our tech talks!
        </p>
        <p>
          Tech talks are a great way to showcase what you're passionate about.
          If you'd like to host one, feel free to let us know and we'd be more
          than happy to host you!
        </p>
        <p>
          As well as that, we've brought students to CIX, Cork's very own
          datacentre, took them to FOSDEM, a yearly developer's conference in
          Brussels, and even had cool nights out in Barcadia.
        </p>
      </Box>
    </div>
  );
}
