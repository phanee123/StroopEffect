import ColorPad from "../color-pad";
import ColorGrid from "../colorgrid";
import styles from "./styles.module.css";

const Test1 = () => {
  return (
    <div className={styles.container}>
      <ColorGrid />
      <ColorPad />
    </div>
  );
};

export default Test1;
