import './App.css';
import Cadastro from './pages/SignUp';
import Home from './pages/Home'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comunidades from './pages/Communities';
import Animes from './pages/AnimesPage'


function App() {
  return (
    <body>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cadastro />} path='/cadastro' />
        
          <Route element={<Login />} path='/login' />
            
          <Route element={<Comunidades />} path='/comunidades' />

          <Route element={<Animes/>} path='/animes' />
          
        </Routes>
      </BrowserRouter>
    </body>
  );
}

export default App;
