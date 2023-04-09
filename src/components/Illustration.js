import classes from "../styles/Illustration.module.css";

export default function Illustration(props) {
  return (
    <div className={classes.illustration}>
      <img src={props.src} alt="Signup image" />
    </div>
  );
}
