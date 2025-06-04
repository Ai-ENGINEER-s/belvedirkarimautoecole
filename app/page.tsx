

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






  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Auto École Belvédère Kiram - 50 ans d&apos;expérience</title>
  
      </Head>

      <div>
        {/* Header */}
        <Header />

        
        {/* Hero Section */}
        <Hero />
        {/* Search Section */}
        <Search />

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Partners Section */}
        <Partners />

        {/* Services Section */}
        <Services />

        <Stats />

        <CTA />
        {/* News Section */}
        <News />

    <Testimonials />
        <Footer />
      </div>
    </>
  );
}
