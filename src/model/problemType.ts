// 문제 관련 타입 정의

// state를 받아들이는 스타일 컴포넌트
export interface StyledProps {
  state: string;
}

// problem
export type Problem = {
  problemId: number;
  problemTitle: string;
  problemScore: number;
  answerId: number;
  answerState: string;
  finalScore?: number;
};

// solution prob 타입
export type SoluProb = Pick<
  Problem,
  "problemId" | "problemTitle" | "problemScore"
>;

// problemList 타입 - TODO: 적절히 사용 요망
// export type ProblemList = {
//   problem: Problem;
//   answerCount?: number;  // 푼사람 수
// };

// ProblemTitle 타입
export type ProblemTitle = Pick<
  Problem,
  "problemId" | "problemTitle" | "problemScore"
>;

// ProbHeader Props 타입
export type ProbHeaderProps = {
  state: string;
  navigate: (path: string) => void;
  problemId: number;
}

// ProblemContent 타입
export type ProblemContent = {
  problemId: number;
  problemContent: string;

  // renderStyledNewlines함수사용 위해 배열로 변환
  sampleInputs: string[];
  sampleOutputs: string[];
};

// ProblemItem(ListItem) 컴포넌트 props 타입
export type ProblemItemProps = {
  pid: number;
  ptitle: string;
  grade: number;
  answerId: number | null;
  state: string;
}


export type CodeEditorProps = {
  code: string;  // 코드 내용
  onChange: (text: string) => void;  // 코드 변경 핸들러
  readOnly?: boolean;  // 읽기 전용 여부
}

export type UseProbPageReturnType = {
  title: ProblemTitle | null;
  problem: ProblemContent | null;
  detail: string | null;
  isLogin: boolean | null;
  textHandler: (text: string) => void;
  submitCode: () => void;
}