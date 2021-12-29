import React from 'react';


function Signup() {

    return (
        <section id="signup">
            <div className="contact-container">
                <div className="title-header">Apply Today</div>
                <h3>100% FREE TO AGENTS. BUT YOU MUST BE ADMITTED BY A COACH</h3>

<div class="form-container">
    <form id="contact-form">
      
      <input type="text" name="name" placeholder="Name"/>

      <input type="text" name="Phone Number" placeholder="Phone Number" />
  
      <input type="text" name="email" placeholder="email@email.com" />

      <textarea id="subject" name="subject" placeholder="Why do you want to be in the Program?"></textarea>
      <textarea id="subject" name="subject" placeholder="What State(s) are you licensed in as a Real Estate Agent and license number?"></textarea>
      <textarea id="subject" name="subject" placeholder="If you have connected with a coach enter their name here. If not type NONE"></textarea>

      <input type="submit" value="Submit" />
  
    </form>
  </div>


                <div className="contact-icons">
                    <div className="email"><a href="">Email</a></div>
                    {/* <div className="github"><a href="https://github.com/Jberg21">Github</a></div>
                    <div className="linkedin"><a href="https://www.linkedin.com/in/justin-berg-31109899/">Linkedin</a></div> */}
                </div>
            </div>
        </section>
    )
}

export default Signup;