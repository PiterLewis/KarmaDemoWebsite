import './HowItWorks.css';

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="how-it-works-container">
        
        <div className="section-header">
          <h2 className="section-title">¿CÓMO FUNCIONA?</h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Tu semana dividida en 3 fases simples
          </p>
        </div>

        
        <div className="timeline">
          
          <div className="timeline-item">
            <div className="timeline-icon">📅</div>
            <div className="timeline-content">
              <h3 className="timeline-title">1. LUNES - SÁBADO</h3>
              <p className="timeline-description">
                Cada jugador completa retos durante la semana y sube fotos 
                desde la cámara in-app. Las pruebas quedan en estado pendiente 
                hasta el domingo.
              </p>
              <div className="timeline-tags">
                <span className="timeline-tag">Cumple retos</span>
                <span className="timeline-tag">Sube fotos</span>
                <span className="timeline-tag">Estado pendiente</span>
              </div>
            </div>
          </div>

          
          <div className="timeline-item">
            <div className="timeline-icon">🎮</div>
            <div className="timeline-content">
              <h3 className="timeline-title">2. DOMINGO - LOBBY EN VIVO</h3>
              <p className="timeline-description">
                El grupo entra a una sala en tiempo real. Pasan foto por foto, 
                discuten en chat/voz y votan (Aprobar/Rechazar). El autor no 
                puede votar su propio intento.
              </p>
              <div className="timeline-tags">
                <span className="timeline-tag">Sala en vivo</span>
                <span className="timeline-tag">Votación grupal</span>
                <span className="timeline-tag">Chat/Voz</span>
              </div>
            </div>
          </div>

          
          <div className="timeline-item">
            <div className="timeline-icon">🏆</div>
            <div className="timeline-content">
              <h3 className="timeline-title">3. CIERRE Y NUEVA SEMANA</h3>
              <p className="timeline-description">
                Se calculan puntos, se actualiza el ranking, rachas y badges. 
                Se genera el resumen compartible del grupo. ¡Y empieza una 
                nueva semana de retos!
              </p>
              <div className="timeline-tags">
                <span className="timeline-tag">Ranking</span>
                <span className="timeline-tag">Puntos</span>
                <span className="timeline-tag">Badges</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;