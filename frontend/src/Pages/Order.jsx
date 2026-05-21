import React, { useState } from "react";

import HeroSection from "../components/Orderhero";
import ProductSection from "../components/Productsection";
import ShoppingCart from "../components/ShoppingCart";
import CheckoutForm from "../components/CheckOutform";

export default function OrderPage() {

  // CART STATE
  const [cart, setCart] = useState([]);

  // SHOW CHECKOUT
  const [showCheckout, setShowCheckout] =
    useState(false);

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
      {showCheckout && (
        <CheckoutForm cart={cart} />
      )}
    </>
  );
}