import React, { useLayoutEffect, useState } from 'react';
import Hero from '../../components/Hero';
import styled from 'styled-components';
import Form from '../../components/shared/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';
import axios from 'axios';
import { navigate } from 'gatsby';

export default function MailingList() {
  const [joined, setJoined] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  useLayoutEffect(() => {
    setTimeout(() => {
      const form = document.getElementById('MailingList__form');
      form.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 500);
  }, []);

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setJoined(true);

      const airtableURL = `https://api.airtable.com/v0/${process.env.GATSBY_AIRTABLE_BASE}/EmailingList`;

      const resp = await axios.post(
        airtableURL,
        {
          fields: {
            name: formData.name,
            email: formData.email,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.GATSBY_AIRTABLE_API}`,
            'Content-Type': 'application/json',
          },
        }
      );

      console.log({ data: resp.data });

      setTimeout(() => {
        const form = document.getElementById('MailingList__form');
        form.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest',
        });

        setTimeout(() => {
          navigate('/');
        }, 2500);
      }, 250);
    } catch (error) {
      console.error(error);
    }
  };

  if (joined) {
    return (
      <Wrapper>
        <div id="MailingList__form">
          <Hero
            title="Thank you for joining our mailing list!"
            midTitle=""
            subtitle="You will now receive updates on all of our latest news and events."
            ctaText=""
            onCtaClick={() => {}}
          />
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Hero
        title="Stay in the Loop!"
        midTitle="Mailing List"
        subtitle="Sign up for our mailing list to stay up to date with all of our latest news and events!"
        ctaText=""
        onCtaClick={() => {}}
      />

      <FormWrapper id="MailingList__form">
        <Form onSubmit={handleSubmit}>
          <h1 className="form__title">MAILING LIST SIGNUP</h1>

          <div className="form__group">
            <label htmlFor="name" className="form__label" hidden>
              Enter Your name
            </label>
            <Input
              style={{ marginRight: 0 }}
              className="form__input"
              name="name"
              placeholder="Enter your name"
              onChange={handleChange}
              required
            />
          </div>
          <div className="form__group" style={{ marginTop: '24px' }}>
            <label htmlFor="email" className="form__label" hidden>
              Enter your email
            </label>
            <Input
              style={{ marginRight: 0 }}
              className="form__input"
              name="email"
              type="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              required
            />
          </div>

          <Button text="Submit" type="submit" className="form__button" />
        </Form>
      </FormWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;

const FormWrapper = styled.section`
  background: #141414;
`;
