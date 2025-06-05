// import React, { useState, useEffect } from 'react';
// import { Phone, Mail, MapPin, Facebook, Instagram, Clock, Award, Car, Users, Zap, ChevronRight, ExternalLink } from 'lucide-react';

// const Footer = () => {
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePos({ x: e.clientX, y: e.clientY });
//     };
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     const footerElement = document.getElementById('footer');
//     if (footerElement) observer.observe(footerElement);

//     window.addEventListener('mousemove', handleMouseMove);
    
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//       if (footerElement) observer.unobserve(footerElement);
//     };
//   }, []);

//   const formations = [
//     { name: 'Permis B', icon: Car, popular: true },
//     { name: 'Permis A', icon: Users, popular: false },
//     { name: 'Permis C', icon: Award, popular: false },
//     { name: 'Recyclage', icon: Zap, popular: false }
//   ];

//   const annexes = [
//     { name: 'Belvédère', count: '4 annexes', status: 'premium' },
//     { name: '2 Mars', count: '2 annexes', status: 'standard' },
//     { name: 'Horaires d\'ouverture', count: 'Lun-Sam 8h-18h', status: 'info' },
//     { name: 'Plan d\'accès', count: 'GPS disponible', status: 'info' }
//   ];

//   const contactInfo = [
//     { icon: Phone, label: '+212 522 123 456', type: 'phone', gradient: 'from-green-500 to-emerald-500' },
//     { icon: Mail, label: 'contact@autoecolekiram.ma', type: 'email', gradient: 'from-blue-500 to-cyan-500' },
//     { icon: MapPin, label: 'Casablanca, Maroc', type: 'location', gradient: 'from-red-500 to-pink-500' },
//     { icon: Clock, label: 'Lun-Sam: 8h-18h', type: 'hours', gradient: 'from-purple-500 to-indigo-500' }
//   ];

//   return (
//     <footer id="footer" className="relative overflow-hidden">
//       {/* Animated Background Gradient - Ultra Responsive */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div 
//           className="absolute w-32 h-32 sm:w-48 sm:h-48 lg:w-72 lg:h-72 xl:w-96 xl:h-96 rounded-full opacity-3 sm:opacity-5 lg:opacity-8 blur-2xl sm:blur-3xl animate-pulse"
//           style={{
//             background: 'radial-gradient(circle, #f97316, #ea580c, #dc2626)',
//             left: mousePos.x - (window.innerWidth < 640 ? 64 : window.innerWidth < 1024 ? 96 : window.innerWidth < 1280 ? 144 : 192),
//             top: mousePos.y - (window.innerWidth < 640 ? 64 : window.innerWidth < 1024 ? 96 : window.innerWidth < 1280 ? 144 : 192),
//             transition: 'all 0.3s ease-out'
//           }}
//         />
//         <div 
//           className="absolute w-24 h-24 sm:w-36 sm:h-36 lg:w-52 lg:h-52 xl:w-72 xl:h-72 rounded-full opacity-2 sm:opacity-4 lg:opacity-6 blur-2xl animate-pulse"
//           style={{
//             background: 'radial-gradient(circle, #3b82f6, #1d4ed8, #1e40af)',
//             right: mousePos.x / 4,
//             bottom: mousePos.y / 6,
//             transition: 'all 0.4s ease-out',
//             animationDelay: '1s'
//           }}
//         />
//       </div>

//       {/* Main Footer Content */}
//       <div className="relative">
//         {/* Glassmorphism Background */}
//         <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 backdrop-blur-2xl" />
//         <div className="absolute inset-0 bg-gradient-to-r from-orange-600/10 via-transparent to-red-600/10" />
        
//         <div className="relative">
//           {/* Top Section with Brand */}
//           <div className="border-b border-white/10">
//             <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
                
//                 {/* Ultra Premium Brand Section */}
//                 <div className={`text-center lg:text-left transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                   <div className="group flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 lg:space-x-6 mb-4 sm:mb-6 lg:mb-8">
//                     <div className="relative">
//                       <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
//                         <div className="w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 xl:w-14 xl:h-14 bg-white rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-inner">
//                           <Zap className="w-4 h-4 sm:w-6 sm:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8 text-orange-500 group-hover:text-red-500 transition-colors" />
//                         </div>
//                       </div>
//                       <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl lg:rounded-3xl blur opacity-40 group-hover:opacity-70 transition-opacity" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent group-hover:from-orange-300 group-hover:via-red-300 group-hover:to-orange-300 transition-all duration-500">
//                         AUTO ÉCOLE KIRAM
//                       </h2>
//                       <p className="text-xs sm:text-sm lg:text-base font-semibold text-gray-400 group-hover:text-orange-400 transition-colors">
//                         Excellence • Innovation • Prestige
//                       </p>
//                     </div>
//                   </div>
                  
//                   <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-lg mx-auto lg:mx-0">
//                     <span className="font-bold text-orange-400">50 ans d'expérience</span> dans la formation à la conduite. 
//                     Votre réussite est notre priorité absolue.
//                   </p>
                  
