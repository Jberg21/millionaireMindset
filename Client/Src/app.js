import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
  {/* Header */}
  <header className="header" role="banner" id="top">
    <div className="row">
      <nav className="nav" role="navigation">
        <ul className="nav__items">
          <li className="nav__item"><a href="#work" className="nav__link">Work</a></li>
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header__text-box row">
      <div className="header__text">
        <h1 className="heading-primary">
          <span>Justin A Berg</span>
        </h1>
        <p>A Web Developer based in Utah.</p>
        <a href="#contact" className="btn btn--red">?</a>
      </div>
    </div>
  </header>
  <main role="main">
    {/*  Work */}
    <section className="work" id="work">
      <div className="row">
        <h2>My Work</h2>
        <div className="work__boxes">
          {/* Each div with the work__box class is a project. */}
          {/*   PROJECT 1   */}
          <div className="work__box">
            <div className="work__text">
              <h3>Run Buddy</h3>
              <p>
                A website that offers fitness training services.
              </p>
              <ul className="work__list">
                <li>HTML</li>
                <li>SCSS</li>
              </ul>
              <div className="work__links">
                <a href="https://jhardisty333.github.io/run-buddy/" target="_blank" className="link__text">
                  Visit Site <span>→</span>
                </a>
                <a href="https://github.com/JHardisty333/run-buddy" title="View Source Code" target="_blank">
                  <img src="./images/github.svg" className="work__code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src="./images/project-1.png" className="work__image" alt="Project 1" />
            </div>
          </div>
          {/*   PROJECT 2   */}
          <div className="work__box">
            <div className="work__text">
              <h3>Hiking</h3>
              <p>
                
              </p>
              <ul className="work__list">
                <li>HTML</li>
                <li>SCSS</li>
                <li>JS</li>
              </ul>
              <div className="work__links">
                <a href="" target="_blank" className="link__text">
                  Visit Site <span>→</span>
                </a>
                <a href="">
                  <img src="./images/github.svg" className="work__code" title="View Source Code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src="./images/project-2.png" className="work__image" alt="Project 2" />
            </div>
          </div>
          {/*   PROJECT 3   */}
          <div className="work__box">
            <div className="work__text">
              <h3>Offline Beats</h3>
              <p>
                
              </p>
              <ul className="work__list">
                <li>HTML</li>
                <li>SCSS</li>
                <li>MOMENT.JS</li>
              </ul>
              <div className="work__links">
                <a href="" target="_blank" className="link__text">
                  Visit Site <span>→</span>
                </a>
                <a href="">
                  <img src="./images/github.svg" className="work__code" title="View Source Code" alt="GitHub" />
                </a>
              </div>
            </div>
            <div className="work__image-box">
              <img src="./images/project-3.png" className="work__image" alt="Project 3" />
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ***** About ***** */}
    <section className="about" id="about">
      <div className="row">
        <h2>About Me</h2>
        <div className="about__content">
          <div className="about__text">
            {/* Add paragraph about yourself */}
            <p>
            </p>
            {/* Provide a link to your resume */}
            <a href="#" className="btn">My Resume</a>
          </div>
          <div className="about__photo-container">
            {/* Add a of yourself */}
            <img className="about__photo" src="./images/about-photo.jpg" alt="about photo" />
          </div>
        </div>
      </div>
    </section>
  </main>
  {/* ***** Contact ***** */}
  <section className="contact" id="contact">
    <div className="row">
      <h2>Reach Out</h2>
      <div className="contact__info">
        <p>
          
        </p>
        {/* Replace the email with yours */}
        <a href="" className="btn">Email Me!</a>
      </div>
    </div>
  </section>
  {/* ***** Footer ***** */}
  <footer role="contentinfo" className="footer">
    <div className="row">
      {/* Update the links to point to your accounts */}
      <ul className="footer__social-links">
        <li className="footer__social-link-item">
          <a href="" title="Link to Github Profile">
            <img src="./images/github.svg" className="footer__social-image" alt="Github" />
          </a>
        </li>
        <li className="footer__social-link-item">
          {/* create a linkedin... */}
          <a href>
            <img src="./images/linkedin.svg" title="Link to Linkedin Profile" className="footer__social-image" alt="Linkedin" />
          </a>
        </li>
      </ul>
      <p>
        {/* add personal site link */}
        {/* &copy; 2021 - Created by <a href="" class="link">Jess</a>. */}
      </p>
      <div className="footer__github-buttons">
        {/* Button to star github profile */}
        <a className="github-button" href="" data-color-scheme="no-preference: light; light: light; dark: light;" data-size="large" aria-label="Follow @JHardisty333 on GitHub">Follow</a>
      </div>
    </div>
  </footer>
  <a href="#top" className="back-to-top" title="Back to Top">
    <img src="./images/arrow-up.svg" alt="Back to Top" className="back-to-top__image" />
  </a>
</div>

  );
}

export default App;