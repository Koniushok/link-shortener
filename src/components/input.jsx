// @flow
import React from "react";
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

type Props = {
  type?: string,
  handleChange?: (e: SyntheticInputEvent<HTMLInputElement>) => void
} & {
  name: string,
  label: string,
  error?: string
};

const Label = styled.label`
  display: inline-block;
  font-size: 20px;
  font-weight: 400;
  color: #212529;
  margin-bottom: 3px;
`;

const LabelError = styled.div`
  color: #721c24;
  background-color: #f8d7da;
  border-color: #f5c6cb;
  padding: 8px 20px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const InputLabel = ({ name, label, error = "", ...rest }: Props) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} name={name} {...rest} autocomplete="off" />
    {error && <LabelError>{error}</LabelError>}
  </div>
);

export default InputLabel;
