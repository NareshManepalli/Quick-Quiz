import React from "react";
import './Result.css';
import Avatar from '../assessts/avatar.png';
import { useNavigate } from "react-router-dom";
import Win from '../assessts/1.png';
import Lose from '../assessts/2.png';

function Result(props) {
    const faname = sessionStorage.getItem('faname');
    const laname =  sessionStorage.getItem('laname');
    const course = sessionStorage.getItem('course');

    const navigate = useNavigate();

    let Emoji = null;

    if(props.score >= 90){
       Emoji = Win;
    } else {
        Emoji = Lose;
    }

    const Retake = (e) => {
        e.preventDefault();
        navigate('/topics')
    }
    
    const Home = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (
        <div className="main">
            <div className="logo">
                <div className="uname"><img src={Avatar} alt=""/>  {faname} {laname}</div>

                <div className="result-sub">
                    <h4>{props.score >= 90 ? ('Congratulations!'):('Better Luck Next Time')}</h4>
                    <p>Category: {course}</p>
                </div>

                <div className="score">
                <img src={Emoji}alt=""/>
                    <p>You have Scored</p>
                    <h5>{props.score}%</h5>
                    <p>{props.score >= 90 ? (
                        <p>Quiz Completed Successfully, You earned the badge &#128525;</p>):(
                            <p>Quiz Completed Successfully, You didn't earned the badge &#128532;</p>
                        )}</p>
                </div>
                <div className="button result-btn">
                    <button onClick={Retake}>Retake Quiz</button>
                    <button onClick={Home}>Back to Home</button>
                </div>
            </div>
        </div>
    )
}

export default Result;
