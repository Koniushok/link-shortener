// @flow
import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
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

export default Input;
