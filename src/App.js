import './App.css';
import Cadastro from './pages/SignUp';
import Home from './pages/Home'
import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Comunidades from './pages/Communities';
import Animes from './pages/AnimesPage'
import ComunidadeChat from './pages/CommunityChat';
import Contatos from "./pages/Contatos";
import Sinopse from './pages/Sinopse';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cadastro />} path='/cadastro' />
          <Route element={<Login />} path='/login' />
          <Route element={<Comunidades />} path='/comunidades' />
          <Route element={<Animes/>} path='/animes' />
          <Route element={<Comunidades />} path='/comunidades' />  
          <Route element={<ComunidadeChat />} path='/chat' />  
          <Route element={ <Contatos/>} path='/contatos'/>
          <Route element={ <Sinopse/>} path='/sinopse'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
