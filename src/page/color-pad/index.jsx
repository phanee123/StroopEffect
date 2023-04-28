import { useContext, useEffect, useState } from "react";
import { ResultsContext } from "../../context/Results";
import ColorButton from "../../components/color-button/colorButton";
import styles from "./styles.module.css";
import sound from "../../assets/click.wav";
import { NUM_OF_COLORS_IN_GRID } from "../../constants/general";
import { useNavigate } from "react-router-dom";

const ColorPad = () => {
  const navigate = useNavigate();
  const [mountTime, setMountTimer] = useState(new Date().getTime());
  const { setCurrentStep, currentStep, testNum, results, setResults, currentTest, setCurrentTest } =
    useContext(ResultsContext);
  const clickSound = new Audio(sound);

  const clickHandler = (event) => {
    const currentTime = new Date().getTime();
    const buttonClicked = event.target.innerHTML;
    clickSound.play();
    const updatedResult = {
      systemInput: testNum[currentStep].displayColor,
      userInput: buttonClicked,
      isTrue: testNum[currentStep].displayColor === buttonClicked,
      serialNum: currentStep + 1,
      currentTest,
      timeTookInSec: (currentTime - mountTime) / 1000,
    };
    let newResults = [...results];
    newResults.push(updatedResult);
    setResults(newResults);
    if (currentStep < NUM_OF_COLORS_IN_GRID - 1) {
      setCurrentStep((prev) => prev + 1);
      setMountTimer(currentTime);
    } else {
      setCurrentStep(0);
      setMountTimer(null);
      if (NUM_OF_COLORS_IN_GRID * 3 === newResults.length) {
        navigate("/exitWithExcel");
        setCurrentTest(null);
      } else {
        navigate("/");
        setCurrentTest((prev) => prev + 1);
      }
    }
  };

  useEffect(() => {
    setMountTimer(new Date().getTime());
    return () => {
      setMountTimer(null);
    };
  }, []);
  return (
    <div className={styles.container} onClick={clickHandler}>
      <ColorButton color={"RED"} label={"RED"} />
      <ColorButton color={"GREEN"} label={"GREEN"} />
      <ColorButton color={"BLUE"} label={"BLUE"} />
      <ColorButton color={"YELLOW"} label={"YELLOW"} />
    </div>
  );
};

export default ColorPad;
