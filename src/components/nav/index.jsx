import React from 'react';

function Nav() {

    return (
        <section id="nav">
            <div class="nav-bar">
                <div className="links">
                    <div class="site-logo">
                        
                    </div>
                    <ul>
                        <img src="src/images/Millionaire Mindset_1.jpg" alt="logo"></img>
                        <li><a href="#projects" id="project">Home</a></li>
                        <li><a href="#signup" id="signup">Sign Up</a></li>
                        <li><a href="#aboutme" id="about">About the Program</a></li>
                        <li><a href="#aboutme" id="about">16 Core Principles</a></li>
                        <li><a href="#aboutme" id="about">Our Philosophy</a></li>
                        <li><a href="#aboutme" id="about">Meet our Coaches</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Nav;