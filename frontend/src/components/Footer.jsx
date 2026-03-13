
import React, { useState } from "react";
import { FaFacebookF, FaYoutube, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((error) => alert(error));
  };

  return (
   <footer className="galm-footer">
  <div className="footer-content">

    <img src="/assets/pv/logo/icon2.png" alt="GALM Logo" className="footer-logo" />

    {!submitted ? (
      <form
        className="footer-form"
        name="newsletter"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="newsletter" />

        <input name="name" type="text" placeholder="Name*" required />
        <input name="email" type="email" placeholder="Email*" required />

        <button type="submit">Subscribe</button>
      </form>
    ) : (
      <p className="footer-success">
        ✅ Thank you for subscribing! Stay connected with Glorious Anchor Life Ministry.
      </p>
    )}

    {/* Privacy */}
    <p className="footer-privacy">
      We respect your privacy. Your information will never be shared.
    </p>

  </div>

  {/* Bottom */}
  <div className="footer-bottom">
    © 2026 GALM. All Rights Reserved.
  </div>
</footer>
  );
};

export default Footer;