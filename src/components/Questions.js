import React from "react";
import styled from "styled-components";
import {
  questions_intro,
  questions_title,
  questions_worst,
  questions_best,
  questions_done,
  questions_q1,
  questions_q2,
  questions_q3,
  questions_q4,
} from "../messages/messages.en.json";
import { Animations, Centered, Title, Content, Button } from "../styled";

const Table = styled(Centered)`
  padding: 15px 0 5px 0;
  width: 100%;
`;

const OptionIndicator = styled.span`
  font-size: 0.9rem;
`;

export default ({ onDone }) => {
  return (
    <Animations.FadeIn>
      <Centered>
        <Title>{questions_title}</Title>
        <Content>
          <span>{questions_intro}</span>
        </Content>
        <Centered style={{ width: 400 }}>
          <Table flexDirection="row" justifyContent={"space-between"}>
            <OptionIndicator>{questions_worst}</OptionIndicator>
            <OptionIndicator>{questions_best}</OptionIndicator>
          </Table>
          <Table flexDirection="row" justifyContent={"space-between"}>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span>5</span>
            <span>6</span>
            <span>7</span>
          </Table>
          <Table>
              <span>{questions_q1}</span>
              <Table flexDirection="row" justifyContent={"space-between"}>
                  <input type="radio" value="option1" />
                  <input type="radio" value="option2" />
                  <input type="radio" value="option3" />
                  <input type="radio" value="option4" />
                  <input type="radio" value="option5" />
                  <input type="radio" value="option6" />
                  <input type="radio" value="option7" />
              </Table>
              <span>{questions_q2}</span>
              <Table flexDirection="row" justifyContent={"space-between"}>
                  <input type="radio" value="option1" />
                  <input type="radio" value="option2" />
                  <input type="radio" value="option3" />
                  <input type="radio" value="option4" />
                  <input type="radio" value="option5" />
                  <input type="radio" value="option6" />
                  <input type="radio" value="option7" />
              </Table>
              <span>{questions_q3}</span>
              <Table flexDirection="row" justifyContent={"space-between"}>
                  <input type="radio" value="option1" />
                  <input type="radio" value="option2" />
                  <input type="radio" value="option3" />
                  <input type="radio" value="option4" />
                  <input type="radio" value="option5" />
                  <input type="radio" value="option6" />
                  <input type="radio" value="option7" />
              </Table>
              <span>{questions_q4}</span>
              <Table flexDirection="row" justifyContent={"space-between"}>
                  <input type="radio" value="option1" />
                  <input type="radio" value="option2" />
                  <input type="radio" value="option3" />
                  <input type="radio" value="option4" />
                  <input type="radio" value="option5" />
                  <input type="radio" value="option6" />
                  <input type="radio" value="option7" />
              </Table>
          </Table>
        </Centered>

        <Button onClick={onDone}>{questions_done}</Button>
      </Centered>
      <span>hey</span>
    </Animations.FadeIn>
  );
};
