// @flow
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > * {
    margin-bottom: 20px;
  }
`;
Form.displayName = 'Form';
export default Form;
