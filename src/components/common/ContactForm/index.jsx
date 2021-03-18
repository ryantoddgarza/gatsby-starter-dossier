import React from 'react';
import { SUCCESS_PATH } from '~/constants';
import { Form } from './styled';

const ContactForm = () => (
  <Form name="contact" action={SUCCESS_PATH} method="POST">
    <fieldset>
      <label htmlFor="name" className="sr-only">
        Your name
      </label>
      <input
        type="text"
        id="name"
        name="user_name"
        required
        placeholder="Your Name"
      />
    </fieldset>
    <fieldset>
      <label htmlFor="email" className="sr-only">
        Your email address
      </label>
      <input
        type="email"
        id="email"
        name="user_email"
        required
        placeholder="Your Email Address"
      />
    </fieldset>
    <fieldset>
      <label htmlFor="email" className="sr-only">
        Your message
      </label>
      <textarea
        id="email"
        name="user_message"
        required
        placeholder="Type your Message Here...."
      />
    </fieldset>
    <fieldset>
      <button type="submit">Submit</button>
    </fieldset>
  </Form>
);

export default ContactForm;
