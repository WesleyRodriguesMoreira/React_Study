import { useState } from 'react';
import AddTasks from './components/AddTasks';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Estuda",
      description: "Olá Mundo",
      isCompleted: true,
    },
    {
      id: 2,
      text: "Traalha",
      description: "Olá Mundo",
      isCompleted: true,
    },
    {
      id: 3,
      text: "Descansa",
      description: "Olá Mundo",
      isCompleted: true,
    },
  ]);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
        <div className="w-[500px]">
            <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciado de Tarefas</h1>
            <AddTasks/>
            <Tasks tasks={tasks}/>
        </div>

    </div>
  )
}

export default App
