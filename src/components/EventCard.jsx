import { GatsbyImage, getImage } from 'gatsby-plugin-image';
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

  return (
    <ItemContainer>
      <EventTitle>
        {date} | {locationName}
      </EventTitle>
      <Card
        href={ticketUrl ? ticketUrl : showUrl}
        target="_blank"
        rel="noreferrer">
        <GatsbyImage image={imagePath} alt={title} />
        <CardButton>
          <Button
            style={{
              width: '100%',
              textAlign: 'center',
              borderRadius: '0 0 4px 4px',
            }}
            isLink
            href={ticketUrl ? ticketUrl : showUrl}
            target="_blank"
            rel="noreferrer"
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
`;

const Card = styled.a`
  position: relative;
  cursor: pointer;
  width: 300px;
  display: block;

  &:hover {
    transform: scale(1.04);
  }

  transition: transform 250ms ease-in-out;
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
