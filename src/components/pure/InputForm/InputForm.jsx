import { ErrorMessage, Field } from 'formik'
import styles from "./input-form.module.scss"
import PropTypes from "prop-types"

/**
 * @param {string} props.label - Nombre visible del input
 * @param {string} props.type - Tipo del input
 * @param {string} props.name - Nombre del input
 * @returns {JSX.Element} - Input estilizado
 */

export const InputForm = ({ label, type="text", name }) => {
    return (
        <div className={ styles["input-container"]}>
            <label className={ styles["label"]}>
                { label }
            </label>
            <Field
                type={ type } 
                name={ name }
                className={ styles["input"] }
            />
            <p className={ styles["error"]}>
                <ErrorMessage name={ name } />
            </p>
        </div>
    )
}

InputForm.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired
}
