import { ErrorMessage, Field } from "formik"
import PropTypes from "prop-types"
import styles from "./select-formik.module.scss"

/**
 * @component
 * @param {Object} props - Las propiedades del componente.
 * @param {string} props.label - Etiqueta del campo de selección.
 * @param {string} props.name - Nombre único del campo de selección.
 * @param {Array} props.options - Opciones para el campo de selección.
 * @param {any} props.options[].value - Valor de la opción.
 * @param {string} props.options[].name - Texto de la opción.
 *
 * @example
 * <SelectFormik
 *   label="Seleccionar Opción"
 *   name="opcion"
 *   options={[
 *     { value: 'opcion1', name: 'Opción 1' },
 *     { value: 'opcion2', name: 'Opción 2' },
 *     // ...
 *   ]}
 * />
 */
export const SelectFormik = ({ label, name, options=[] }) => {
    return (
        <div className={ styles["select-container"] }>
            <label className={ styles["label"]}>
                { label }
            </label>
            <Field name={ name } as="select" className={ styles["select"] }>
                { options.map(({ value, name }, i) => (
                    <option 
                        value={ value } 
                        key={ i }
                        className={ styles["option"] }
                    >
                        { name }
                    </option>
                ))}
            </Field>
            <p className={ styles["error"] }>
                <ErrorMessage name={ name }/>
            </p>
        </div>
    )
}

SelectFormik.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.any.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
}
