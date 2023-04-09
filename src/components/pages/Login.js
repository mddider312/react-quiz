import loginImage from "../../components/assets/images/login.svg";
import classes from "../../styles/Login.module.css";
// import classes from "../../styles/From.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div class="column">
        <Illustration src={loginImage} />
        <Form className={`${classes.login}`}>
          <TextInput
            type="text"
            placeholder="Enter your email"
            icon="alternate_email"
          />
          <TextInput
            type="password"
            placeholder="Enter your password"
            icon="lock"
          />

          <Button>Submit Now</Button>

          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
