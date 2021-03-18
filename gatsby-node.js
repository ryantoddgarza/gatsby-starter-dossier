const path = require('path');

const { createFilePath } = require(`gatsby-source-filesystem`);
const { PROJECTS_PATH, POSTS_PATH } = require('./src/constants');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~': path.resolve(__dirname, 'src'),
      },
      fallback: {
        path: require.resolve('path-browserify'),
      },
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader'],
        },
      ],
    },
  });
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'ProjectsJson') {
    const slug = createFilePath({ node, getNode, basePath: 'projects' });
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const { data, errors } = await graphql(`
    {
      allMarkdownRemark(filter: { frontmatter: { hide: { ne: true } } }) {
        edges {
          node {
            html
          }
        }
      }
      allProjectsJson(filter: { hide: { ne: true } }) {
        edges {
          node {
            category
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (errors) {
    reporter.panicOnBuild(errors);
    return;
  }

  const { allProjectsJson, allMarkdownRemark } = data;
  const projectEdges = allProjectsJson.edges;
  const postEdges = allMarkdownRemark.edges;

  const posts = path.resolve('./src/templates/Posts.jsx');
  const projects = path.resolve('./src/templates/Projects.jsx');
  const project = path.resolve('./src/templates/Project.jsx');
  const categorizedList = path.resolve('./src/templates/CategorizedList.jsx');

  const postsCount = postEdges.length;
  if (postsCount) {
    createPage({
      path: POSTS_PATH,
      component: posts,
      context: {},
    });
  }

  const projectCategoryMatrix = [];

  projectEdges.forEach(({ node }) => {
    const { category } = node;
    const {
      fields: { slug },
    } = node;

    if (typeof category === 'string') {
      projectCategoryMatrix.push(category);
    }

    const component = project;

    createPage({
      path: slug,
      component,
      context: {},
    });
  });

  const projectsCount = projectEdges.length;
  if (projectsCount) {
    createPage({
      path: PROJECTS_PATH,
      component: projects,
      context: {},
    });
  }

  const numberOfPages = (count) =>
    Array.from(new Array(count), (el, i) => i + 1);

  const projectCategories = [...new Set(projectCategoryMatrix)];

  projectCategories.forEach((category) => {
    const categorizedProjectCount = projectEdges.reduce(
      (count, { node: { category: projectCategory } }) => {
        if (projectCategory !== null && projectCategory.includes(category)) {
          return count + 1;
        }

        return count;
      },
      0
    );
    const categorizedListPages = numberOfPages(categorizedProjectCount);

    categorizedListPages.forEach(() => {
      createPage({
        path: `/${category}`,
        component: categorizedList,
        context: {},
      });
    });
  });
};
