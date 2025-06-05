import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Facebook, Instagram, Menu, X, Clock, ChevronDown, Zap } from 'lucide-react';

// Types TypeScript
interface MousePosition {
  x: number;
  y: number;
}

interface NavItem {
  id: string;
  label: string;
  href: string;
}

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [activeNav, setActiveNav] = useState<string>('accueil');
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = (): void => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e: MouseEvent): void => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const toggleMenu = (): void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (itemId: string): void => {
    setActiveNav(itemId);
    setIsMenuOpen(false);
  };

  const navItems: NavItem[] = [
    { id: 'accueil', label: 'Accueil', href: '/' },
    { id: 'formations', label: 'Formations', href: '/formations' },
    { id: 'tarifs', label: 'Tarifs', href: '/tarifs' },
    { id: 'annexes', label: 'Annexes', href: '/annexes' },
    { id: 'contact', label: 'Contact', href: '/contact' }
  ];

  return (
    <>
      {/* Animated Background Gradient - Responsive */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div 
          className="absolute w-48 h-48 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full opacity-5 sm:opacity-10 blur-2xl sm:blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, #f97316, #ea580c, #dc2626)',
            left: mousePos.x - (typeof window !== 'undefined' && window.innerWidth < 640 ? 96 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 144 : 192),
            top: mousePos.y - (typeof window !== 'undefined' && window.innerWidth < 640 ? 96 : typeof window !== 'undefined' && window.innerWidth < 1024 ? 144 : 192),
            transition: 'all 0.3s ease-out'
          }}
        />
      </div>

      <header className={`fixed w-full top-0 z-50 ${className}`}>
        {/* Glassmorphism Top Bar - Ultra Responsive */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-gray-900/85 to-black/90 backdrop-blur-xl" />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-orange-600/20" />
          
          <div className="relative text-white py-2 sm:py-3 px-2 sm:px-4">
            <div className="max-w-7xl mx-auto">
              {/* Mobile Top Bar */}
              <div className="block sm:hidden">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <Phone size={10} className="text-white" />
                    </div>
                    <span className="text-xs font-medium">+212 522 123 456</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-xs">Casablanca</span>
                  </div>
                </div>
              </div>
              
              {/* Desktop Top Bar */}
              <div className="hidden sm:flex flex-col lg:flex-row justify-between items-center space-y-2 lg:space-y-0">
                <div className="flex flex-wrap items-center gap-3 sm:gap-6 lg:gap-8">
                  <div className="group flex items-center gap-2 sm:gap-3 hover:text-orange-300 transition-all duration-300 cursor-pointer">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone size={12} className="sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">+212 522 123 456</span>
                  </div>
                  <div className="group flex items-center gap-2 sm:gap-3 hover:text-orange-300 transition-all duration-300 cursor-pointer">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail size={12} className="sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                    <span className="font-medium text-sm sm:text-base hidden md:inline">contact@autoecolekiram.ma</span>
                    <span className="font-medium text-sm sm:text-base md:hidden">Contact</span>
                  </div>
                  <div className="group flex items-center gap-2 sm:gap-3 hover:text-orange-300 transition-all duration-300">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Clock size={12} className="sm:w-3.5 sm:h-3.5 text-white" />
                    </div>
                    <span className="font-medium text-sm sm:text-base">Lun-Sam: 8h-19h</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse" />
                    <MapPin size={14} className="sm:w-4 sm:h-4" />
                    <span className="font-medium">Casablanca, Maroc</span>
                  </div>
                  <div className="flex gap-2 sm:gap-3">
                    <Link href="#" className="group w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center hover:from-blue-500 hover:to-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                      <Facebook size={12} className="sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform" />
                    </Link>
                    <Link href="#" className="group w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center hover:from-pink-400 hover:to-purple-500 transition-all duration-300 hover:scale-110 hover:rotate-12">
                      <Instagram size={12} className="sm:w-4 sm:h-4 text-white group-hover:scale-110 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation with Advanced Glassmorphism - Navigation Séparée */}
        <div className={`relative transition-all duration-500 ${isScrolled ? 'translate-y-0' : ''}`}>
          <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl border-b border-white/20" />
          <div className={`absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-orange-500/10 transition-opacity duration-500 ${isScrolled ? 'opacity-100' : 'opacity-0'}`} />
          
          <div className="relative">
            <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
              <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 xl:h-24">
                
                {/* Section 1: Logo (Début) */}
                <div className="flex-shrink-0">
                  <Link href="/" className="group flex items-center space-x-2 sm:space-x-3 lg:space-x-4 cursor-pointer">
                    <div className="relative">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 rounded-lg sm:rounded-xl lg:rounded-2xl flex items-center justify-center shadow-xl sm:shadow-2xl group-hover:shadow-orange-500/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-10 lg:h-10 bg-white rounded-md sm:rounded-lg lg:rounded-xl flex items-center justify-center shadow-inner">
                          <Zap className="w-3 h-3 sm:w-4 sm:h-4 lg:w-6 lg:h-6 text-orange-500 group-hover:text-red-500 transition-colors" />
                        </div>
                      </div>
                      <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl lg:rounded-2xl blur opacity-30 group-hover:opacity-60 transition-opacity" />
                    </div>
                    <div>
                    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:from-orange-600 group-hover:via-red-600 group-hover:to-orange-600 transition-all duration-500">
  AUTO ÉCOLE KIRAM
</h4>

                      <p className="text-xs sm:text-sm font-semibold text-gray-500 group-hover:text-orange-500 transition-colors hidden md:block">
                        Excellence • Innovation • Prestige
                      </p>
                    </div>
                  </Link>
                </div>

                {/* Section 2: Navigation Tabs (Centre) */}
                <nav className="hidden xl:flex items-center flex-1 justify-center px-8">
                  <div className="flex items-center bg-gray-50/80 backdrop-blur-xl rounded-2xl p-2 border border-white/20 shadow-xl">
                    {navItems.map((item: NavItem, index: number) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        onClick={() => handleNavClick(item.id)}
                        className={`relative px-4 py-2.5 lg:px-6 lg:py-3 rounded-xl font-semibold text-sm lg:text-base transition-all duration-300 ${
                          activeNav === item.id
                            ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transform scale-105'
                            : 'text-gray-700 hover:text-orange-600 hover:bg-white/70'
                        }`}
                      >
                        {item.label}
                        {activeNav === item.id && (
                          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl blur opacity-30 -z-10" />
                        )}
                      </Link>
                    ))}
                  </div>
                </nav>

                {/* Section 3: CTA & Mobile Menu (Fin) */}
                <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
                  {/* CTA Button - Responsive */}
                  <div className="hidden sm:block relative group">
                    <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg sm:rounded-xl lg:rounded-2xl blur opacity-70 group-hover:opacity-100 transition-opacity" />
                    <Link 
                      href="/inscription" 
                      className="relative flex items-center gap-1.5 sm:gap-2 lg:gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-3 py-2 sm:px-4 sm:py-2.5 lg:px-8 lg:py-4 rounded-lg sm:rounded-xl lg:rounded-2xl font-bold text-xs sm:text-sm lg:text-base hover:from-orange-500 hover:to-red-500 transform hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl sm:shadow-2xl"
                    >
                      <Zap size={14} className="sm:w-4 sm:h-4 lg:w-5 lg:h-5 animate-pulse" />
                      <span className="hidden sm:inline lg:hidden">INSCRIPTION</span>
                      <span className="hidden lg:inline">S'INSCRIRE</span>
                      <span className="sm:hidden">INSCRIRE</span>
                      <ChevronDown size={12} className="sm:w-3 sm:h-3 lg:w-4 lg:h-4 group-hover:rotate-180 transition-transform duration-300" />
                    </Link>
                  </div>
                  
                  {/* Futuristic Mobile Menu Button - Ultra Responsive */}
                  <button
                    onClick={toggleMenu}
                    className="xl:hidden relative group p-2 sm:p-2.5 lg:p-3 rounded-lg sm:rounded-xl lg:rounded-2xl bg-gradient-to-r from-gray-100 to-gray-200 hover:from-orange-100 hover:to-red-100 active:scale-95 transition-all duration-300 shadow-lg"
                    aria-label="Toggle menu"
                  >
                    <div className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center transition-transform duration-300 ${isMenuOpen ? 'rotate-180' : ''}`}>
                      {isMenuOpen ? <X size={20} className="sm:w-6 sm:h-6 text-gray-700" /> : <Menu size={20} className="sm:w-6 sm:h-6 text-gray-700" />}
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Premium Mobile Menu - Ultra Responsive */}
        <div className={`xl:hidden transition-all duration-500 ease-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20" />
            
            <div className="relative max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 lg:py-8">
              <nav className="flex flex-col space-y-1 sm:space-y-2">
                {navItems.map((item: NavItem, index: number) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => handleNavClick(item.id)}
                    className={`group relative flex items-center gap-3 sm:gap-4 px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                      activeNav === item.id
                        ? 'text-white bg-gradient-to-r from-orange-500 to-red-500 shadow-2xl transform scale-105'
                        : 'text-white/80 hover:text-white hover:bg-white/10 active:bg-white/20'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                      activeNav === item.id ? 'bg-white' : 'bg-orange-400 group-hover:bg-white'
                    }`} />
                    {item.label}
                    {activeNav === item.id && (
                      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl blur opacity-40 -z-10" />
                    )}
                  </Link>
                ))}
                
                {/* Mobile CTA */}
                <div className="pt-4 sm:pt-6">
                  <Link 
                    href="/inscription" 
                    className="relative group flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-orange-600 to-red-600 text-white px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg shadow-2xl hover:from-orange-500 hover:to-red-500 active:scale-95 transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="absolute -inset-0.5 sm:-inset-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl sm:rounded-2xl blur opacity-50 group-hover:opacity-100 transition-opacity" />
                    <Zap size={20} className="sm:w-6 sm:h-6 animate-pulse relative z-10" />
                    <span className="relative z-10">INSCRIPTION PREMIUM</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header - Responsive */}
      <div className="h-20 sm:h-24 lg:h-28 xl:h-32" />
    </>
  );
};

export default Header;