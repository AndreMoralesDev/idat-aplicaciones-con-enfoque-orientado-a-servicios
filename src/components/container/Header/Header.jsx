import { NavLink } from "react-router-dom"
import { useAuthStore } from "../../../store/useAuthStore"
import styles from "./header.module.scss"

export const Header = () => {
    const user = useAuthStore(state => state.user);
    return (
        <header className={ styles["header-container"] }>
            <div className={ styles["header"] }>
                <h2>
                    <NavLink to="/">Company</NavLink>
                </h2>
                <nav className={ styles["main-navigation"] }>
                    { !user && (<>
                        <NavLink to="/signup">Signup</NavLink>
                        <NavLink to="/login">Login</NavLink>
                    </>)}
                </nav>
            </div>
        </header>
    )
}
