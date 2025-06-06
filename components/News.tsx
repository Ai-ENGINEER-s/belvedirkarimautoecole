import { useState } from "react";

const News = () => {
    const [activeNewsTab, setActiveNewsTab] = useState("TOUS");
    return (
      
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
  );
}

export default News;