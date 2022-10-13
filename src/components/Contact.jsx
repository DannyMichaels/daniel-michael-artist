import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Input from './Input';
import TextArea from './TextArea';

function Contact() {
  return (
    <Wrapper className="page-section contact" id="contact-me">
      <div className="inner-column">
        <Form action="https://formspree.io/f/xqkjlnka" method="POST">
          <h1 className="form__title">CONTACT ME</h1>

          <div className="form__group">
            <label htmlFor="name" className="form__label" />
            <Input
              className="form__input"
              name="name"
              placeholder="Enter your name"
              required
              style={{ marginRight: '24px' }}
            />

            <label htmlFor="email" className="form__label" />
            <Input
              className="form__input"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="form__group" style={{ marginTop: '24px' }}>
            <label htmlFor="message" className="form__label" />
            <TextArea
              name="message"
              className="form__input"
              placeholder="How can I help you?"
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

const Form = styled.form`
  max-width: 860px;
  width: 100%;
  margin: 0 auto;

  .form__title {
    color: #ffffff;
    font-family: 'Kodchasan', sans-serif;
    font-weight: 500;
    font-size: 60px;
    line-height: 60px;
    text-align: center;
    text-transform: uppercase;
  }

  padding-top: 146px;
  padding-bottom: 146px;

  .form__button {
    width: 100%;
    margin-top: 36px;
  }

  .form__group {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
`;

export default Contact;
