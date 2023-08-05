import { ErrorMessage, Field } from 'formik'
import PropTypes from "prop-types"
import styles from "./input-formik.module.scss"

/**
 * @component
 *
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.label - Etiqueta del campo de entrada.
 * @param {string} [props.type] - Tipo del campo de entrada (por defecto: 'text').
 * @param {string} props.name - Nombre único del campo de entrada.
 *
 * @example
 * <InputFormik
 *    label="Nombre"
 *    type="text"
 *    name="nombre"
 * />
 */

export const InputFormik = ({ label, type="text", name }) => {
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

InputFormik.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    name: PropTypes.string.isRequired
}
