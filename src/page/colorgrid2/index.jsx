import { useContext } from "react";
import { ResultsContext } from "../../context/Results";

import styles from "./styles.module.css";

const ColorGrid2 = () => {
  const { currentStep, testNum } = useContext(ResultsContext);
  return (
    <div className={styles.container}>
      {testNum.map((color, index) => {
        if (index === currentStep) {
          return (
            <div className={styles.train} style={{ border: "1px solid black" }} key={index}>
              {[1, 2, 3].map((_, _index) => (
                <p className={styles.cell} style={{ backgroundColor: color.value }} key={index + _index}></p>
              ))}
            </div>
          );
        } else {
          return (
            <div className={styles.train} key={index}>
              {[1, 2, 3].map((_, _index) => (
                <p className={styles.cell} style={{ backgroundColor: color.value }} key={index + _index}></p>
              ))}
            </div>
          );
        }
      })}
    </div>
  );
};
export default ColorGrid2;
