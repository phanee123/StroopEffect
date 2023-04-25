import { createContext, useState } from "react";
import { shuffleArray } from "../common/utils";

export const ResultsContext = createContext({
  results: [],
  setResults: () => {},
  currentStep: 0,
  setCurrentStep: () => {},
  testNum: shuffleArray(),
  setTestNum: () => {},
  currentTest: 1,
  setCurrentTest: () => {},
});

export const ResultsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTest, setCurrentTest] = useState(1);
  const [testNum, setTestNum] = useState(shuffleArray());
  const [results, setResults] = useState([]);

  const value = { results, setResults, currentStep, setCurrentStep, testNum, setTestNum, currentTest, setCurrentTest };
  return <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>;
};
