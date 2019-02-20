// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Joi from 'joi-browser';
import { login as loginAction } from '../../actions/auth';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';

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
  errors: {
    loginName: string,
    password: string,
  },
};
type Props = {
  loading: boolean,
  loginRequest: typeof loginAction,
};
type LoginData = {
  loginName: string,
  password: string,
};

class Login extends Component<Props, State> {
  state = {
    errors: {
      loginName: '',
      password: '',
    },
  };

  schema = {
    loginName: Joi.string()
      .required()
      .min(6)
      .label('Login'),
    password: Joi.string()
      .required()
      .min(8)
      .label('Password'),
  };

  validate = (loginData: LoginData) => {
    const errors = {
      loginName: '',
      password: '',
    };
    const { error } = Joi.validate(loginData, this.schema, {
      abortEarly: false,
    });

    if (!error) {
      return errors;
    }

    error.details.forEach((item) => {
      errors[item.path[0]] = item.message;
    });
    return errors;
  };

  handleSubmit = (
    e: {
      target: { loginName: HTMLInputElement, password: HTMLInputElement },
    } & SyntheticEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const { loginName, password } = e.target;
    const loginData: LoginData = { loginName: loginName.value, password: password.value };
    const errors = this.validate(loginData);
    this.setState({ errors });
    if (Object.values(errors).every(error => !error)) {
      this.props.loginRequest(loginData.password, loginData.loginName);
    }
  };

  render() {
    return (
      <LoginWrapper>
        <h1>SIGN IN</h1>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <Input label="Login" error={this.state.errors.loginName} name="loginName" />
          <Input
            type="password"
            label="Password"
            name="password"
            error={this.state.errors.password}
          />
          <Button alignRight disabled={this.props.loading}>
            Log in
          </Button>
        </Form>
      </LoginWrapper>
    );
  }
}

export default Login;
