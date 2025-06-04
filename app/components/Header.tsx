const Header = () => {
  return (
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
  );
}

export default Header;
