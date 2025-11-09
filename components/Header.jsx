import './Header.css';

const Header = () => {
  return (
    <div className="header">

      <div className="header-content">
        <div className="header-logo">
          <svg viewBox="0 0 200 80" className="logo-svg">
            <defs>
              <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ec4899" stopOpacity="1" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="1" />
              </linearGradient>
            </defs>
            <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" 
                  fill="url(#logoGradient)" fontSize="48" fontWeight="bold" fontFamily="Arial, sans-serif">
              KARMA
            </text>
          </svg>
        </div>

        <p className="header-subtitle">KARMA SOCIAL APP</p>
        
        <h1 className="header-title">
          CONVIERTE CADA SEMANA<br />
          EN UN NUEVO <span className="header-highlight">DESAFÍO</span>
        </h1>
        
        <p className="header-description">
          Crea o acepta retos junto a tus amigos, completa misiones, sube tus pruebas y voten en tiempo real desde el Lobby de Revisión.
        </p>

        <div className="header-decoration">
          <div className="pixel-dot"></div>
          <div className="pixel-dot"></div>
          <div className="pixel-dot pixel-purple"></div>
          <div className="pixel-dot pixel-purple"></div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-border">
          <div className="scroll-dot"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;