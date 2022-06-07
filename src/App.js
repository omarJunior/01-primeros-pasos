import './App.css';
import { MiComponente } from './MiComponente';
import { SegundoComponente } from './SegundoComponente';
import { TercerComponente } from './TercerComponente';

function App() {

  const ficha_medica = {
    altura: "185cm",
    grupo: "a+",
    estado: "Excelente",
    alergias: "Ninguna"
  }

  const numero = 1234

  return (
    <div className="App">

      <div className="componentes">
      <MiComponente />
      <hr/>
      <SegundoComponente />
      <hr />
      <TercerComponente ficha={ficha_medica}/>
      </div>
    </div>
  );
}

export default App;
