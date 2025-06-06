"use client";

import React, { useState, useEffect } from "react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "J'ai obtenu mon permis du premier coup grâce à cette auto-école ! Les moniteurs sont patients et pédagogues. La formation théorique en ligne est très pratique.",
    author: "SARAH MARTIN",
    role: "Étudiante - Permis B",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Excellente auto-école ! L'apprentissage de la conduite s'est fait dans de très bonnes conditions. Les créneaux sont flexibles et les moniteurs très professionnels.",
    author: "AHMED BENALI",
    role: "Commercial - Permis B",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Formation complète et de qualité. Le suivi personnalisé m'a permis de progresser rapidement. Je recommande vivement cette auto-école à tous !",
    author: "ELENA RODRIGUEZ",
    role: "Infirmière - Permis B",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Auto-école au top ! Moniteurs compétents, véhicules récents et ambiance détendue. J'ai passé mon permis en toute confiance grâce à eux.",
    author: "KARIM ALAOUI",
    role: "Ingénieur - Permis B",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    quote: "Très satisfaite de ma formation ! Équipe pédagogique à l'écoute, cours théoriques clairs et pratique de conduite progressive. Permis obtenu rapidement !",
    author: "FATIMA ZAHRA",
    role: "Comptable - Permis B",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
  }
];

const PremiumTestimonials: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(2);
  const [imageErrors, setImageErrors] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleImageError = (index: number): void => {
    if (!imageErrors.includes(index)) {
      setImageErrors((prev) => [...prev, index]);
    }
  };

  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="relative py-16 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-orange-50 to-blue-50 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 text-sm font-medium text-orange-600 bg-orange-50 rounded-full border border-orange-200">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Permis Garantis
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              CE QUE DISENT
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
              NOS CANDIDATS
            </span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Découvrez les témoignages authentiques de nos candidats qui ont obtenu leur permis de conduire
          </p>
        </div>

        {/* Main testimonial card */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="relative">
            <div className="bg-white/60 backdrop-blur-xl rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/60 relative overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/40 to-transparent pointer-events-none"></div>
              
              {/* Quote icon */}
              <div className="absolute top-8 left-8 w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM10 17l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>

              <div className="relative z-10 text-center pt-8">
                <blockquote className="text-xl sm:text-2xl lg:text-3xl font-medium text-gray-800 mb-12 leading-relaxed italic">
                  "{currentTestimonial.quote}"
                </blockquote>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-orange-100 ring-offset-4 shadow-xl">
                      {imageErrors.includes(activeTestimonial) ? (
                        <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg">
                          {getInitials(currentTestimonial.author)}
                        </div>
                      ) : (
                        <img
                          src={currentTestimonial.avatar}
                          alt={`Photo de ${currentTestimonial.author}`}
                          onError={() => handleImageError(activeTestimonial)}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center shadow-lg">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Author info */}
                  <div className="text-center sm:text-left">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {currentTestimonial.author}
                    </h3>
                    <p className="text-orange-600 font-medium mb-3">{currentTestimonial.role}</p>
                    <div className="flex justify-center sm:justify-start gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-5 h-5 text-yellow-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center items-center">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 shadow-xl border border-white/60">
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`relative flex-shrink-0 transform transition-all duration-500 group focus:outline-none ${
                    activeTestimonial === index
                      ? "scale-110"
                      : "hover:scale-105 opacity-70 hover:opacity-100"
                  }`}
                >
                  <div
                    className={`overflow-hidden rounded-xl transition-all duration-500 ${
                      activeTestimonial === index
                        ? "w-16 h-16 ring-3 ring-orange-400 ring-offset-2 shadow-lg"
                        : "w-12 h-12 ring-2 ring-gray-200 ring-offset-1 shadow-md"
                    }`}
                  >
                    {imageErrors.includes(index) ? (
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-500 flex items-center justify-center text-white font-bold text-xs">
                        {getInitials(testimonial.author)}
                      </div>
                    ) : (
                      <img
                        src={testimonial.avatar}
                        alt={`Photo de ${testimonial.author}`}
                        onError={() => handleImageError(index)}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  
                  {activeTestimonial === index && (
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <div className="w-2 h-2 bg-orange-300 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-orange-200 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="flex justify-center mt-6">
          <div className="w-32 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-orange-400 to-orange-500 rounded-full transition-all duration-500"
              style={{width: `${((activeTestimonial + 1) / testimonials.length) * 100}%`}}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumTestimonials;