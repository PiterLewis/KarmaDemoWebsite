import './ProblemSolution.css';

const ProblemSolution = () => {
  return (
    <section className="problem-solution-section">
      <div className="problem-solution-container">
        {/* Título de la sección */}
        <div className="section-header">
          <h2 className="section-title">¿TE SUENA FAMILIAR?</h2>
          <div className="section-divider"></div>
        </div>

        {/* Grid de problema y solución */}
        <div className="content-grid">
          {/* Problema */}
          <div className="content-card problem-card">
            <div className="card-icon"></div>
            <h3 className="card-title">EL PROBLEMA</h3>
            <p className="card-description">
              Pasas horas scrolleando en TikTok sin hacer nada productivo. 
              Tus metas se quedan en "algún día lo haré".
            </p>
            <div className="card-tags">
              <span className="tag">Procrastinación</span>
              <span className="tag">Sin motivación</span>
              <span className="tag">Tiempo perdido</span>
            </div>
          </div>

          {/* Solución */}
          <div className="content-card solution-card">
            <div className="card-icon"></div>
            <h3 className="card-title">LA SOLUCIÓN</h3>
            <p className="card-description">
              Convierte tus metas en retos divertidos con amigos. 
              Completa misiones, gana puntos y hazlo realidad.
            </p>
            <div className="card-tags">
              <span className="tag">Gamificación</span>
              <span className="tag">Social</span>
              <span className="tag">Divertido</span>
            </div>
          </div>
        </div>

        {/* Meme */}
        <div className="meme-container">
          <img  
            src="./Meme.jpg" 
            alt="Meme: Go out and use KARMA vs Scroll TikTok"
            className="meme-image"
          />
          <p className="meme-caption">
            Es hora de elegir mejor 
          </p>
        </div>

        
      </div>
    </section>
  );
};

export default ProblemSolution;