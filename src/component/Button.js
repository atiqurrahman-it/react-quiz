import style from "../component/styles/Button.module.css";
const Button = ({className,children}) => {
  return (
    <div className={`${style.button} ${className}`}>
      {children}
    </div>
  );
};

export default Button;