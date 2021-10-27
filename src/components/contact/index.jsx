import React from 'react';


function Contact() {

    return (
        <section id="contactme">
            <div className="contact-container">
                <div className="title-header">Contact Me</div>

<div class="form-container">
    <form id="contact-form">
  
      <label for="name">Your Name</label>
      <input type="text" name="name" />
  
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="email@email.com" />

  
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="How can I help?"></textarea>
  
      <input type="submit" value="Submit" />
  
    </form>
  </div>


                <div className="contact-icons">
                    <div className="email"><a href="mailto:justinaberg21@gmail.com">Email</a></div>
                    <div className="github"><a href="https://github.com/Jberg21">Github</a></div>
                    <div className="linkedin"><a href="https://www.linkedin.com/in/justin-berg-31109899/">Linkedin</a></div>
                </div>
            </div>
        </section>
    )
}

export default Contact;