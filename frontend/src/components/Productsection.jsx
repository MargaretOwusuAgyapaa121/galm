import { useState } from "react";


export default function ProductSection({ onAddToCart }) {
  const products = [
    {
      id: 1,
      name: "Loss & Recovery ",
      price: 25,
      image:
        "/assets/pv/book/b1.jpeg",
      desc: "Holy Bible for daily spiritual growth",
    },
    {
      id: 2,
      name: "African Churchs and it political affiliations",
      price: 10,
      image:
        "/assets/pv/book/b2.jpeg",
      desc: "Special anointing oil for prayers",
    },
    {
      id: 3,
      name: "Wound that Rise",
      price: 15,
      image:
        "/assets/pv/book/b3.jpeg",
      desc: "Daily devotion and spiritual guidance",
    },
  ];

  const [cart, setCart] = useState({});

  const addToCart = (product) => {
    const updated = { ...cart };

    if (updated[product.id]) {
      updated[product.id].quantity += 1;
    } else {
      updated[product.id] = { ...product, quantity: 1 };
    }

    setCart(updated);
    onAddToCart && onAddToCart(updated);
  };

  const removeItem = (id) => {
    const updated = { ...cart };
    delete updated[id];
    setCart(updated);
    onAddToCart && onAddToCart(updated);
  };

  return (
    <section className="product-section">
      <h2>Our Products</h2>
      <p className="subtitle">Select items and add them to your order</p>

      <div className="product-grid">
        {products.map((p) => (
          <div
            key={p.id}
            className={`product-card ${cart[p.id] ? "active" : ""}`}
          >
            <img src={p.image} alt={p.name} />

            <div className="product-info">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>

              <div className="price">${p.price}</div>

              {!cart[p.id] ? (
                <button onClick={() => addToCart(p)}>
                  Add to Cart
                </button>
              ) : (
                <div className="cart-controls">
                  <span>Qty: {cart[p.id].quantity}</span>

                  <button onClick={() => addToCart(p)}>+</button>

                  <button
                    className="remove"
                    onClick={() => removeItem(p.id)}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}