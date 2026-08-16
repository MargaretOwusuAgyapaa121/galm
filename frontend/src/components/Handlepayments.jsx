
// import { useState } from "react";
// import PaystackPop from "@paystack/inline-js";

// export default function PaymentSection({
//   cart,
//   customerInfo,
// }) {
//   const [paymentSuccess, setPaymentSuccess] =
//     useState(false);

//   const [paymentMethod, setPaymentMethod] =
//     useState("card");

//   // NEW
//   const [currency, setCurrency] =
//     useState("USD");

//   const total = cart.reduce(
//     (sum, item) =>
//       sum + item.price * item.quantity,
//     0
//   );

//   // Currency symbols
//   const currencySymbols = {
//     USD: "$",
//     GHS: "₵",
//     NGN: "₦",
//     EUR: "€",
//     GBP: "£",
//   };

//   const symbol =
//     currencySymbols[currency] || "$";

//   // PAYSTACK PAYMENT
//   const handlePayment = () => {
//     const paystack = new PaystackPop();

//     paystack.newTransaction({
//       key: "YOUR_PUBLIC_KEY_HERE",

//       email:
//         customerInfo?.customer?.email,

//       amount: total * 100,

//       currency: currency,

//       channels:
//         paymentMethod === "momo"
//           ? ["mobile_money"]
//           : ["card"],

//       onSuccess: (transaction) => {
//         console.log(
//           "Payment success:",
//           transaction
//         );

//         setPaymentSuccess(true);
//       },

//       onCancel: () => {
//         alert("Payment cancelled");
//       },
//     });
//   };

//   if (paymentSuccess) {
//     return (
//       <section className="payment-success">
//         <div className="success-box">

//           <div className="success-icon">
//             ✓
//           </div>

//           <h2>Payment Successful</h2>

//           <p>
//             Your order has been placed
//             successfully.
//           </p>

//           <div className="success-summary">
//             <div>
//               <span>Total Paid</span>

//               <strong>
//                 {symbol}
//                 {total}
//               </strong>
//             </div>

//             <div>
//               <span>Customer</span>

//               <strong>
//                 {customerInfo?.customer
//                   ?.name || "Customer"}
//               </strong>
//             </div>
//           </div>

//           <button
//             onClick={() =>
//               window.location.reload()
//             }
//           >
//             Continue Shopping
//           </button>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="payment-section">
//       <div className="payment-wrapper">

//         <div className="payment-left">

//           <div className="payment-header">
//             <h2>Payment Details</h2>

//             <p>
//               Review your order and
//               complete payment.
//             </p>
//           </div>

//           {/* CURRENCY SELECT */}
//           <div className="currency-select">
//             <h3>Select Currency</h3>

//             <select
//               value={currency}
//               onChange={(e) =>
//                 setCurrency(e.target.value)
//               }
//             >
//               <option value="USD">
//                 USD ($)
//               </option>

//               <option value="GHS">
//                 GHS (₵)
//               </option>

//               <option value="NGN">
//                 NGN (₦)
//               </option>

//               <option value="EUR">
//                 EUR (€)
//               </option>

//               <option value="GBP">
//                 GBP (£)
//               </option>
//             </select>
//           </div>

//           {/* PAYMENT METHODS */}
//           <div className="payment-methods">
//             <h3>Select Payment Method</h3>

//             <div className="methods-grid">

//               <div
//                 className={`method-card ${
//                   paymentMethod === "momo"
//                     ? "active"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   setPaymentMethod("momo")
//                 }
//               >
//                 <h4>Mobile Money</h4>

//                 <p>
//                   MTN • Vodafone •
//                   AirtelTigo
//                 </p>
//               </div>

//               <div
//                 className={`method-card ${
//                   paymentMethod === "card"
//                     ? "active"
//                     : ""
//                 }`}
//                 onClick={() =>
//                   setPaymentMethod("card")
//                 }
//               >
//                 <h4>Bank Card</h4>

//                 <p>
//                   Visa • Mastercard
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="payment-summary">

//           <h3>Order Summary</h3>

//           {cart.map((item) => (
//             <div
//               className="summary-item"
//               key={item.id}
//             >
//               <div className="summary-left">

//                 <img
//                   src={item.image}
//                   alt={item.name}
//                 />

//                 <div>
//                   <h4>{item.name}</h4>

//                   <p>
//                     Qty: {item.quantity}
//                   </p>
//                 </div>
//               </div>

//               <strong>
//                 {symbol}
//                 {item.price *
//                   item.quantity}
//               </strong>
//             </div>
//           ))}

//           <div className="payment-total">
//             <span>Total</span>

//             <strong>
//               {symbol}
//               {total}
//             </strong>
//           </div>

//           <button
//             className="pay-btn"
//             onClick={handlePayment}
//           >
//             Pay {symbol}
//             {total}
//           </button>

//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import PaystackPop from "@paystack/inline-js";

