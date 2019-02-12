// @flow
import React from 'react';
import styled from 'styled-components';

function getInputColor(error: boolean): string {
  return error ? '#ff0000a1' : '#00d3ffa1';
}

const Input = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 19px;
  padding: 9px 13px;
  background-color: #fff;
  border: 1px solid ${props => (props.error ? '#ff0000' : '#ced4da')};
  border-radius: 5px;
  :focus {
    outline: 1px solid ${props => getInputColor(props.error)};
    border: 1px solid ${props => getInputColor(props.error)};
    box-shadow: 0 0 5px ${props => getInputColor(props.error)};
  }
`;

type Props = {
  type?: string,
  value?: string | string[] | number,
  onChange?: (e: SyntheticInputEvent<HTMLInputElement>) => void,
  defaultValue?: string,
} & {
  name: string,
  label: string,
  error?: string,
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

const InputLabel = ({
  name, label, error = '', type, onChange, value, defaultValue,
}: Props) => (
  <div>
    <Label htmlFor={name}>{label}</Label>
    <Input
      id={name}
      name={name}
      error={!!error}
      type={type}
      onChange={onChange}
      value={value}
      autocomplete="off"
      defaultValue={defaultValue}
    />
    {error && <LabelError>{error}</LabelError>}
  </div>
);

export default InputLabel;
