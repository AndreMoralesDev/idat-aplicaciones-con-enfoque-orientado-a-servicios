import { Form, Formik } from "formik"
import * as Yup from "yup"
import PropTypes from "prop-types"
import { Button } from "../../pure/Button/Button"
import { CitiesSelectFormik } from "../../pure/CitiesSelectFormik/CitiesSelectFormik"
import { InputFormik } from "../../pure/InputFormik/InputFormik"
import styles from "./pieces-filter-form.module.scss"

const initialValues = {
    startDate: "",
    endDate: "",
    cityId: ""
}

/**
 * @component
 * 
 * @param {function} props.onSubmit - Función que ejecuta al enviarse el formulario
 */
export const PiecesFilterForm = ({ onSubmit }) => {
    return (
        <div className={ styles["pieces-filter-form-container"] }>
            <h3>Buscar piezas</h3>
            <Formik
                initialValues={ initialValues }
                validationSchema={ Yup.object({
                    startDate: Yup.date()
                        .typeError("Formato de fecha inválido")
                        .required("Este campo es requerido"),
                    endDate: Yup.date()
                        .typeError("Formato de fecha inválido")
                        .required("Este campo es requerido"),
                    cityId: Yup.number()
                        .typeError("Ciudad inválida")
                        .required("Este campo es requerido")
                })}
                onSubmit={ onSubmit }
            >
                <Form className={ styles["form-container"] }>
                    <InputFormik
                        label="Desde"
                        type="date"
                        name="startDate"
                        />
                    <InputFormik
                        label="Hasta"
                        type="date"
                        name="endDate"
                    />
                    <CitiesSelectFormik
                        name="cityId"
                        all={ true }
                    />
                    <Button 
                        type="submit" 
                        shadow={ true } 
                        className={ styles["submit"] }
                    >
                        Buscar
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}

PiecesFilterForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
