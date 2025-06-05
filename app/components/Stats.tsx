import { useState, useEffect } from "react";
import { Clock, MapPin, Award, Users } from "lucide-react";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);

  const statsData = [
    { 
      icon: Clock, 
      value: 50, 
      suffix: "+", 
      label: "Années d'expérience",
      gradient: "from-orange-500 to-amber-600"
    },
    { 
      icon: MapPin, 
      value: 6, 
      suffix: "", 
      label: "Annexes",
      gradient: "from-amber-500 to-yellow-600"
    },
    { 
      icon: Award, 
      value: 95, 
      suffix: "%", 
      label: "Taux de réussite",
      gradient: "from-yellow-500 to-orange-600"
    },
    { 
      icon: Users, 
      value: 10000, 
      suffix: "+", 
      label: "Élèves formés",
      gradient: "from-orange-600 to-red-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate numbers
          statsData.forEach((stat, index) => {
            let current = 0;
            const increment = stat.value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.value) {
                current = stat.value;
                clearInterval(timer);
              }
              setAnimatedStats(prev => {
                const newStats = [...prev];
                newStats[index] = Math.floor(current);
                return newStats;
              });
            }, 30);
          });
        }
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById('stats-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="stats-section"
      className="relative py-20 bg-black/80 backdrop-blur-md rounded-3xl p-8 h-full border border-orange-500/20 overflow-hidden" 
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-10 -left-10 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse"></div>
        <div className="absolute bottom-10 -right-10 w-80 h-80 bg-amber-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-60 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-5 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `radial-gradient(circle, rgba(251, 146, 60, 0.15) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            NOS <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">CHIFFRES</span> CLÉS
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Des résultats qui témoignent de notre excellence et de votre confiance
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <div 
              key={index}
              className={`group relative transform transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient Border */}
              <div className={`relative bg-gradient-to-br ${stat.gradient} p-1 rounded-3xl transform transition-all duration-500 hover:scale-105 hover:rotate-1`}>
                <div className="bg-black/80 backdrop-blur-md rounded-3xl p-8 h-full border border-orange-500/20 text-center">
                  
                  {/* Icon */}
                  <div className="flex justify-center mb-6">
                    <div className={`relative p-4 bg-gradient-to-br ${stat.gradient} rounded-2xl`}>
                      <stat.icon className="w-8 h-8 text-white" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-20 rounded-2xl blur-md`}></div>
                    </div>
                  </div>

                  {/* Animated Number */}
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white block">
                      {stat.value >= 1000 
                        ? `${Math.floor(animatedStats[index] / 1000)}k` 
                        : animatedStats[index]
                      }
                      <span className="text-orange-400">{stat.suffix}</span>
                    </span>
                  </div>

                  {/* Label */}
                  <p className="text-gray-300 font-medium text-lg leading-relaxed">
                    {stat.label}
                  </p>

                  {/* Hover Effect Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-300`}></div>
                  
                  {/* Pulse Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 rounded-3xl animate-ping group-hover:opacity-5`}></div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${stat.gradient} rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300`}></div>
              <div className={`absolute -bottom-2 -left-2 w-4 h-4 bg-gradient-to-br ${stat.gradient} rounded-full opacity-40 group-hover:scale-125 transition-transform duration-300`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-md rounded-full px-8 py-4 border border-orange-500/30">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
            <span className="text-white font-medium">Une expertise reconnue depuis 1974</span>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;