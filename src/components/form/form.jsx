// @flow
import React, { Component, Fragment } from "react";
import Joi from "joi-browser";
import { Button } from "../buttons";
import { Input, Lable, LableError } from "./formComponenta";

type State = {
  data: {},
  errors: {},
  result: string
};
type inputObject = {
  id: string,
  label: string,
  name: string,
  type: string
};
class Form<T1, T2> extends Component<T1, T2 & State> {
  schema: {};
  doSubmit: () => void;
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {}, result: "" });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton(label: string) {
    return <Button>{label}</Button>;
  }

  renderAlert(error: string, message: string) {
    if (error) return <p>{error}</p>;
    if (message) return <p>{message}</p>;

    return null;
  }

  renderInput({ id, label, name, type }: inputObject) {
    return (
      <Fragment>
        <Lable htmlFor={id}>{label}</Lable>
        <Input
          name={name}
          type={type}
          id={id}
          onChange={this.handleChange}
          value={this.state.data[name]}
        />
        {this.state.errors[name] && (
          <LableError>{this.state.errors[name]}</LableError>
        )}
      </Fragment>
    );
  }
}

export default Form;