//                   {/* Premium Social Links */}
//                   <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 lg:gap-6">
//                     <a href="#" className="group relative">
//                       <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity" />
//                       <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
//                         <Facebook size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" />
//                       </div>
//                     </a>
//                     <a href="#" className="group relative">
//                       <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity" />
//                       <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-pink-400 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:rotate-12">
//                         <Instagram size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" />
//                       </div>
//                     </a>
//                     <a href="#" className="group relative">
//                       <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity" />
//                       <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center hover:from-orange-400 hover:to-red-400 transition-all duration-300 hover:scale-110 hover:rotate-12">
//                         <ExternalLink size={20} className="sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white group-hover:scale-110 transition-transform" />
//                       </div>
//                     </a>
//                   </div>
//                 </div>

//                 {/* Premium Stats Section */}
//                 <div className={`grid grid-cols-2 gap-4 sm:gap-6 lg:gap-8 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                   {[
//                     { number: '50+', label: 'Années d\'expérience', gradient: 'from-orange-500 to-red-500' },
//                     { number: '15K+', label: 'Élèves formés', gradient: 'from-blue-500 to-cyan-500' },
//                     { number: '6', label: 'Annexes premium', gradient: 'from-green-500 to-emerald-500' },
//                     { number: '95%', label: 'Taux de réussite', gradient: 'from-purple-500 to-pink-500' }
//                   ].map((stat, index) => (
//                     <div key={index} className="group relative">
//                       <div className={`absolute -inset-0.5 bg-gradient-to-r ${stat.gradient} rounded-lg sm:rounded-xl lg:rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity`} />
//                       <div className="relative bg-white/5 backdrop-blur-xl rounded-lg sm:rounded-xl lg:rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10 group-hover:border-white/20 transition-all duration-300 hover:scale-105">
//                         <div className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 sm:mb-2`}>
//                           {stat.number}
//                         </div>
//                         <div className="text-xs sm:text-sm lg:text-base text-gray-400 font-medium group-hover:text-gray-300 transition-colors">
//                           {stat.label}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Footer Links */}
//           <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-8 sm:py-12 lg:py-16">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16">
              
//               {/* Formations Section */}
//               <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3">
//                   <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-orange-500 to-red-500 rounded-full" />
//                   NOS FORMATIONS
//                 </h3>
//                 <div className="space-y-2 sm:space-y-3 lg:space-y-4">
//                   {formations.map((formation, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
//                     >
//                       <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform ${formation.popular ? 'shadow-lg shadow-orange-500/30' : ''}`}>
//                         <formation.icon size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
//                       </div>
//                       <div className="flex-1">
//                         <div className="text-sm sm:text-base lg:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors flex items-center gap-2">
//                           {formation.name}
//                           {formation.popular && (
//                             <span className="px-2 py-0.5 text-xs bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-full font-bold">
//                               POPULAIRE
//                             </span>
//                           )}
//                         </div>
//                       </div>
//                       <ChevronRight size={16} className="sm:w-5 sm:h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Annexes Section */}
//               <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3">
//                   <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full" />
//                   NOS ANNEXES
//                 </h3>
//                 <div className="space-y-2 sm:space-y-3 lg:space-y-4">
//                   {annexes.map((annexe, index) => (
//                     <a
//                       key={index}
//                       href="#"
//                       className="group flex items-center justify-between p-3 sm:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
//                     >
//                       <div>
//                         <div className="text-sm sm:text-base lg:text-lg font-semibold text-white group-hover:text-blue-300 transition-colors">
//                           {annexe.name}
//                         </div>
//                         <div className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
//                           {annexe.count}
//                         </div>
//                       </div>
//                       <div className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
//                         annexe.status === 'premium' ? 'bg-orange-500' : 
//                         annexe.status === 'standard' ? 'bg-blue-500' : 'bg-gray-500'
//                       } animate-pulse`} />
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Contact Section */}
//               <div className={`transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//                 <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 flex items-center gap-2 sm:gap-3">
//                   <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-green-500 to-emerald-500 rounded-full" />
//                   CONTACT
//                 </h3>
//                 <div className="space-y-2 sm:space-y-3 lg:space-y-4">
//                   {contactInfo.map((contact, index) => (
//                     <a
//                       key={index}
//                       href={contact.type === 'phone' ? `tel:${contact.label}` : 
//                             contact.type === 'email' ? `mailto:${contact.label}` : '#'}
//                       className="group flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg sm:rounded-xl lg:rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 hover:scale-105"
//                     >
//                       <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-lg sm:rounded-xl bg-gradient-to-r ${contact.gradient} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
//                         <contact.icon size={16} className="sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="text-sm sm:text-base lg:text-lg font-semibold text-white group-hover:text-orange-300 transition-colors truncate">
//                           {contact.label}
//                         </div>
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Bottom Copyright */}
//           <div className="border-t border-white/10">
//             <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6 sm:py-8">
//               <div className={`text-center transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
//                 <p className="text-sm sm:text-base text-gray-400 hover:text-gray-300 transition-colors">
//                   © 2025 <span className="font-semibold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Auto École Belvédère Kiram</span>. 
//                   Tous droits réservés. | Conçu avec ❤️ pour l'excellence
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

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