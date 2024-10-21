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

import AnimesAcao from './components/AnimesPage/AnimesSpaceGenere/AnimesAcao';
import AnimesTerror from './components/AnimesPage/AnimesSpaceGenere/AnimesTerror';
import AnimesComedia from './components/AnimesPage/AnimesSpaceGenere/AnimesComedia';
import AnimesRomance from './components/AnimesPage/AnimesSpaceGenere/AnimesRomance';
import AnimesEsporte from './components/AnimesPage/AnimesSpaceGenere/AnimesEsporte';
import AnimesMisterio from './components/AnimesPage/AnimesSpaceGenere/AnimesMisterio';
import EsquecerSenha from './pages/ForgotPassword';
import MudarSenha from './pages/ChangePassword';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Cadastro />} path='/cadastro' />
          <Route element={<Login />} path='/login' />
          <Route element={<EsquecerSenha />} path='/esquecer' />
          <Route element={<MudarSenha />} path='/recuperar' />
          <Route element={<Animes/>} path='/animes' />
          <Route element={<AnimesAcao/>} path='/animes/acao'/>
          <Route element={<AnimesTerror/>} path='/animes/terror' />
          <Route element={<AnimesComedia/>} path='/animes/comedia' />
          <Route element={<AnimesRomance/>} path='/animes/romance' />
          <Route element={<AnimesEsporte/>} path='/animes/esporte' />
          <Route element={<AnimesMisterio/>} path='/animes/misterio' />
          <Route element={<Comunidades />} path='/comunidades' />  
          <Route element={<ComunidadeChat />} path='/chat' />  
          <Route element={<Contatos/>} path='/contatos'/>
          <Route element={<Sinopse/>} path='/anime/:id'/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
