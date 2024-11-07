import React, { useState } from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import "../hoja-de-estilo/ListaDeTareas.css";
import { LiaCheckSolid } from "react-icons/lia";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { LiaListAlt } from "react-icons/lia";

function ListaDeTareas() {
    const [tareas, setTareas] = useState([]);
    const [mostrarCompletadas, setMostrarCompletadas] = useState(false);
    const [mostrarIncompletas, setMostrarIncompletas] = useState(false);

    const agregarTarea = tarea => {
        if (tarea.texto.trim()) {
            tarea.texto = tarea.texto.trim();
            const tareasActualizadas = [tarea, ...tareas];
            setTareas(tareasActualizadas);
        }
    };

    const eliminarTarea = id => {
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        setTareas(tareasActualizadas);
    };

    const completarTarea = id => {
        const tareasActualizadas = tareas.map(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
            }
            return tarea;
        });
        setTareas(tareasActualizadas);
    };

    const tareasCompletadas = tareas.filter(tarea => tarea.completada).length;
    const tareasIncompletas = tareas.filter(tarea => !tarea.completada).length;

    // Funciones para alternar la visualización
    const toggleMostrarCompletadas = () => {
        setMostrarCompletadas(prev => !prev);
        setMostrarIncompletas(false); // Oculta incompletas al mostrar completadas
    };

    const toggleMostrarIncompletas = () => {
        setMostrarIncompletas(prev => !prev);
        setMostrarCompletadas(false); // Oculta completadas al mostrar incompletas
    };

    const mostrarTodasLasTareas = () => {
        setMostrarCompletadas(false);
        setMostrarIncompletas(false); // Muestra todas las tareas
    };

    return (
        <>
            <Formulario onSubmit={agregarTarea} />
            <div className="tareas-contenedor">
                {tareas
                    .filter(tarea => (mostrarCompletadas && tarea.completada) || (mostrarIncompletas && !tarea.completada) || (!mostrarCompletadas && !mostrarIncompletas))
                    .map(tarea => (
                        <Tarea
                            key={tarea.id}
                            id={tarea.id}
                            texto={tarea.texto}
                            completada={tarea.completada}
                            completarTarea={completarTarea}
                            eliminarTarea={eliminarTarea}
                        />
                    ))}
            </div>

            <div className="tareas-estadisticas">
                <div className="icono-completadas" onClick={toggleMostrarCompletadas} style={{ cursor: "pointer" }}>
                    <LiaCheckDoubleSolid style={{ color: "#00BCD4" }} />
                    <span>{tareasCompletadas} completadas</span>
                </div>
                <div className="icono-todas" onClick={mostrarTodasLasTareas} style={{ cursor: "pointer" }}>
                    <LiaListAlt style={{ color: "purple" }} />
                    <span>Todas</span>
                </div>
                <div className="icono-incompletas" onClick={toggleMostrarIncompletas} style={{ cursor: "pointer" }}>
                    <LiaCheckSolid style={{ color: "red" }} />
                    <span>{tareasIncompletas} incompletas</span>
                </div>
                
            </div>
        </>
    );
}

export default ListaDeTareas;
