import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Result from '../Result/Result.js';
import './Quiz.css';
import Avatar from '../assessts/avatar.png';
import { questions } from '../Questions/Questions.js';

function Quiz() {
    const faname = sessionStorage.getItem('faname');
    const laname = sessionStorage.getItem('laname');
    const course = sessionStorage.getItem('course');
    const navigate = useNavigate();
    const [currentQuestion, setcurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [correctAns, setCorrectAns] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [options, setOptions] = useState(false);

    const handleAnswer = (isCorrect) => {
        document.getElementById('sub').style.display = "flex";
        setOptions(true)
        if (isCorrect) {
            setScore(score + 10);
            setCorrectAns(correctAns + 1);
        }
        setClicked(true);
    }

    const handleNextOption = () => {
        document.getElementById('sub').style.display = "none";
        setOptions(false);
        setClicked(false);
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions[course].length) {
            setcurrentQuestion(nextQuestion);
        } else {
            setShowResult(true);
        }
    }

    const handleQuit = (e) => {
        e.preventDefault();
        setScore(0);
        setCorrectAns(0);
        navigate('/topics');
    }

    return (
        <>
            {showResult ? (
                <Result score={score} correctAns={correctAns} />
            ) : (
                <div className="main">
                    <div className="logo">
                        <div className="uname"><img src={Avatar} alt=" " />  {faname} {laname}</div>
                        <div className="quiz-pg">
                            <div className="heading">
                                <h5>Category : <span>{course}</span></h5>
                            </div>
                            <div className="questions">
                                <div className="question">
                                    <h5><span>Question:</span> {questions[course][currentQuestion].Question}</h5>
                                </div>
                                <div className="answers" id="ans-btn">
                                    {questions[course][currentQuestion].answerOptions.map((ans, i) => {
                                        return (
                                            <>
                                            <button
                                                className={`${clicked & ans.isCorrect? "correct": null}`}
                                                key={i}
                                                disabled={options}
                                                onClick={() => handleAnswer(ans.isCorrect)}
                                            >
                                                {ans.answerText}
                                            </button><br/>
                                            </>
                                        )
                                    })}
                                </div>
                                <div className="button quiz-btn">
                                    <button onClick={handleQuit}>Quit</button>
                                    {currentQuestion === questions[course].length - 1 ? (
                                        <button id="sub" style={{display: 'none'}} disabled={!clicked} onClick={handleNextOption}>Finish</button>
                                    ) : (
                                        <button id="sub" style={{display: 'none'}} disabled={!clicked} onClick={handleNextOption}>Next Question</button>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Quiz;