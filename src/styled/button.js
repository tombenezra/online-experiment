import styled, { css } from "styled-components";

export default styled.button`
  background-color: #4287f5;
  color: white;
  font-size: 1rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  border: 1px solid #adc6ed;
  border-radius: 3px;

  ${({ primary }) =>
    primary &&
    css`
      background-color: red;
      color: white;
      box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.2);
    `}
`;
