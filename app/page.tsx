

'use client';
import Head from "next/head";
import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
import News from "./components/News";
import CTA from "./components/CTA";
import    Stats from "./components/Stats";
import Services from "./components/Services";
import Partners from "./components/Partners";
import WelcomeSection from "./components/WelcomeSection";
import Search from "./components/Search";
import Hero from "./components/Hero";
import Header from "./components/Header";


export default function Home() {


  return (
    <>
   

      <div>
        {/* Header */}
        <Header />

        
        {/* Hero Section */}
        <Hero />
        {/* Search Section */}
        <Search />

        {/* Welcome Section */}
        <WelcomeSection />

      

        {/* Services Section */}
        <Services />

        <Stats />

        {/* <CTA /> */}
        <Testimonials />
        {/* <News /> */}


      {/* Partners Section */}
      {/* <Partners /> */}
        <Footer />
      </div>
    </>
  );
}
