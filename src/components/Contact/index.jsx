import React from 'react';
import ContactForm from '~/components/common/ContactForm';
import SectionHeading from '~/components/common/SectionHeading';
import { Wrapper, FormContainer } from './styled';

const About = () => (
  <Wrapper>
    <SectionHeading title="Contact" />
    <FormContainer>
      <ContactForm />
    </FormContainer>
  </Wrapper>
);

export default About;
