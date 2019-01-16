import React, { Component, Fragment } from "react";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    errors: {},
    result: null
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  handleSubmit = e => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors: errors || {}, result: null });
    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  renderButton(label) {
    return <button>{label}</button>;
  }

  renderAlert(error, message) {
    if (error) return <p>{props.error}</p>;
    if (message) return <p>{props.message}</p>;

    return null;
  }

  renderInput(inputObj) {
    return (
      <Fragment>
        <label htmlFor={inputObj.id}>{inputObj.label}</label>
        <input
          name={inputObj.name}
          type={inputObj.type}
          id={inputObj.id}
          onChange={this.handleChange}
          value={this.state.data[inputObj.name]}
        />
        {this.state.errors[inputObj.name] && (
          <p>{this.state.errors[inputObj.name]}</p>
        )}
      </Fragment>
    );
  }
}

export default Form;
