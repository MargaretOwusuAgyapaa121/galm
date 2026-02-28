import React from 'react';


const Home = () => {
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
          <form>
            <input type="text" placeholder="First Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>

  );
};

export default Home;
