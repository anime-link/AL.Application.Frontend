import './App.css';
import Cadastro from './pages/SignUp';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Cadastro />} path='/cadastro' />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
