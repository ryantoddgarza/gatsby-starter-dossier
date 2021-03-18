import React from 'react';
import ContactModule from '~/components/common/ContactModule';
import DynamicPageModule from '~/components/common/DynamicPageModule';
import profilePhoto from '~/resources/images/profile.jpg';
import { ProfilePhoto, Wrapper, Title } from './styled';

import AboutMd from './about.md';

const About = () => (
  <>
    <Wrapper>
      <DynamicPageModule>
        <Title>About</Title>
      </DynamicPageModule>
      <DynamicPageModule>
        <ProfilePhoto>
          <img src={profilePhoto} alt="profile" />
        </ProfilePhoto>
        <article dangerouslySetInnerHTML={{ __html: AboutMd }} />
      </DynamicPageModule>
    </Wrapper>
    <ContactModule />
  </>
);
export default About;
