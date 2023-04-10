import classes from "../styles/Answer.module.css";
import Checkbox from "./Checkbox";

export default function Answer() {
  return (
    <>
      <div className={classes.answers}>
        <Checkbox className={classes.answer} text="Test answer" />
      </div>
    </>
  );
}
