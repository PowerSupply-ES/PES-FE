import styled from "styled-components";

export const StyledListItem = styled.div`
  .container {
    display: flex;
    flex-direction: row;
    height: fit-content;
    align-items: center;
    margin: auto;
    padding: 8px 16px 8px 0px;
    border-radius: 8px;

    background-color: ${(props) =>
      props.state === "locked"
        ? "#DEDEDE"
        : props.state === "comment"
        ? "rgba(243, 242, 242, 0.737)"
        : props.state === "question"
        ? "rgba(243, 242, 242, 0.737)"
        : "white"};
    transition: background-color 0.3s; /* Add transition for smooth color change */
    &:hover {
      background-color: ${(props) =>
        props.state === "locked" ? "#DEDEDE" : "rgba(243, 242, 242, 0.737)"};
    }
  }

  .problem_id {
    width: 100px;
    height: 34px;
    color: ${(props) =>
      props.state === "success"
        ? "#04CA00"
        : props.state === "fail"
        ? "#FF8412"
        : "black"};
    font-size: 18px;
    text-align: center;
    line-height: 34px;
  }

  .problem_title {
    flex: 1; /* Take up remaining space */
    font-size: 20px;
    text-align: left;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
    color: #000000;
    opacity: 70%;
  }

  .grade {
    height: 34px;
    font-size: 16px;
    margin-right: 20px;
    line-height: 34px;
    font-weight: bold;
    color: #000000;
    opacity: 60%;
  }

  .button {
    width: fit-content;
    height: fit-content;
    padding: 7px 30px;
    box-shadow: 1px 1px #ccc9c9;

    color: ${(props) =>
      props.state === "success" || props.state === "fail"
        ? "white"
        : "#56565692"};

    background-color: ${(props) =>
      props.state === "success"
        ? "rgba(109, 99, 228, 0.8)"
        : props.state === "fail"
        ? "rgba(244, 117, 117, 0.8)"
        : // 문제를 푼상태는 버튼 흰색(comment이나 question)
        props.state === "comment" || "question"
        ? "white"
        : // : props.state === null ? "#d6d6d6cc"
          // 그외는 회색
          "#d6d6d6cc"};
    &:hover {
      background-color: ${(props) =>
        props.state === "success"
          ? "rgba(109, 99, 228, 1.0)"
          : props.state === "fail"
          ? "rgba(244, 117, 117, 1.0)"
          : ""};
    }
    border-radius: 8px;
    font-size: 17px;
    font-weight: bold;

    text-align: center;
    border: ${(props) =>
      props.state === "success" || props.state === "fail"
        ? "none"
        : props.state === null
        ? "#d6d6d6cc"
        : "2px solid #DEDEDE"};
    transition: background-color 0.3s;
    margin-right: 14px;
    pointer-events: ${(props) =>
      props.state === "success" || props.state === "fail" ? "auto" : "none"};
  }
`;
