import ColorPad from "../color-pad";
import ColorGrid1 from "../colorgrid1";
import styles from "./styles.module.css";

const Test1 = () => {
  return (
    <div className={styles.container}>
      <ColorGrid1 />
      <ColorPad />
    </div>
  );
};

export default Test1;
