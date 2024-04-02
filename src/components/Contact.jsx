import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';
import Form from './shared/Form';

function Contact() {
  return (
    <Wrapper className="page-section contact" id="contact-me">
      <div className="inner-column">
        <Form action="https://formspree.io/f/xqkjlnka" method="POST">
          <h1 className="form__title">CONTACT ME</h1>

          <div className="form__group">
            <label htmlFor="name" className="form__label" hidden>
              Enter Your name
            </label>
            <Input
              className="form__input"
              name="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email" className="form__label" hidden>
              Enter your email
            </label>
            <Input
              className="form__input"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form__group" style={{ marginTop: '24px' }}>
            <label htmlFor="message" className="form__label" hidden>
              Enter your message
            </label>
            <TextArea
              name="message"
              className="form__textarea"
              placeholder="How can I help you?"
              required
            />
          </div>
          <Button text="Submit" type="submit" className="form__button" />
        </Form>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background: #141414;
`;

export default Contact;
