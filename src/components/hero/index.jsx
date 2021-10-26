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
                <span className="keyWord">Solving</span><br />Problems & Learning <br /><span className="keyWord">Solutions</span>
            </h1>
            {/* download resume to google drive and add link to the drive for downloadbility */}
            <a target="blank" href="https://docs.google.com/document/d/1FYJ5iLS4UwXjx0sIdtXhYCiVvCPG7lJ61Wc3PN1GLVg/edit?usp=sharing" className="resume"><span className="resume-text">Resume</span></a>
        </div>
    </section>
    )
}

export default Hero;