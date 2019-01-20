// @flow
import React, { Component } from "react";
import InputLabel from "../components/inputLabel";
import Button from "../components/buttons";
import Form from "../components/form";

type State = {
  loginData: {
    login: string,
    password: string
  },
  error: {
    login: string,
    password: string
  }
};
class Authorization extends Component<any, State> {
  state = {
    loginData: {
      login: "1",
      password: "2"
    },
    error: {
      login: "",
      password: ""
    }
  };

  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    const { currentTarget: input } = e;
    this.setState(prevState => {
      const { loginData } = prevState;
      loginData[input.name] = input.value;
      return { loginData };
    });
  };

  render() {
    const { loginData, error } = this.state;
    return (
      <Form autoComplete="off">
        <InputLabel
          label="Login"
          error={error.login}
          name="login"
          value={loginData.login}
          onChange={this.handleChange}
        />
        <InputLabel
          type="password"
          label="Password"
          name="password"
          error={error.password}
          value={loginData.password}
          onChange={this.handleChange}
        />
        <Button alignRight>Log in</Button>
      </Form>
    );
  }
}

export default Authorization;
