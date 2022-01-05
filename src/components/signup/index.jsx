import React from 'react';
// import emailjs from 'emailjs-com';

  function Signup() {
  
   
    return (
        <section id="signup">
            <div className="contact-container">
                <div className="title-header">Apply Today</div>
                <h3>100% FREE 90 DAY PROGRAM. BUT YOU MUST BE ADMITTED BY A COACH</h3>

<div class="form-container">
    <form id="contact-form">
      
      <input type="text" name="name" placeholder="Name"/>

      <input type="text" name="phoneNumber" placeholder="Phone Number" />
  
      <input type="text" name="email" placeholder="email@email.com" />
        
      <textarea className="textarea" id="subject" name="subject" placeholder="Why do you want to be in the Program?"></textarea>
      <textarea className="textarea" id="subject" name="subject" placeholder="What State(s) are you licensed in as a Real Estate Agent?"></textarea>
      <textarea className="textarea" id="subject" name="subject" placeholder="Name of Coach that invited you to join the program."></textarea>
        
      <input type="submit" value="Sign up"/> 
      
  
    </form>
  </div>


                {/* <div className="contact-icons">
                    <div className="email"><a href="">Email</a></div>
                    {/* <div className="github"><a href="https://github.com/Jberg21">Github</a></div>
                    <div className="linkedin"><a href="https://www.linkedin.com/in/justin-berg-31109899/">Linkedin</a></div> */}
                {/* </div> */}
            </div>
        </section>
    )
}
  

export default Signup;