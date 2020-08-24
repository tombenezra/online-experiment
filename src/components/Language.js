import React from "react";
import styled from "styled-components";
import il from "../assets/il-flag.png";
import uk from "../assets/uk-flag.png";
import { Centered, Title, Content } from "../styled";

export default ({ onLanguage }) => (
  <Centered>
    <Title>Please choose a language</Title>
    <Content>
      עברית
      <img height="25" width="25" src={il} onClick={() => onLanguage("he")} />
    </Content>
    <Content>
      <img height="25" width="25" src={uk} onClick={() => onLanguage("en")} />
      English
    </Content>
  </Centered>
);
