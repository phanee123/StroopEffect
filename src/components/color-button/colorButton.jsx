import { getColor } from "../../constants/colors";
import styles from "./styles.module.css";

const ColorButton = (props) => {
  const { color, clickHandler, label } = props;
  return (
    <button className={styles.button} style={getColor[color]} onClick={clickHandler}>
      {label}
    </button>
  );
};
export default ColorButton;
