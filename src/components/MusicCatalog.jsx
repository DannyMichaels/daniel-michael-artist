import React from 'react';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import SpotifyEmbed from './SpotifyEmbed';
import SoundcloudEmbed from './SoundcloudEmbed';
import AppleMusicEmbed from './AppleMusicEmbed';

function MusicCatalog() {
  return (
    <section className="page-section music">
      <div className="inner-column">
        <SectionTitle title="Music" />

        <Grid>
          <SpotifyEmbed />
          <SoundcloudEmbed />
          <AppleMusicEmbed />
        </Grid>
      </div>
    </section>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-gap: 20px;
  margin-top: 48px;
`;

export default MusicCatalog;
