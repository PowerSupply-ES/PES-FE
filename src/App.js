import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "pages/list/ListPage";
import ProblemPage from "pages/problem/ProblemPage";
import QuestionPage from "pages/question/QuestionPage";
import Signin from "pages/signin/Signin";
import Signup from "pages/signup/Signup";
import Main from "pages/main/Main";
import Mypage from "pages/mypage/Mypage";
import Solution from "pages/solution/Solution";
import Menual from "pages/menual/Menual";
import Notice from "pages/notice/notice"
import PostNotice from "pages/notice/postNotice"
import NoticeDetail from "pages/notice/noticeDetail"
import ManageUser from "pages/manage/ManageUser";
import UserDetail from "pages/manage/UserDetail";
import Header from "components/main/Header";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Header/>}>
          <Route path='' element={<Main/>} />
          <Route path='/signin' element={<Signin/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/mypage' element={<Mypage/>} />
          <Route path='/menual' element={<Menual/>} />
          <Route path='/notice' element={<Notice/>} />
          <Route path='/postNotice' element={<PostNotice/>} />
          <Route path='/manageUser' element={<ManageUser/>} />


          <Route path='/solution/:id' element={<Solution/>} />
          <Route path='/list' element={<ListPage/>} />
          <Route path='/problem/:id' element={<ProblemPage/>} />
          <Route path='/question/:id' element={<QuestionPage/>} />
          <Route path='/notice/:id' element={<NoticeDetail/>} />
          <Route path='/manageUser/:id' element={<UserDetail/>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;