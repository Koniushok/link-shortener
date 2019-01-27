// @flow
import React, { Component, Fragment } from "react";
import styled from "styled-components";
import Joi from "joi-browser";
import Input from "../components/input";
import Button from "../components/button";
import Form from "../components/form";
import Alert from "../components/alert";

const LoginWrapper = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    max-width: 300px;
  }
`;

type State = {
  loginData: {
    loginName: string,
    password: string
  },
  error: {
    loginName: string,
    password: string
  }
};
class Authorization extends Component<any, State> {
  state = {
    loginData: {
      loginName: "",
      password: ""
    },
    error: {
      loginName: "",
      password: ""
    }
  };

  schema = {
    loginName: Joi.string()
      .required()
      .min(6)
      .label("Login"),
    password: Joi.string()
      .required()
      .min(8)
      .label("Password")
  };

  validate = (): { loginName: string, password: string } => {
    const errors = {
      loginName: "",
      password: ""
    };
    const { error } = Joi.validate(this.state.loginData, this.schema, {
      abortEarly: false
    });
    if (!error) {
      return errors;
    }

    error.details.forEach(item => {
      errors[item.path[0]] = item.message;
    });
    return errors;
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState(prevState => {
      const { loginData } = prevState;
      loginData[input.name] = input.value;
      return { loginData: { ...loginData } };
    });
  };

  render() {
    const { loginData, error } = this.state;
    return (
      <Fragment>
        <Alert type="error">Error</Alert>
        <LoginWrapper>
          <h1>SIGN IN</h1>
          <Form autoComplete="off">
            <Input
              label="Login"
              error={error.loginName}
              name="loginName"
              value={loginData.loginName}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              error={error.password}
              value={loginData.password}
              onChange={this.handleChange}
            />
            <Button alignRight>Log in</Button>
          </Form>
        </LoginWrapper>
      </Fragment>
    );
  }
}

export default Authorization;
