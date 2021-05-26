import React from "react";

function Contact() {
    return (
        <section className="container">
            <div className="card">
                <h6>Contact Me</h6>
                <h5>Email</h5>
                <p>timothy.j.kuebler@gmail.com</p>
                <h5>Phone Number</h5>
                <p>850-624-0636</p>
            </div>

            <div className="card">
                <h6>Find Me Online!</h6>
                <h5>GitHub:</h5>
                <div className="row">
                    <a href="https://github.com/tkuebler12" target="_blank">GitHub</a>
                </div>
                <h5>LinkedIn</h5>
                <div className="row">
                    <a href="https://www.linkedin.com/in/timothy-kuebler-453490200/" target="_blank">LinkedIn</a>
                </div>
                <h5>Link to Deployed App</h5>
                <div className="row">
                    <a href="" target="_blank">React Portfolio</a>
                </div>
            </div>
        </section>
    )
}

export default Contact;