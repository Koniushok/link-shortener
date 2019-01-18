// @flow
import styled from "styled-components";

export const Input = styled.input`
  display: block;
  font-size: 19px;
  padding: 9px 13px;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 5px;
  :focus {
    outline: 1px solid #00d3ffa1;
    border: 1px solid #00d3ffa1;
    box-shadow: 0 0 5px #00d3ffa1;
  }
`;

export const Lable = styled.label`
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  color: #212529;
`;

export const LableError = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 8px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
