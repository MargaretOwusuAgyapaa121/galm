

const testimonials = [
  {
    id: 1,
    image: "/assets/pv/testimonials/t1.jpg",
    name: "Sarah Mensah",
    role: "Church Leader",
    text:
      "These books brought healing, clarity, and spiritual growth into my life. Every chapter carried wisdom and divine insight.",
  },

  {
    id: 2,
    image: "/assets/pv/testimonials/t2.jpg",
    name: "Daniel Owusu",
    role: "Youth Mentor",
    text:
      "One of the most transformational books I’ve ever read. The message is powerful, inspiring, and deeply impactful.",
  },

  {
    id: 3,
    image: "/assets/pv/testimonials/t3.jpg",
    name: "Grace Arthur",
    role: "Conference Speaker",
    text:
      "The teachings and revelations in these books are life-changing. They inspire faith, leadership, and restoration.",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">

      {/* BACKGROUND GLOW */}
      <div className="testimonial-glow glow-left"></div>
      <div className="testimonial-glow glow-right"></div>

      <div className="testimonials-container">

        {/* HEADER */}
        <div className="testimonials-header">

          <span className="testimonial-tag">
            TESTIMONIALS
          </span>

          <h2>
            Lives Are Being
            <span> Transformed</span>
          </h2>

          <p>
            Discover how these transformational books are impacting
            lives through healing, faith, leadership, and divine wisdom.
          </p>

        </div>

        {/* TESTIMONIAL GRID */}
        <div className="testimonial-grid">

          {testimonials.map((item) => (
            <div className="testimonial-card" key={item.id}>

              {/* QUOTE ICON */}
              <div className="quote-icon">
                “
              </div>

              {/* USER */}
              <div className="testimonial-user">

                <img src={item.image} alt={item.name} />

                <div className="user-info">

                  <h3>{item.name}</h3>

                  <span>{item.role}</span>

                </div>

              </div>

              {/* TEXT */}
              <p className="testimonial-text">
                {item.text}
              </p>

              {/* STARS */}
              <div className="stars">
                ★★★★★
              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;