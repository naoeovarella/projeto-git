import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Projeto Patrick</h1>
      <p>Projeto para atividade de versionamento com Git.</p>

      <h2>Contador: {count}</h2>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>Aumentar</button>
        <button onClick={() => setCount(count - 1)}>Diminuir</button>
      </div>
    </div>
  );
}

export default App;
