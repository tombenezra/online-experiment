import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FadeIn = styled.div`
  animation: ${fadeIn} ${({ duration }) => duration || "1s"} ease-in;
`;

export default {
  FadeIn
};
