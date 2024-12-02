import { Navigate } from "react-router-dom";
import { useAuth } from "../../services/Auth";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth();

    // Redireciona para a página de login, caso ele tente acessar outra página sem estar logado
    return isAuthenticated ? children : <Navigate to={'/'} />
}

export default ProtectedRoute;