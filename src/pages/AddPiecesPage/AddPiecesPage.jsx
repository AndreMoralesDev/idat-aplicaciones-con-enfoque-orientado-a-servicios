import { PiecesForm } from "../../components/form/PiecesForm/PiecesForm"
import styles from "./add-pieces-page.module.scss"

export const AddPiecesPage = () => {
    return (
        <section className={ styles["add-pieces-page-container"]}>
            <PiecesForm />
        </section>
    )
}
