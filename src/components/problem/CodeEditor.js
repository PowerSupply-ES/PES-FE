import React from 'react';
import AceEditor from 'react-ace';
import '../../App.css';

import 'ace-builds/src-noconflict/mode-c_cpp'; // C/C++ 언어 모드 import
import 'ace-builds/src-noconflict/theme-monokai'; // 다크 모드 테마 import


const CodeEditor = ({ onChange }) => {
    // const [code, setCode] = useState('');

    return (
        <AceEditor
            mode="c_cpp"
            theme="monokai"

            // onChange={(onChange) => setCode(newCode)}
            onChange={onChange}
            
            // value={code}
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
            }}
            style={{ width: '90%', height: '100%' }} // 필요에 따라 크기 조정
            editorProps={{ $blockScrolling: true }}
            
        />
    );
};

export default CodeEditor;