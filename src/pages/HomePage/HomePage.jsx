import { useAuthStore } from "../../store/useAuthStore"
import styles from "./home-page.module.scss"

export const HomePage = () => {
    const unsetUser = useAuthStore(state => state.unsetUser);
    return (
        <section className={ styles["home-page-container"] }>

            <button 
                className={ styles["button"] }
                onClick={ ()=> unsetUser() }
            >
                Logout
            </button>
        </section>
    )
}
