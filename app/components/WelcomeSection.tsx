const WelcomeSection = () => {
    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
    };
  
    return (
      <section className="welcome-section">
        <div className="container">
          <div className="welcome-content">
            <div className="welcome-text">
              <h2>BIENVENUE À L&apos;AUTO ÉCOLE KIRAM</h2>
              <p>
                Depuis 50 ans, l&apos;Auto École Belvédère Kiram forme avec succès les futurs conducteurs à Casablanca. Notre expertise et notre engagement nous permettent de vous offrir une formation complète et personnalisée.
              </p>
              <p>
                Avec nos 6 annexes stratégiquement situées (4 à Belvédère et 2 au 2 Mars), nous sommes toujours proches de vous. Notre équipe de moniteurs professionnels, parlant arabe et français, s&apos;adapte à vos besoins pour vous garantir une formation de qualité.
              </p>
              <p>
                Nous proposons des formations présentielles et à distance pour s&apos;adapter à votre emploi du temps. Rejoignez les milliers de candidats qui nous ont fait confiance !
              </p>
            </div>
            <div className="sidebar-form">
              <h3>DEMANDE D&apos;INFORMATION</h3>
              <p>Remplissez ce formulaire pour recevoir plus d&apos;informations</p>
              <form onSubmit={handleFormSubmit}>
                <label htmlFor="nom">Nom</label>
                <input id="nom" type="text" placeholder="Votre nom" name="nom" />
  
                <label htmlFor="email">Email</label>
                <input id="email" type="email" placeholder="Votre email" name="email" />
  
                <label htmlFor="telephone">Téléphone</label>
                <input id="telephone" type="tel" placeholder="Votre téléphone" name="telephone" />
  
                <label htmlFor="typeFormation">Type de formation</label>
                <select id="typeFormation" name="typeFormation">
                  <option value="">-- Choisissez une formation --</option>
                  <option value="B">Permis B</option>
                  <option value="A">Permis A</option>
                  <option value="C">Permis C</option>
                </select>
  
                <button type="submit">ENVOYER</button>
              </form>
            </div>
          </div>
  
          <div className="features">
            <div className="feature">
              <div className="feature-icon">🎓</div>
              <h3>FORMATION COMPLÈTE</h3>
              <p>Formation théorique et pratique avec des moniteurs expérimentés</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🚗</div>
              <h3>VÉHICULES RÉCENTS</h3>
              <p>Flotte de véhicules modernes et bien entretenus pour votre apprentissage</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>TAUX DE RÉUSSITE ÉLEVÉ</h3>
              <p>95% de réussite grâce à notre méthode pédagogique éprouvée</p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WelcomeSection;
  