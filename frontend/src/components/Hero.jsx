import React, { useState } from "react";

const Home = () => {
  const [submitted, setSubmitted] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch("/", {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        setSubmitted(true); // show success message
        form.reset(); // clear form
      })
      .catch((error) => alert("Error submitting form: " + error));
  };

  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 className="hero-pretitle">WILL YOUR ANCHOR HOLD...?</h1>
        <h2 className="hero-title">Glorious Anchor of Life Ministries</h2>
        <p className="hero-subtitle">
          Welcome to a community full of spirits bound together by the love of Jesus Christ
          and His word; reflecting Grace and truth. We are extremely excited that you have
          chosen to spend time looking around and unveiling the mystery of Christ.
        </p>

        <div className="hero-titles">
          <h3 className="hero-disciple">Disciple Class</h3>
          <h4 className="hero-online">Online</h4>
        </div>

        <a
          href="https://youtu.be/CKJogOqoEB0"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-cta"
        >
          <img src="/assets/pv/logo/play-button-light.png" alt="Play" />
          Watch Now
        </a>
      </div>

      <div className="hero-right">
        <div className="join-church-form">
          <h3 className="join-title">Join the Church</h3>
          <p>We invite you to be a member today!</p>

          {!submitted ? (
            <form
              name="join-church"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="join-church" />

              <input name="firstName" type="text" placeholder="First Name" required />
              <input name="email" type="email" placeholder="Email Address" required />
              <input name="phone" type="tel" placeholder="Phone Number" required />

              <button type="submit">Submit</button>
            </form>
          ) : (
            <p style={{ color: "#f8eabe", marginTop: "20px", fontWeight: 500 }}>
              ✅ Thank you! We received your info and will contact you soon.
            </p>
          )}

        </div>
      </div>
    </section>
  );
};

export default Home;