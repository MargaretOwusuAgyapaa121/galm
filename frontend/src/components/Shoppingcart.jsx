

export default function ShoppingCart({
  cart,
  setCart,
  onCheckout,
}) {

  // INCREASE QUANTITY
  const increaseQty = (id) => {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCart(updatedCart);
  };

  // DECREASE QUANTITY
  const decreaseQty = (id) => {

    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity:
              item.quantity > 1
                ? item.quantity - 1
                : 1,
          }
        : item
    );

    setCart(updatedCart);
  };

  // REMOVE ITEM
  const removeItem = (id) => {

    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

  // TOTAL
  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <section className="shopping-cart">

      <div className="cart-wrapper">

        {/* LEFT SIDE */}
        <div className="cart-left">

          <div className="cart-top">
            <h2>Your Cart</h2>

            <span>
              {cart.length} item(s)
            </span>
          </div>

          {cart.length === 0 ? (

            <div className="empty-cart">

              <h3>Your cart is empty</h3>

              <p>
                Add books to continue your order.
              </p>
            </div>

          ) : (

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.id}
                >

                  {/* IMAGE */}
                  <div className="cart-image">
                    <img
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  {/* INFO */}
                  <div className="cart-info">

                    <h3>{item.name}</h3>

                    <p>
                      ${item.price} each
                    </p>

                    {/* QUANTITY */}
                    <div className="qty-controls">

                      <button
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item.id)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="cart-right">

                    <strong>
                      $
                      {item.price *
                        item.quantity}
                    </strong>

                    <button
                      className="remove-btn"
                      onClick={() =>
                        removeItem(item.id)
                      }
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT SIDE */}
        <div className="cart-summary">

          <h3>Order Summary</h3>

          <div className="summary-row">
            <span>Total Items</span>

            <span>{cart.length}</span>
          </div>

          <div className="summary-row">
            <span>Total Price</span>

            <strong>${total}</strong>
          </div>

          <button
            className="checkout-btn"
            disabled={cart.length === 0}
            onClick={onCheckout}
          >
            Proceed To Checkout
          </button>
        </div>
      </div>
    </section>
  );
}