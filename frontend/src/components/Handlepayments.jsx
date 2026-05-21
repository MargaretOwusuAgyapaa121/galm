import { useState } from "react";
import PaystackPop from "@paystack/inline-js";


export default function PaymentSection({
  cart,
  customerInfo,
}) {
  const [paymentSuccess, setPaymentSuccess] =
    useState(false);

  const [paymentMethod, setPaymentMethod] =
    useState("momo");

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  // PAYSTACK PAYMENT
  const handlePayment = () => {
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "YOUR_PUBLIC_KEY_HERE", // replace with real key

      email:
        customerInfo?.customer?.email,

      amount: total * 100, // kobo

      currency: "GHS",

      onSuccess: (transaction) => {
        console.log("Payment success:", transaction);
        setPaymentSuccess(true);
      },

      onCancel: () => {
        alert("Payment cancelled");
      },
    });
  };

  // SUCCESS SCREEN
  if (paymentSuccess) {
    return (
      <section className="payment-success">
        <div className="success-box">
          <div className="success-icon">✓</div>

          <h2>Payment Successful</h2>

          <p>Your order has been placed successfully.</p>

          <div className="success-summary">
            <div>
              <span>Total Paid</span>
              <strong>${total}</strong>
            </div>

            <div>
              <span>Customer</span>
              <strong>
                {customerInfo?.customer?.name || "Customer"}
              </strong>
            </div>
          </div>

          <button
            onClick={() => window.location.reload()}
          >
            Continue Shopping
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="payment-section">
      <div className="payment-wrapper">

        {/* LEFT SIDE */}
        <div className="payment-left">

          <div className="payment-header">
            <h2>Payment Details</h2>
            <p>Review your order and complete payment.</p>
          </div>

          {/* CUSTOMER INFO */}
          <div className="customer-card">
            <h3>Customer Information</h3>

            <div className="customer-grid">

              <div>
                <span>Full Name</span>
                <strong>
                  {customerInfo?.customer?.name || "Not provided"}
                </strong>
              </div>

              <div>
                <span>Email</span>
                <strong>
                  {customerInfo?.customer?.email || "Not provided"}
                </strong>
              </div>

              <div>
                <span>Phone</span>
                <strong>
                  {customerInfo?.customer?.phone || "Not provided"}
                </strong>
              </div>

              <div>
                <span>Address</span>
                <strong>
                  {customerInfo?.customer?.address || "Not provided"}
                </strong>
              </div>

            </div>
          </div>

          {/* PAYMENT METHODS */}
          <div className="payment-methods">
            <h3>Select Payment Method</h3>

            <div className="methods-grid">

              {/* MOBILE MONEY */}
              <div
                className={`method-card ${
                  paymentMethod === "momo"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod("momo")
                }
              >
                <h4>Mobile Money</h4>
                <p>MTN • Vodafone • AirtelTigo</p>
              </div>

              {/* CARD */}
              <div
                className={`method-card ${
                  paymentMethod === "card"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod("card")
                }
              >
                <h4>Bank Card</h4>
                <p>Visa • Mastercard</p>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="payment-summary">

          <h3>Order Summary</h3>

          {cart.map((item) => (
            <div
              className="summary-item"
              key={item.id}
            >
              <div className="summary-left">
                <img src={item.image} alt={item.name} />

                <div>
                  <h4>{item.name}</h4>
                  <p>Qty: {item.quantity}</p>
                </div>
              </div>

              <strong>
                ${item.price * item.quantity}
              </strong>
            </div>
          ))}

          <div className="payment-total">
            <span>Total</span>
            <strong>${total}</strong>
          </div>

          <button
            className="pay-btn"
            onClick={handlePayment}
          >
            Pay ${total}
          </button>

        </div>
      </div>
    </section>
  );
}