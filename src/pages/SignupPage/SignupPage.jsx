import { SignupForm } from "../../components/form/SignupForm/SignupForm"
import styles from "./signup-page.module.scss"

export const SignupPage = () => {
    return (
        <section className={ styles["signup-page-container"] }>
            <SignupForm />
        </section>
    )
}
