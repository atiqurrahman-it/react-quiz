import Illustration from "../../../component/Auth/Illustration";
import LoginForm from "../../../component/Auth/LoginForm";
const Login = () => {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
