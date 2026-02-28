import React from "react";
import { FaFacebookF } from "react-icons/fa";

const ServicePage = () => {
  const services = [
    {
      title: "Glorious Service",
      time: "10:00am -12:30 pm",
      highlight: "S U N D A Y  M A I N  S E R V I C E",
      description: [
        "GALM enters into the moment of worship.",
        "We specially invite you to join us fellowship this and every Sunday."
      ],
      image: "/assets/pv/logo/sun.jpg",
      alt: "Sunday Service",
      reverse: true
    },
    {
      title: "BIBLE STUDIES",
      time: "7:00pm - 8:30pm",
      highlight: "K N O W L E D G E  I M P A R T A T I O N",
      description: [
        "Join us every wednesday evening as we specially receive",
        "spiritual knowledge and find solutions of every question in our christian journey."
      ],
      image: "/assets/pv/logo/wed.jpg",
      alt: "Bible Study",
      reverse: false
    },
    {
      title: "PRAYER SERVICE",
      time: "7:00pm - 9:00pm",
      highlight: "F R I D A Y  A N C H O R  N I G H T  O F  P R A Y E R",
      description: [
        "Prayer is our life-line and lifestyle. We invite everyone to join us in one accord.",
        "This and every Friday night service."
      ],
      image: "/assets/pv/logo/friday.jpg",
      alt: "Prayer Service",
      reverse: true
    }
  ];

  return (
    <section className="service-page">

      {/* TOP – ALL STACKED & CENTERED */}
      <div className="service-top">
        <p className="meeting-day">Join Our Meeting Days</p>
        <h1 className="service-heading">Service</h1>

        <p className="service-address">
          @173 GROVE STREET<br />
          WORCESTER MA 01605
        </p>

        <button className="watch-live">
          <FaFacebookF />
          Watch Live
        </button>
      </div>

      {/* SERVICES */}
      {services.map((service, idx) => (
        <div
          key={idx}
          className={`service-container ${service.reverse ? "reverse" : ""}`}
        >
          <div className="service-row">
            <div className="service-image">
              <img src={service.image} alt={service.alt} />
            </div>
            <div className="service-text">
              <h2>{service.title}</h2>
              <p className="time">{service.time}</p>
              <p className="highlight">{service.highlight}</p>
              {service.description.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* BIBLE VERSE */}
      <div className="service-verse">
        <p>
          “Let us not neglect meeting together, as some have made a habit,
          but encouraging one another — and all the more as you see the day
          approaching.”
        </p>
        <span>Hebrews 10:25</span>

        <button className="events-btn">See Our Upcoming Events</button>
      </div>

    </section>
  );
};

export default ServicePage;
