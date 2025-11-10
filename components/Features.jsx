import './Features.css';

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        
        <div className="section-header">
          <h2 className="section-title">CARACTERÍSTICAS</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Todo lo que necesitas para convertir tus retos en realidad
          </p>
        </div>

        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎬</div>
            <h3 className="feature-title">LOBBY EN TIEMPO REAL</h3>
            <p className="feature-description">
              Entra a una sala con tus amigos cada domingo. Revisen juntos 
              las fotos, voten y validen los retos en tiempo real con chat 
              y voz integrados.
            </p>
            <ul className="feature-list">
              <li>✓ Votación democrática</li>
              <li>✓ Chat y voz en vivo</li>
              <li>✓ Sistema anti-trampas</li>
            </ul>
          </div>

         
          <div className="feature-card">
            <div className="feature-icon">🎯</div>
            <h3 className="feature-title">RETOS PERSONALIZADOS</h3>
            <p className="feature-description">
              Crea tus propios desafíos o acepta los del grupo. Desde fitness 
              hasta creatividad, cada semana es una nueva aventura con tus 
              amigos.
            </p>
            <ul className="feature-list">
              <li>✓ Retos personalizados</li>
              <li>✓ Categorías variadas</li>
              <li>✓ Evidencia fotográfica</li>
            </ul>
          </div>

          
          <div className="feature-card">
            <div className="feature-icon">🏅</div>
            <h3 className="feature-title">GAMIFICACIÓN TOTAL</h3>
            <p className="feature-description">
              Gana puntos, sube en el ranking, desbloquea badges y mantén 
              tu racha. Compite sanamente y celebra los logros de tu grupo.
            </p>
            <ul className="feature-list">
              <li>✓ Sistema de puntos</li>
              <li>✓ Ranking global</li>
              <li>✓ Badges y rachas</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;