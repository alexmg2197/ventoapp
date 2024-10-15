import { HashRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="root">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
