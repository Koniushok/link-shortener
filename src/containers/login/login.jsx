// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { Redirect, type Location } from 'react-router-dom';
import Joi from 'joi-browser';
import { login as loginAction, authResetError } from '../../actions/auth';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';
import Alert from '../../components/alert';

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
  error: string,
  loading: boolean,
  auth: boolean,
  location: Location,
  authResetError: typeof authResetError,
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

  componentWillUnmount() {
    this.props.authResetError();
  }

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
    const { errors } = this.state;
    const {
      error, loading, auth, location,
    } = this.props;
    if (auth) {
      const { state } = location;
      return <Redirect to={state ? state.from.pathname + state.from.search : '/'} />;
    }
    return (
      <Fragment>
        {error && <Alert type="error" absolute>{error}</Alert>}
        <LoginWrapper>
          <h1>SIGN IN</h1>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Input label="Login" error={errors.loginName} name="loginName" />
            <Input type="password" label="Password" name="password" error={errors.password} />
            <Button alignRight disabled={loading}>
              Log in
            </Button>
          </Form>
        </LoginWrapper>
      </Fragment>
    );
  }
}

export default Login;
