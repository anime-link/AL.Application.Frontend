import "./App.css";
import Cadastro from "./pages/SignUp";
import Home from "./pages/Home";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/Login";
import Comunidades from "./pages/Communities";
import Animes from "./pages/AnimesPage";
import ComunidadeChat from "./pages/CommunityChat";
import Contatos from "./pages/Contatos";
import Sinopse from "./pages/Sinopse";

import AnimesAcao from "./components/AnimesPage/AnimesSpaceGenere/AnimesAcao";
import AnimesTerror from "./components/AnimesPage/AnimesSpaceGenere/AnimesTerror";
import AnimesComedia from "./components/AnimesPage/AnimesSpaceGenere/AnimesComedia";
import AnimesRomance from "./components/AnimesPage/AnimesSpaceGenere/AnimesRomance";
import AnimesEsporte from "./components/AnimesPage/AnimesSpaceGenere/AnimesEsporte";
import AnimesMisterio from "./components/AnimesPage/AnimesSpaceGenere/AnimesMisterio";
import EsquecerSenha from "./pages/ForgotPassword";
import MudarSenha from "./pages/ChangePassword";
import ResultadosPesquisa from "./components/SearchResults";
import Usuario from "./components/UserPage";
import { ProfileImageProvider } from "./services/PicContext";
import { UserProvider } from "./services/UserContext";

function App() {
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  const environment = process.env.REACT_APP_ENVIRONMENT;

  console.log("API_URL", apiUrl);
  console.log("ENVIRONMENT", environment);

  return (
    <UserProvider>
      <ProfileImageProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Home />} path="/" />
            <Route element={<Cadastro />} path="/cadastro" />
            <Route element={<Login />} path="/login" />
            <Route element={<EsquecerSenha />} path="/esquecer" />
            <Route element={<MudarSenha />} path="/recuperar" />
            <Route element={<Comunidades />} path="/comunidades" />
            <Route element={<ComunidadeChat />} path="/chat/:chatId" />
            <Route element={<Animes />} path="/animes" />
            <Route element={<AnimesAcao />} path="/animes/acao" />
            <Route element={<AnimesTerror />} path="/animes/terror" />
            <Route element={<AnimesComedia />} path="/animes/comedia" />
            <Route element={<AnimesRomance />} path="/animes/romance" />
            <Route element={<AnimesEsporte />} path="/animes/esporte" />
            <Route element={<AnimesMisterio />} path="/animes/misterio" />
            <Route element={<ResultadosPesquisa />} path="/resultados" />
            <Route element={<Sinopse />} path="/anime/:id" />
            <Route element={<Contatos />} path="/contatos" />
            <Route element={<Usuario />} path="/usuario" />
          </Routes>
        </BrowserRouter>
      </ProfileImageProvider>
    </UserProvider>
  );
}

export default App;
