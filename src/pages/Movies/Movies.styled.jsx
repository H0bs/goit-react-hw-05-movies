import styled from "@emotion/styled";

export const Form = styled.form`
  padding: 5px;
`;

export const Input = styled.input`
padding: 8px 8px;
  border-radius: 4px;
  margin-right: 4px;
  margin-bottom: 4px;
`;

export const Button = styled.button`
  padding: 8px 8px;
  border-radius: 8px;
  color: inherit;
  font-weight: 700;
  &:hover,
  &:focus {
    cursor: pointer;
    color: greenyellow;
    background-color: black;
  }
`;