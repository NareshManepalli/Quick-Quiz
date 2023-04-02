import React from "react";
import './Instructions.css'
import { useNavigate } from 'react-router-dom';
import Avatar from '../assessts/avatar.png';
import ALB from '../assessts/instructions.png'


function Instructions() {
    const faname = sessionStorage.getItem('faname');
    const laname =  sessionStorage.getItem('laname');
    const course = sessionStorage.getItem('course');
    const navigate = useNavigate();
  
    const Back = (e) => {
        e.preventDefault();
        navigate('/topics');
    }

    const Quiz = (e) => {
        e.preventDefault();
        navigate('/quiz');
    }

    return (
        <div className="main">
            <div className="logo">
                <div className="uname"><img src={Avatar} alt=""/>{faname} {laname}</div>
                <div className="heading">
                    <h3>Before you Start the Test</h3>
                </div>
                <div className="points">
                    <p><i className="uil uil-angle-right-b"></i> You selected <span>{course}</span> Course for Quiz.</p>
                    <p><i className="uil uil-angle-right-b"></i> You must complete this test in one session - make sure your interest is reliable.</p>
                    <p><i className="uil uil-angle-right-b"></i> 1 mark awarded for a correct answer. No negative marking will be there for wrong answer.</p>
                    <p><i className="uil uil-angle-right-b"></i> More you give the correct answer more chance to win the badge.</p>
                    <p><i className="uil uil-angle-right-b"></i> If you don't earn a badg this time, you can retake this test once more.</p>
                </div>
                <div className="wish">
                    <img src={ALB} width={200} height={50} alt=""/>
                </div>
                <div className="button instruction-btn">
                    <button onClick={Back}>Back to Topics</button>
                    <button onClick={Quiz}>Start Quiz</button>
                </div>
            </div>
        </div>
    )
}

export default Instructions;