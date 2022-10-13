import * as React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/seo';
import Videos from '../components/Videos';

const IndexPage = () => (
  <Layout>
    <Hero />
    <PageBreak />
    <Videos />
  </Layout>
);

const PageBreak = () => (
  <div style={{ flexGrow: 1, display: 'flex', padding: '50px' }}></div>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
