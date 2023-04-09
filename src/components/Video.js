import image from "../components/assets/images/3.jpg";
import classes from "../styles/Video.module.css";

export default function Videos() {
  return (
    <a href="quiz.html">
      <div class={classes.video}>
        <img src={image} alt="" />
        <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        <div class={classes.qmeta}>
          <p>10 Questions</p>
          <p>Score : Not taken yet</p>
        </div>
      </div>
    </a>
  );
}
