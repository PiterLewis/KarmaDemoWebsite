import { useState, useEffect } from "react";
import PersonDetail from "./PersonDetail";
import InformacionContacto from "./InformacionContacto";
import PreferenciasContacto from "./PreferenciasContacto";
import ExitoHeader from "./ExitoHeader";

//formulario general transiciona los formularios básicos y gestiona las funciones para que los hijos las reciban y las ejecuten
const Formulario = () => {
    const [datos, setDatos] = useState({});
    const [paso, setPaso] = useState(0);

    // Funcion para avanzar 
    const uploadData = (data) => { 
        const nuevosDatos = { ...datos, ...data };
        setDatos(nuevosDatos);
        setPaso(prev => prev + 1);
    };

    // Funcion para retroceder al stage anterior 
    const handleBack = () => {
        setPaso(prev => prev - 1);
    };

    // Enviar datos cuando llega al paso 3 o final 
    useEffect(() => {
        if (paso === 3) {
            fetch('https://pokeapi/fakeEndpoint', { //aqui deja de funcionar y lanza excepcion porque obv la api no existe.
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(datos)
            })
            .then(response => response.json())
            .then(data => {
                console.log('Datos enviados:', data);
            });
        }
    }, [paso]);

    useEffect(() => {
        console.log("Paso actual:", paso);
        console.log("Datos acumulados:", datos);
    }, [paso, datos]); //mostrar datos en cada render

    return (
        <>
            {paso === 0 && <PersonDetail uploadData={uploadData} />}
            {paso === 1 && <InformacionContacto uploadData={uploadData} onBack={handleBack} />}
            {paso === 2 && <PreferenciasContacto uploadData={uploadData} onBack={handleBack} />}
            {paso === 3 && <ExitoHeader/>}
        </>
    );
}

export default Formulario;