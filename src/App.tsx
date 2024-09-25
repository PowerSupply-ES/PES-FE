import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/header/Header";
import ManageMenu from "components/manage/ManageMenu";
import AdminRoute from "components/common/AdminRoute";

// 동적 로딩
const ListPage = React.lazy(() => import("pages/list/listPage"));
const ProblemPage = React.lazy(() => import("pages/problem/problemPage"));
const QuestionPage = React.lazy(() => import("pages/question/questionPage"));
const Signin = React.lazy(() => import("pages/sign/signInPage"));
const Signup = React.lazy(() => import("pages/sign/signUpPage"));
const MainPage = React.lazy(() => import("pages/main/mainPage"));
const Mypage = React.lazy(() => import("pages/mypage/mypage"));
const SolutionPage = React.lazy(() => import("pages/solution/solutionPage"));
const Menual = React.lazy(() => import("pages/menual/menualPage"));
const NoticePage = React.lazy(() => import("pages/notice/noticePage"));
const NoticePost = React.lazy(() => import("pages/notice/noticePostPage"));
const NoticeDetail = React.lazy(() => import("pages/notice/noticeDetailPage"));
const UserListPage = React.lazy(() => import("pages/manage/userListPage"));
const UserProbPage = React.lazy(() => import("pages/manage/userProbPage"));
const UserFeedPage = React.lazy(() => import("pages/manage/userFeedPage"));
const UserDetailPage = React.lazy(() => import("pages/manage/userDetailPage"));


const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </div>
  );
}

export default App;
