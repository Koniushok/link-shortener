// @flow
import React, { Component } from "react";
import Input from "../components/input";
import Button from "../components/button";
import Form from "../components/form";

type State = {
  userData: {
    login: string,
    name: string,
    surname: string,
    password: string
  },
  error: {
    login: string,
    name: string,
    surname: string,
    password: string
  }
};

class Registration extends Component<any, State> {
  state = {
    userData: {
      login: "",
      name: "",
      surname: "",
      password: ""
    },
    error: {
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
    const { userData, error } = this.state;
    return (
      <Form autoComplete="off">
        <Input
          label="Login"
          error={error.login}
          name="login"
          value={userData.login}
          onChange={this.handleChange}
        />
        <Input
          label="Name"
          name="name"
          error={error.name}
          value={userData.name}
          onChange={this.handleChange}
        />
        <Input
          label="Surname"
          name="surname"
          error={error.surname}
          value={userData.surname}
          onChange={this.handleChange}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          error={error.password}
          value={userData.password}
          onChange={this.handleChange}
        />
        <Button alignRight>Sign up</Button>
      </Form>
    );
  }
}

export default Registration;
