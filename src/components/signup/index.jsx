import React from 'react';
import emailjs from 'emailjs-com';

// const lendingOfficers = [
//     "Sam Williams",
//     "Debbie Hart",
//     "Kyle Bevan",
//     "Mike Tabla",
//     "Eydn Johnson",
//     "Curt Cummings",
//     "Jared Goulding",
//     "Michael Daniel",
//     "Jason Christiansen",
//     "Shane White",
//     "Janet Davis",
//     "Brandon Mecham"
// ];

function Signup() {
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_stxgv4c', 'template_mbpwqw1', e.target, 'user_D6BSmDGXFNB4gsLTxzFoW')
        .then(res=> {
            console.log(res);
        })
        .catch(err=> console.log(err));

    }

    return (
        <section id="signup">
            <div className="contact-container">
                <div className="title-header">Apply Today</div>
                <h3>100% FREE 90 DAY PROGRAM. BUT YOU MUST BE ADMITTED BY A COACH</h3>

                <div class="form-container">
                    <form id="contact-form" onSubmit={sendEmail}>

                        <input type="text" name="name" placeholder="Name" />

                        <input type="text" name="phoneNumber" placeholder="Phone Number" />

                        <input type="text" name="email" placeholder="email@email.com" />
                        <textarea className="textarea" id="subject" name="subject" placeholder="Why do you want to be in the Program?"></textarea>
                        <textarea className="textarea" id="subject" name="subject" placeholder="What State(s) are you licensed in as a Real Estate Agent?"></textarea>
                        <textarea className="textarea" id="subject" name="subject" placeholder="Name of Coach that invited you to join the program."></textarea>

                        <input type="submit" value="Sign up" />

                    </form>
                </div>
            </div>
        </section>
    )
}


export default Signup;