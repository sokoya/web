import React from 'react';
import ContentCard from './ContentCard';
import Scroller from './Scroller';

const CaseStudies = () => (
  <Scroller>
    <ContentCard
      logo="https://res.cloudinary.com/duyaimdq3/image/upload/v1726532347/ICON_-_GREEN_ok5aym.png"
      name="Gamepride"
      link="/case-studies/gamepride"
    />
    <ContentCard
      logo="https://connekit-eo.net/images/connekit-eo.png"
      name="Connekit-eo"
      link="/case-studies/connekit"
    />
  </Scroller>
);

export default CaseStudies;
