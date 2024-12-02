import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Animes from "./pages/AnimesPage";
import Comunidades from "./pages/Communities";
import ComunidadeChat from "./pages/CommunityChat";
import Contatos from "./pages/Contatos";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cadastro from "./pages/SignUp";
import Sinopse from "./pages/Sinopse";

import AnimesAcao from "./components/AnimesPage/AnimesSpaceGenere/AnimesAcao";
import AnimesComedia from "./components/AnimesPage/AnimesSpaceGenere/AnimesComedia";
import AnimesEsporte from "./components/AnimesPage/AnimesSpaceGenere/AnimesEsporte";
import AnimesMisterio from "./components/AnimesPage/AnimesSpaceGenere/AnimesMisterio";
import AnimesRomance from "./components/AnimesPage/AnimesSpaceGenere/AnimesRomance";
import AnimesTerror from "./components/AnimesPage/AnimesSpaceGenere/AnimesTerror";
import ResultadosPesquisa from "./components/SearchResults";
import Usuario from "./components/UserPage";
import MudarSenha from "./pages/ChangePassword";
import EsquecerSenha from "./pages/ForgotPassword";
import { ProfileImageProvider } from "./services/PicContext";
import { UserProvider } from "./services/UserContext";
import { AuthProvider } from "./services/Auth";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const apiUrl = process.env.REACT_APP_BACKEND_URL;
  const environment = process.env.REACT_APP_ENVIRONMENT;

  console.log("API_URL", apiUrl);
  console.log("ENVIRONMENT", environment);

  return (
    <AuthProvider>
      <UserProvider>
        <ProfileImageProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<Home />} path="/" />
              <Route element={<Cadastro />} path="/cadastro" />
              <Route element={<Login />} path="/login" />
              <Route element={<EsquecerSenha />} path="/esquecer" />
              <Route element={<MudarSenha />} path="/recuperar" />
              <Route
                element={
                  <ProtectedRoute>
                    <Comunidades />
                  </ProtectedRoute>
                }
                path="/comunidades"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <ComunidadeChat />
                  </ProtectedRoute>
                }
                path="/chat/:chatId"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <Animes />
                  </ProtectedRoute>
                }
                path="/animes"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <AnimesAcao />
                  </ProtectedRoute>
                }
                path="/animes/acao"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <AnimesTerror />
                  </ProtectedRoute>
                }
                path="/animes/terror"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <AnimesComedia />
                  </ProtectedRoute>
                }
                path="/animes/comedia"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <AnimesRomance />
                  </ProtectedRoute>
                }
                path="/animes/romance"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <AnimesEsporte />
                  </ProtectedRoute>
                }
                path="/animes/esporte"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <AnimesMisterio />
                  </ProtectedRoute>
                }
                path="/animes/misterio"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <ResultadosPesquisa />
                  </ProtectedRoute>
                }
                path="/resultados"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <Sinopse />
                  </ProtectedRoute>
                }
                path="/anime/:id"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <Contatos />
                  </ProtectedRoute>
                }
                path="/contatos"
              />
              <Route
                element={
                  <ProtectedRoute>
                    <Usuario />
                  </ProtectedRoute>
                }
                path="/usuario"
              />
            </Routes>
          </BrowserRouter>
        </ProfileImageProvider>
      </UserProvider>
    </AuthProvider>
  );
}

export default App;
