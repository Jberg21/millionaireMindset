import React from 'react';
import logo from '../../images/millionairemindset.png';

function Nav() {

    return (
        <section id="nav">
            <div class="nav-bar">
                <div className="links">
                    
                    <ul>
                        <a className="navbar-brand" href="#"><img src={logo} alt="logo" id="logo" style={{height: 130}}></img></a>
                        <li><a href="/projects" id="project">Home</a></li>
                        <li><a href="/signup" id="signup">Sign Up</a></li>
                        <li><a href="/about" id="about">About the Program</a></li>
                        <li><a href="/principles" id="principles">16 Core Principles</a></li>
                        <li><a href="/philosophy" id="philosophy">Our Philosophy</a></li>
                        <li><a href="/coaches" id="coaches">Meet our Coaches</a></li>
                        <li><a href="/success" id="success">Success Pyramid</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Nav;
