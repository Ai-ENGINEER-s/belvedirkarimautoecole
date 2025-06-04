

'use client';
import Head from "next/head";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("TOUS");
  const [activeNewsTab, setActiveNewsTab] = useState("TOUS");
  const [activeDot, setActiveDot] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Excellente auto-école ! Les moniteurs sont très professionnels et patients. J'ai obtenu mon permis du premier coup grâce à leur formation de qualité. Je recommande vivement l'Auto École Kiram à tous ceux qui veulent réussir rapidement.",
      author: "- Amina K., Permis B obtenu en 2025"
    },
    {
      quote: "Formation très complète avec des moniteurs qui parlent parfaitement français et arabe. Cela m'a beaucoup aidé à mieux comprendre les consignes. Merci à toute l'équipe !",
      author: "- Said M., Permis B obtenu en 2025"
    },
    {
      quote: "50 ans d'expérience, ça se ressent ! L'organisation est parfaite et les annexes sont bien situées. J'ai pu m'inscrire près de chez moi et suivre ma formation sans contrainte.",
      author: "- Maria L., Permis B obtenu en 2025"
    },
    {
      quote: "Auto-école sérieuse et professionnelle. Les cours théoriques sont bien structurés et les heures de conduite très instructives. Je la recommande les yeux fermés !",
      author: "- Farid B., Permis B obtenu en 2024"
    },
    {
      quote: "Très satisfaite de ma formation. Les moniteurs sont à l'écoute et s'adaptent à notre rythme d'apprentissage. L'Auto École Kiram mérite sa réputation !",
      author: "- Khadija A., Permis B obtenu en 2024"
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Auto École Belvédère Kiram - 50 ans d&apos;expérience</title>
  
      </Head>

      <div>
        {/* Header */}
        <header className="header">
          <div className="header-top">
            <div className="container">
              <div className="contact-info">
                <span>📞 +212 522 123 456</span>
                <span>✉️ contact@autoecolekiram.ma</span>
                <span>📍 Casablanca, Maroc</span>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">f</a>
                <a href="#" className="social-link">📱</a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="nav-container">
              <div className="logo">AUTO ÉCOLE KIRAM</div>
              <nav>
                <ul className="nav-menu">
                  <li><a href="#accueil">Accueil</a></li>
                  <li><a href="#formations">Formations</a></li>
                  <li><a href="#tarifs">Tarifs</a></li>
                  <li><a href="#annexes">Annexes</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </nav>
              <a href="#inscription" className="cta-button">S&apos;INSCRIRE</a>
            </div>
          </div>
        </header>

        {/* Hero Section */}
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

        {/* Search Section */}
        <section className="search-section">
          <div className="container">
            <form className="search-form" onSubmit={handleFormSubmit}>
              <div className="form-group">
                <label>Type de Formation</label>
                <select>
                  <option>Permis B (Voiture)</option>
                  <option>Permis A (Moto)</option>
                  <option>Permis C (Poids Lourd)</option>
                </select>
              </div>
              <div className="form-group">
                <label>Annexe</label>
                <select>
                  <option>Belvédère - Annexe 1</option>
                  <option>Belvédère - Annexe 2</option>
                  <option>Belvédère - Annexe 3</option>
                  <option>Belvédère - Annexe 4</option>
                  <option>2 Mars - Annexe 1</option>
                  <option>2 Mars - Annexe 2</option>
                </select>
              </div>
              <div className="form-group">
                <label>Budget Maximum</label>
                <input type="text" placeholder="Ex: 3000 DH" />
              </div>
              <div className="form-group">
                <button type="submit" className="cta-button">🔍 RECHERCHER</button>
              </div>
            </form>
          </div>
        </section>

        {/* Welcome Section */}
        <section className="welcome-section">
          <div className="container">
            <div className="welcome-content">
              <div className="welcome-text">
                <h2>BIENVENUE À L&apos;AUTO ÉCOLE KIRAM</h2>
                <p>Depuis 50 ans, l&apos;Auto École Belvédère Kiram forme avec succès les futurs conducteurs à Casablanca. Notre expertise et notre engagement nous permettent de vous offrir une formation complète et personnalisée.</p>
                <p>Avec nos 6 annexes stratégiquement situées (4 à Belvédère et 2 au 2 Mars), nous sommes toujours proches de vous. Notre équipe de moniteurs professionnels, parlant arabe et français, s&apos;adapte à vos besoins pour vous garantir une formation de qualité.</p>
                <p>Nous proposons des formations présentielles et à distance pour s&apos;adapter à votre emploi du temps. Rejoignez les milliers de candidats qui nous ont fait confiance !</p>
              </div>
              <div className="sidebar-form">
                <h3>DEMANDE D&apos;INFORMATION</h3>
                <p>Remplissez ce formulaire pour recevoir plus d&apos;informations</p>
                <form onSubmit={handleFormSubmit}>
                  <input type="text" placeholder="Votre nom" />
                  <input type="email" placeholder="Votre email" />
                  <input type="tel" placeholder="Votre téléphone" />
                  <select>
                    <option>Type de formation</option>
                    <option>Permis B</option>
                    <option>Permis A</option>
                    <option>Permis C</option>
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

        {/* Partners Section */}
        <section className="partners-section">
          <div className="container">
            <h2>NOS PARTENAIRES OFFICIELS</h2>
            <div className="partners-grid">
              <div className="partner-logo">CNRR</div>
              <div className="partner-logo">NARSA</div>
              <div className="partner-logo">PREFECTURE</div>
              <div className="partner-logo">MINISTÈRE</div>
              <div className="partner-logo">DGSN</div>
              <div className="partner-logo">TRANSPORT</div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="services-section" id="formations">
          <div className="container">
            <h2>NOS FORMATIONS</h2>
            <div className="services-tabs">
              {["TOUS", "PERMIS B", "PERMIS A", "PERMIS C", "RECYCLAGE"].map((tab) => (
                <button
                  key={tab}
                  className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-image">🚗</div>
                <div className="service-content">
                  <h3>PERMIS B CLASSIQUE</h3>
                  <p>Formation complète pour permis voiture avec cours théoriques et pratiques</p>
                  <div className="service-price">2800 DH</div>
                  <ul className="service-features">
                    <li>✓ 30h de cours théoriques</li>
                    <li>✓ 20h de conduite minimum</li>
                    <li>✓ Support de cours inclus</li>
                    <li>✓ Suivi personnalisé</li>
                  </ul>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">🏍️</div>
                <div className="service-content">
                <h3>PERMIS A (MOTO)</h3>
                  <p>Formation complète pour permis moto avec cours théoriques et pratiques</p>
                  <div className="service-price">3200 DH</div>
                  <ul className="service-features">
                    <li>✓ 25h de cours théoriques</li>
                    <li>✓ 15h de conduite minimum</li>
                    <li>✓ Équipement fourni</li>
                    <li>✓ Plateau + circulation</li>
                  </ul>
                </div>
              </div>
              <div className="service-card">
                <div className="service-image">🚛</div>
                <div className="service-content">
                  <h3>PERMIS C (POIDS LOURD)</h3>
                  <p>Formation professionnelle pour permis poids lourd</p>
                  <div className="service-price">4500 DH</div>
                  <ul className="service-features">
                    <li>✓ 40h de cours théoriques</li>
                    <li>✓ 25h de conduite minimum</li>
                    <li>✓ Formation professionnelle</li>
                    <li>✓ Véhicules adaptés</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>50+</h3>
                <p>Années d'expérience</p>
              </div>
              <div className="stat-item">
                <h3>6</h3>
                <p>Annexes</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Taux de réussite</p>
              </div>
              <div className="stat-item">
                <h3>5000+</h3>
                <p>Permis délivrés</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section" id="inscription">
          <div className="container">
            <div className="cta-content">
              <div className="cta-form">
                <h3>INSCRIPTION EN LIGNE</h3>
                <p>Inscrivez-vous dès maintenant et bénéficiez d'une réduction de 10%</p>
                <form onSubmit={handleFormSubmit}>
                  <input type="text" placeholder="Nom complet" required />
                  <input type="email" placeholder="Email" required />
                  <input type="tel" placeholder="Téléphone" required />
                  <select required>
                    <option value="">Choisir une formation</option>
                    <option>Permis B - 2800 DH</option>
                    <option>Permis A - 3200 DH</option>
                    <option>Permis C - 4500 DH</option>
                  </select>
                  <select required>
                    <option value="">Choisir une annexe</option>
                    <option>Belvédère - Annexe 1</option>
                    <option>Belvédère - Annexe 2</option>
                    <option>Belvédère - Annexe 3</option>
                    <option>Belvédère - Annexe 4</option>
                    <option>2 Mars - Annexe 1</option>
                    <option>2 Mars - Annexe 2</option>
                  </select>
                  <button type="submit">S'INSCRIRE MAINTENANT</button>
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
                  <p>Un moniteur dédié pour vous accompagner jusqu'à la réussite</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <section className="news-section">
          <div className="container">
            <h2>ACTUALITÉS & CONSEILS</h2>
            <div className="news-tabs">
              {["TOUS", "ACTUALITÉS", "CONSEILS", "RÉGLEMENTATION"].map((tab) => (
                <button
                  key={tab}
                  className={`news-tab ${activeNewsTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveNewsTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="news-grid">
              <div className="news-card">
                <div className="news-image">📰</div>
                <div className="news-content">
                  <div className="news-date">15 Mai 2025</div>
                  <h3>Nouvelles réglementations 2025</h3>
                  <p>Découvrez les dernières modifications du code de la route entrées en vigueur cette année.</p>
                </div>
              </div>
              <div className="news-card">
                <div className="news-image">🚦</div>
                <div className="news-content">
                  <div className="news-date">10 Mai 2025</div>
                  <h3>Conseils pour réussir l'examen</h3>
                  <p>Nos moniteurs partagent leurs meilleurs conseils pour aborder sereinement l'examen du permis.</p>
                </div>
              </div>
              <div className="news-card">
                <div className="news-image">🏆</div>
                <div className="news-content">
                  <div className="news-date">5 Mai 2025</div>
                  <h3>Taux de réussite record</h3>
                  <p>L'Auto École Kiram atteint un taux de réussite de 95% au premier trimestre 2025.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
          <div className="container">
            <h2>CE QUE DISENT NOS ÉLÈVES</h2>
            <div className="testimonials-grid">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`testimonial-avatar ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                >
                  {String.fromCharCode(65 + index)}
                </div>
              ))}
            </div>
            <div className="testimonial-content">
              <div className="testimonial-quote">
                "{testimonials[activeTestimonial].quote}"
              </div>
              <div className="testimonial-author">
                {testimonials[activeTestimonial].author}
              </div>
              <div className="testimonial-stars">
                ⭐⭐⭐⭐⭐
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer" id="contact">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>AUTO ÉCOLE KIRAM</h3>
                <p>50 ans d'expérience dans la formation à la conduite. Votre réussite est notre priorité.</p>
                <div className="social-links">
                  <a href="#" className="social-link">f</a>
                  <a href="#" className="social-link">📱</a>
                  <a href="#" className="social-link">📧</a>
                </div>
              </div>
              <div className="footer-section">
                <h3>NOS FORMATIONS</h3>
                <ul>
                  <li><a href="#">Permis B</a></li>
                  <li><a href="#">Permis A</a></li>
                  <li><a href="#">Permis C</a></li>
                  <li><a href="#">Recyclage</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>NOS ANNEXES</h3>
                <ul>
                  <li><a href="#">Belvédère - 4 annexes</a></li>
                  <li><a href="#">2 Mars - 2 annexes</a></li>
                  <li><a href="#">Horaires d'ouverture</a></li>
                  <li><a href="#">Plan d'accès</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h3>CONTACT</h3>
                <ul>
                  <li>📞 +212 522 123 456</li>
                  <li>✉️ contact@autoecolekiram.ma</li>
                  <li>📍 Casablanca, Maroc</li>
                  <li>🕒 Lun-Sam: 8h-18h</li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2025 Auto École Belvédère Kiram. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
