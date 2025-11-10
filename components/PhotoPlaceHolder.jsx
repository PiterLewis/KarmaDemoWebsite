import "./PhotoPlaceHolder.css";

const PhotoPlaceHolder = ({ 
  picPath, 
  goNext, 
  goBefore, 
  currentPos, 
  totalImages,
  canGoNext,
  canGoBefore
}) => {
    
  return (
    <div className="photo-container">
      <img 
        src={picPath} 
        alt={`Imagen ${currentPos} de ${totalImages}`}
        className="photo-image"
      />
      
      <div className="photo-indicators">
        {[...Array(totalImages)].map((_, index) => (
          <div 
            key={index} 
            className={`indicator-dot ${currentPos === index + 1 ? 'active' : ''}`}
          />
        ))}
      </div>
      
      <div className="photo-controls">
        <button 
          onClick={goBefore} 
          className="photo-btn"
          disabled={!canGoBefore}
        >
          ← Atrás
        </button>
        <button 
          onClick={goNext} 
          className="photo-btn"
          disabled={!canGoNext}
        >
          Siguiente →
        </button>
      </div>
    </div>
  );
};

export default PhotoPlaceHolder;