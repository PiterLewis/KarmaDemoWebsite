import {useForm} from "react-hook-form"
import "./PreferenciasContacto.css"

// Preferencias del Usuario con desplegables 
const PreferenciasContacto = ({ uploadData, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => uploadData(data);

  return (
    <div className="person-detail-container">
      <h1>Be the first person to access the demo</h1>
      <h2>Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>Rol en los juegos</label>
          <select 
            className={errors.tipoEntreno ? "error" : ""}
            {...register("tipoEntreno", {
              required: "El tipo de jugador debe ser seleccionado",
            })}
          >
            <option value="">Selecciona una opción</option>
            <option value="activo">activo</option>
            <option value="espectador">espectador</option>
            <option value="protagonista">protagonista</option>
          </select>
          {errors.tipoEntreno && <p className="error-message">{errors.tipoEntreno.message}</p>}
        </div>
        
        <div className="form-field">
          <label>Objetivo de usar Karma</label>
          <select 
            className={errors.objetivo ? "error" : ""}
            {...register("objetivo", {
              required: "El objetivo debe ser seleccionado",
            })}
          >
            <option value="">Selecciona una opción</option>
            <option value="Distraerme">Distraerme</option>
            <option value="Disfrutar con amigos">Disfrutar con amigos</option>
            <option value="Relajarme">Relajarme</option>
            <option value="otros">Otro...</option>
          </select>
          {errors.objetivo && <p className="error-message">{errors.objetivo.message}</p>}
        </div>
        
        <div className="button-group">
          <button type="button" className="back-button" onClick={onBack}>Atrás</button>
          <button className="submit-button" type="submit">Siguiente</button>
        </div>
      </form>
    </div>
  );
};

export default PreferenciasContacto;