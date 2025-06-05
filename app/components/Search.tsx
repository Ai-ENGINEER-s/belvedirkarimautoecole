import React, { useState, useEffect, useRef } from 'react';
import { Search, MapPin, DollarSign, BookOpen, ChevronDown, Sparkles, ArrowRight } from 'lucide-react';

const PremiumSearch = () => {
  const [formData, setFormData] = useState({
    typeFormation: '',
    annexe: '',
    budget: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = () => {
    // Validation basique
    if (!formData.typeFormation || !formData.annexe || !formData.budget) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
      setIsSubmitting(false);
      // Optionnel : réinitialiser le formulaire
      // setFormData({ typeFormation: '', annexe: '', budget: '' });
    }, 2000);
  };

  const formationTypes = [
    { value: 'permis-b', label: 'Permis B', subtitle: 'Voiture', icon: '🚗' },
    { value: 'permis-a', label: 'Permis A', subtitle: 'Moto', icon: '🏍️' },
    { value: 'permis-c', label: 'Permis C', subtitle: 'Poids Lourd', icon: '🚛' }
  ];

  const annexes = [
    { value: 'belvedere-1', label: 'Belvédère', subtitle: 'Annexe 1', location: 'Centre-ville' },
    { value: 'belvedere-2', label: 'Belvédère', subtitle: 'Annexe 2', location: 'Centre-ville' },
    { value: 'belvedere-3', label: 'Belvédère', subtitle: 'Annexe 3', location: 'Centre-ville' },
    { value: 'belvedere-4', label: 'Belvédère', subtitle: 'Annexe 4', location: 'Centre-ville' },
    { value: '2mars-1', label: '2 Mars', subtitle: 'Annexe 1', location: 'Quartier 2 Mars' },
    { value: '2mars-2', label: '2 Mars', subtitle: 'Annexe 2', location: 'Quartier 2 Mars' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-orange-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ea580c' fill-opacity='0.05'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 py-8 lg:py-16">
        <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          
          {/* Header Section */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-orange-400/20 backdrop-blur-sm border border-orange-200 rounded-full px-6 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-medium text-orange-700">Recherche Premium</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-800 via-orange-600 to-gray-800 bg-clip-text text-transparent mb-6 leading-tight">
              Trouvez votre
              <br />
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Formation Parfaite</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Découvrez nos formations de conduite premium avec une recherche intelligente et personnalisée
            </p>
          </div>

          {/* Search Form */}
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              
              {/* Glass card container */}
              <div className="bg-white/90 backdrop-blur-xl border border-orange-200 rounded-3xl p-6 md:p-8 lg:p-10 shadow-2xl shadow-orange-500/10">
                
                {/* Form Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  
                  {/* Type de Formation */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                      <BookOpen className="w-4 h-4 text-orange-500" />
                      Type de Formation
                    </label>
                    <div className="relative group">
  <label htmlFor="typeFormation" className="sr-only">
    Type de formation
  </label>
  <select
    id="typeFormation"
    value={formData.typeFormation}
    onChange={(e) => handleInputChange('typeFormation', e.target.value)}
    onFocus={() => setFocusedField('typeFormation')}
    onBlur={() => setFocusedField(null)}
    className="w-full bg-white border border-orange-200 rounded-2xl px-4 py-4 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer hover:bg-orange-50"
  >
    <option value="" className="bg-white text-gray-700">Sélectionnez un type</option>
    {formationTypes.map((type) => (
      <option key={type.value} value={type.value} className="bg-white text-gray-700">
        {type.icon} {type.label} - {type.subtitle}
      </option>
    ))}
  </select>

  <ChevronDown className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-200 ${focusedField === 'typeFormation' ? 'rotate-180' : ''}`} />
  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-400/10 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'typeFormation' ? 'opacity-100' : ''}`}></div>
</div>

                  </div>

                  {/* Annexe */}
                  <div className="space-y-3">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                      <MapPin className="w-4 h-4 text-orange-500" />
                      Centre de Formation
                    </label>
                    <div className="relative group">
                    <select
  aria-label="Centre de formation"
  value={formData.annexe}
  onChange={(e) => handleInputChange('annexe', e.target.value)}
  onFocus={() => setFocusedField('annexe')}
  onBlur={() => setFocusedField(null)}
  className="w-full bg-white border border-orange-200 rounded-2xl px-4 py-4 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300 appearance-none cursor-pointer hover:bg-orange-50"
>
  <option value="" className="bg-white text-gray-700">Choisissez un centre</option>
  {annexes.map((annexe) => (
    <option key={annexe.value} value={annexe.value} className="bg-white text-gray-700">
      {annexe.label} - {annexe.subtitle} ({annexe.location})
    </option>
  ))}
</select>

                      <ChevronDown className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-transform duration-200 ${focusedField === 'annexe' ? 'rotate-180' : ''}`} />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-400/10 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'annexe' ? 'opacity-100' : ''}`}></div>
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="space-y-3 md:col-span-2 lg:col-span-1">
                    <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-3">
                      <DollarSign className="w-4 h-4 text-orange-500" />
                      Budget Maximum
                    </label>
                    <div className="relative group">
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        onFocus={() => setFocusedField('budget')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Ex: 3000 DH"
                        className="w-full bg-white border border-orange-200 rounded-2xl px-4 py-4 text-gray-700 placeholder-gray-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-300 hover:bg-orange-50"
                      />
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-orange-400/10 opacity-0 transition-opacity duration-300 pointer-events-none ${focusedField === 'budget' ? 'opacity-100' : ''}`}></div>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-center">
                  <button
                    ref={submitButtonRef}
                    type="button"
                    onClick={handleFormSubmit}
                    disabled={isSubmitting}
                    className={`group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 hover:from-orange-600 hover:via-orange-700 hover:to-orange-600 text-white font-bold py-4 px-8 md:px-12 rounded-2xl shadow-2xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 ${isSubmitting ? 'animate-pulse' : ''}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    
                    <Search className={`w-5 h-5 relative z-10 ${isSubmitting ? 'animate-spin' : ''}`} />
                    <span className="text-lg relative z-10">
                      {isSubmitting ? 'RECHERCHE EN COURS...' : 'RECHERCHER MAINTENANT'}
                    </span>
                    <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                  </button>
                </div>
              </div>
            </div>

            {/* Additional Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/90 backdrop-blur-xl border border-orange-200 rounded-2xl p-6 text-center hover:bg-orange-50 transition-all duration-300 shadow-lg shadow-orange-500/5">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Search className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">Recherche Intelligente</h3>
                <p className="text-gray-600 text-sm">Algorithme avancé pour des résultats personnalisés</p>
              </div>

              <div className="bg-white/90 backdrop-blur-xl border border-orange-200 rounded-2xl p-6 text-center hover:bg-orange-50 transition-all duration-300 shadow-lg shadow-orange-500/5">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">Proximité Garantie</h3>
                <p className="text-gray-600 text-sm">Centres de formation près de chez vous</p>
              </div>

              <div className="bg-white/90 backdrop-blur-xl border border-orange-200 rounded-2xl p-6 text-center hover:bg-orange-50 transition-all duration-300 shadow-lg shadow-orange-500/5">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-gray-800 font-semibold mb-2">Qualité Premium</h3>
                <p className="text-gray-600 text-sm">Formations certifiées et instructeurs expérimentés</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumSearch;