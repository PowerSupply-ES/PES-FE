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
import UserProbPage from "pages/manage/userProbPage";
import UserFeedPage from "pages/manage/userFeedPage";
import UserDetailPage from "pages/manage/userDetailPage";
import Header from "components/header/Header";
import React from "react";
import ManageMenu from "components/manage/ManageMenu";
import AdminRoute from "components/common/AdminRoute";

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        {/* Topbar */}
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

        {/* 관리자 메뉴 - AdminRoute로 보호*/}
        <Route path="/" element={<ManageMenu />}>
          <Route path="/manageUser" element={<AdminRoute><UserListPage /></AdminRoute>} />
          <Route path="/manageProb" element={<AdminRoute><UserProbPage /></AdminRoute>} />
          <Route path="/manageFeed" element={<AdminRoute><UserFeedPage /></AdminRoute>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
