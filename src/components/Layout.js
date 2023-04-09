import classes from "../styles/Layout.module.css";
import Nav from "./Nav";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main class={classes.main}>
        <div class={classes.container}>{children}</div>
      </main>
    </>
  );
}
