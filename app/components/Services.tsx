import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("TOUS");

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20" id="formations">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -left-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-20 -right-4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(251, 146, 60, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            NOS <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">FORMATIONS</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Découvrez nos formations adaptées à vos besoins avec un accompagnement personnalisé
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["TOUS", "PERMIS B", "PERMIS A", "PERMIS C", "RECYCLAGE"].map((tab) => (
            <button
              key={tab}
              className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeTab === tab 
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/25' 
                  : 'bg-black/50 text-gray-300 border border-orange-500/30 hover:bg-orange-500/10 hover:text-white'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* PERMIS B Card */}
          <div className="group bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 border border-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=250&fit=crop&crop=center" 
                alt="Voiture moderne pour permis B"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">PERMIS B</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                PERMIS B CLASSIQUE
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Formation complète pour permis voiture avec cours théoriques et pratiques
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-2xl p-4 rounded-xl text-center">
                2800 DH
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  30h de cours théoriques
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  20h de conduite minimum
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Support de cours inclus
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Suivi personnalisé
                </li>
              </ul>
            </div>
          </div>

          {/* PERMIS A Card */}
          <div className="group bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 border border-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=250&fit=crop&crop=center" 
                alt="Moto sportive pour permis A"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">PERMIS A</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                PERMIS A (MOTO)
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Formation complète pour permis moto avec cours théoriques et pratiques
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-2xl p-4 rounded-xl text-center">
                3200 DH
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  25h de cours théoriques
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  15h de conduite minimum
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Équipement fourni
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Plateau + circulation
                </li>
              </ul>
            </div>
          </div>

          {/* PERMIS C Card */}
          <div className="group bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 border border-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1601584115197-04eab282c7a2?w=400&h=250&fit=crop&crop=center" 
                alt="Camion poids lourd pour permis C"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">PERMIS C</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                PERMIS C (POIDS LOURD)
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Formation professionnelle pour permis poids lourd
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-2xl p-4 rounded-xl text-center">
                4500 DH
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  40h de cours théoriques
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  25h de conduite minimum
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Formation professionnelle
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Véhicules adaptés
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;