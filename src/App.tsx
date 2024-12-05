import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/header/Header";
import ManageMenu from "components/manage/ManageMenu";
import AdminRoute from "components/common/AdminRoute";
import Loading from "components/common/Loading";

// 동적 임포트
const ListPage = React.lazy(() => import("pages/list/listPage"));
const ProblemPage = React.lazy(() => import("pages/problem/problemPage"));
const QuestionPage = React.lazy(() => import("pages/question/questionPage"));
const Signin = React.lazy(() => import("pages/sign/signInPage"));
const Signup = React.lazy(() => import("pages/sign/signUpPage"));
const MainPage = React.lazy(() => import("pages/main/mainPage"));
const Mypage = React.lazy(() => import("pages/mypage/mypage"));
const SolutionPage = React.lazy(() => import("pages/solution/solutionPage"));
// const Menual = React.lazy(() => import("pages/menual/menualPage"));
const NoticePage = React.lazy(() => import("pages/notice/noticePage"));
const NoticePost = React.lazy(() => import("pages/notice/noticePostPage"));
const NoticeDetail = React.lazy(() => import("pages/notice/noticeDetailPage"));

const UserListPage = React.lazy(() => import("pages/manage/userListPage"));
const UserProbPage = React.lazy(() => import("pages/manage/userProbPage"));
const UserFeedPage = React.lazy(() => import("pages/manage/userFeedPage"));
const UserDetailPage = React.lazy(() => import("pages/manage/userDetailPage"));
const ProbDetailPage = React.lazy(() => import("pages/manage/ProbDetailPage"));


const App: React.FC = () => {
  return (
    <div className="App" style={{ backgroundColor: "#f5f5f5" }}>
      {" "}
      {/* 글로벌 스타일 적용 */}
      <Suspense fallback={<Loading />}>
        {" "}
        {/* 동적 로드된 컴포넌트(React.lazy)가 로드되는 동안 보여줄 로딩 화면 */}
        <Routes>
          {/* Topbar */}
          <Route path="/" element={<Header />}>
            <Route path="" element={<MainPage />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mypage" element={<Mypage />} />
            {/* <Route path="/menual" element={<Menual />} /> */}
            <Route path="/notice" element={<NoticePage />} />
            <Route path="/postNotice" element={<NoticePost />} />

            <Route path="/solution/:id" element={<SolutionPage />} />
            <Route path="/list" element={<ListPage />} />
            <Route path="/problem/:id" element={<ProblemPage />} />
            <Route path="/question/:id" element={<QuestionPage />} />
            <Route path="/notice/:id" element={<NoticeDetail />} />
          </Route>

          {/* 관리자 메뉴 - AdminRoute로 보호*/}
          <Route path="/" element={<ManageMenu />}>
            <Route
              path="/manageUser"
              element={
                <AdminRoute>
                  <UserListPage />
                </AdminRoute>
              }
            />
            <Route
              path="/manageUser/:id"
              element={
                <AdminRoute>
                  <UserDetailPage />
                </AdminRoute>
              }
            />
            <Route
              path="/manageProb"
              element={
                <AdminRoute>
                  <UserProbPage />
                </AdminRoute>
              }
            />
            <Route
              path="/manageProb/:id"
              element={
                <AdminRoute>
                  <ProbDetailPage />
                </AdminRoute>
              }
            />
            <Route
              path="/manageFeed"
              element={
                <AdminRoute>
                  <UserFeedPage />
                </AdminRoute>
              }
            />
            
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
