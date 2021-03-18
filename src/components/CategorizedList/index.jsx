import React from 'react';
import PropTypes from 'prop-types';
import SectionHeading from '~/components/common/SectionHeading';
import ProjectGrid from '~/components/common/ProjectGrid';
import titleCase from '~/utils/titleCase';
import { Wrapper } from './styled';

const CategorizedList = ({ data, location: { pathname } }) => {
  const [, category] = pathname.split('/');
  const { edges: allProjects } = data.allProjectsJson;
  const projects = allProjects.filter(
    ({ node: { category: c } }) => category === c,
  );

  return (
    <Wrapper>
      <SectionHeading title={titleCase(category)} />
      <ProjectGrid projects={projects} category={category} />
    </Wrapper>
  );
};

CategorizedList.propTypes = {
  data: PropTypes.shape({
    allProjectsJson: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default CategorizedList;
