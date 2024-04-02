/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

const React = require('react');
const { default: Layout } = require('./src/components/Layout');
const {
  default: ScrollToTopOnMount,
} = require('./src/components/ScrollToTopOnMount');

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return (
    <Layout {...props}>
      <ScrollToTopOnMount />
      {element}
    </Layout>
  );
};
