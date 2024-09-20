import React,{useState} from "react";
import "../hoja-de-estilo/Formulario.css";
import {v4 as uuidv4} from "uuid";
import { FcLike } from "react-icons/fc";

function Formulario(props){
    const[input,setInput]=useState("");

    const manejarCambio= e =>{
        setInput(e.target.value);/*permite extraer el texto*/

    };
    const manejarEnvio = e =>{
        e.preventDefault();
        
        const tareaNueva ={
            id:uuidv4(),
            texto:input,
            completada:false
        };
            props.onSubmit(tareaNueva);
            setInput("");
    };


    return(
        <form 
            className="formulario"
            onSubmit={manejarEnvio}
            > 
            <input 
            className="tarea-input"
            type="text"
            placeholder="tarea "
            value={input}
            name="texto"
            onChange={manejarCambio}
            />
            <button className="tarea-boton"> 
            <FcLike /></button>
        </form>
    );
};
export default Formulario;