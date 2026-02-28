import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-page">

      {/* ================= CONTACT INFO SECTION ================= */}
      <section className="contact-info-section">

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-left">

            <span className="contact-tag">Contact Us</span>

            <h2>We Would Love to Hear From You</h2>

            <p className="contact-description">
              Whether you have questions about our discipleship classes,
              need spiritual guidance, or simply want to connect with our
              ministry family, we are here for you. Reach out and let us
              walk this journey of faith together.
            </p>

            <div className="contact-details">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>173 Brush Street, Lancaster, MA 9900</span>
              </div>

              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <span>+1 (234) 567-8900</span>
              </div>

              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@gloriousministry.org</span>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE - GOOGLE MAP */}
          <div className="contact-map">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps?q=Lancaster,MA&output=embed"
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </section>


      {/* ================= CONTACT FORM SECTION ================= */}
      <section className="contact-form-section">

        <div className="form-container">

          <h2>Send Us a Message</h2>

          <form className="contact-form">

            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
            </div>

            <div className="form-row">
              <input type="tel" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>

            <div className="form-row">
              <select required>
                <option value="">How did you hear about us?</option>
                <option>Friend / Family</option>
                <option>Social Media</option>
                <option>Church Member</option>
                <option>Website</option>
                <option>Other</option>
              </select>
            </div>

            <textarea
              rows="5"
              placeholder="Your Message..."
              required
            ></textarea>

            <button type="submit" className="submit-btn">
              Send Message
            </button>

          </form>

        </div>
      </section>

    </div>
  );
};

export default Contact;
