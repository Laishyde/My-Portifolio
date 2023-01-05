import './App.css';
import Header from './Components/Header'
import Painel from './Components/Painel';
import { useCallback, useEffect, useState } from 'react';


const stages = [
  { id: 0, name: "start" },
  { id: 1, name: "painel" },
  { id: 2, name: "end" },
]



function App() {
  const [painelStage,setPainelStage] = useState(stages[0].name);

  const startPainel = () =>{
    setPainelStage(stages[2].name)
      
  }
  const retry = () => {
    setPainelStage(stages[0].name);
  }


  

  return (
    <div className="App">
      {painelStage === "painel" && <Painel/>}
      {painelStage === "start" && <Header startPainel={startPainel} />}
      {painelStage === "end" && <Painel retry={retry} />} 
    
    
  
    </div>
  );
}


export default App;
