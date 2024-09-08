import './App.css';
import { Route, Router, Routes } from 'react-router-dom';
import { Login } from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
