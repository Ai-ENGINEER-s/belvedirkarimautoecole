const Search = () => {  
    const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert('Merci pour votre demande ! Nous vous contacterons bientôt.');
    };
  
    return (
      <section className="search-section">
        <div className="container">
          <form className="search-form" onSubmit={handleFormSubmit}>
            <div className="form-group">
              <label htmlFor="typeFormation">Type de Formation</label>
              <select id="typeFormation" name="typeFormation">
                <option>Permis B (Voiture)</option>
                <option>Permis A (Moto)</option>
                <option>Permis C (Poids Lourd)</option>
              </select>
            </div>
  
            <div className="form-group">
              <label htmlFor="annexe">Annexe</label>
              <select id="annexe" name="annexe">
                <option>Belvédère - Annexe 1</option>
                <option>Belvédère - Annexe 2</option>
                <option>Belvédère - Annexe 3</option>
                <option>Belvédère - Annexe 4</option>
                <option>2 Mars - Annexe 1</option>
                <option>2 Mars - Annexe 2</option>
              </select>
            </div>
  
            <div className="form-group">
              <label htmlFor="budget">Budget Maximum</label>
              <input id="budget" type="text" name="budget" placeholder="Ex: 3000 DH" />
            </div>
  
            <div className="form-group">
              <button type="submit" className="cta-button">🔍 RECHERCHER</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
  
  export default Search;
  