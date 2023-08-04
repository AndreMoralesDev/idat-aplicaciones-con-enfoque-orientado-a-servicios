import * as Yup from "yup"
import { Formik, Form } from "formik"
import { useAuth } from "../../../hooks/useAuth";
import styles from "./signup.module.scss"
import { Link } from "react-router-dom";
import { InputForm } from "../../pure/InputForm/InputForm";

const initialValues = {
    username: "",
    password: ""
}

export const SignupForm = () => {
    const { onSignup } = useAuth();

    const handleSubmit = (values , { resetForm }) => {
        onSignup(values);
        resetForm();
    }

    return (
        <Formik
            initialValues={ initialValues }
            validationSchema={ Yup.object({
                username: Yup.string()
                    .max(50, "Nombre demasiado largo")
                    .required("Este campo es requerido"),
                password: Yup.string()
                    .min(8, "Contraseña demasiado corta")
                    .max(50, "Contraseña demasiada larga")
                    .required("Este campo es requerido"),
            })}
            onSubmit={ handleSubmit }
        >
            <Form className={ styles["signup-form-container"] } autoComplete="off">
                <h1>Registrarse</h1>
                <InputForm
                    label="Nombre"
                    name="username"
                />
                <InputForm
                    label="Contraseña"
                    type="password"
                    name="password"
                />
                <input 
                    type="submit" 
                    value="Registrarse"
                    className={ styles["submit"] }
                />
                <div className={ styles["extra-options-container"] }>
                    <Link>Olvidé mi contraseña</Link>
                    <Link to="/login" className={ styles["signup"] }>
                        Iniciar sesión
                    </Link>
                </div>
            </Form>
        </Formik>
    )
}
