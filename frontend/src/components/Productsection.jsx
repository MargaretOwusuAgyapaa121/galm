// import { useState } from "react";


// export default function ProductSection({ onAddToCart }) {
//   const products = [
//     {
//       id: 1,
//       name: "Loss & Recovery ",
//       price: 18,
//       image:
//         "/assets/pv/book/b1.jpeg",
//       desc: "Holy Bible for daily spiritual growth",
//     },
//     {
//       id: 2,
//       name: "African Churchs and it political affiliations",
//       price: 18,
//       image:
//         "/assets/pv/book/b2.jpeg",
//       desc: "Special anointing oil for prayers",
//     },
//     {
//       id: 3,
//       name: "Wound that Rise",
//       price: 18,
//       image:
//         "/assets/pv/book/b3.jpeg",
//       desc: "Daily devotion and spiritual guidance",
//     },
//   ];

//   const [cart, setCart] = useState({});

//   const addToCart = (product) => {
//     const updated = { ...cart };

//     if (updated[product.id]) {
//       updated[product.id].quantity += 1;
//     } else {
//       updated[product.id] = { ...product, quantity: 1 };
//     }

//     setCart(updated);
//     onAddToCart && onAddToCart(updated);
//   };

//   const removeItem = (id) => {
//     const updated = { ...cart };
//     delete updated[id];
//     setCart(updated);
//     onAddToCart && onAddToCart(updated);
//   };

//   return (
//     <section className="product-section">
//       <h2>Our Products</h2>
//       <p className="subtitle">Select items and add them to your order</p>

//       <div className="product-grid">
//         {products.map((p) => (
//           <div
//             key={p.id}
//             className={`product-card ${cart[p.id] ? "active" : ""}`}
//           >
//             <img src={p.image} alt={p.name} />

//             <div className="product-info">
//               <h3>{p.name}</h3>
//               <p>{p.desc}</p>

//               <div className="price">${p.price}</div>

//               {!cart[p.id] ? (
//                 <button onClick={() => addToCart(p)}>
//                   Add to Cart
//                 </button>
//               ) : (
//                 <div className="cart-controls">
//                   <span>Qty: {cart[p.id].quantity}</span>

//                   <button onClick={() => addToCart(p)}>+</button>

//                   <button
//                     className="remove"
//                     onClick={() => removeItem(p.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
import { useState } from "react";


export default function ModernProducts({
  onAddToCart,
}) {
  const products = [
    {
      id: 1,
      name: "Loss & Recovery",
      price: 18,
      image: "/assets/pv/book/b1.jpeg",
      desc: "A transformational journey through healing and restoration.",
    },

    {
      id: 2,
      name: "African Churches & Political Affiliations",
      price: 18,
      image: "/assets/pv/book/b2.jpeg",
      desc: "Powerful insights into leadership and spiritual revival.",
    },

    {
      id: 3,
      name: "Wounds That Rise",
      price: 18,
      image: "/assets/pv/book/b3.jpeg",
      desc: "An inspiring message about overcoming pain and purpose.",
    },
  ];

  const [quantities, setQuantities] = useState({});

  const increaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] || 1) + 1,
    }));
  };

  const decreaseQty = (id) => {
    setQuantities((prev) => ({
      ...prev,
      [id]:
        prev[id] > 1
          ? prev[id] - 1
          : 1,
    }));
  };

  const handleAddToCart = (product) => {
    const quantity =
      quantities[product.id] || 1;

    const updatedProduct = {
      ...product,
      quantity,
    };

    onAddToCart(updatedProduct);
  };

  return (
    <section className="modern-products">

      <div className="products-header">
        <h2>Choose Your Books</h2>

        <p>
          Select your preferred books and quantities before proceeding to checkout.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <div
            className="modern-card"
            key={product.id}
          >

            {/* IMAGE */}
            <div className="card-image">
              <img
                src={product.image}
                alt={product.name}
              />
            </div>

            {/* INFO */}
            <div className="card-content">

              <h3>{product.name}</h3>

              <p>{product.desc}</p>

              <div className="bottom-row">

                <span className="book-price">
                  ${product.price}
                </span>

                {/* QUANTITY */}
                <div className="quantity-box">

                  <button
                    onClick={() =>
                      decreaseQty(product.id)
                    }
                  >
                    -
                  </button>

                  <span>
                    {quantities[product.id] || 1}
                  </span>

                  <button
                    onClick={() =>
                      increaseQty(product.id)
                    }
                  >
                    +
                  </button>
                </div>
              </div>

              {/* BUTTON */}
              <button
                className="cart-btn"
                onClick={() =>
                  handleAddToCart(product)
                }
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}