import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState("TOUS");

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20" id="services">
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
                src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
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
                src="https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
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
                src="https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
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

          {/* RECYCLAGE Card */}
          <div className="group bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 border border-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Formation recyclage conduite"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">RECYCLAGE</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                RECYCLAGE
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Remise à niveau et perfectionnement de conduite
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-2xl p-4 rounded-xl text-center">
                1200 DH
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Évaluation initiale
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  10h de conduite
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Perfectionnement
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Conseils personnalisés
                </li>
              </ul>
            </div>
          </div>

          {/* PERMIS B BOITE AUTO Card */}
          <div className="group bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 border border-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Voiture automatique pour permis B"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">BOÎTE AUTO</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                PERMIS B BOÎTE AUTO
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Formation spécialisée pour véhicules à transmission automatique
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-2xl p-4 rounded-xl text-center">
                2600 DH
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  25h de cours théoriques
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  18h de conduite minimum
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Véhicule automatique
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Formation adaptée
                </li>
              </ul>
            </div>
          </div>

          {/* CONDUITE ACCOMPAGNEE Card */}
          <div className="group bg-black/60 backdrop-blur-md rounded-3xl p-8 border border-orange-500/20 hover:border-orange-500/40 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
            <div className="relative mb-6 overflow-hidden rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 p-6 border border-orange-500/20">
              <img 
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                alt="Conduite accompagnée jeune conducteur"
                className="w-full h-40 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white font-bold text-lg">ACCOMPAGNÉE</div>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-amber-400 group-hover:bg-clip-text transition-all duration-300">
                CONDUITE ACCOMPAGNÉE
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Formation précoce avec accompagnateur familial
              </p>
              
              <div className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold text-2xl p-4 rounded-xl text-center">
                2400 DH
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Formation théorique
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  20h de conduite
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Suivi accompagnateur
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  Dès 16 ans
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-3xl p-8 border border-orange-500/20">
            <h3 className="text-3xl font-bold text-white mb-4">
              Prêt à commencer votre formation ?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour plus d'informations sur nos formations et pour réserver votre créneau
            </p>
            <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold py-3 px-8 rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105">
              Nous Contacter
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;