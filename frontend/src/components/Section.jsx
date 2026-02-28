import React from "react";


const Section = () => {
  return (
    <section className="about-section">
      <div className="about-wrapper">

        {/* LEFT IMAGE */}
        <div className="about-image">
          <img
            src="/assets/pv/background/slide-1.jpg"
            alt="Welcome"
            className="default-img"
          />
          <img
            src="/assets/pv/img/galm1.jpg"
            alt="Read More"
            className="hover-img"
          />

          <div className="image-text">
            <div className="text-default">
              <h3>Welcome</h3>
              <p>Know More About Us</p>
            </div>

            <div className="text-hover">
              <span className="read-more">Read More</span>
            </div>
          </div>
        </div>

        {/* RIGHT TEXT (VERTICAL FLOW) */}
        <div className="about-content">
          <h2 className="about-title">Will Your Anchor Hold...?</h2>

          <p>
            GALM helps you through the steps to salvation and to grow spiritually
            as a follower of our Lord Jesus Christ. We strive to share the gospel
            of Jesus Christ to all ages through preaching, teaching, mission
            work, giving to the needy and more.
          </p>

          <p>
            GALM is committed to fulfilling the calling of our Lord Jesus Christ
            by evangelizing the lost, discipleship, showing compassion, and
            contributing to society. The fundamental reason for the church’s
            existence is to worship God in truth and in spirit (John 4:23–24).
          </p>
        </div>

      </div>
    </section>
  );
};

export default Section;
