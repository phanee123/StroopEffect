import { BrowserRouter, Routes, Route } from "react-router-dom";

import Instructions from "./page/Instructions";
import { ResultsProvider } from "./context/Results";
import Test1 from "./page/test1/Test1";

import "./App.css";

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <ResultsProvider>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/test1" element={<Test1 />} />
          </Routes>
        </ResultsProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
