import React from "react";
import { useTranslation } from 'react-i18next';
import styled from "styled-components";
import { Title, Content, Button, Centered, Animations } from "../styled";
import {
  scientific_agreement_content,
  scientific_agreement_accept_button,
} from "../messages/messages.en.json";

const Wrapper = styled(Centered)`
  ${Content} {
    padding: 15px;
  }
`;

export default ({ onSubmit }) => {
const { t, i18n } = useTranslation("global")
const changeLanguage = lng => {
  i18n.changeLanguage(lng);
};

 return (
<Animations.FadeIn>
    <Wrapper>
      <Title>{t("scientific_agreement_title")}</Title>
      <Content>{scientific_agreement_content}</Content>
      <Button onClick={onSubmit}>{scientific_agreement_accept_button}</Button>
    </Wrapper>
  </Animations.FadeIn>
 )
}
