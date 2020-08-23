import styled from "styled-components";

export default styled.div`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || "column"};
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
