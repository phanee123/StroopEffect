import { useContext } from "react";
import { ResultsContext } from "../../context/Results";
import ColorButton from "../../components/color-button/colorButton";
import styles from "./styles.module.css";
import sound from "../../assets/click.wav";

const ColorPad = () => {
  const { setCurrentStep } = useContext(ResultsContext);
  const clickSound = new Audio(sound);

  const clickHandler = () => {
    clickSound.play();
    setCurrentStep((prev) => prev + 1);
  };
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
