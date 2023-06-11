import { useState } from "react";
import '../style/Task.css';
import { MdOutlineDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { TaskModel } from "../models/tasks";

function Task({ id, completeTask, deleteTask, texto, completed, editTask }) {

    // Cuando no esta en modo editar cuando editMoe esta en false, no se puede cambiar
    const [editMode, setEditMode] = useState(false);
    const [myText, setMyText] = useState(texto);
    const handleSubmit = (e) => {
        e.preventDefault();
        const myTask = new TaskModel(id, myText, completed);
        editTask(myTask)
    }

    const myForm =
        <form onSubmit={handleSubmit}>
            <input type="text" value={myText} onChange={(e) => { setMyText(e.target.value) }} />
            <button type="submit">Edit</button>
        </form>
    //Manejador de eventos

    const handleEdit = () => {
        setEditMode(!editMode);
    };

    return (
        <div className={completed ? 'taskContent completed' : 'taskContent'}>


            {/* El onClick se usa para que dando click sobre la tarea se complete */}

            <div className="task" onClick={() => completeTask(id)}>
                {editMode === false ? <p>{myText}</p> : myForm}
            </div>

            {/* El oneClick se usa para que al presionar sobre el icono de eliminar tarea se borre la tarea */}
            <div className="iconoEliminar" onClick={() => deleteTask(id)}>
                {/* Esto es un componente de React y hay que manejarlo como tal */}
                <MdOutlineDeleteForever className="iconoEliminar" />
            </div>

            <div className="iconoEliminar" onClick={() => handleEdit()}>
                <FiEdit className="iconoEliminar" />
            </div>


        </div>
    );
}

export default Task;