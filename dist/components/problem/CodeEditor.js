import { jsx as _jsx } from "react/jsx-runtime";
import AceEditor from "react-ace";
import "styles/css/App.css";
import "ace-builds/src-noconflict/mode-c_cpp"; // C/C++ 언어 모드 import
import "ace-builds/src-noconflict/theme-monokai"; // 다크 모드 테마 import
const CodeEditor = ({ code, onChange, readOnly }) => {
    // 부모 컴포넌트 코드 상태 업데이트
    const handleChange = (newCode) => {
        onChange(newCode);
    };
    return (_jsx(AceEditor, { mode: "c_cpp", theme: "monokai", onChange: handleChange, readOnly: readOnly, value: code, fontSize: 16, showPrintMargin: true, showGutter: true, highlightActiveLine: true, setOptions: {
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
            showLineNumbers: true,
            tabSize: 4,
            cursorWidth: 2, // 커서 너비 설정
        }, style: { width: "90%", height: "100%" }, editorProps: { $blockScrolling: true } }));
};
export default CodeEditor;
