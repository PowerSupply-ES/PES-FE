// TODO : 테스트 후 데드코드일 시 삭제 예정


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   Container,
//   ProblemId,
//   ProblemTitle,
//   Grade,
//   Button,
// } from "styles/styledComponent";
// import { ProblemItemProps } from "model/problemType";

// const ProblemItem: React.FC<ProblemItemProps> = (props) => {
//   const navigate = useNavigate();

//   return (
//     <Container state={props.state}>
//       <ProblemId
//         state={props.state}
//         onClick={() => {
//           navigate(`/question/${props.pid}`);
//         }}
//       >
//         {props.pid}
//       </ProblemId>
//       <ProblemTitle
//         onClick={() => {
//           navigate(`/question/${props.pid}`);
//         }}
//       >
//         {props.ptitle}
//       </ProblemTitle>
//       <Grade>점수 {props.grade}</Grade>
//       <Button
//         state={props.state}
//         onClick={() => navigate(`/solution/${props.pid}`)}
//       >
//         {props.state === "retry" ? "RE TRY" : "풀이보기"}
//       </Button>
//     </Container>
//   );
// };

// export default ProblemItem;
