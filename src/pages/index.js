import * as React from 'react';
import Contact from '../components/Contact';
import Gallery from '../components/Gallery';
import Hero from '../components/Hero';
import Seo from '../components/seo';
import Videos from '../components/Videos';
import MusicCatalog from '../components/MusicCatalog';
import ScrollToTopOnMount from '../components/ScrollToTopOnMount';

const IndexPage = () => (
  <>
    <ScrollToTopOnMount />

    <Hero />

    <PageBreak />

    <Videos />

    <PageBreak />

    <MusicCatalog />

    <PageBreak />

    <Gallery />

    <PageBreak />

    <Contact />
  </>
);

const PageBreak = () => (
  <div style={{ flexGrow: 1, display: 'flex', padding: '50px' }}></div>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo />;

export default IndexPage;
