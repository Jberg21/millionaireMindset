import React from 'react';


function Contact() {

    return (
        <section id="contactme">
            <div className="contact-container">
                <div className="title-header">Contact Me</div>

                {/* <div className="mb-3">
                    <label for="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div> */}

<div class="form-container">
    <form id="contact-form">
  
      <label for="name">Your Name</label>
      <input type="text" name="name" />
  
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="Email@example.com" />

  
      <label for="subject">Subject</label>
      <textarea id="subject" name="subject" placeholder="Reach Out!"></textarea>
  
      <input type="submit" value="Submit" />
  
    </form>
  </div>


                <div className="contact-icons">
                    <div className="email"><a href="mailto:kelleymarne@gmail.com" target="_blank">Email</a></div>
                    <div className="github"><a href="https://github.com/kelleymarne" target="_blank">Github</a></div>
                    <div className="linkedin"><a href="https://www.linkedin.com/in/kelley-worthington-8347a7203/" target="_blank">Linkedin</a></div>
                </div>
            </div>
        </section>
    )
}

export default Contact;