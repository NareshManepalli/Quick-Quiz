import React from "react";
import './Topics.css';
import { useNavigate } from 'react-router-dom';
import Javascript from '../assessts/js.png';
import Html from '../assessts/html.png';
import Css from '../assessts/css.png';
import Reactjs from '../assessts/reactjs.png';
import Sql from '../assessts/sql.png';

function Confirm(props) {
    console.log(props.course)
    const navigate = useNavigate();

    let image = '';

    if(props.course === 'Html'){
        image=Html;
    } else if (props.course === 'Css'){
        image = Css;
    } else if (props.course === 'ReactJS'){
        image = Reactjs;
    } else if (props.course === 'JavaScript'){
        image = Javascript;
    } else {
        image = Sql;
    }

    const handleExit =(e)=> {
        e.preventDefault();
        window.location.reload();
    }

    const handleQuiz =(e)=> {
        e.preventDefault();
        navigate('/instructions');
    }

    return (
        < >
          <div className="main">
          <div className="alert-box">
              <img src={image} alt="" width={50} height={50}/>
             <h5 className="message">You Choose <span>{props.course}</span>. please confirm it before you take the quiz</h5>
             <div className="button">
                <button style={{backgroundColor:'red'}} onClick={handleExit}>Cancel</button>
                <button style={{backgroundColor:'green'}} onClick={handleQuiz}>Confirm</button>
             </div>
          </div>
          </div>
        </>
    )
}

export default Confirm;