export default function PaymentSection({
  cart,
  customerInfo,
}) {
  const [paymentSuccess, setPaymentSuccess] =
    useState(false);

  const [paymentMethod, setPaymentMethod] =
    useState("card");

  const [currency, setCurrency] =
    useState("USD");

  // ZELLE DETAILS
  const [zelleReference, setZelleReference] =
    useState("");

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const currencySymbols = {
    USD: "$",
    GHS: "₵",
    NGN: "₦",
    EUR: "€",
    GBP: "£",
  };

  const symbol =
    currencySymbols[currency] || "$";

  // PAYSTACK PAYMENT
  const handlePayment = () => {
    // ZELLE PAYMENT
    if (paymentMethod === "zelle") {
      if (!zelleReference.trim()) {
        alert(
          "Please enter your Zelle transaction reference."
        );
        return;
      }

      /*
        Zelle does not use Paystack.

        At this stage we show the order as
        submitted. You should verify the Zelle
        payment before treating it as fully paid.
      */

      console.log("Zelle payment submitted:", {
        customer: customerInfo,
        cart,
        total,
        currency,
        zelleReference,
      });

      setPaymentSuccess(true);

      return;
    }

    // PAYSTACK
    const paystack = new PaystackPop();

    paystack.newTransaction({
      key: "YOUR_PUBLIC_KEY_HERE",

      email:
        customerInfo?.customer?.email,

      amount: total * 100,

      currency: currency,

      channels:
        paymentMethod === "momo"
          ? ["mobile_money"]
          : ["card"],

      onSuccess: (transaction) => {
        console.log(
          "Payment success:",
          transaction
        );

        setPaymentSuccess(true);
      },

      onCancel: () => {
        alert("Payment cancelled");
      },
    });
  };

  // PAYMENT SUCCESS
  if (paymentSuccess) {
    return (
      <section className="payment-success">
        <div className="success-box">

          <div className="success-icon">
            ✓
          </div>

          <h2>
            {paymentMethod === "zelle"
              ? "Order Submitted"
              : "Payment Successful"}
          </h2>

          <p>
            {paymentMethod === "zelle"
              ? "Your order has been received. We will verify your Zelle payment and confirm your order."
              : "Your order has been placed successfully."}
          </p>

          <div className="success-summary">

            <div>
              <span>
                {paymentMethod === "zelle"
                  ? "Order Total"
                  : "Total Paid"}
              </span>

              <strong>
                {symbol}
                {total.toFixed(2)}
              </strong>
            </div>

            <div>
              <span>
                Customer
              </span>

              <strong>
                {customerInfo?.customer
                  ?.name || "Customer"}
              </strong>
            </div>

            {paymentMethod === "zelle" && (
              <div>
                <span>
                  Zelle Reference
                </span>

                <strong>
                  {zelleReference}
                </strong>
              </div>
            )}

          </div>

          <button
            onClick={() =>
              window.location.reload()
            }
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

        <div className="payment-left">

          <div className="payment-header">
            <h2>
              Payment Details
            </h2>

            <p>
              Review your order and
              complete payment.
            </p>
          </div>

          {/* CURRENCY SELECT */}

          <div className="currency-select">

            <h3>
              Select Currency
            </h3>

            <select
              value={currency}
              onChange={(e) =>
                setCurrency(e.target.value)
              }
            >
              <option value="USD">
                USD ($)
              </option>

              <option value="GHS">
                GHS (₵)
              </option>

              <option value="NGN">
                NGN (₦)
              </option>

              <option value="EUR">
                EUR (€)
              </option>

              <option value="GBP">
                GBP (£)
              </option>
            </select>

          </div>

          {/* PAYMENT METHODS */}

          <div className="payment-methods">

            <h3>
              Select Payment Method
            </h3>

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
                <h4>
                  Mobile Money
                </h4>

                <p>
                  MTN • Vodafone •
                  AirtelTigo
                </p>
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
                <h4>
                  Bank Card
                </h4>

                <p>
                  Visa • Mastercard
                </p>
              </div>

              {/* ZELLE */}

              <div
                className={`method-card ${
                  paymentMethod === "zelle"
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setPaymentMethod("zelle")
                }
              >
                <h4>
                  Zelle
                </h4>

                <p>
                  Pay with Zelle
                </p>
              </div>

            </div>

          </div>

          {/* ZELLE PAYMENT INFORMATION */}

          {paymentMethod === "zelle" && (
            <div className="zelle-payment-box">

              <div className="zelle-header">

                <h3>
                  Pay with Zelle
                </h3>

                <p>
                  Send your payment using
                  Zelle, then enter your
                  transaction reference below.
                </p>

              </div>

              <div className="zelle-details">

                <div className="zelle-detail">

                  <span>
                    Send To
                  </span>

                  <strong>
                    YOUR-ZELLE-EMAIL@example.com
                  </strong>

                </div>

                <div className="zelle-detail">

                  <span>
                    Amount
                  </span>

                  <strong>
                    {symbol}
                    {total.toFixed(2)}
                  </strong>

                </div>

              </div>

              <div className="zelle-notice">

                <strong>
                  Important
                </strong>

                <p>
                  Please send the exact amount
                  shown above. After making
                  the payment, enter your
                  Zelle transaction reference
                  below.
                </p>

              </div>

              <div className="zelle-reference">

                <label>
                  Zelle Transaction Reference
                </label>

                <input
                  type="text"
                  value={zelleReference}
                  onChange={(e) =>
                    setZelleReference(
                      e.target.value
                    )
                  }
                  placeholder="Enter your Zelle reference"
                />

              </div>

            </div>
          )}

        </div>

        {/* ORDER SUMMARY */}

        <div className="payment-summary">

          <h3>
            Order Summary
          </h3>

          {cart.map((item) => (
            <div
              className="summary-item"
              key={item.id}
            >

              <div className="summary-left">

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>

                  <h4>
                    {item.name}
                  </h4>

                  <p>
                    Qty: {item.quantity}
                  </p>

                </div>

              </div>

              <strong>
                {symbol}
                {(
                  item.price *
                  item.quantity
                ).toFixed(2)}
              </strong>

            </div>
          ))}

          <div className="payment-total">

            <span>
              Total
            </span>

            <strong>
              {symbol}
              {total.toFixed(2)}
            </strong>

          </div>

          <button
            className="pay-btn"
            onClick={handlePayment}
          >
            {paymentMethod === "zelle"
              ? "Submit Zelle Payment"
              : `Pay ${symbol}${total.toFixed(
                  2
                )}`}
          </button>

        </div>

      </div>

    </section>
  );
}