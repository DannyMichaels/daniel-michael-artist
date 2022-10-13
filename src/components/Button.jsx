import React from 'react';
import styled from 'styled-components';

export default function Button({ text, onClick = () => {}, ...rest }) {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background: #ea384e;
  border-radius: 4px;
  height: 60px;
  padding: 21px 36px;
  color: #fff;
  font-family: 'Exo', sans-serif;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
`;
