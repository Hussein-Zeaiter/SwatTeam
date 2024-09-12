import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Main } from './components/Main'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register/>}/>
        <Route path='/main' element={<Main/>}/>
      </Routes>
    </Router>
  );
}

export default App;
