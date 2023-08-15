import singUpImage from "../../assets/images/signup.svg";
import style from "../styles/Illustration.module.css";
const Illustration = () => {
  return (
    <div className={style.illustration}>
      <img src={singUpImage} alt="Signup" />
    </div>
  );
};

export default Illustration;
