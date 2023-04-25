import { createContext, useState } from "react";
import { shuffleArray } from "../common/utils";

export const ResultsContext = createContext({
  results: [],
  setResults: () => {},
  currentStep: 1,
  setCurrentStep: () => {},
  testNum: shuffleArray(),
  setTestNum: () => {},
});

export const ResultsProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [testNum, setTestNum] = useState(shuffleArray());
  const [results, setResults] = useState([{ systemInput: "Red", currentStep, testNum }]);

  const value = { results, setResults, currentStep, setCurrentStep, testNum, setTestNum };
  return <ResultsContext.Provider value={value}>{children}</ResultsContext.Provider>;
};
