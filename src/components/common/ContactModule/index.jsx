import React from 'react';
import SectionHeading from '~/components/common/SectionHeading';
import ContactForm from '~/components/common/ContactForm';
import { Wrapper, Inner, FormContainer } from './styled';

const ContactModule = () => (
  <Wrapper>
    <Inner>
      <SectionHeading title="Contact" />
      <FormContainer>
        <ContactForm />
      </FormContainer>
    </Inner>
  </Wrapper>
);

export default ContactModule;
