import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import DynamicPageModule from '~/components/common/DynamicPageModule';
import SectionHeading from '~/components/common/SectionHeading';
import VideoEmbed from '~/components/common/VideoEmbed';
import titleCase from '~/utils/titleCase';
import {
  Wrapper,
  ProjectInfoList,
  ContentRow,
  ContentCol,
  BannerImage,
} from './styled';

const Project = ({
  data: {
    project: { title, date, category, banner, video },
  },
}) => (
  <Wrapper>
    <SectionHeading title={title} />
    <main>
      <ContentRow>
        <ContentCol>
          <h4>Project Info</h4>
          <ProjectInfoList>
            <dt>Type</dt>
            <dd>{titleCase(category)}</dd>
            <dt>Date</dt>
            <dd>{date}</dd>
          </ProjectInfoList>
        </ContentCol>
        <ContentCol>
          {banner ? (
            <BannerImage>
              <GatsbyImage image={banner.childImageSharp.gatsbyImageData} alt="banner" />
            </BannerImage>
          ) : null}
        </ContentCol>
      </ContentRow>
      {video ? (
        <DynamicPageModule>
          <VideoEmbed src={video} title={title} />
        </DynamicPageModule>
      ) : null}
    </main>
  </Wrapper>
);

Project.propTypes = {
  data: PropTypes.shape({
    project: PropTypes.shape({
      title: PropTypes.string,
      date: PropTypes.string,
      category: PropTypes.string,
      banner: PropTypes.shape({
        childImageSharp: PropTypes.shape({
          fluid: PropTypes.shape({}),
        }),
      }),
      video: PropTypes.string,
      tracks: PropTypes.arrayOf(PropTypes.string),
    }),
  }).isRequired,
};

export default Project;
