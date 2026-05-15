

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Place Your Order <span>Seamlessly</span>
        </h1>

        <p>
          Browse, select, and order your products in just a few clicks.
          Fast, secure, and designed for a smooth experience.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Start Order</button>
          <button className="secondary-btn">View Products</button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>24h</h3>
            <p>Fast Processing</p>
          </div>

          <div>
            <h3>100%</h3>
            <p>Secure Orders</p>
          </div>

          <div>
            <h3>Easy</h3>
            <p>User Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}