import "./ContactMeModal.css";
import close from "../../assets/close.png";

const ContactMeModal = ({ show, setShow }) => {
  const content = show && (
    <div className="modal">
      <button
        className="modalButton"
        type="button"
        onClick={() => setShow(false)}
      >
        <img src={close} alt="cancel button" className="closeIcon" />
      </button>
      <h3 className="modalContent">Twoja wiadomość została wysłana!</h3>
    </div>
  );

  return content;
};

export default ContactMeModal;
