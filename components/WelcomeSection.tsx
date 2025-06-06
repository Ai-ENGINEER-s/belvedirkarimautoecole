'use client';

import React, { useState, useEffect } from 'react';
import { ChevronRight, Star, Award, Car, GraduationCap, MapPin, Users, Clock, Shield } from 'lucide-react';

const WelcomeSection = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    typeFormation: ''
  });
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleInputChange = (e:any) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFormSubmit = (e:any) => {
    e.preventDefault();
    alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
  };

  const features = [
    {
      icon: GraduationCap,
      title: "FORMATION COMPLÈTE",
      description: "Formation théorique et pratique avec des moniteurs expérimentés",
      stats: "50 ans d'expérience",
      gradient: "from-orange-500 to-amber-600"
    },
    {
      icon: Car,
      title: "VÉHICULES RÉCENTS",
      description: "Flotte de véhicules modernes et bien entretenus pour votre apprentissage",
      stats: "100% véhicules récents",
      gradient: "from-amber-500 to-yellow-600"
    },
    {
      icon: Award,
      title: "TAUX DE RÉUSSITE ÉLEVÉ",
      description: "95% de réussite grâce à notre méthode pédagogique éprouvée",
      stats: "95% de réussite",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  const stats = [
    { icon: Users, value: "10,000+", label: "Élèves formés" },
    { icon: MapPin, value: "6", label: "Centres" },
    { icon: Clock, value: "50", label: "Ans d'expérience" },
    { icon: Shield, value: "95%", label: "Taux de réussite" }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(251, 146, 60, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20 max-w-7xl">
        {/* Hero Section */}
        <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-black/50 backdrop-blur-md rounded-full px-6 py-2 mb-6 border border-orange-500/30">
              <Star className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-white">Depuis 50 ans à votre service</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              BIENVENUE À L'
              <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                AUTO ÉCOLE
              </span>
              <br />
              <span className="bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent">
                KIRAM
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              L'excellence en formation de conduite à Casablanca. Une expertise reconnue, 
              des méthodes modernes et un accompagnement personnalisé pour votre réussite.
            </p>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-black/60 backdrop-blur-md rounded-2xl p-6 border border-orange-500/20 text-center transform transition-all duration-700 hover:scale-105 hover:bg-black/80 hover:border-orange-500/40 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <stat.icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
              <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Content Section */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-orange-500/20">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-2 h-8 bg-gradient-to-b from-orange-400 to-amber-400 rounded-full"></div>
                Notre Excellence
              </h2>
              
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="text-lg">
                  Depuis 50 ans, l'Auto École Belvédère Kiram forme avec succès les futurs conducteurs à Casablanca. 
                  Notre expertise et notre engagement nous permettent de vous offrir une formation complète et personnalisée.
                </p>
                
                <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-2xl p-6 border border-orange-500/30">
                  <p>
                    Avec nos <strong className="text-white">6 annexes stratégiquement situées</strong> (4 à Belvédère et 2 au 2 Mars), 
                    nous sommes toujours proches de vous. Notre équipe de moniteurs professionnels, parlant arabe et français, 
                    s'adapte à vos besoins pour vous garantir une formation de qualité.
                  </p>
                </div>
                
                <p>
                  Nous proposons des formations présentielles et à distance pour s'adapter à votre emploi du temps. 
                  <strong className="text-orange-400"> Rejoignez les milliers de candidats qui nous ont fait confiance !</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Form Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gradient-to-br from-black/80 to-gray-900/80 backdrop-blur-md rounded-3xl p-8 border border-orange-500/30 shadow-2xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">DEMANDE D'INFORMATION</h3>
                <p className="text-gray-300">Recevez votre devis personnalisé</p>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <div className="group">
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-300 mb-2">Nom complet</label>
                    <input 
                      id="nom" 
                      type="text" 
                      placeholder="Votre nom complet" 
                      name="nom"
                      value={formData.nom}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                      id="email" 
                      type="email" 
                      placeholder="votre@email.com" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="telephone" className="block text-sm font-medium text-gray-300 mb-2">Téléphone</label>
                    <input 
                      id="telephone" 
                      type="tel" 
                      placeholder="+212 6XX XXX XXX" 
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="typeFormation" className="block text-sm font-medium text-gray-300 mb-2">Type de formation</label>
                    <select 
                      id="typeFormation" 
                      name="typeFormation"
                      value={formData.typeFormation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-black/50 border border-orange-500/30 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    >
                      <option value="" className="bg-black text-white">-- Choisissez une formation --</option>
                      <option value="B" className="bg-black text-white">Permis B (Voiture)</option>
                      <option value="A" className="bg-black text-white">Permis A (Moto)</option>
                      <option value="C" className="bg-black text-white">Permis C (Camion)</option>
                    </select>
                  </div>
                </div>

                <button 
                  type="button"
                  onClick={handleFormSubmit}
                  className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 group"
                >
                  ENVOYER MA DEMANDE
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une approche moderne et personnalisée pour votre formation
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`group relative bg-gradient-to-br ${feature.gradient} p-1 rounded-3xl transform transition-all duration-500 hover:scale-105 ${activeFeature === index ? 'scale-105' : ''}`}
              >
                <div className="bg-black/80 backdrop-blur-md rounded-3xl p-8 h-full border border-orange-500/20">
                  <div className="flex items-center justify-between mb-6">
                    <feature.icon className="w-12 h-12 text-white" />
                    <span className="text-sm font-medium text-white bg-orange-500/20 px-3 py-1 rounded-full border border-orange-500/30">
                      {feature.stats}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;