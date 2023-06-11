import React, { useState } from 'react';
import '../style/TaskListInput.css';
import { v4 as uuidv4 } from 'uuid';
import { TaskModel } from '../models/tasks';

function TaskListInput(props) {

    const [input, setInput] = useState('');

    const handleChange = e => {
        // Esto nos va a permitir extraer el valor del campo de texto que ingreso el usuario
        setInput(e.target.value);
    }

    const handleInput = e => {
        // Esto nos va a permitir que no se vuelva a cargar toda la aplicacion cuando enviamos la aplicacion
        e.preventDefault();
        console.log('Enviando formulario');
        const newTask = new TaskModel(uuidv4(), input, false);
        //{
        //     // Para que se generen de manera aleatoria un id unico se puede instalar uuid (npm intall uuid)
        //     id: uuidv4(),
        //     texto: input,
        //     // Esta es la tarea que se agrega donde no esta completada para confirmar dicho valor inicial se deja en false
        //     completed: false
        // }
        props.onSubmit(newTask);
    }



    return (
        <form onSubmit={handleInput} className='inputTaskContent'>
            <input className='inputTask' type="text" placeholder='Ingresa una tarea' name='texto' onChange={handleChange} />
            <button className='addTask'>Agregar Tarea</button>
        </form>
    )
}

export default TaskListInput;