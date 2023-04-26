import { BrowserRouter, Routes, Route } from "react-router-dom";

import Instructions from "./page/Instructions";
import { ResultsProvider } from "./context/Results";
import Test1 from "./page/test1/Test1";
import Test2 from "./page/test2/Test2";
import ExitWithDownloadExcel from "./page/ExitWithDownloadExcel";
import PageNotFound from "./page/PageNotFound";

import "./App.css";
import Ready from "./page/Ready";

function App() {
  return (
    <main className="main-container">
      <BrowserRouter>
        <ResultsProvider>
          <Routes>
            <Route path="/" element={<Instructions />} />
            <Route path="/test1" element={<Test1 />} />
            <Route path="/test2" element={<Test2 />} />
            <Route path="/ready" element={<Ready />} />
            <Route path="/exitWithExcel" element={<ExitWithDownloadExcel />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </ResultsProvider>
      </BrowserRouter>
    </main>
  );
}

export default App;
