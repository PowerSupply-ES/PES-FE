import React, { useEffect, useRef } from "react";
//import "styles/css/App.css";
import { CodeEditorProps } from "model/problemType";
import ace from "libs/ace";  // 커스텀 빌드된 ace.js 사용
import "libs/mode-c_cpp"; // C/C++ 언어 모드 import
import "libs/theme-monokai"; // 다크 모드 테마 import
// import { ace as ace, mode_c_cpp, theme_monokai } from "libs"

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, readOnly }) => {
  const editorRef = useRef<HTMLDivElement | null>(null); // 커스텀빌드 라이브러리 사용위한 HOOK

  useEffect(() => {
    if (editorRef.current) {
      const editor = ace.edit(editorRef.current); // 'ace' 글로벌 객체로 에디터 초기화
      editor.session.setMode("ace/mode/c_cpp"); // C/C++ 모드 설정
      editor.setTheme("ace/theme/monokai"); // 모노카이 테마 설정
      editor.setValue(code); // 초기 코드 설정
      editor.setReadOnly(readOnly); // 읽기 전용 설정
      editor.setFontSize(16); // 폰트 크기 설정

      // 에디터 옵션 설정
      editor.setOptions({
        //fontFamily: "Courier New, monospace", // 고정 폭 폰트
        fontSize: "16px",
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
        showLineNumbers: true,
        tabSize: 4,
        cursorWidth: 2,
        //wrap: true, // 긴 줄 자동 줄바꿈
      });

      // 코드 변경 이벤트 처리
      editor.on("change", () => {
        const currentCode = editor.getValue();
        onChange(currentCode);
      });

      // 컴포넌트가 언마운트될 때 에디터를 파괴
      return () => {
        editor.destroy();
      };
    }
  }, [code, onChange, readOnly]);

  return (
    <div
      ref={editorRef}
      style={{ width: "90%", height: "100%" }} // 에디터 크기
    />
  );
};

export default CodeEditor;