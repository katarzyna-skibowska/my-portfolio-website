import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactMe.module.css";
import ContactMeModal from "./ContactMeModal";
import githubLogo from "../../assets/githubLogo.svg";
import linkedinLogo from "../../assets/linkedinLogo.svg";

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
    <div className={styles.containerBox}>
      <div className={styles.container}>
        <form ref={form} onSubmit={sendEmail} className={styles.contactForm}>
          <h3>Send me an email</h3>
          <label className={styles.formLabel}>Name:</label>
          <input
            type="text"
            name="guest_name"
            className={`${styles.nameInput} ${styles.inputStyle}`}
            required
          />
          <label className={styles.formLabel}>Email:</label>
          <input
            type="email"
            name="guest_email"
            className={`${styles.emailInput} ${styles.inputStyle}`}
            required
          />
          <label className={styles.formLabel}>Message:</label>
          <textarea
            name="message"
            className={`${styles.textareaInput} ${styles.inputStyle}`}
            required
          />
          <input
            type="submit"
            value="Send email"
            className={styles.sendButton}
            onClick={() => {
              sendEmail;
            }}
          />
          <ContactMeModal show={show} setShow={setShow} />
        </form>
      </div>
      <div className={styles.container}>
        <section>
          {/* <h3>Get in touch</h3> */}
          <p>Feel free to connect with me!</p>
          <p>email: kat.skibowska@gmail.com</p>
          <a target="blank" href="https://github.com/katarzyna-skibowska">
            <img className={styles.smIcon} src={githubLogo} alt="github logo" />
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/katarzyna-skibowska/"
          >
            <img
              className={styles.smIcon}
              src={linkedinLogo}
              alt="linkedin logo"
            />
          </a>
        </section>
      </div>
    </div>
  );
};

export default ContactMe;
