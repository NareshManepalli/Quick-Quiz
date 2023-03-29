import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './home.css';
import Bgimg from '../assessts/home.png';

function HomePage() {
    const [finame, setFiname] = useState('');
    const [laname, setLaname] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
        e.preventDefault();
        sessionStorage.setItem("faname", finame);
        sessionStorage.setItem('laname', laname);
        navigate('/topics', { replace: true });
    }
    return (
        <div className="main">
            <div className="logo">
                <div className="uname"></div>
                <div class="container">
                    <div class="hm-img">
                        <img src={Bgimg} alt=" "/>
                        <p>Take a Quiz be more creative in your work</p>
                    </div>
                    
                    <div class="hm-text">
                        <h5>Welcome to <span>Quick Quiz</span></h5>
                        <p>Submit & start playing</p>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <label for="fname">First Name</label>
                            <input 
                              type="text" 
                              id="fname" 
                              placeholder="Your name.." 
                              onChange={(e)=> setFiname(e.target.value)}
                              required
                            />

                            <label for="lname">Last Name</label>
                            <input 
                              type="text" 
                              id="lname"
                              placeholder="Your last name.." 
                              onChange={(e)=> setLaname(e.target.value)}
                              required  
                            />
                            <input 
                              type="submit"
                            />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
