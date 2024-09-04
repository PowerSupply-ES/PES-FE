import styled from "styled-components";
import { StyledProps } from "model/Store";

export const Container = styled.div<StyledProps>`
  width: 1374px;
  height: 60px;
  display: flex;
  align-items: center;
  margin: auto;
  border-radius: 5px;
  background-color: ${(props) =>
    props.state == "locked" ? "#DEDEDE" : "white"};
  transition: background-color 0.3s; /* Add transition for smooth color change */
  &:hover {
    background-color: ${(props) =>
      props.state == "locked" ? "#DEDEDE" : "#DEDEDE80"};
  }
`;
export const ProblemId = styled.span<StyledProps>`
  width: 100px;
  height: 34px;
  color: ${(props) =>
    props.state === "solved"
      ? "#04CA00"
      : props.state === "retry"
      ? "#FF8412"
      : "black"};
  font-size: 28px;
  text-align: center;
`;
export const ProblemTitle = styled.span`
  flex: 1;
  font-size: 28px;
  text-align: left;
  &:hover {
    cursor: pointer;
  }
`;
export const Grade = styled.span`
  height: 34px;
  font-size: 28px;
  text-align: center;
  margin-right: 20px;
`;
export const Button = styled.button<StyledProps>`
  width: 150px;
  height: 42px;
  color: ${(props) => (props.state == "locked" ? "#6A6B6F" : "white")};
  background-color: ${(props) =>
    props.state === "baekjoon"
      ? "#5094f9"
      : props.state === "challenge"
      ? "#5094f9"
      : props.state === "solved"
      ? "#04CA00"
      : props.state === "retry"
      ? "#FF8412"
      : "white"};
  border-radius: 5px;
  font-size: 28px;
  text-align: center;
  border: ${(props) =>
    props.state == "locked" ? "2px solid #DEDEDE" : "none"};
  transition: background-color 0.3s;
  /* &:hover {
        background-color: ${(props) =>
    props.color ? `${props.color}80` : "rgba(255, 255, 255, 0.8)"};
    } */
`;
