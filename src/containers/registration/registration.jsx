// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import Joi from 'joi-browser';
import { registryRequest } from '../../actions/registry';
import Input from '../../components/input';
import Button from '../../components/button';
import Form from '../../components/form';
import { type RegistryProfile } from '../../types';

const FormWrapper = styled.section`
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 3px;
  box-sizing: border-box;
  form {
    width: 100%;
    max-width: 300px;
  }
`;
type FormTarget = {
  loginName: HTMLInputElement,
  name: HTMLInputElement,
  surname: HTMLInputElement,
  password: HTMLInputElement,
};
type UserErrors = {
  loginName: string,
  name: string,
  surname: string,
  password: string,
};
type State = {
  errors: UserErrors,
};
type Props = {
  loading: boolean,
  createProfile: typeof registryRequest,
};
class Registration extends Component<Props, State> {
  state = {
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

  validate = (userData: RegistryProfile): UserErrors => {
    const errors = {
      loginName: '',
      name: '',
      surname: '',
      password: '',
    };
    const { error } = Joi.validate(userData, this.schema, {
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
      target: FormTarget,
    } & SyntheticEvent<HTMLFormElement>,
  ) => {
    e.preventDefault();
    const {
      loginName, name, surname, password,
    } = e.target;
    const userData: RegistryProfile = {
      loginName: loginName.value,
      name: name.value,
      surname: surname.value,
      password: password.value,
    };
    const errors = this.validate(userData);
    this.setState({ errors });
    if (Object.values(errors).every(error => !error)) {
      this.props.createProfile(userData);
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <FormWrapper>
        <h1>SING UP</h1>
        <Form autoComplete="off" onSubmit={this.handleSubmit}>
          <Input label="Login" error={errors.loginName} name="loginName" />
          <Input label="Name" name="name" error={errors.name} />
          <Input label="Surname" name="surname" error={errors.surname} />
          <Input type="password" label="Password" name="password" error={errors.password} />
          <Button alignRight disabled={this.props.loading}>
            Sign up
          </Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default Registration;
