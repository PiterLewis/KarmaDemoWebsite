import {useForm} from "react-hook-form"
import "./InformacionContacto.css"

// Informacion del contacto
const InformacionContacto = ({ uploadData, onBack }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (datos) => uploadData(datos);

  return (
    <div className="person-detail-container">
      <h1>Be the first person to access the demo</h1>
      <h2>Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>Dirección</label>
          <input 
            className={errors.direccion ? "error" : ""} 
            {...register('direccion', {
              required: "La dirección es obligatoria"
            })}
          /> 
          {errors.direccion && 
            <p className="error-message">{errors.direccion.message}</p>
          }
        </div>

        <div className="form-field">
          <label>Ciudad</label>
          <input 
            className={errors.ciudad ? "error" : ""}
            {...register('ciudad', {
              required: "La ciudad es obligatoria"
            })}
          />
          {errors.ciudad && 
            <p className="error-message">{errors.ciudad.message}</p>
          }
        </div>
        
        <div className="form-field">
          <label>Código postal</label>
          <input
            className={errors.cp ? "error" : ""}
            {...register('cp', {
              minLength: 5,
              required: "Es obligatorio el código postal",
              pattern: {
                value: /^[0-9]+$/,
                message: "Solo puede contener números"
              }
            })}
          />
          {errors.cp && 
            <p className="error-message">{errors.cp.message}</p>
          }
        </div>
        
        <div className="button-group">
          <button type="button" className="back-button" onClick={onBack}>Atrás</button>
          <button className="submit-button" type="submit">Siguiente</button>
        </div>
      </form>
    </div>
  );
};

export default InformacionContacto;