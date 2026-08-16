
import React, { useState } from "react";

import HeroSection from "../components/Orderhero";
import ProductSection from "../components/Productsection";
import ShoppingCart from "../components/Shoppingcart";
import CheckoutForm from "../components/CheckOutform";
import PaymentSection from "../components/Handlepayments";

export default function OrderPage() {

  // CART
  const [cart, setCart] = useState([]);

  // SHOW CHECKOUT
  const [showCheckout, setShowCheckout] =
    useState(false);

  // SHOW PAYMENT
  const [showPayment, setShowPayment] =
    useState(false);

  // CUSTOMER INFO
  const [customerInfo, setCustomerInfo] =
    useState(null);

  // ADD TO CART
  const handleAddToCart = (product) => {

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {

      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity:
                item.quantity + product.quantity,
            }
          : item
      );

      setCart(updatedCart);

    } else {

      setCart([...cart, product]);
    }
  };

  return (
    <>
      {/* HERO */}
      <HeroSection />

      {/* PRODUCTS */}
      <ProductSection
        onAddToCart={handleAddToCart}
      />

      {/* SHOPPING CART */}
      <ShoppingCart
        cart={cart}
        setCart={setCart}
        onCheckout={() =>
          setShowCheckout(true)
        }
      />

      {/* CHECKOUT FORM */}
      {showCheckout && !showPayment && (
        <CheckoutForm
          cart={cart}

          onContinue={(data) => {

            setCustomerInfo(data);

            setShowPayment(true);
          }}
        />
      )}

      {/* PAYMENT SECTION */}
      {showPayment && (
        <PaymentSection
          cart={cart}
          customerInfo={customerInfo}
        />
      )}
    </>
  );
}