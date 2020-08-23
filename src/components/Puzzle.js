import React from "react";
import styled, { css } from "styled-components";
import { Content, Centered, Animations } from "../styled";
import { puzzle_instructions } from "../messages/messages.en.json";
import clockwise from "../assets/clockwise_rotation.png";
import unclockwise from "../assets/anticlockwise_rotation.png";
import flip from "../assets/flip_rotation.png";

const RESULTS = {
  sea: 180,
  sea1: 90,
  sea2: 270,
  sea3: 0,
};

const Wrapper = styled(Centered)`
  ${Content} {
    padding: 15px;
  }
`;

const Image = styled.img.attrs(() => ({
  height: 300,
  width: 300,
}))`
  margin-bottom: 5px;
  border: ${({ correct }) => `2px solid ${correct ? "#3ef76f" : "#e83127"}`};
  transform: ${({ rotation }) => `rotate(${rotation}deg)`};
  ${({ selected }) =>
    selected &&
    css`
      -webkit-box-shadow: -5px 5px 10px 0px rgba(0, 0, 0, 0.75);
      -moz-box-shadow: -5px 5px 10px 0px rgba(0, 0, 0, 0.75);
      box-shadow: -5px 5px 10px 0px rgba(0, 0, 0, 0.75);
    `}
`;

const Rotate = styled.img.attrs(() => ({
  height: 32,
  width: 32,
}))`
  cursor: pointer;
`;

const PuzzleImage = ({ onClick, id, src, correct, rotation, selected }) => (
  <Image
    rotation={rotation}
    selected={selected}
    src={src}
    correct={correct}
    onClick={() => onClick(id)}
  />
);

const ActionBar = styled.div`
  opacity: 0;
  ${({ visible }) => visible && { opacity: 1 }}
  ${Rotate} {
    ${({ visible }) => !visible && { cursor: "initial" }}
  }
`;

export default ({ images, selectedImage, onImageClick, onRotate }) => {
  const visible =
    selectedImage &&
    !images.find(
      ({ id, rotation }) =>
        id === selectedImage && RESULTS[id] === rotation % 360
    );

  return (
    <Animations.FadeIn>
      <Wrapper>
        <Content>{puzzle_instructions}</Content>
        <ActionBar
          visible={visible}
        >
          <Rotate
            alt="rotate_90"
            onClick={() => visible && onRotate(90)}
            src={clockwise}
          />
          <Rotate
            alt="rotate_minus_90"
            onClick={() => visible && onRotate(270)}
            src={unclockwise}
          />
          <Rotate
            alt="rotate_180"
            onClick={() => visible && onRotate(180)}
            src={flip}
          />
        </ActionBar>

        <Centered flexDirection="row" style={{ maxWidth: "50%" }}>
          {images.map(({ id, src, rotation }) => (
            <PuzzleImage
              id={id}
              key={id}
              selected={id === selectedImage}
              onClick={onImageClick}
              src={src}
              rotation={rotation}
              correct={RESULTS[id] === rotation % 360}
            />
          ))}
        </Centered>
      </Wrapper>
    </Animations.FadeIn>
  );
};
