import * as React from 'react';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import SectionTitle from '../components/SectionTitle';
import Seo from '../components/seo';

const IndexPage = () => (
  <Layout>
    <Hero />

    <section className="page-section">
      <div className="inner-column">
        <SectionTitle
          title="My video shows"
          subtitle="Watch the latest videos and subscribe on youtube."
        />
      </div>
    </section>
  </Layout>
);

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />;

export default IndexPage;
