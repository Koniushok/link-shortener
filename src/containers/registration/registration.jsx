// @flow
import React, { Component } from "react";
import styled from "styled-components";
import Input from "../../components/input";
import Button from "../../components/button";
import Form from "../../components/form";

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

type State = {
  userData: {
    login: string,
    name: string,
    surname: string,
    password: string
  },
  errors: {
    login: string,
    name: string,
    surname: string,
    password: string
  }
};
type Props = {
  result: string,
  error: string,
  loading: boolean
};
class Registration extends Component<Props, State> {
  state = {
    userData: {
      login: "",
      name: "",
      surname: "",
      password: ""
    },
    errors: {
      login: "",
      name: "",
      surname: "",
      password: ""
    }
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState(prevState => {
      const { userData } = prevState;
      userData[input.name] = input.value;
      return { userData: { ...userData } };
    });
  };

  render() {
    const { userData, errors } = this.state;
    const { result, error, loading } = this.props;
    return (
      <FormWrapper>
        <h1>SING UP</h1>
        <Form autoComplete="off">
          <Input
            label="Login"
            error={errors.login}
            name="login"
            value={userData.login}
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
          <Button alignRight>Sign up</Button>
        </Form>
      </FormWrapper>
    );
  }
}

export default Registration;
