import './App.css';
import HelloWord from './components/HelloWord';
import SayMyName from './components/SayMyName';
import Pessoas from './components/Pessoas';
import Frase from './components/Frase';

function App() {

  return (
    <div className="App">
      <Frase/>
      
      <Pessoas name="Pia" idade="18 anos" profissao="Programado" foto="https://via.placeholder.com/150"/>
    </div>
  );
}

export default App;
