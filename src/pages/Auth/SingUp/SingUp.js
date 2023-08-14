import Checkbox from "../../../component/Auth/Checkbox";
import Form from "../../../component/Auth/Form";
import Illustration from "../../../component/Auth/Illustration";
import TextInput from "../../../component/Auth/TextInput";
import Button from "../../../component/Button";
import style from "../../../component/styles/signup.module.css";
const SingUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={style.signup}>
             <TextInput type="text" placeholder="Enter name" icon="person"></TextInput>
             <TextInput type="email" placeholder="Enter email" icon="alternate_email"></TextInput>
             <TextInput type="password" placeholder="Enter password" icon="lock"></TextInput>
             <TextInput type="password" placeholder="confirm password" icon="lock_clock"></TextInput>
             <Checkbox text="I agree to the Terms &amp; Conditions" />
             <Button>Submit now</Button>
             
            <div className="info">
              Already have an account? <a href="login.html">Login</a> instead.
            </div>
        </Form>
      </div>
    </>
  );
};

export default SingUp;
