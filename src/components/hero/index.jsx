import React from 'react';

function Hero() {
    return (
        <section id="hero">
        <div className="container">
            <div className="overlay"></div>
            <div className="image-container"></div>
        </div>
        <div className="hero-text">
            <h1>
                <span className="keyWord">Justin Berg</span><br />Frontend Developer <br /><span className="keyWord">Project Manager</span>
            </h1>
            
        </div>
    </section>
    )
}

export default Hero;