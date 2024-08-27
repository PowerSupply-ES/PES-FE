import React from "react";
import AceEditor from "react-ace";
import "styles/css/App.css";
import "ace-builds/src-noconflict/mode-c_cpp"; // C/C++ 언어 모드 import
import "ace-builds/src-noconflict/theme-monokai"; // 다크 모드 테마 import

interface CodeEditorProps{
  code: string;  // 코드 내용
  onChange: (text: string) => void;  // 코드 변경 핸들러
  readOnly?: boolean;  // 읽기 전용 여부
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, readOnly }) => {
  // 부모 컴포넌트 코드 상태 업데이트
  const handleChange = (newCode: string) => {
    onChange(newCode);
  };

  return (
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
  );
};

export default CodeEditor;
