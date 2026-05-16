// import React from "react";
// import HeroSection from "../components/Orderhero";
// import ProductSection from "../components/Productsection";  
// import CartSidebar from "../components/Cartsidebar";      


//  export default function OrderPage() {
//   return (
//     <>
      
//         <HeroSection />   
//         <ProductSection />
//          <CartSidebar /> 
       
        
//     </>
//   )};
import React, { useState } from "react";
import HeroSection from "../components/Orderhero";
import ProductSection from "../components/Productsection";
import CartSidebar from "../components/Cartsidebar";
import CheckoutForm from "../components/CheckOutform";  

export default function OrderPage() {
  const [cart, setCart] = useState({});
  const [openCart, setOpenCart] = useState(false);

  return (
    <>
      <HeroSection />

      <ProductSection
        onAddToCart={(updatedCart) => {
          setCart(updatedCart);
          setOpenCart(true);
        }}
      />

      {openCart && (
        <CartSidebar
          cart={cart}
          onClose={() => setOpenCart(false)}
        />
      )}
      <CheckoutForm cart={cart} />  
    </>
  );
}