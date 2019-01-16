import styled from "styled-components";

export const Button = styled.button`
  display: inline-block;
  padding: 9px 15px;
  font-size: 20px;
  font-weight: 600;
  border-radius: 6px;
  color: #fff;
  background: #6c757d;
  border: solid 3px #6c757d;
  :focus {
    border: 3px solid #a9a9a9;
    outline: #a9a9a9;
  }
  :hover {
    cursor: pointer;
    border: 3px solid #ffffff9c;
  }
`;
