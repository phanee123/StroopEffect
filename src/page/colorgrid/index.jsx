import { useContext } from "react";
import { ResultsContext } from "../../context/Results";

import styles from "./styles.module.css";

const ColorGrid = () => {
  const { currentStep, testNum } = useContext(ResultsContext);
  return (
    <div className={styles.container}>
      {testNum.map((color, index) => {
        if (index === currentStep - 1) {
          return (
            <p className={styles.cell} style={{ color: color.value, borderBottom: `1px solid black` }} key={index}>
              {color.label}
            </p>
          );
        } else {
          return (
            <p className={styles.cell} style={{ color: color.value }} key={index}>
              {color.label}
            </p>
          );
        }
      })}
    </div>
  );
};
export default ColorGrid;
