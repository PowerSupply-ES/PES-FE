import React, {Suspense} from "react";
import "styles/css/App.css";
import { CodeEditorProps } from "model/problemType";

import AceEditor from 'ace/ace';  // 커스텀 빌드된 ace.js 사용
import "ace/mode-c_cpp"; // C/C++ 언어 모드 import
import "ace/theme-monokai"; // 다크 모드 테마 import
import Loading from "components/common/Loading";
// const AceEditor = React.lazy(() => import("react-ace")); // AceEditor 동적 로드

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, readOnly }) => {
  // 부모 컴포넌트 코드 상태 업데이트
  const handleChange = (newCode: string) => {
    onChange(newCode);
  };

  return (
    <Suspense fallback={<Loading/>}>
      <AceEditor
        mode="c_cpp"
        theme="monokai"
        onChange={handleChange} // handleChange 함수를 전달
        readOnly={readOnly}
        value={code} // 코드 표시를 위해 value props 사용
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
          cursorWidth: 2, // 커서 너비 설정
        }}
        style={{ width: "90%", height: "100%" }} // 필요에 따라 크기 조정
        editorProps={{ $blockScrolling: true }}
      />
    </Suspense>
  );
};

export default CodeEditor;
