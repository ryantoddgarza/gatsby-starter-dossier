import React, { Children, cloneElement } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import App from '~/components/App';

const Layout = ({ children, location }) => {
  const { allProjectsJson } = useStaticQuery(graphql`query SiteQuery {
  allProjectsJson(filter: {hide: {ne: true}}, sort: {fields: [date], order: DESC}) {
    edges {
      node {
        title
        date
        category
        featured
        banner {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        fields {
          slug
        }
      }
    }
  }
}
`);

  const { edges: allProjects } = allProjectsJson;

  const projectCategories = allProjects.reduce(
    (categories, { node }) => {
      const { category } = node;

      if (category === null) {
        return categories;
      }

      const [{ length: total }] = categories;
      const categoryIndex = categories.findIndex(({ key }) => key === category);

      if (categoryIndex === -1) {
        return [
          { key: '__ALL__', length: total + 1 },
          ...categories.slice(1),
          { key: category, length: 1 },
        ];
      }

      return [
        { key: '__ALL__', length: total + 1 },
        ...categories.slice(1, categoryIndex),
        { key: category, length: categories[categoryIndex].length + 1 },
        ...categories.slice(categoryIndex + 1),
      ];
    },
    [{ key: '__ALL__', length: 0 }]
  );

  const childrenWithProps = Children.map(children, (child) =>
    cloneElement(child, { allProjects })
  );

  return (
    <App location={location} projectCategories={projectCategories}>
      {childrenWithProps}
    </App>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape({}).isRequired,
};

export default Layout;
