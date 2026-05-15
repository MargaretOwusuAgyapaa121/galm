export default function CartSidebar({ cart, onClose }) {
  const items = Object.values(cart);

  const total = items.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-sidebar">
        <div className="cart-header">
          <h2>Your Order</h2>
          <button onClick={onClose}>✕</button>
        </div>

        {items.length === 0 ? (
          <p className="empty">No items in cart</p>
        ) : (
          <>
            <div className="cart-items">
              {items.map((item) => (
                <div key={item.id} className="cart-item">
                  <div>
                    <h4>{item.name}</h4>
                    <p>
                      ${item.price} × {item.quantity}
                    </p>
                  </div>

                  <div className="item-total">
                    ${item.price * item.quantity}
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="total">
                <span>Total:</span>
                <strong>${total}</strong>
              </div>

              <button className="checkout-btn">
                Place Order
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}