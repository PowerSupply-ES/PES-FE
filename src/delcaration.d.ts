declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.webp'

declare module 'libs/ace';
declare module 'libs/mode-c_cpp';
declare module 'libs/theme-monokai';

//window 타입 확장
interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: Function;
  }