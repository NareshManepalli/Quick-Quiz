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

    function confirmation(course) {
        sessionStorage.setItem('course', course);
        navigate('/confirm');
    }

    const HtmlBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-1').value;
        confirmation(course);
    }
    const CssBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-2').value;
        confirmation(course);
    }
    const JsBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-3').value;
        confirmation(course);
    }
    const ReactBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-4').value;
        confirmation(course);
    }
    const MssqlBtn = (e) => {
        e.preventDefault();
        const course = document.getElementById('btn-5').value;
        confirmation(course);
    }
    const Home = (e) => {
        e.preventDefault();
        navigate('/')
    }

    return (
        <>
            <div className="main">
                <div className="logo">
                    <div className="uname"><img src={Avatar} width={20} height={25} alt="" /> {faname} {laname}</div>
                    <div className="topics-sub">
                        <h4>Choose one from categories below & see how many questions you can answer correctly out of 10 questions!</h4>
                    </div>

                    <div className="container topics-list" id="btn-group">
                        <button className="topic" onClick={HtmlBtn} value="Html" id="btn-1">
                            <img src={Html} width={100} height={110} alt="" /><br />Html
                        </button>

                        <button className="topic" onClick={CssBtn} value='Css' id='btn-2' >
                            <img src={Css} alt="" width={100} height={110} /><br /> Css
                        </button>

                        <button className="topic" onClick={JsBtn} value='JavaScript' id='btn-3' >
                            <img src={Js} alt="" width={100} height={110} /><br /> JavaScript
                        </button>

                        <button className="topic" onClick={ReactBtn} value='ReactJS' id='btn-4' >
                            <img src={ReactJs} alt="" width={100} height={110} /><br /> ReactJS
                        </button>

                        <button className="topic" onClick={MssqlBtn} value='Mssql' id='btn-5' >
                            <img src={Sql} alt="" width={100} height={110} /><br /> Mssql
                        </button>
                    </div>
                    <div className="button topic-btn">
                        <button onClick={Home}>Back to Home</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topics;