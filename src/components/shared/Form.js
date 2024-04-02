import styled from 'styled-components';

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

  .form__input:first-of-type {
    margin-right: 24px;
  }

  .form__textarea {
    height: 120px;
  }

  @media screen and (max-width: 600px) {
    .form__group {
      flex-direction: column;
    }

    .form__input:first-of-type {
      margin-right: 0;
      margin-bottom: 24px;
    }
  }
`;

export default Form;
