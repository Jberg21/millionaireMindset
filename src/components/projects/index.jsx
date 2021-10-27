import React from 'react';

function Projects() {

    return (
        <section id="projects">
            <div className="project-container">
                <div className="title-header">My Work</div>
                <div className="projects">

                    {/* PROJECT 1 */}
                    <div className="project-item">
                        <div className="runbuddy-project">
                            <div className="text-container">
                                <h2 className="name">Run Buddy</h2>
                                <div className="content">
                                    <p>
                                        Run Buddy was our first website. This took our growing knowlege over weeks of our module work.
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="https://jberg21.github.io/RunBuddy/">
                                        <h3>View Project</h3>
                                    </a>
                                </button>
                                <button className="button">
                                    <a target="blank" href="https://github.com/Jberg21/RunBuddy">
                                        <h3>View Repo</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 2 */}
                    <div className="project-item">
                        <div className="notetaker-project">
                            <div className="text-container">
                                <h2 className="name">Notetaker</h2>
                                <div className="content">
                                    <p>
                                        Notetaker app uses Express JS that allows you to take a note and store it to access later. 
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="https://jberg21.github.io/Note-Taker-2/">
                                        <h3>View Project</h3>
                                    </a>
                                </button>
                                <button className="button">
                                    <a target="blank" href="https://github.com/Jberg21/Note-Taker-2">
                                        <h3>View Repo</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 3 */}
                    <div className="project-item">
                        <div className="offlineBeats-project">
                            <div className="text-container">
                                <h2 className="name">Offline Beats</h2>
                                <div className="content">
                                    <p>
                                    This spotify library app is an online tool to help your music stay offline. 
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="https://offline-library.herokuapp.com">
                                        <h3>View Project</h3>
                                    </a>
                                </button>
                                <button className="button">
                                    <a target="blank" href="https://github.com/anthonypena97/spotify-library">
                                        <h3>View Repo</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 4 */}
                    <div className="project-item">
                        <div className="weather-project">
                            <div className="text-container">
                                <h2 className="name">Weather Dashboard</h2>
                                <div className="content">
                                    <p>
                                    We had to creat a weather dashboard using a server side API. This will allow users to enter in a city name and show the current weather for that city as well as the 5 day forecast.
                                    </p>
                                </div>
                                <button className="button">
                                    <a target="blank" href="https://jberg21.github.io/Weather-Dashboard/">
                                        <h3>View Project</h3>
                                    </a>
                                </button>
                                <button className="button">
                                    <a target="blank" href="https://github.com/Jberg21/Weather-Dashboard">
                                        <h3>View Repo</h3>
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* PROJECT 5 */}
                    <div className="project-item">
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
                    </div>

                    {/* PROJECT 6 */}
                    <div className="project-item">
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
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects;