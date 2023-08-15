import style from "../../component/styles/Answers.module.css"
import Checkbox from "../Auth/Checkbox";
const Answers = () => {
    return (
        <div className={style.answers}>
            <Checkbox className={style.answer} text=" A New Hope 1" />
            <Checkbox className={style.answer} text=" A New Hope 2" />
            
        </div>
    );
};

export default Answers;