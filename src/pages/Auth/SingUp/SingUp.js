import Illustration from "../../../component/Auth/Illustration";
import SingUpForm from "../../../component/Auth/SingUpForm";
const SingUp = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SingUpForm/>
      </div>
    </>
  );
};

export default SingUp;
