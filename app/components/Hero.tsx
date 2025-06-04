import { useState } from "react";

const Hero = () => {
    const [activeDot, setActiveDot] = useState(0);
  return (
    <section className="hero" id="accueil">
    <div className="container">
      <h1>Votre Permis de Conduire<br />Avec 50 ans d&apos;Expérience</h1>
      <p>Auto École Belvédère Kiram vous accompagne depuis 50 ans dans l&apos;obtention de votre permis de conduire. Avec 6 annexes et une équipe de moniteurs professionnels parlant arabe et français, nous vous garantissons une formation de qualité.</p>
      <div className="hero-buttons">
        <a href="#inscription" className="cta-button">COMMENCER MAINTENANT</a>
      </div>
    </div>
    <div className="hero-dots">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`dot ${activeDot === index ? 'active' : ''}`}
          onClick={() => setActiveDot(index)}
        />
      ))}
    </div>
  </section>
  );
}

export default Hero;