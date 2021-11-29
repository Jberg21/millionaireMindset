import React from 'react';

function Projects() {

    return (
        <section id="projects">
            <div className="project-container">
                <div className="title-header">Our Services</div>
                <div className="projects">

                    {/* PROJECT 1 */}
                    <div className="project-item">
                        <div className="coaching">
                            <div className="text-container">
                                <h2 className="name">Coaching</h2>
                                <div className="content">
                                    <p>
                                    Get a Certified Millionaire Mindset Coach that will help you take your business to higher levels. 100% Free.
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="">
                                        <h3>Details</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div className="project-item">
                        <div className="lending">
                            <div className="text-container">
                                <h2 className="name">The Millionaire Formula</h2>
                                <div className="content">
                                    <p>
                                    Every day, 1,700 households in the US become millionaires. Why not you? We will teach you the millionaire formula and help you get on track so one day, you too can become a millionaire! 100% Free. 
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="">
                                        <h3>Sign Up Today</h3>
                                    </a>
                                </button>
                                
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 3 */}
                    <div className="project-item">
                        <div className="mindset">
                            <div className="text-container">
                                <h2 className="name">Continuous On-Going Training</h2>
                                <div className="content">
                                    <p>
                                    Let's face it, showing up to a training once doesn't make you an instant millionaire. It takes consistent on going training and learning with applying the principles learned to get to the top. 
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="">
                                        <h3>Sign Up Today</h3>
                                    </a>
                                </button>
                                
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 4 */}
                    <div className="project-item">
                        <div className="bestpart">
                            <div className="text-container">
                                <h2 className="name">Best Part- 100% FREE</h2>
                                <div className="content">
                                    <p>
                                    For licensed Real Estate Agents in CA, CO, OR, UT, and ID- this is 100% FREE. NO COST
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="">
                                        <h3>Sign Up</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 5 */}
                    {/* <div className="project-item">
                        <div className="stickle-project">
                            <div className="text-container">
                                <h2 className="name">Stickle Bricks</h2>
                                <div className="content">
                                    <p>
                                    For our final project of creating a full-stack application from the gorund up, we chose to take on an e-commerce application. 
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="https://sticklebricks.herokuapp.com/">
                                        <h3>View Project</h3>
                                    </a>
                                </button>
                                <button className="button">
                                    <a target="blank" href="https://github.com/JHardisty333/stickle-bricks">
                                        <h3>View Repo</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div> */}

                    {/* PROJECT 6 */}
                    {/* <div className="project-item">
                        <div className="taskinator-project">
                            <div className="text-container">
                                <h2 className="name">Taskinator</h2>
                                <div className="content">
                                    <p>
                                    This app we built using express.js. This app was made to easily take notes and save them for later.
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="https://pure-island-90540.herokuapp.com/">
                                        <h3>View Project</h3>
                                    </a>
                                </button>
                                <button className="button">
                                    <a target="blank" href="https://github.com/Jberg21/taskinator">
                                        <h3>View Repo</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </section>
    )
}

export default Projects;