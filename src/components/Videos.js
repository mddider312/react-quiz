import Video from "../components/Video";
import classes from "../styles/Videos.module.css";

export default function Videos() {
  return (
    <div class={classes.videos}>
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
      <Video />
    </div>
  );
}
