import { useContext } from "react";
import { ResultsContext } from "../../context/Results";

import styles from "./styles.module.css";

const ColorGrid1 = () => {
  const { currentStep, testNum } = useContext(ResultsContext);
  return (
    <div className={styles.container}>
      {testNum.map((color, index) => {
        if (index === currentStep) {
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
export default ColorGrid1;
