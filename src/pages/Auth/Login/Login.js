import Form from "../../../component/Auth/Form";
import Illustration from "../../../component/Auth/Illustration";
import TextInput from "../../../component/Auth/TextInput";
import Button from "../../../component/Button";
import style from "../../../component/styles/Login.module.css"
const Login = () => {
    return (
        <>
        <h1>Login to your account</h1>
        <div class="column">
            <Illustration/>
            <Form className={style.login}>
                <TextInput type="email" placeholder="Enter Email" icon="alternate_email" />
                <TextInput type="password" placeholder="Enter password" icon="lock" />
                <Button><span> Submit now</span></Button>
                <div class="info">Don't have an account? <a href="signup.html">Signup</a> instead.</div>

            </Form>
        </div>
            
        </>
    );
};

export default Login;