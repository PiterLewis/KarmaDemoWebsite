import React from 'react';
import './VideoPlayer.css';
/**
 * 
 * Cuando termines de grabar el video, necesitas hacer lo siguiente
 * 
 * 1. Sube el video al directorio "public" del proyecto.
 * 2. Cambia la ruta del src del video en este componente (línea 34) 
 *    para que apunte a tu nuevo video
 * 3. Ejecuta los siguientes comandos en la terminal:
 *    
 *    git add .
 *    git commit -m "Actualizar video running.mp4"
 *    git push -u origin main
 *    npm run deploy
 * 
 * Así el proyecto estará disponible para mañana.
 */

const VideoPlayer = () => {
    return (
        <div className="video-player-parent">
        <div className="video-player-container">
            <video
                src="./videoapp.mp4"
                autoPlay
                loop
                controls
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </div>
        </div>
    );
};

export default VideoPlayer;
