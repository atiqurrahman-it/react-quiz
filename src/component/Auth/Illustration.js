import style from "../styles/Illustration.module.css";
import singUpImage from "../../assets/images/signup.svg";
const Illustration = () => {
  return (
    <div class={style.illustration}>
      <img src={singUpImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
