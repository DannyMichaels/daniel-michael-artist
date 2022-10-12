import * as React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Hero />
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
