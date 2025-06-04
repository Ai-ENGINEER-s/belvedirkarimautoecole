const CTA = () => {
    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
    };
  
    return (
      <section className="cta-section" id="inscription">
        <div className="container">
          <div className="cta-content">
            <div className="cta-form">
              <h3>INSCRIPTION EN LIGNE</h3>
              <p>Inscrivez-vous dès maintenant et bénéficiez d'une réduction de 10%</p>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="nom">Nom complet</label>
                <input id="nom" type="text" placeholder="Nom complet" name="nom" required />
  
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Email" name="email" required />
  
                <label htmlFor="telephone">Téléphone</label>
                <input id="telephone" type="tel" placeholder="Téléphone" name="telephone" required />
  
                <label htmlFor="formation">Formation souhaitée</label>
                <select id="formation" name="formation" required>
                  <option value="">Choisir une formation</option>
                  <option>Permis B - 2800 DH</option>
                  <option>Permis A - 3200 DH</option>
                  <option>Permis C - 4500 DH</option>
                </select>
  
                <label htmlFor="annexe">Choisissez une annexe</label>
                <select id="annexe" name="annexe" required>
                  <option value="">Choisir une annexe</option>
                  <option>Belvédère - Annexe 1</option>
                  <option>Belvédère - Annexe 2</option>
                  <option>Belvédère - Annexe 3</option>
                  <option>Belvédère - Annexe 4</option>
                  <option>2 Mars - Annexe 1</option>
                  <option>2 Mars - Annexe 2</option>
                </select>
  
                <button type="submit">S&apos;INSCRIRE MAINTENANT</button>
              </form>
            </div>
  
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-feature-icon">⚡</div>
                <h3>FORMATION RAPIDE</h3>
                <p>Obtenez votre permis en 3-4 semaines avec notre méthode accélérée</p>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">💰</div>
                <h3>PRIX TRANSPARENTS</h3>
                <p>Aucun frais caché, tout est inclus dans nos tarifs</p>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">🎯</div>
                <h3>SUIVI PERSONNALISÉ</h3>
                <p>Un moniteur dédié pour vous accompagner jusqu&apos;à la réussite</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CTA;
  