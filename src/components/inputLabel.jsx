// @flow
import React, { type ElementProps } from "react";
import styled from "styled-components";
import Input from "./inputs";

type Props = ElementProps<typeof Input> & {
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
