import { Form, Formik } from "formik"
import * as Yup from "yup"
import { usePieces } from "../../../hooks/usePIeces"
import { useAuthStore } from "../../../store/useAuthStore"
import { Button } from "../../pure/Button/Button"
import { InputFormik } from "../../pure/InputFormik/InputFormik"
import styles from "./pieces-form.module.scss"

const initialValues = {
    a: 0,
    b: 0,
    c: 0,
    fecha: ""
}

export const PiecesForm = () => {
    const { isLoading, addPieces } = usePieces();
    const user = useAuthStore(state => state.user);

    const handleAddPieces = (values, { resetForm }) => {
        addPieces(values);
        resetForm();
    }

    return (
        <Formik
            initialValues={ initialValues }
            validationSchema={ Yup.object({
                a: Yup.number()
                    .integer("Este campo debe ser un número entero")
                    .typeError("Formato de número inválido")
                    .required("Este campo es requerido"),
                b: Yup.number()
                    .integer("Este campo debe ser un número entero")
                    .typeError("Formato de número inválido")
                    .required("Este campo es requerido"),
                c: Yup.number()
                    .integer("Este campo debe ser un número entero")
                    .typeError("Formato de número inválido")
                    .required("Este campo es requerido"),
                fecha: Yup.date()
                    .typeError("Formato de fecha inválido")
                    .required("Este campo es requerido")
            })}
            onSubmit={ handleAddPieces }
        >
            <Form className={ styles["pieces-form-container"] }>
                <div className={ styles["titles-container"]}>
                    <h1>Piezas</h1>
                    <h5 className={ styles["subtitle"] }>
                        Para la ciudad <b>{ user.nombre_ciudad.toUpperCase() }</b>
                    </h5>
                </div>
                <InputFormik
                    name="a"
                    label="A - Piezas"
                />
                <InputFormik
                    name="b"
                    label="B - Piezas"
                />
                <InputFormik
                    name="c"
                    label="C - Piezas"
                />
                <InputFormik
                    name="fecha"
                    label="Fecha"
                    type="date"
                />
                <Button type="submit" shadow={ true }>
                    Agregar
                </Button>
            </Form>
        </Formik>
    )
}
