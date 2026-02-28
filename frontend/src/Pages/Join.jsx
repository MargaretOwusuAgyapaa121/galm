import React from "react";
import { Link } from "react-router-dom";
import { FaWifi, FaQuestionCircle, FaUsers } from "react-icons/fa";

const JoinUs = () => {
  return (
    <div className="join-page">

     <section className="join-hero">
  <div className="join-overlay">

    <img
      src="/assets/pv/logo/features1-icon.png"
      alt="Love"
      className="love-image"
    />

    <h1>Join Our Discipleship Class</h1>

    <p>
      This class is designed to expand your knowledge about God,
      how He works in your life and in your world, to give understanding
      to some difficult questions of our salvation and blessed hope.
    </p>
   <Link to="/disciple" className="secondary-btn">
  Register Now
</Link>


  </div>
</section>


      {/* THINGS YOU NEED */}
      <section className="things-needed">
        <h2>Things You Need to Know</h2>

        <p className="need-paragraph">
          Kindly make available the following materials and reference them
          in your records as we journey together in faith and spiritual growth.
        </p>

        <div className="materials">
          <div>Holy Bible</div>
          <div>Notebook</div>
          <div>Workbook</div>
        </div>
      </section>


      {/* THINGS TO EXPRESS SECTION */}
      <section className="express-section">

        {/* LEFT SIDE */}
        <div className="express-left">
          <h2>Things to Express</h2>

          <p>
            During the three months discipleship classes, every student is 
            expected to actively participate in teachings, express understanding,
            share insights, and follow the structured program flow with dedication.
          </p>

          <button className="secondary-btn">Register Now</button>
        </div>

        {/* RIGHT SIDE */}
        <div className="express-right">

          <div className="feature-box">
            <FaWifi className="feature-icon" />
            <h3>Online Access</h3>
            <p>Attend classes online with reliable access and participation.</p>
          </div>

          <div className="feature-box">
            <FaQuestionCircle className="feature-icon" />
            <h3>Questions During Class</h3>
            <p>Ask meaningful questions and gain deeper understanding.</p>
          </div>

          <div className="feature-box">
            <FaUsers className="feature-icon" />
            <h3>Group Discussions</h3>
            <p>Engage in discussions as groups or individuals.</p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default JoinUs;
