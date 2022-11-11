import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';

export default function EventCard({
  title,
  showUrl,
  ticketUrl,
  image,
  date,
  time,
  locationName,
}) {
  const imagePath = getImage(image.localFiles[0].childrenImageSharp[0]);

  const onClick = () => {
    if (ticketUrl) {
      window.open(ticketUrl, '_blank');
    } else {
      window.open(showUrl, '_blank');
    }
  };

  return (
    <ItemContainer>
      <EventTitle>
        {date} | {locationName}
      </EventTitle>
      <Card onClick={onClick}>
        <GatsbyImage image={imagePath} alt={title} />
        <CardButton>
          <Button
            onClick={onClick}
            text={ticketUrl ? 'Purchase Tickets' : 'View More'}
          />
        </CardButton>
      </Card>
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 250px; */
`;

const Card = styled.div`
  position: relative;
  cursor: pointer;
  width: 300px;
`;

const EventTitle = styled.h1`
  font-family: 'Exo' !important;
  font-size: 24px;
  font-weight: 600;
  color: #000;
`;

const CardButton = styled.div`
  position: absolute;
  left: 50%;
  bottom: -78px;
  cursor: pointer;
  z-index: 1;
  width: 100%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
`;
