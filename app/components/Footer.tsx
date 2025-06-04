

const Footer = () => {
  return (

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
  );
}


export default Footer;