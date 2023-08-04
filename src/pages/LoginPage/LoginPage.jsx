import { LoginForm } from "../../components/form/LoginForm/LoginForm"
import styles from "./login-page.module.scss"

export const LoginPage = () => {
    return (
        <section className={ styles["login-page-container"]}>
            <LoginForm />
        </section>
    )
}
