
import { useReducer, useState } from "react";
import Question from "./Question"

const initialState = {
    currentQuestionIndex: 0,
    question: []
}

const reducer = (state, action) => {
    if (action.type === "NEXT_QUESTION") {
        return {...state, currentQuestionIndex: state.currentQuestionIndex + 1 };
    }
    return state;
}

function Quiz() {
    
    //const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

    const [state, dispatch] = useReducer(reducer, initialState);
    console.log("render", state);

    // onClick={testClick}
    // const testClick = () => {
    //     console.log("YOU CLICKED!!");
    //     //setCurrentQuestionIndex(currentQuestionIndex + 1);
    //     dispatch({ type: "NEXT_QUESTION" });
    // }

    return (
        <div className="quiz">
            <div className="score">Question 1/8</div>
            <Question />
            <div className="next-button" onClick={ () => dispatch({ type: "NEXT_QUESTION" }) }>
                Next Question {state.currentQuestionIndex}
            </div>
        </div>
    )
}

export default Quiz;