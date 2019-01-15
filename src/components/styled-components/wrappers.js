import styled from "styled-components";

export const AppWrapper = styled.div`
  display: flex;
  font-family: Arial, sans-serif;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const MainWrapper = styled.main`
  flex: auto;
`;

export const HeaderWrapper = styled.header`
  display: flex;
  background: #24292e;
  flex-direction: row;
  justify-content: flex-end;
`;

export const FooterWrapper = styled.footer`
  background: #24292e;
  min-height: 70px;
`;
