import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Hero from '~/components/common/Hero';
import SectionHeading from '~/components/common/SectionHeading';
import ProjectGrid from '~/components/common/ProjectGrid';
import ContactModule from '~/components/common/ContactModule';
import DynamicPageModule from '~/components/common/DynamicPageModule';
import ClientList from '~/components/common/ClientList';
import { POSTS_PATH, PROJECTS_PATH, title } from '~/constants';
import { Container, BtnLink } from './styled';
import heroImage from '~/resources/images/photo-landscape.jpg';

function FeaturedJSON(name) {
  this.filtered = name.filter(({ node: { featured } }) => featured === true);

  return this.filtered;
}

const Home = ({ allProjects }) => {
  const featuredProjects = new FeaturedJSON(allProjects);
  const featuredBlog = true;

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="og:title" content={title} />
      </Helmet>
      <DynamicPageModule>
        <Hero image={heroImage} />
      </DynamicPageModule>
      <Container>
        {featuredProjects ? (
          <>
            <SectionHeading title="Featured Projects" />
            <ProjectGrid projects={featuredProjects} />
            <BtnLink to={PROJECTS_PATH}>View all projects</BtnLink>
          </>
        ) : null}
        {featuredBlog ? (
          <>
            <SectionHeading title="Recent Posts" />
            <DynamicPageModule>
              <i>TODO: query for blog posts sorted by date</i>
            </DynamicPageModule>
            <BtnLink to={POSTS_PATH}>View all posts</BtnLink>
          </>
        ) : null}
        <SectionHeading title="Clients" />
        <DynamicPageModule>
          <ClientList projects={featuredProjects} />
        </DynamicPageModule>
      </Container>
      <ContactModule />
    </>
  );
};

export default Home;

Home.propTypes = {
  allProjects: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  allProjects: [],
};
