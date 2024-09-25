import { useSearchParams } from "react-router-dom";

function TasksPages(){
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return(
        <div className="h-screen w-screen bg-slate-500 p-6">
            <div className="w-[500px] space-y-4">
                <h1 className="text-3xl text-slate-100 font-bold text-center">Detalhes da Tarefas</h1>
            </div>

            <div className="bg-slate-400 p-4 rounded-md">
                <h2 className="text-xl text-white font-bold text-slate-600">{title}</h2>
                <p className="text-state-600">{description}</p>
            </div>
        </div>
    );
}

export default TasksPages;