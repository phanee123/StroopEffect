import { CSVDownload, CSVLink } from "react-csv";
import { useContext } from "react";
import { ResultsContext } from "../context/Results";
import { useNavigate } from "react-router-dom";
/*css for button */

const styles = {
  lastpage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "70vh",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    display: "block",
    outline: "0",
    border: "0",
    padding: "8px 32px",
    backgroundColor: "#6666ff",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "20px",
    fontWeight: "600",
  },
};
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
  const filterFalseResults = filterResults.filter((item) => !item.isTrue);

  return {
    numOfFalse: filterFalseResults.length,
    trueTotalTimeSum: filterResults
      .reduce((acc, curr) => {
        let newSum = acc + curr.timeTookInSec;
        return newSum;
      }, 0)
      .toFixed(2),
  };
};
const ExitWithDownloadExcel = () => {
  const { results } = useContext(ResultsContext);
  const navigate = useNavigate();

  const csvReport = {
    data: results,
    headers: headers,
    filename: `StroopEffect_${new Date().toLocaleString()}`,
    extension: ".csv",
  };

  //   TODO: Add correct message below
  return (
    <div style={styles.lastpage}>
      <h2>Results</h2>
      <h3>
        Please take a screen short/ note down your results in your note book
      </h3>
      <p>False Count in Test1 - {getScore(results, 1).numOfFalse}</p>
      <p>Total Time in Test1 - {getScore(results, 1).trueTotalTimeSum}</p>
      <p>False Count in Test2 - {getScore(results, 2).numOfFalse}</p>
      <p>Total Time in Test2 - {getScore(results, 2).trueTotalTimeSum}</p>
      <p>Total Time in Test3 - {getScore(results, 3).trueTotalTimeSum}</p>
      <h3>Click on the link below to know your detailed responses.</h3>

      <CSVLink {...csvReport}>Download me</CSVLink>
      <button style={styles.button} onClick={() => navigate("/lastactivity")}>
        Next
      </button>
    </div>
  );
};

export default ExitWithDownloadExcel;
