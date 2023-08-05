import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { URL_WORKERS, URL_LOGIN } from "../utils/endpoints";
import { useFetch } from "./useFetch"

export const useAuth = () => {
    const { isLoading, post, get } = useFetch();
    const navigate = useNavigate();
    const [
        setUser, 
        unsetUser
    ] = useAuthStore(state => [
        state.setUser, 
        state.unsetUser
    ]);

    const onSignup = async ({ username, password, city }) => {
        const body = { 
            user: username, 
            password,
            ciudad: {
                id: parseInt(city)
            }
        };
        const { error, data } = await post({ url: URL_WORKERS, options: { body } })
        if (error) {
            // Mostrar alerta de error
        } else {
            // Mostrar alerta de éxito
            setUser(data);
            navigate("/");
        }
    }

    const onLogin = async ({ username, password, city }) => {
        const queryParams = new URLSearchParams();
        queryParams.append("user", username);
        queryParams.append("password", password);
        queryParams.append("ciudadId", city);
        const url = `${URL_LOGIN}?${queryParams.toString()}`;

        const { error, data } = await get({ url })
        if (error) {
            // Mostrar alerta de error
        } else {
            // Mostrar alerta de éxito
            setUser(data);
            navigate("/");
        }
    }

    const onLogout = () => {
        unsetUser();
    }

    return {
        isLoading,
        onSignup,
        onLogin,
        onLogout
    }
}