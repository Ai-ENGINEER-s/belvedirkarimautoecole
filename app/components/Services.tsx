import { useState } from "react";

const Services = () => {
      const [activeTab, setActiveTab] = useState("TOUS");
  return (
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
  );
}

export default Services;