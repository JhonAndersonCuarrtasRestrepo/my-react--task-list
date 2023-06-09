import React, { useEffect, useState } from 'react';
import TaskListInput from './TaskListInput';
import '../style/TaskList.css';
import Task from './Task';

function TaskList() {

  const [tasks, setTasks] = useState([]);
   
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

    const addTask = task => { 
         task.texto = task.texto.trim();
         // Corregirlo y no  dejarlo adelante (...tasks).
         const taskListUpdated = [...tasks, task ];
         setTasks(taskListUpdated);
         // Se usa la const para enviar tanto la actual como la anterior para que tenga la informacion completa
         localStorage.setItem('tasks', JSON.stringify(taskListUpdated));
}

    const deleteTask = id =>{
        const taskListUpdated = tasks.filter(task => task.id !== id);
        setTasks(taskListUpdated);
        localStorage.setItem('tasks', JSON.stringify(taskListUpdated));
    }

    const completeTask = id =>{
        const taskListUpdated = tasks.map(task =>{
            // Si el di de la tarea que estamos procesando es igual a la tarea que queremos marcar como completada o no entonces lo que vamos a hacer es actualizar su estado
            if (task.id === id) {
                task.completed = !task.completed;
            }
            // Se retorna porque map lo requiere
            return task;
        });
        setTasks(taskListUpdated);
        localStorage.setItem('tasks', JSON.stringify(taskListUpdated));
    }
    

 // Editar tarea

    const [isEditing, setIsEditing] = useState(false);

  
function editTask(id, editedTask) {
    setTasks((setIsEditing) =>
      tasks.map((task) => (task.id === id ? editedTask : task))
    );
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks.map((task) => (task.id === id ? editedTask : task)))
    );
  }

  function handleEdit() {
    setIsEditing(true);
  }
    
    return(
        <div>
            <TaskListInput onSubmit={addTask} />
            <div className='taskListContent'>
                {
                    // task dentro del parentesis seria un objeto que contiene el texto
                    tasks.map((task) =>
                    <Task
                        key={task.id}
                        id={task.id}
                        texto={task.texto}
                        completed={task.completed}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                        editTask ={editTask}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default TaskList;