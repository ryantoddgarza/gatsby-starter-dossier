import React from 'react';
import PropTypes from 'prop-types';
import DynamicPageModule from '~/components/common/DynamicPageModule';
import FlexRow from '~/components/common/FlexRow';
import ProjectCard from '~/components/common/ProjectCard';

const CategorizedList = ({ projects }) => (
  <div>
    <DynamicPageModule>
      <FlexRow>
        {projects.map(({ node: { title, date, banner, fields: { slug } } }) => (
          <ProjectCard
            key={title}
            slug={slug}
            title={title}
            date={date.split('-')[0]}
            banner={banner}
          />
        ))}
      </FlexRow>
    </DynamicPageModule>
  </div>
);

CategorizedList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default CategorizedList;
