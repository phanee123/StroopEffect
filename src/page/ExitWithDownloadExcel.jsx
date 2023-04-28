import { CSVDownload, CSVLink } from "react-csv";
import { useContext } from "react";
import { ResultsContext } from "../context/Results";
const headers = [
  { label: "Test Number", key: "currentTest" },
  { label: "SL Number in Current Test", key: "serialNum" },
  { label: "System Input", key: "systemInput" },
  { label: "User Input", key: "userInput" },
  { label: "Input Status", key: "isTrue" },
  { label: "Time Response (in se)", key: "timeTookInSec" },
];

const getScore = (results, testNum) => {
  const filterResults = results.filter((item) => item.currentTest === testNum);
  console.log({ filterResults });
  const filterFalseResults = filterResults.filter((item) => !item.isTrue);

  return {
    numOfFalse: filterFalseResults.length,
    trueTotalTimeSum: filterResults.reduce((acc, curr) => {
      let newSum = acc + curr.timeTookInSec;
      return newSum;
    }, 0),
  };
};
const ExitWithDownloadExcel = () => {
  const { results } = useContext(ResultsContext);

  const csvReport = {
    data: results,
    headers: headers,
    filename: `StroopEffect_${new Date().toLocaleString()}`,
    extension: ".csv",
  };

  //   TODO: Add correct message below
  return (
    <div>
      <h2>Results</h2>
      <h3>False Count in Test1 - {getScore(results, 1).numOfFalse}</h3>
      <h3>Total Time in Test1 - {getScore(results, 1).trueTotalTimeSum}</h3>
      <h3>False Count in Test2 - {getScore(results, 2).numOfFalse}</h3>
      <h3>Total Time in Test2 - {getScore(results, 2).trueTotalTimeSum}</h3>
      <h3>False Count in Test3 - {getScore(results, 3).numOfFalse}</h3>
      <h3>Total Time in Test3 - {getScore(results, 3).trueTotalTimeSum}</h3>
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, iure.</h3>
      <CSVLink {...csvReport}>Download me</CSVLink>;
    </div>
  );
};

export default ExitWithDownloadExcel;
