import React from 'react';
import styled from 'styled-components';

type InputProps = {
  label?: string;
  onChange: (val: string) => void;
  value?: string;
};

const Input: React.FC<InputProps> = ({ label, onChange, value }) => {
  const inputId = `${label}-input`;
  return (
    <Container>
      {label && <StyledLabel htmlFor={inputId}>{label}</StyledLabel>}
      <StyledInput id={inputId} onChange={(e) => onChange(e.target.value)} value={value} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  font-weight: 600;
  margin: 12px 0 8px;
`;

const StyledInput = styled.input`
  padding: 16px 8px;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
`;

export default Input;
