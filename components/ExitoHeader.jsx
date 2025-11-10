import './ExitoHeader.css';

const ExitoHeader = () => {
  return (
    <div className="exito-container">
      <div className="exito-content">
        
        <div className="exito-icon-wrapper">
          <div className="exito-circle">
            <svg className="exito-checkmark" viewBox="0 0 52 52">
              <circle className="exito-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
              <path className="exito-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
            </svg>
          </div>
        </div>

        
        <h1 className="exito-title">¡REGISTRO EXITOSO!</h1>
        
       
        <p className="exito-message">
          Tu información ha sido enviada correctamente. <br/>
          Nos pondremos en contacto contigo muy pronto.
        </p>

        
        <div className="exito-decoration">
          <div className="exito-dot"></div>
          <div className="exito-dot"></div>
          <div className="exito-dot exito-dot-purple"></div>
          <div className="exito-dot exito-dot-purple"></div>
        </div>

       
        <div className="exito-badge">
          <span className="exito-badge-text">🎮 ¡Bienvenido a KARMA!</span>
        </div>
      </div>
    </div>
  );
};

export default ExitoHeader;