import "../App.css";

const lastPageStyles = {
  container: {
    padding: "2rem",
    display: "flex",
    flexDirection: "column",
    minHeight: "60vh",
    gap: "15px",
  },
  bottomArea: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  footer: {
    textAlign: "center",
  },
  dotted: {
    textDecorationLine: "underline",
    textDecorationStyle: "dotted",
  },
};

const LastPage = () => {
  return (
    <div style={lastPageStyles.container}>
      <h4>
        Table 1: Showing subjects responses/ results for condition 1, condition
        2 and condition 3 in the Stroop experiment.
      </h4>
      <table>
        <tr>
          <th></th>
          <th>Time Taken</th>
          <th>Mistakes/Errors</th>
        </tr>
        <tr>
          <td>
            <b> Condition-1</b>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <b>Condition-2</b>
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <b>Condition-3</b>
          </td>
          <td></td>
          <td></td>
        </tr>
      </table>
      <p>
        1. Compare the time taken for conditions 1, condition 2 and condition 3
      </p>
      <p>
        2. Compare the errors done in condition 1, condition 2 and condition 3
      </p>
      <div style={lastPageStyles.bottomArea}>
        <h4>Discussion:</h4>
        <p style={lastPageStyles.dotted}>
          Discuss the difference in time and errors which indicates the
          phenomena of automaticity.
        </p>
        <h4>Conclusion:</h4>
        <p style={lastPageStyles.dotted}>
          Demonstrated the phenomena of Stroop effect using colors and color
          words.
        </p>
        <h4>Practical Application:</h4>
        <p style={lastPageStyles.dotted}>
          You will have to identify 2-3 conditions where errors occur due to
          automaticity in responding to stimuli/situations in day-to-day life.
        </p>
        <footer>
          <h5 style={lastPageStyles.footer}>.....*End Experiment*.....</h5>
        </footer>
      </div>
    </div>
  );
};

export default LastPage;
