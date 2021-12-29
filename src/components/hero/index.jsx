import React from 'react';
import Signup from '../signup';

function Hero() {
    return (
        <section id="hero">
            
            <div className="container">
                <div className="overlay"></div>
                <div className="image-container"></div>
                
            </div>
            <div className="hero-text">
                <h1>
                    <span className="keyWord"></span><br />Our Mission: <br /><br />“To help Real Estate Agents become<br />Multi-Millionaires Selling and Investing<br />in Real Estate."<br /><span className="keyWord"></span>
                </h1>
                <button className="buttonhero">
                    <a href="/signup" >
                        <h3>Sign Up Today</h3>
                    </a>
                </button>
                
            </div>
        </section>
    )
}

export default Hero;