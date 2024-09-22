import { useState } from "react";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col">

      <input 
        type="text"
        placeholder="Digite o título da tarefa" 
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />

      <input 
        type="text" 
        placeholder="Digite a descrição da tarefa" 
        value={description} 
        onChange={(event) => setDescription(event.target.value)}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
      />

      <button
       onClick={() => {
        if(!title.trim() || !description.trim()){
          return alert("Por favor, não deixe nenhum campo vazio")
        }
        onAddTaskSubmit(title, description);
        setTitle("");
        setDescription("");
       }} 
       className="bg-slate-500 text-white px-4 py-2 rounded-md">Adiciona</button>
    </div>
  );
}

export default AddTasks;
