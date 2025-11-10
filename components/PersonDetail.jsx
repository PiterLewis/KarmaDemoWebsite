import { useForm } from "react-hook-form";
import "./PersonDetail.css"


// Detlles personales como el email o nombre
const PersonDetail = ({ uploadData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => uploadData(data);

  return (
    <div className="person-detail-container">
      <h1>Be the first person to access the demo</h1>
      <h2>Subscribe to our newsletter</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>Nombre de usuario</label>
          <input 
            className={errors.nombreUser ? "error" : ""} 
            {...register('nombreUser', {
              required: "El nombre es obligatorio",
              minLength: {
                value: 2,
                message: "minimo 2 caracteres",
              }
            })}
          /> 
          {errors.nombreUser && 
            <p className="error-message">{errors.nombreUser.message}</p>
          }
        </div>

        <div className="form-field">
          <label>Correo Electrónico</label>
          <input 
            className={errors.emailUser ? "error" : ""}
            {...register('emailUser', {
              required: "El email es obligatorio",
              minLength: 5,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Formato de email incorrecto",
              }
            })}
          />
          {errors.emailUser && 
            <p className="error-message">{errors.emailUser.message}</p>
          }
        </div>
        
        <button className="submit-button" type="submit">Siguiente</button>
      </form>
    </div>
  );
};
export default PersonDetail;
