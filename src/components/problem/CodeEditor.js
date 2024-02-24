import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import React, { useEffect } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import tomorrowTheme from 'monaco-themes/themes/Tomorrow.json';



const CodeEditor = () => {
    // useMonaco 훅을 사용해서 monaco 객체 가져옴
    const monaco = useMonaco();

    useEffect(() => {
        // monaco 객체가 없으면 초기화되지 않았으므로 함수 종료
        if (!monaco) return;
    
        // 'tomorrow'라는 테마 이름으로 monaco-themes에서 가져온 테마 등록
        monaco.editor.defineTheme('tomorrow', tomorrowTheme);
    
        // 현재 사용 중인 모나코 에디터에 'tomorrow' 테마 적용
        monaco.editor.setTheme('tomorrow');
    }, [monaco]);


	return <Editor 
    theme="tomorrow"
    height='100%' />
}

export default CodeEditor;


// const CodeEditor = () => {
//   useEffect(() => {
//     // Monaco Editor 초기화
//     monaco.editor.create(document.getElementById('editor'), {
//       language: 'javascript',
//     });
//   }, []);

//   return <div id="editor" style={{ height: '500px' }}></div>;
// };