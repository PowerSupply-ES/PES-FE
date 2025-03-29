// problem 페이지 코드입력 컴포넌트
import React, { Suspense } from "react";
const CodeEditor = React.lazy(() => import("components/problem/CodeEditor"));
import Loading from "components/common/Loading";
// import "styles/css/App.css";

const CodeInputArea = ({ isLogin, detail, textHandler }) => {
  return (
    <>
      <div className="code_section">
        {isLogin ? (
          <>
            {/* 변경코드 by성임 - Lazy Loading 적용 */}
            <Suspense fallback={<Loading />}>
              <CodeEditor
                code={""} // 현재 코드 상태
                onChange={textHandler} // 코드 변경 핸들러
                readOnly={false} // 읽기 전용 여부
              />
            </Suspense>

            {detail !== null && detail !== undefined && (
              <div className="detail_container">
                <h3>틀린 이유</h3>
                <div className="detail_content">{detail}</div>
              </div>
            )}
          </>
        ) : (
          <textarea
            disabled
            className="code_input"
            placeholder="로그인 후 이용해주세요."
          />
        )}
      </div>
    </>
  );
};

export default CodeInputArea;
