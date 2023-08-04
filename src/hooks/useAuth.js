import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { URL_WORKERS } from "../utils/endpoints";
import { useFetch } from "./useFetch"

export const useAuth = () => {
    const { isLoading, post } = useFetch();
    const navigate = useNavigate();
    const [
        setUser, 
        unsetUser
    ] = useAuthStore(state => [
        state.setUser, 
        state.unsetUser
    ]);

    const onSignup = async ({ username, password }) => {
        const body = { user: username, password };
        // const { error, data } = await post({ url: URL_WORKERS, options: { body } })
        const error = false;
        const data = { id: 1, user: "Matias" }
        if (error) {
            // Mostrar alerta de error
        } else {
            // Mostrar alerta de éxito
            const user = {
                id: data.id,
                username: data.user
            }
            setUser(user);
            navigate("/");
        }
        console.log({ body })
    }

    const onLogin = async ({ username, password }) => {
        const body = { username, password };
        const { error, data } = await post({ url: URL_WORKERS, options: { body } })
        if (error) {
            // Mostrar alerta de error
        } else {
            // Mostrar alerta de éxito
            const user = {
                id: data.id,
                username: data.user
            }
            setUser(user);
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