// @flow
import React from "react";
import styled from "styled-components";

const NotFoundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #fff;
  flex: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-size: 11vw;
    font-weight: 400;
    margin: 0;
    margin-bottom: 10px;
  }
  h2 {
    margin: 0;
    font-size: 3vw;
    font-weight: 100;
  }
`;

const NotFound = () => (
  <NotFoundWrapper>
    <h1>404 Error</h1>
    <h2>Page Not Found</h2>
  </NotFoundWrapper>
);

export default NotFound;
