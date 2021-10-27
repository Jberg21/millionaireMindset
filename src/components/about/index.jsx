import React from 'react'


function About() {

    return (
        <section id="aboutme">
            <div className="about-container">
                <div className="title-header">About Me</div>
                <div className="about-section">
                    <div className="img-container">
                        <div className="about-image"></div>
                    </div>
                    <div className="about-text">
                        I am Justin Berg, I was born and raised in Utah. I am a fullstack developer with experience in the cinema and Project Management.
                    </div>
                    <a target="blank" href="src/images/JustinBerg_PM_Resume.pdf" className="resume"><span className="resume-text">Resume</span></a>
                </div>
            </div>
        </section>
    )
}

export default About;