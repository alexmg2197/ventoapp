import 'admin-lte/dist/css/adminlte.min.css';   // Estilos de AdminLTE
import 'admin-lte/dist/js/adminlte.min.js';     // Scripts de AdminLTE
import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Inicio from './Components/Inicio/Inicio';
import './App.css';

function App() {
  return (
    <div className="root">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/Inicio" element={<Inicio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
