import ColorPad from "../color-pad";
import ColorGrid2 from "../colorgrid2";
import styles from "./styles.module.css";

const Test2 = () => {
  return (
    <div className={styles.container}>
      <ColorGrid2 />
      <ColorPad />
    </div>
  );
};

export default Test2;
