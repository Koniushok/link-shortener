// @flow
import React, { Component } from "react";
import styled from "styled-components";
import Input from "../components/input";
import Button from "../components/button";
import Form from "../components/form";

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
    );
  }
}

export default Authorization;
