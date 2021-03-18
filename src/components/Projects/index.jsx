import React from 'react';
import PropTypes from 'prop-types';
import SectionHeading from '~/components/common/SectionHeading';
import ProjectGrid from '~/components/common/ProjectGrid';
import { Wrapper } from './styled';

const Projects = ({ data }) => {
  const allProjects = data.allProjects.edges;

  return (
    <Wrapper>
      <SectionHeading title="Projects" />
      <ProjectGrid projects={allProjects} />
    </Wrapper>
  );
};

export default Projects;

Projects.propTypes = {
  data: PropTypes.shape({
    allProjects: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
};
