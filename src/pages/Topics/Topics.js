import React from "react";
import './Topics.css';
import { useNavigate } from 'react-router-dom';
import Avatar from '../assessts/avatar.png';
import Js from '../assessts/js.png';
import Html from '../assessts/html.png';
import Css from '../assessts/css.png';
import ReactJs from '../assessts/reactjs.png';
import Sql from '../assessts/sql.png';

function Topics() {
    const faname = sessionStorage.getItem('faname');
    const laname = sessionStorage.getItem('laname');
    const navigate = useNavigate();
    const HtmlBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-1').value;
        sessionStorage.removeItem('course');
        sessionStorage.setItem('course', course);
        if (window.confirm(`You Selected ${course} course to take Quiz. Please Confirm.`) === true) {
            navigate('/instructions');
        } else {}
    }
    const CssBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-2').value;
        sessionStorage.removeItem('course');
        sessionStorage.setItem('course', course);
        if (window.confirm(`You Selected ${course} course to take Quiz. Please Confirm.`) === true) {
            navigate('/instructions');
        } else {}
    }
    const JsBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-3').value;
        sessionStorage.removeItem('course');
        sessionStorage.setItem('course', course);
        if (window.confirm(`You Selected ${course} course to take Quiz. Please Confirm.`) === true) {
            navigate('/instructions');
        } else {}
    }
    const ReactBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-4').value;
        sessionStorage.removeItem('course');
        sessionStorage.setItem('course', course);
        if (window.confirm(`You Selected ${course} course to take Quiz. Please Confirm.`) === true) {
            navigate('/instructions');
        } else {}
    }
    const MssqlBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-5').value;
        sessionStorage.removeItem('course');
        sessionStorage.setItem('course', course);
        if (window.confirm(`You Selected ${course} course to take Quiz. Please Confirm.`) === true) {
            navigate('/instructions');
        } else {}
    }
    const Home = (e) => {
        e.preventDefault();
        navigate('/')
    }
    return (
        <div className="main">
            <div className="logo">
                <div className="uname"><img src={Avatar} width={20} height={25} alt=""/> {faname} {laname}</div>
                <div className="topics-sub">
                    <h4>Choose one from categories below & see how many questions you can answer correctly out of 10 questions!</h4>
                </div>

                <div className="container topics-list" id="btn-group">
                    <button className="topic" onClick={HtmlBtn}>
                        <img src={Html} width={100} height={110} alt="" />
                        <input type="text" value='Html' id='btn-1' />
                    </button>

                    <button className="topic" onClick={CssBtn}>
                        <img src={Css} alt="" width={100} height={110} />
                        <input type="text" value='Css' id='btn-2' />
                    </button>

                    <button className="topic" onClick={JsBtn}>
                        <img src={Js} alt="" width={100} height={110} />
                        <input type="text" value='JavaScript' id='btn-3' />
                    </button>

                    <button className="topic" onClick={ReactBtn}>
                        <img src={ReactJs} alt="" width={100} height={110} />
                        <input type="text" value='ReactJS' id='btn-4' />
                    </button>

                    <button className="topic" onClick={MssqlBtn}>
                        <img src={Sql} alt="" width={100} height={110} />
                        <input type="text" value='Mssql' id='btn-5' />
                    </button>
                </div>
                <div className="button topic-btn">
                    <button onClick={Home}>Back to Topics</button>
                </div>
            </div>
        </div>
    )
}

export default Topics;