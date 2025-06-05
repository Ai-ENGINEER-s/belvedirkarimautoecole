// import { useState } from "react";

// const Hero = () => {
//     const [activeDot, setActiveDot] = useState(0);
//   return (
//     <section className="hero" id="accueil">
//     <div className="container">
//       <h1>Votre Permis de Conduire<br />Avec 50 ans d&apos;Expérience</h1>
//       <p>Auto École Belvédère Kiram vous accompagne depuis 50 ans dans l&apos;obtention de votre permis de conduire. Avec 6 annexes et une équipe de moniteurs professionnels parlant arabe et français, nous vous garantissons une formation de qualité.</p>
//       <div className="hero-buttons">
//         <a href="#inscription" className="cta-button">COMMENCER MAINTENANT</a>
//       </div>
//     </div>
//     <div className="hero-dots">
//       {[0, 1, 2].map((index) => (
//         <div
//           key={index}
//           className={`dot ${activeDot === index ? 'active' : ''}`}
//           onClick={() => setActiveDot(index)}
//         />
//       ))}
//     </div>
//   </section>
//   );
// }

// export default Hero;

import { useState, useEffect } from "react";

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Images de voitures premium pour le carousel
  const carImages = [
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Luxury sports car
    "https://images.unsplash.com/photo-1617788138017-80ad40651399?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80", // Premium sedan
    "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80", // Modern car interior
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % carImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carImages.length]);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Background Carousel with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        {carImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              activeSlide === index 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat filter"
              style={{ backgroundImage: `url(${image})` }}
            />
            {/* Premium gradient overlay - responsive */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 sm:from-black/80 sm:via-black/60 sm:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 sm:from-black/50 sm:to-black/30" />
          </div>
        ))}
        
        {/* Animated geometric shapes - responsive */}
        <div className="hidden sm:block absolute top-10 right-4 w-16 h-16 sm:top-20 sm:right-20 sm:w-32 sm:h-32 border border-orange-500/30 rotate-45 animate-pulse" />
        <div className="hidden sm:block absolute bottom-20 left-2 w-12 h-12 sm:bottom-40 sm:left-10 sm:w-24 sm:h-24 bg-gradient-to-r from-orange-500/20 to-transparent rotate-12 animate-bounce" />
        <div className="hidden md:block absolute top-1/2 right-4 w-1 h-10 sm:right-10 sm:w-2 sm:h-20 bg-gradient-to-b from-orange-500 to-transparent animate-pulse" />
      </div>

      {/* Main Content - Ultra Responsive */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-7xl">
        {/* Premium badge - responsive */}
        <div className="inline-flex items-center gap-1 sm:gap-2 px-3 py-1 sm:px-6 sm:py-2 mb-4 sm:mb-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-orange-500 rounded-full animate-pulse" />
          <span className="text-white/90 text-xs sm:text-sm font-medium tracking-wider">PREMIUM FORMATION</span>
        </div>

        {/* Hero Title with Cinematic Effect - Ultra Responsive */}
        <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-4 sm:mb-6 leading-tight">
          <span className="block bg-gradient-to-r from-white via-orange-300 to-orange-500 bg-clip-text text-transparent animate-pulse">
            Votre Permis
          </span>
          <span className="block text-white/95 transform hover:scale-105 transition-transform duration-500">
            de Conduire
          </span>
        </h1>

        {/* Subtitle with Glow Effect - Responsive */}
        <div className="relative mb-6 sm:mb-8">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/80 font-light max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-2">
            <span className="text-orange-400 font-semibold">50 ans d'Excellence</span>
            <span className="hidden sm:inline"> • </span>
            <br className="sm:hidden" />
            Auto École Belvédère Kiram vous accompagne avec 
            <span className="text-orange-300"> 6 annexes</span> et une équipe de 
            <span className="text-orange-300"> moniteurs professionnels</span> 
            <span className="hidden sm:inline"> parlant arabe et français pour une formation de qualité supérieure.</span>
            <span className="sm:hidden"> parlant arabe et français.</span>
          </p>
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent blur-3xl animate-pulse" />
        </div>

        {/* CTA Button with Premium Animation - Ultra Responsive */}
        <div className="relative group mb-8 sm:mb-0">
          <button className="relative px-6 py-3 sm:px-8 sm:py-3.5 lg:px-12 lg:py-4 bg-gradient-to-r from-orange-600 to-orange-500 text-white font-bold text-sm sm:text-base lg:text-lg rounded-full overflow-hidden transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-orange-500/50">
            <span className="relative z-10 tracking-wider">
              <span className="hidden sm:inline">COMMENCER MAINTENANT</span>
              <span className="sm:hidden">COMMENCER</span>
            </span>
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
          
          {/* Button glow */}
          <div className="absolute inset-0 bg-orange-500/30 rounded-full blur-xl scale-110 group-hover:scale-125 transition-transform duration-300" />
        </div>

        {/* Stats with Glass Morphism - Ultra Responsive */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 lg:gap-8 mt-8 sm:mt-12 lg:mt-16">
          {[
            { number: "50+", label: "Années d'Expérience" },
            { number: "6", label: "Annexes" },
            { number: "100%", label: "Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="group text-center flex-1 min-w-0 max-w-24 sm:max-w-none sm:flex-none">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl sm:rounded-2xl px-2 py-2 sm:px-4 sm:py-3 lg:px-6 lg:py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className="text-lg sm:text-2xl lg:text-3xl xl:text-4xl font-black text-orange-400 mb-0.5 sm:mb-1">
                  {stat.number}
                </div>
                <div className="text-white/70 text-xs sm:text-sm font-medium leading-tight">
                  <span className="hidden sm:inline">{stat.label}</span>
                  <span className="sm:hidden">
                    {stat.label.split(' ')[0]}
                    {stat.label.includes('Expérience') && <><br />d'Exp.</>}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Premium Navigation Dots - Ultra Responsive */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex items-center gap-2 sm:gap-3 px-3 py-2 sm:px-6 sm:py-3 bg-black/30 backdrop-blur-md rounded-full border border-white/20">
          {carImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`relative w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                activeSlide === index 
                  ? 'bg-orange-500 w-4 sm:w-8' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
            >
              {activeSlide === index && (
                <div className="absolute inset-0 bg-orange-400 rounded-full animate-ping opacity-75" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Responsive */}
      <button 
  onClick={() => setActiveSlide((prev) => (prev - 1 + carImages.length) % carImages.length)}
  aria-label="Previous slide"
  className="absolute left-2 sm:left-4 lg:left-8 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all duration-300 group"
>
  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
</button>

<button 
  onClick={() => setActiveSlide((prev) => (prev + 1) % carImages.length)}
  aria-label="Next slide"
  className="absolute right-2 sm:right-4 lg:right-8 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 active:scale-95 transition-all duration-300 group"
>
  <svg className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white group-hover:text-orange-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
</button>

      {/* Floating Elements - Responsive */}
      <div className="hidden sm:block absolute top-1/4 left-2 lg:left-10 w-0.5 h-16 lg:w-1 lg:h-32 bg-gradient-to-b from-orange-500/50 to-transparent animate-pulse" />
      <div className="hidden sm:block absolute bottom-1/4 right-4 lg:right-16 w-8 h-0.5 lg:w-16 lg:h-1 bg-gradient-to-r from-orange-500/50 to-transparent animate-pulse" />
      
      {/* Premium scroll indicator - Responsive */}
      <div className="hidden sm:block absolute bottom-4 right-4 sm:right-8 z-20">
        <div className="flex flex-col items-center gap-1 sm:gap-2 text-white/60">
          <span className="text-xs font-medium tracking-wider rotate-90 origin-center">SCROLL</span>
          <div className="w-px h-4 sm:h-8 bg-gradient-to-b from-white/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;