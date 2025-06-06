import React, { useState, useEffect } from 'react';
import { Search, MapPin, DollarSign, ChevronDown, ArrowRight, Phone, Mail, Award, CheckCircle } from 'lucide-react';

const AutoEcoleKiramLanding = () => {
  const [formData, setFormData] = useState({
    nom: '',
    telephone: '',
    email: '',
    typePermis: '',
    annexe: '',
    budget: '',
    message: ''
  });
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFormSubmit = () => {
    if (!formData.nom || !formData.telephone || !formData.typePermis || !formData.annexe) {
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      
      setTimeout(() => {
        setShowSuccess(false);
        setFormData({
          nom: '',
          telephone: '',
          email: '',
          typePermis: '',
          annexe: '',
          budget: '',
          message: ''
        });
      }, 4000);
    }, 1500);
  };

  const permisTypes = [
    { value: 'permis-b', label: 'Permis B', subtitle: 'Voiture', icon: '🚗', prix: '4500 MAD' },
    { value: 'permis-a', label: 'Permis A', subtitle: 'Moto', icon: '🏍️', prix: '3200 MAD' },
    { value: 'permis-c', label: 'Permis C', subtitle: 'Camion', icon: '🚛', prix: '8500 MAD' },
    { value: 'permis-d', label: 'Permis D', subtitle: 'Bus', icon: '🚌', prix: '9200 MAD' }
  ];

  const annexesKiram = [
    { value: 'belvedere', label: 'Belvédère Principal', location: 'Belvédère', phone: '+212 522 123 456' },
    { value: 'belvedere-2', label: 'Belvédère 2', location: 'Belvédère', phone: '+212 522 123 457' },
    { value: '2mars', label: '2 Mars', location: '2 Mars', phone: '+212 522 123 458' },
    { value: 'maarif', label: 'Maârif', location: 'Maârif', phone: '+212 522 123 459' },
    { value: 'hay-mohammadi', label: 'Hay Mohammadi', location: 'Hay Mohammadi', phone: '+212 522 123 460' },
    { value: 'ain-sebaa', label: 'Aïn Sebaâ', location: 'Aïn Sebaâ', phone: '+212 522 123 461' }
  ];

  return (
    <div className="w-full max-w-full overflow-hidden bg-gradient-to-b from-orange-50 to-white relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 sm:w-48 sm:h-48 bg-orange-200 rounded-full opacity-20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 sm:w-48 sm:h-48 bg-orange-300 rounded-full opacity-20 blur-2xl"></div>
      </div>

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Demande Envoyée !</h3>
              <p className="text-sm text-gray-600 mb-4">
                Merci <strong>{formData.nom}</strong> ! Nous vous contactons au <strong>{formData.telephone}</strong> rapidement.
              </p>
              <div className="bg-orange-50 p-3 rounded-xl">
                <p className="text-orange-700 font-medium text-sm">📞 Urgence : +212 522 123 456</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="relative z-10 w-full px-4 py-6 sm:py-8">
        <div className={`transform transition-all duration-700 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-4">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-sm font-bold text-orange-700">AUTO ÉCOLE KIRAM</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
              Votre Permis
              <br />
              <span className="text-orange-600">de Conduire</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              <strong className="text-orange-600">50 ans d'Excellence</strong> • 6 annexes à Casablanca
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-sm">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">50+</div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 text-sm">Années</div>
                  <div className="text-xs text-gray-600">d'Expérience</div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-white rounded-xl px-4 py-2 shadow-sm">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                <div className="text-left">
                  <div className="font-bold text-gray-800 text-sm">Annexes</div>
                  <div className="text-xs text-gray-600">à Casa</div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
              
              <div className="text-center mb-6">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">Inscription Rapide</h2>
                <p className="text-gray-600 text-sm sm:text-base">Recevez votre devis personnalisé</p>
              </div>

              <div className="space-y-6">
                
                {/* Personal Info */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b border-orange-100 pb-2">Vos Informations</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nom Complet *</label>
                      <input
                        type="text"
                        value={formData.nom}
                        onChange={(e) => handleInputChange('nom', e.target.value)}
                        placeholder="Votre nom complet"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={(e) => handleInputChange('telephone', e.target.value)}
                        placeholder="+212 6XX XXX XXX"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="votre@email.com"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Formation Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-800 border-b border-orange-100 pb-2">Votre Formation</h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type de Permis *</label>
                      <select
                        value={formData.typePermis}
                        onChange={(e) => handleInputChange('typePermis', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                        required
                      >
                        <option value="">Choisir un permis</option>
                        {permisTypes.map((permis) => (
                          <option key={permis.value} value={permis.value}>
                            {permis.icon} {permis.label} - {permis.prix}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Annexe *</label>
                      <select
                        value={formData.annexe}
                        onChange={(e) => handleInputChange('annexe', e.target.value)}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                        required
                      >
                        <option value="">Choisir une annexe</option>
                        {annexesKiram.map((annexe) => (
                          <option key={annexe.value} value={annexe.value}>
                            {annexe.label} - {annexe.location}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Budget Maximum</label>
                      <input
                        type="text"
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        placeholder="Ex: 5000 MAD"
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:border-orange-500 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Questions spécifiques ?"
                        rows={2}
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:border-orange-500 focus:bg-white focus:outline-none transition-all resize-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button
                  type="button"
                  onClick={handleFormSubmit}
                  disabled={isSubmitting || !formData.nom || !formData.telephone || !formData.typePermis || !formData.annexe}
                  className={`group flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 ${isSubmitting ? 'animate-pulse' : ''}`}
                >
                  <Search className={`w-5 h-5 ${isSubmitting ? 'animate-spin' : ''}`} />
                  <span className="text-sm sm:text-base">
                    {isSubmitting ? 'ENVOI...' : 'OBTENIR MON DEVIS'}
                  </span>
                  <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-100 hover:bg-orange-50 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">Appelez-nous</h3>
                <p className="text-orange-600 font-medium text-sm">+212 522 123 456</p>
                <p className="text-gray-500 text-xs">Lun-Sam: 8h-19h</p>
              </div>

              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-100 hover:bg-orange-50 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">Email</h3>
                <p className="text-orange-600 font-medium text-sm">contact@kiram.ma</p>
                <p className="text-gray-500 text-xs">Réponse sous 2h</p>
              </div>

              <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-orange-100 hover:bg-orange-50 transition-colors">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-800 text-sm mb-1">6 Annexes</h3>
                <p className="text-orange-600 font-medium text-sm">Partout à Casa</p>
                <p className="text-gray-500 text-xs">Proche de vous</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutoEcoleKiramLanding;