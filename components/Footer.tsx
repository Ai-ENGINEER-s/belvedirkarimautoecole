"use client";
// This file is a React component for the footer of a website.

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Award, Car, Users, Zap, ChevronRight, ExternalLink, ArrowUp } from 'lucide-react';

const Footer = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e:any) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const formations = [
    { name: 'Permis B', href: '/formations/permis-b' },
    { name: 'Permis A', href: '/formations/permis-a' },
    { name: 'Permis C', href: '/formations/permis-c' },
    { name: 'Recyclage', href: '/formations/recyclage' }
  ];

  const annexes = [
    { name: 'Belvédère', detail: '4 annexes', href: '/annexes/belvedere' },
    { name: '2 Mars', detail: '2 annexes', href: '/annexes/2mars' },
    { name: 'Horaires d\'ouverture', detail: 'Lun-Sam 8h-18h', href: '/horaires' },
    { name: 'Plan d\'accès', detail: 'GPS disponible', href: '/acces' }
  ];

  return (
    <>
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-4 z-50 group transition-all duration-500 ${
          showScrollTop ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0 pointer-events-none'
        } sm:bottom-6 sm:right-6`}
        aria-label="Retour en haut"
      >
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-70 group-hover:opacity-100 transition-opacity sm:rounded-2xl" />
        <div className="relative w-10 h-10 bg-gradient-to-r from-orange-600 to-red-600 rounded-xl flex items-center justify-center hover:from-orange-500 hover:to-red-500 transition-all duration-300 hover:scale-110 shadow-2xl sm:w-12 sm:h-12 sm:rounded-2xl lg:w-14 lg:h-14">
          <ArrowUp size={16} className="text-white group-hover:scale-110 transition-transform sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
        </div>
      </button>

      <footer className="relative overflow-hidden">
        {/* Subtle Background Effects - Hidden on small screens for performance */}
        <div className="absolute inset-0 pointer-events-none hidden sm:block">
          <div 
            className="absolute w-48 h-48 rounded-full opacity-3 blur-3xl animate-pulse sm:w-72 sm:h-72 sm:opacity-5 lg:w-96 lg:h-96"
            style={{
              background: 'radial-gradient(circle, #f97316, #ea580c)',
              left: mousePos.x - 96,
              top: mousePos.y - 96,
              transition: 'all 0.3s ease-out'
            }}
          />
        </div>

        {/* Main Footer Background */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-gray-800" />
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/20 via-transparent to-red-900/20" />
          
          <div className="relative">
            {/* Footer Content */}
            <div className="max-w-7xl mx-auto px-4 pt-12 pb-6 sm:px-6 sm:pt-16 sm:pb-8 lg:px-8 lg:pt-20 lg:pb-12">
              
              {/* Top Section - Brand */}
              <div className="text-center mb-10 pb-6 border-b border-white/10 sm:mb-12 sm:pb-8 lg:mb-16 lg:pb-12">
                <div className="group inline-flex flex-col items-center space-y-3 mb-4 sm:flex-row sm:space-y-0 sm:space-x-4 sm:mb-6 lg:space-x-6 lg:mb-8">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl flex items-center justify-center shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110 sm:w-16 sm:h-16 sm:rounded-2xl lg:w-20 lg:h-20 lg:rounded-3xl">
                      <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center shadow-inner sm:w-9 sm:h-9 sm:rounded-xl lg:w-11 lg:h-11 lg:rounded-2xl">
                        <Zap className="w-4 h-4 text-orange-500 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-40 group-hover:opacity-70 transition-opacity sm:-inset-2 sm:rounded-2xl lg:rounded-3xl" />
                  </div>
                  <div className="text-center sm:text-left">
                    <h2 className="text-xl font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent sm:text-2xl lg:text-3xl xl:text-4xl">
                      AUTO ÉCOLE KIRAM
                    </h2>
                    <p className="text-xs text-orange-400 font-semibold sm:text-sm lg:text-base">
                      Excellence • Innovation • Prestige
                    </p>
                  </div>
                </div>
                
                <p className="text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed sm:text-base lg:text-lg lg:max-w-3xl">
                  <span className="font-bold text-orange-400">50 ans d'expérience</span> dans la formation à la conduite. 
                  Votre réussite est notre priorité.
                </p>
              </div>

              {/* Footer Links Grid */}
              <div className="grid grid-cols-1 gap-8 mb-10 sm:grid-cols-2 sm:gap-10 sm:mb-12 lg:grid-cols-4 lg:gap-12 lg:mb-16">
                
                {/* Company Info */}
                <div className="sm:col-span-2 lg:col-span-1">
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 sm:text-lg sm:mb-5 lg:text-xl lg:mb-6">
                    <div className="w-1 h-4 bg-gradient-to-b from-orange-500 to-red-500 rounded-full sm:h-5 lg:h-6" />
                    À PROPOS
                  </h3>
                  <div className="space-y-3 text-gray-300 sm:space-y-4">
                    <p className="text-sm leading-relaxed sm:text-base">
                      Leader dans la formation à la conduite depuis 1974, nous formons les conducteurs de demain avec passion et professionnalisme.
                    </p>
                    <div className="flex gap-3 sm:gap-4">
                      <Link href="#facebook" className="group w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 sm:w-10 sm:h-10 sm:rounded-xl">
                        <Facebook size={14} className="text-white group-hover:scale-110 transition-transform sm:w-4 sm:h-4" />
                      </Link>
                      <Link href="#instagram" className="group w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center hover:from-pink-400 hover:to-purple-500 transition-all duration-300 hover:scale-110 sm:w-10 sm:h-10 sm:rounded-xl">
                        <Instagram size={14} className="text-white group-hover:scale-110 transition-transform sm:w-4 sm:h-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Formations */}
                <div>
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 sm:text-lg sm:mb-5 lg:text-xl lg:mb-6">
                    <div className="w-1 h-4 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full sm:h-5 lg:h-6" />
                    NOS FORMATIONS
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {formations.map((formation, index) => (
                      <li key={index}>
                        <Link
                          href={formation.href}
                          className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base"
                        >
                          <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform sm:w-3.5 sm:h-3.5" />
                          {formation.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Annexes */}
                <div>
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 sm:text-lg sm:mb-5 lg:text-xl lg:mb-6">
                    <div className="w-1 h-4 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full sm:h-5 lg:h-6" />
                    NOS ANNEXES
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {annexes.map((annexe, index) => (
                      <li key={index}>
                        <Link
                          href={annexe.href}
                          className="group block text-gray-300 hover:text-green-400 transition-colors text-sm sm:text-base"
                        >
                          <div className="flex items-center gap-2 mb-0.5 sm:mb-1">
                            <ChevronRight size={12} className="group-hover:translate-x-1 transition-transform sm:w-3.5 sm:h-3.5" />
                            {annexe.name}
                          </div>
                          <div className="text-xs text-gray-500 ml-4 sm:ml-5">
                            {annexe.detail}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2 sm:text-lg sm:mb-5 lg:text-xl lg:mb-6">
                    <div className="w-1 h-4 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full sm:h-5 lg:h-6" />
                    CONTACT
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    <Link
                      href="tel:+212522123456"
                      className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm sm:text-base sm:gap-3"
                    >
                      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform sm:w-8 sm:h-8 sm:rounded-lg">
                        <Phone size={12} className="text-white sm:w-3.5 sm:h-3.5" />
                      </div>
                      +212 522 123 456
                    </Link>
                    
                    <Link
                      href="mailto:contact@autoecolekiram.ma"
                      className="group flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors text-sm break-all sm:text-base sm:gap-3 sm:break-normal"
                    >
                      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform sm:w-8 sm:h-8 sm:rounded-lg">
                        <Mail size={12} className="text-white sm:w-3.5 sm:h-3.5" />
                      </div>
                      <span className="sm:hidden">contact@...kiram.ma</span>
                      <span className="hidden sm:inline">contact@autoecolekiram.ma</span>
                    </Link>
                    
                    <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base sm:gap-3">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center sm:w-8 sm:h-8 sm:rounded-lg">
                        <MapPin size={12} className="text-white sm:w-3.5 sm:h-3.5" />
                      </div>
                      Casablanca, Maroc
                    </div>
                    
                    <div className="flex items-center gap-2 text-gray-300 text-sm sm:text-base sm:gap-3">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center sm:w-8 sm:h-8 sm:rounded-lg">
                        <Clock size={12} className="text-white sm:w-3.5 sm:h-3.5" />
                      </div>
                      Lun-Sam: 8h-18h
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-white/10 pt-6 sm:pt-8 lg:pt-12">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-4 lg:gap-6">
                  <p className="text-xs text-gray-400 text-center sm:text-sm sm:text-left">
                    © 2025 <span className="font-semibold text-orange-400">Auto École Belvédère Kiram</span>. 
                    Tous droits réservés.
                  </p>
                  <div className="flex items-center gap-4 text-xs text-gray-400 sm:gap-6 sm:text-sm">
                    <Link href="/mentions-legales" className="hover:text-orange-400 transition-colors">
                      Mentions légales
                    </Link>
                    <Link href="/cgu" className="hover:text-orange-400 transition-colors">
                      CGU
                    </Link>
                    <Link href="/confidentialite" className="hover:text-orange-400 transition-colors">
                      Confidentialité
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;