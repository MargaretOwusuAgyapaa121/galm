import React, { useState } from "react";

import HeroSection from "./Orderhero";
import ProductSection from "./Productsection";
import CheckoutForm from "./CheckOutform";

export default function OrderPage() {

  const [cart, setCart] = useState([]);

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
      <HeroSection />

      <ProductSection
        onAddToCart={handleAddToCart}
      />

      <CheckoutForm cart={cart} />
    </>
  );
}