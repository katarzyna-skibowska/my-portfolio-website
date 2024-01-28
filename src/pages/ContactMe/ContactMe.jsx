import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import ContactMeModal from "./ContactMeModal";
import githubLogo from "../../assets/githubLogo.png";
import linkedinLogo from "../../assets/linkedinLogo.png";

const ContactMe = () => {
  const [show, setShow] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ni90x7n",
        "template_mhqagak",
        form.current,
        "gf2SSisJah7qTV9a5"
      )
      .then(
        () => {
          setShow(true);
        },
        (error) => {
          console.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact">
      <div>
        <h2>Contact</h2>
      </div>
      <div className="containerBox">
        <section className="container">
          <form ref={form} onSubmit={sendEmail} className="contactForm">
            <h3>Send me an email</h3>
            <label className="formLabel">Name:</label>
            <input
              type="text"
              name="guest_name"
              className="inputStyle"
              required
            />
            <label className="formLabel">Email:</label>
            <input
              type="email"
              name="guest_email"
              className="inputStyle"
              required
            />
            <label className="formLabel">Message:</label>
            <textarea
              name="message"
              className="textareaInput inputStyle"
              required
            />
            <input
              type="submit"
              value="Send email"
              className="sendButton"
              onClick={() => {
                sendEmail;
              }}
            />
            <ContactMeModal show={show} setShow={setShow} />
          </form>
        </section>
        <section className="container">
          <article>
            <h3>Get in touch!</h3>
            <p>email: kat.skibowska@gmail.com</p>
            <a target="blank" href="https://github.com/katarzyna-skibowska">
              <img className="smIcon" src={githubLogo} alt="github logo" />
            </a>
            <a
              target="blank"
              href="https://www.linkedin.com/in/katarzyna-skibowska/"
            >
              <img className="smIcon" src={linkedinLogo} alt="linkedin logo" />
            </a>
            <p>Feel free to connect with me.</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default ContactMe;
