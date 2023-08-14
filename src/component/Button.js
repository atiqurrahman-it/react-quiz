import style from "../component/styles/Button.module.css";
const Button = ({children}) => {
  return (
    <div className={style.button}>
      <span>{children}</span>
    </div>
  );
};

export default Button;
