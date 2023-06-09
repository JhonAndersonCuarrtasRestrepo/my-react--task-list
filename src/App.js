import logo from './logo.svg';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  return (
    <div className="App">
      <h1>Lista de tareas</h1> 

      <div className='task-list'>
        <TaskList/> 
      </div> 
    </div>
  );
}

export default App;
