import React from "react";
import "../hoja-de-estilo/Tarea.css";
import { BsClipboardX } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa6";




function Tarea({id,texto, completada,completarTarea,eliminarTarea}){
    return(
        <div className={completada ? "tarea-contenedor completada" : "tarea-contenedor"}>
            <div className="tarea-texto"
                >                                    
                {texto}
            </div>
            <div className="tareas-iconos">
                <FaRegStar 
                    style={{ cursor: "pointer", color: completada ? "3989FF" : "E893C5" }} 
                    onClick={()=>completarTarea(id)}/>
            </div>
            <div className="tareas-iconos"
                onClick={()=> eliminarTarea(id)}>
                    <BsClipboardX className="icono-eliminar"
                        color="red"  />
                
            </div>
            
        </div>

    );
};
export default Tarea;