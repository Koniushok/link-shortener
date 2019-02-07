// @flow
import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import Joi from 'joi-browser';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';
import Alert from '../../components/alert';
import { type RegistryProfile } from '../../types';

const FormWrapper = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    max-width: 300px;
  }
`;
type UserErrors = {
  loginName: string,
  name: string,
  surname: string,
  password: string,
};
type State = {
  userData: RegistryProfile,
  errors: UserErrors,
};
type Props = {
  result: string,
  error: string,
  loading: boolean,
  createProfile: (profile: RegistryProfile) => void,
};
class Registration extends Component<Props, State> {
  state = {
    userData: {
      loginName: '',
      name: '',
      surname: '',
      password: '',
    },
    errors: {
      loginName: '',
      name: '',
      surname: '',
      password: '',
    },
  };

  schema = {
    loginName: Joi.string()
      .required()
      .min(6)
      .label('LoginName'),
    name: Joi.string()
      .required()
      .label('Name'),
    surname: Joi.string()
      .required()
      .label('Surname'),
    password: Joi.string()
      .required()
      .min(8)
      .label('Password'),
  };

  validate = (): UserErrors => {
    const errors = {
      loginName: '',
      name: '',
      surname: '',
      password: '',
    };
    const { error } = Joi.validate(this.state.userData, this.schema, {
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

  handleSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    const errors = this.validate();
    this.setState({ errors });
    if (Object.values(errors).every(error => !error)) {
      this.props.createProfile(this.state.userData);
    }
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState((prevState) => {
      const userData = { ...prevState.userData };
      userData[input.name] = input.value;
      return { userData };
    });
  };

  render() {
    const { userData, errors } = this.state;
    const { result, error, loading } = this.props;
    return (
      <Fragment>
        {error && <Alert type="error">{error}</Alert>}
        {result && <Alert type="success">Successful registration</Alert>}
        <FormWrapper>
          <h1>SING UP</h1>
          <Form autoComplete="off" onSubmit={this.handleSubmit}>
            <Input
              label="Login"
              error={errors.loginName}
              name="loginName"
              value={userData.loginName}
              onChange={this.handleChange}
            />
            <Input
              label="Name"
              name="name"
              error={errors.name}
              value={userData.name}
              onChange={this.handleChange}
            />
            <Input
              label="Surname"
              name="surname"
              error={errors.surname}
              value={userData.surname}
              onChange={this.handleChange}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              error={errors.password}
              value={userData.password}
              onChange={this.handleChange}
            />
            <Button alignRight disabled={loading}>
              Sign up
            </Button>
          </Form>
        </FormWrapper>
      </Fragment>
    );
  }
}

export default Registration;
