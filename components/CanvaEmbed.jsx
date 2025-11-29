import './CanvaEmbed.css';

export default function CanvaEmbed() {
  return (
    <div id = "linkCanva">
    <div className="canva-section">
      <div className="canva-container">
        <div className="section-header">
          <h2 className="section-title">PRESENTACIÓN DEL PROYECTO</h2>
          <div className="section-divider"></div>
        </div>

        <div className="embed-wrapper">
          <div className="embed-glow"></div>
          <div className="embed-content">
            <div className="iframe-container">
              <iframe
                loading="lazy"
                className="iframe-element"
                src="https://www.canva.com/design/DAG6GA7Jrro/LQmRlL2NwEoZiPruGzuAfA/view?embed"
                allow="fullscreen"
                allowFullScreen
                title="Canva embed"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}