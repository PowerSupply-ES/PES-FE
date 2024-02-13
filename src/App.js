import { Routes, Route } from "react-router-dom";
import ListPage from "pages/list/ListPage";
import ProblemPage from "pages/problem/ProblemPage";
import QuestionPage from "pages/question/QuestionPage";
import Signin from "pages/signin/Signin";
import Signup from "pages/signup/Signup";
import Main from "pages/main/Main";
import Mypage from "pages/mypage/Mypage";
import Solution from "pages/solution/Solution";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/main" element={<Main/>}></Route>
        <Route path="/signin" element={<Signin/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/mypage" element={<Mypage/>}></Route>
        <Route path="/solution/:id" element={<Solution/>}></Route>
        <Route path="/list" element={<ListPage/>}></Route>
        <Route path="/problem/:id" element={<ProblemPage/>}></Route>
        <Route path="/question/:id" element={<QuestionPage/>}></Route>

      </Routes>
    </div>
  );
}

export default App;