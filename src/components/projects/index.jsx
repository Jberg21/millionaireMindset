import React from 'react';

function Projects() {

    return(
        <section id="projects">
        <div className="project-container">
            <div className="title-header">Projects</div>
            <div className="projects">

               {/* PROJECT 1 */}
               <div className="project-item">
                    <div className="foodfest-project">
                        <div className="text-container">
                            <h2 className="name">Food Festival</h2>
                            <div className="content">
                                <p>
                                    This Food Festival Application is a Progressive Web Application that will allow you to still view the information about the food events even if you don't have a great connection to the internet.
                                </p>
                            </div>
                            <button className="button">
                                <a target="blank" href="https://kelleymarne.github.io/food-festival/">
                                    <h3>View Project</h3>
                                </a>
                            </button>
                            <button className="button">
                                <a target="blank" href="https://github.com/kelleymarne/food-festival">
                                    <h3>View Repo</h3>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
                
                {/* PROJECT 2 */}
                <div className="project-item">
                    <div className="runbuddy-project">
                        <div className="text-container">
                            <h2 className="name">Runbuddy Website</h2>
                            <div className="content">
                                <p>
                                    RunBuddy was the fist front end application I built using basic HTML and CSS for the technologies. 
                                </p>
                            </div>
                            <button className="button">
                                <a target="blank" href="https://kelleymarne.github.io/run-buddy/" target="_blank">
                                    <h3>View Project</h3>
                                </a>
                            </button>
                            <button className="button">
                                <a target="blank" href="https://github.com/kelleymarne/run-buddy">
                                    <h3>View Repo</h3>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                {/* PROJECT 3 */}
                <div className="project-item">
                    <div className="carbon-project">
                        <div className="text-container">
                            <h2 className="name">Carbon Watchers</h2>
                            <div className="content">
                                <p>
                                 With this incredible website you are able to see a standard carbon emissions for the globe or you are able to enter in your specific information to be able to see your specific carbon output and what that looks like for your carbon footprint.
                                </p>
                            </div>
                            <button className="button">
                                <a target="blank" href="https://carbonwatchers.herokuapp.com/">
                                    <h3>View Project</h3>
                                </a>
                            </button>
                            <button className="button">
                                <a target="blank" href="https://github.com/ryma1738/Carbon_Watchers">
                                    <h3>View Repo</h3>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>



               
                {/* PROJECT 4 */}
                <div className="project-item">
                    <div className="notetaker-project">
                        <div className="text-container">
                            <h2 className="name">Note Taker</h2>
                            <div className="content">
                                <p>
                                    Easily take notes and save them for reference to later with this app created using Express.js
                                </p>
                            </div>
                            <button className="button">
                                <a target="blank" href="https://notetaker-ch11.herokuapp.com/">
                                    <h3>View Project</h3>
                                </a>
                            </button>
                            <button className="button">
                                <a target="blank" href="https://github.com/kelleymarne/noteTaker">
                                    <h3>View Repo</h3>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>


                {/* PROJECT 5 */}
                <div className="project-item">
                    <div className="budget-project">
                        <div className="text-container">
                            <h2 className="name">Budget Tracker</h2>
                            <div className="content">
                                <p>
                                    With this budget tracker you are able to keep track of expenses and deposits and see a running total. You are able to continue to track the expenses while offline, and will update once a connection is established again.
                                </p>
                            </div>
                            <button className="button">
                                <a target="blank" href="https://young-escarpment-77025.herokuapp.com/">
                                    <h3>View Project</h3>
                                </a>
                            </button>
                            <button className="button">
                                <a target="blank" href="https://github.com/kelleymarne/budgetTracker">
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
                            <h2 className="name">Taskmaster Pro</h2>
                            <div className="content">
                                <p>
                                    TaskMaster Pro is a beautiful application that is more advanced than previous similar applications. You are able to take a note, place it in specific columns of completion etc.
                                </p>
                            </div>
                            <button className="button">
                                <a target="blank" href="https://kelleymarne.github.io/taskmaster-pro/">
                                    <h3>View Project</h3>
                                </a>
                            </button>
                            <button className="button">
                                <a target="blank" href="https://github.com/kelleymarne/taskmaster-pro">
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