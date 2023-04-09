import signupImage from "../../components/assets/images/signup.svg";
import classes from "../../styles/From.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration src={signupImage} />
        <Form className={`${classes.signup}`}>
          <TextInput type="text" placeholder="Enter your name" icon="person" />
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
          <TextInput
            type="text"
            placeholder="Enter confirm password"
            icon="lock_clock"
          />

          <Checkbox text="I agree to the Terms &amp; Conditions" />

          <Button>Submit Now</Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
