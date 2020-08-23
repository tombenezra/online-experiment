import React from "react";
import styled from "styled-components";
import { Title, Content, Button, Centered, Animations } from "../styled";
import {
  scientific_agreement_title,
  scientific_agreement_content,
  scientific_agreement_accept_button,
} from "../messages/messages.en.json";

const Wrapper = styled(Centered)`
  ${Content} {
    padding: 15px;
  }
`;

export default ({ onSubmit }) => (
  <Animations.FadeIn>
    <Wrapper>
      <Title>{scientific_agreement_title}</Title>
      <Content>{scientific_agreement_content}</Content>
      <Button onClick={onSubmit}>{scientific_agreement_accept_button}</Button>
    </Wrapper>
  </Animations.FadeIn>
);
