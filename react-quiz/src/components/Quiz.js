
import { useState } from "react";
import Question from "./Question"

function Quiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const testClick = () => {
        console.log("YOU CLICKED!!");
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    }

    return (
        <div className="quiz">
            <div className="score">Question 1/8</div>
            <Question />
            <div className="next-button" onClick={testClick}>Next Question {currentQuestionIndex}</div>
        </div>
    )
}

export default Quiz;