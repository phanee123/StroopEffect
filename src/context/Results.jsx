import { createContext, useState } from "react";

import { NUM_OF_COLORS_IN_GRID } from "../constants/general";

export const ResultsContext = createContext({
  results: [],
  setResults: () => {},
  currentStep: 0,
  setCurrentStep: () => {},
  testNum: [],
  setTestNum: () => {},
  currentTest: 1,
  setCurrentTest: () => {},
});

export const ResultsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [currentTest, setCurrentTest] = useState(1);
  const [testNum, setTestNum] = useState();
  const [results, setResults] = useState([]);

  const value = { results, setResults, currentStep, setCurrentStep, testNum, setTestNum, currentTest, setCurrentTest };
  return <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>;
};
