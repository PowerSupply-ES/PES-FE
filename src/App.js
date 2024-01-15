import { Routes, Route } from "react-router-dom";
import { ProblemPage, QuestionPage } from "pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/problem" element={<ProblemPage/>}></Route>
        <Route path="/question/:id" element={<QuestionPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;