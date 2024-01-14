import styles from "./ContactMeModal.module.css";
import close from "../../assets/close.png";

const ContactMeModal = ({ show, setShow }) => {
  const content = show && (
    <div className={styles.modal}>
      <button
        className={styles.modalButton}
        type="button"
        onClick={() => setShow(false)}
      >
        <img src={close} alt="cancel button" className={styles.closeIcon} />
      </button>
      <h3 className={styles.modalContent}>Twoja wiadomość została wysłana!</h3>
    </div>
  );

  return content;
};

export default ContactMeModal;
