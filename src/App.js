import { Routes, Route } from "react-router-dom";
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


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mypage" element={<Mypage/>}></Route>
        <Route path="/menual" element={<Menual/>}></Route>
        <Route path="/notice" element={<Notice/>}></Route>
        <Route path="/postNotice" element={<PostNotice/>}></Route>
        <Route path="/manageUser" element={<ManageUser/>}></Route>


        <Route path="/solution/:id" element={<Solution/>}></Route>
        <Route path="/list" element={<ListPage/>}></Route>
        <Route path="/problem/:id" element={<ProblemPage/>}></Route>
        <Route path="/question/:id" element={<QuestionPage/>}></Route>
        <Route path="/notice/:id" element={<NoticeDetail/>}></Route>

      </Routes>
    </div>
  );
}

export default App;