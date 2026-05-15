import React from "react";
import BookHero from "../components/BookHero";
import FeaturedBook from "../components/Featuredbook";
import BookCollection from "../components/Bookscollection";
import AuthorSection from "../components/Authorsection";    
import Booklaunchevent from "../components/Booklaunchevent";   
import Testimonial from "../components/Testimonial"; 
import CTASection from "../components/Cta";


 export default function BookPage() {
  return (
    <>
      
        <BookHero />   
        <FeaturedBook /> 
        <BookCollection />
        <AuthorSection />
        <Booklaunchevent /> 
        <Testimonial /> 
        <CTASection /> 
    </>
  )};