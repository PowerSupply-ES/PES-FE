import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListPage from "pages/list/listPage";
import ProblemPage from "pages/problem/problemPage";
import QuestionPage from "pages/question/questionPage";
import Signin from "pages/sign/signInPage";
import Signup from "pages/sign/signUpPage";
import MainPage from "pages/main/mainPage";
import Mypage from "pages/mypage/mypage";
import SolutionPage from "pages/solution/solutionPage";
import Menual from "pages/menual/menualPage";
import NoticePage from "pages/notice/noticePage";
import NoticePost from "pages/notice/noticePostPage";
import NoticeDetail from "pages/notice/noticeDetailPage";
import UserListPage from "pages/manage/userListPage";
import UserDetailPage from "pages/manage/userDetailPage";
import Header from "components/header/Header";
import React from "react";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Header />}>
          <Route path="" element={<MainPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/menual" element={<Menual />} />
          <Route path="/notice" element={<NoticePage />} />
          <Route path="/noticePost" element={<NoticePost />} />

          <Route path="/solution/:id" element={<SolutionPage />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/problem/:id" element={<ProblemPage />} />
          <Route path="/question/:id" element={<QuestionPage />} />
          <Route path="/notice/:id" element={<NoticeDetail />} />
          <Route path="/manageUser/:id" element={<UserDetailPage />} />
        </Route>
        <Route path="/manageUser" element={<UserListPage />} />

      </Routes>
    </div>
  );
}

export default App;
