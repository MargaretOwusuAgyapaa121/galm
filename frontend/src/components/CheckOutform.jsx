import { useState } from "react";

export default function CheckoutForm({
  cart,
  onContinue,
}) {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  const items = Object.values(cart || {});

  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // SEND DATA TO ORDER PAGE (PAYMENT FLOW)
    onContinue({
      customer: form,
      order: items,
      total,
    });
  };

  return (
    <section className="checkout-section">
      <div className="checkout-container">

        {/* LEFT SIDE */}
        <div className="checkout-left">
          <h2>Checkout</h2>

          <p>
            Fill in your information to complete your order.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="address"
              placeholder="Delivery Address"
              value={form.address}
              onChange={handleChange}
              required
            />

            <textarea
              name="notes"
              placeholder="Additional Notes (optional)"
              value={form.notes}
              onChange={handleChange}
            />

            <button type="submit">
              Continue To Payment
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="checkout-right">
          <h3>Order Summary</h3>

          {items.length === 0 ? (
            <p className="empty-cart">
              No products selected
            </p>
          ) : (
            <>
              {items.map((item) => (
                <div
                  className="summary-item"
                  key={item.id}
                >
                  <div>
                    <h4>{item.name}</h4>

                    <p>
                      ${item.price} × {item.quantity}
                    </p>
                  </div>

                  <strong>
                    ${item.price * item.quantity}
                  </strong>
                </div>
              ))}

              <div className="summary-total">
                <span>Total</span>

                <strong>${total}</strong>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}