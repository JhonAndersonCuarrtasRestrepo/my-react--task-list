import React from "react";
import '../style/Task.css';
import { MdOutlineDeleteForever } from "react-icons/md";
import { GoDiffAdded } from "react-icons/go";
import { BsCheck2Square } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

function Task({ id, completeTask, deleteTask, texto, completed, editTask }){
    return (
        <div className={completed ? 'taskContent completed' :'taskContent' }>


            {/* El onClick se usa para que dando click sobre la tarea se complete */}
            
            <div className="task" onClick={()=> completeTask(id)}>
            {texto}
            </div>

            {/* El oneClick se usa para que al presionar sobre el icono de eliminar tarea se borre la tarea */}
            <div className="iconoEliminar" onClick={()=>deleteTask(id)}>
                {/* Esto es un componente de React y hay que manejarlo como tal */}
                <MdOutlineDeleteForever className="iconoEliminar"/>  
            </div>

            <div className="iconoEliminar" onClick={() => editTask(id)}>
                <FiEdit className="iconoEliminar"/>
            </div>
            
        </div>
    );
}

export default Task;