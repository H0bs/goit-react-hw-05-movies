import styled from "@emotion/styled";

export const Title = styled.h1`
padding: 12px;
text-align: center;
font-size: 40px;
font-weight: 500;
color: #FFFFFF;
background: #DBFFDA;
text-shadow: 0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00, 2px 2px 2px rgba(206,89,55,0);
`;

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