import { useAuthStore } from "../../store/useAuthStore"

export const HomePage = () => {
    const unsetUser = useAuthStore(state => state.unsetUser);
    return (
        <section>
            <button onClick={ ()=> unsetUser() }>Logout</button>
        </section>
    )
}
