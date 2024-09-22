import { useState } from 'react';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';
import {v4} from 'uuid';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estuda",
      description: "Olá Mundo",
      isCompleted: true,
    },
    {
      id: 2,
      title: "Traalha",
      description: "Olá Mundo",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Descansa",
      description: "Olá Mundo",
      isCompleted: true,
    },
  ]);

  // Atualização/CheckList de Tarefas
  function onTaskClick(taskId){
    const newTask = tasks.map(task => {
      if(task.id == taskId){
        return {...task, isCompleted: !task.isCompleted};

      }else{
        return task; 
      }
    });
    setTasks(newTask);
  }

  // Delete de Tarefas
  function onDeleteTaskClick(taskId){
    const newTask = tasks.filter(task => task.id !== taskId);
    setTasks(newTask);
  }

  // Adiciona Tarefas
  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px] space-y-4">
            <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciado de Tarefas</h1>
            <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
            <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>
        </div>

    </div>
  )
}

export default App
