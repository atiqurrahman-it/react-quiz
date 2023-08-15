import Answer from "../../component/Quiz/Answers";
import MiniPlayer from "../../component/Quiz/MiniPlayer";
import ProgressBar from "../../component/Quiz/ProgressBar";
const Quiz = () => {
    return (
        <>
         <h1>Pick three of your favorite Star Wars Flims</h1>
         <h4>Question can have multiple answers</h4> 

         <Answer/>
         <ProgressBar/>
         <MiniPlayer/>

        </>
    );
};

export default Quiz;