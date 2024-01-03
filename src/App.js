import { Routes, Route } from "react-router-dom";
import { ProblemPage } from "pages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/problem" element={<ProblemPage/>}></Route>
      </Routes>
    </div>
  );
}



export default App;