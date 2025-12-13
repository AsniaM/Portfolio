import styles from "./Footer.module.css";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [popup, setPopup] = useState({
    show: false,
    type: "", 
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!formData.name || !formData.email || !formData.message) {
      showPopup("error", "Please fill all required fields");
      return;
    }

    if (!validateEmail(formData.email)) {
      showPopup("error", "Please enter a valid email address");
      return;
    }

    
    console.log(formData); 

    showPopup("success", "Submitted successfully!");

    
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  const showPopup = (type, message) => {
    setPopup({ show: true, type, message });

    setTimeout(() => {
      setPopup({ show: false, type: "", message: "" });
    }, 3000);
  };

  return (
    <footer className={styles.footer}>
      
      <div className={styles.contactWrapper}>
        
        <form className={styles.formSection} onSubmit={handleSubmit}>
          <div>
            <label>Name </label>
            <input
              type="text"
              name="name"
              
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className={styles.row}>
            <div>
              <label>Email </label>
              <input
                type="email"
                name="email"
                
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <label>Message </label>
            <textarea
              name="message"
              
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <button type="submit">Submit</button>
        </form>

        
        <div className={styles.infoSection}>
          <h2>
            Contact <span>Me</span>
          </h2>
          <p>
            Feel free to reach out for collaborations, project discussions,
            or opportunities.
          </p>

          <div className={styles.infoItem}>
            <FaPhoneAlt />
            <span>+91 97903 35684</span>
          </div>

          <div className={styles.infoItem}>
            <FaEnvelope />
            <span>asniam684@gmail.com</span>
          </div>

          <div className={styles.infoItem}>
            <FaMapMarkerAlt />
            <span>Tamil Nadu, India</span>
          </div>
        </div>
      </div>

      
      <div className={styles.findMe}>
        <h3>Find Me On</h3>
        <p>
          Feel free to <span>connect</span> with me
        </p>

        <div className={styles.socialIcons}>
          <a href="https://github.com/AsniaM" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        </div>
      </div>

      
      <div className={styles.bottom}>
        <p>
          Designed and Developed by <span>Asnia M</span>
        </p>
        <p>© 2025 AM</p>
      </div>

      
      {popup.show && (
        <div
          className={`${styles.popup} ${
            popup.type === "success" ? styles.success : styles.error
          }`}
        >
          {popup.message}
        </div>
      )}
    </footer>
  );
}
