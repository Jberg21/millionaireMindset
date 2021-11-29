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
                    <span className="keyWord">Millionaire Mindset</span><br />for REAL ESTATE AGENTS<br /><span className="keyWord"></span>
                </h1>
                <button className="buttonhero">
                    <a target="blank" href="">
                        <h3>Sign Up Today</h3>
                    </a>
                </button>
                
            </div>
        </section>
    )
}

export default Hero;