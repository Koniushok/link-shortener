// @flow
import React, { type ElementProps } from "react";
import styled from "styled-components";
import Input from "./inputs";

type lableObject = ElementProps<typeof Input> & {
  id: string,
  label: string,
  error?: string
};

const Lable = styled.label`
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
  color: #212529;
`;

const LableError = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 8px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const InputLabel = ({ id, label, error = "", ...rest }: lableObject) => (
  <div>
    <Lable htmlFor={id}>{label}</Lable>
    <Input id={id} {...rest} autocomplete="off" />
    {error && <LableError>{error}</LableError>}
  </div>
);

export default InputLabel;
