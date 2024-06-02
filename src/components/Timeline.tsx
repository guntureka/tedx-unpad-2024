"use client";

import React from "react";
import styled from "styled-components";

const TimelineContainer = styled.div`
  background-color: #1e1e1e;
  color: white;
  padding: 20px;
  text-align: left;
`;

const TimelineWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 40px 0;
`;

const Stage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Circle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${(props) => props.color || "#d44c4c"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  font-size: 24px;
  font-weight: bold;
`;

const Bar = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 10px;
  background-color: #d44c4c;
  z-index: -1;
`;

const Box = styled.div`
  width: 300px;
  height: 60px;
  background-color: ${(props) => props.color || "#d44c4c"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 3px solid white;
  box-sizing: border-box;
`;

const Description = styled.div`
  text-align: center;
  max-width: 150px;
`;

const StageTitle = styled.div`
  font-weight: bold;
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
`;

const StageDesc = styled.div`
  font-size: 0.8em;
  margin-top: 20px;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 40px solid #d44c4c;
  margin-top: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-left: 100px;
  margin-bottom: 60px;
`;

const Timeline = () => {
  return (
    <TimelineContainer>
      <TitleWrapper>
        <h2 className="font-bold text-white md:text-3xl">Our Timeline</h2>
      </TitleWrapper>
      <TimelineWrapper>
        <Stage>
          <Circle color="#C93420">
            <span>1</span>
          </Circle>
          <Box color="#C93420" />
          <Triangle />
          <Description>
            <StageTitle>STAGE 1</StageTitle>
            <StageDesc>
              Description of the stage with all details of the steps taken
            </StageDesc>
          </Description>
        </Stage>
        <Stage>
          <Circle>
            <span>2</span>
          </Circle>
          <Box />
          <Triangle />
          <Description>
            <StageTitle>STAGE 2</StageTitle>
            <StageDesc>
              Description of the stage with all details of the steps taken
            </StageDesc>
          </Description>
        </Stage>
        <Stage>
          <Circle>
            <span>3</span>
          </Circle>
          <Box />
          <Triangle />
          <Description>
            <StageTitle>STAGE 3</StageTitle>
            <StageDesc>
              Description of the stage with all details of the steps taken
            </StageDesc>
          </Description>
        </Stage>
        <Stage>
          <Circle>
            <span>4</span>
          </Circle>
          <Box />
          <Triangle />
          <Description>
            <StageTitle>STAGE 4</StageTitle>
            <StageDesc>
              Description of the stage with all details of the steps taken
            </StageDesc>
          </Description>
        </Stage>
        <Bar />
      </TimelineWrapper>
    </TimelineContainer>
  );
};

export default Timeline;
