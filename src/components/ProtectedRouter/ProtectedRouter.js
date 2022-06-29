import { useSelector } from "react-redux";
import {
    useLocation,
    Navigate,
} from "react-router-dom";
export const ProtectedRouter = ({ children }) => {
    const login = useSelector(state => state.login)
    const location = useLocation();

    if (!login) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}