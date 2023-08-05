import * as Yup from "yup"
import { Formik, Form } from "formik"
import { useAuth } from "../../../hooks/useAuth"
import { Link } from "react-router-dom"
import { InputFormik } from "../../pure/InputFormik/InputFormik"
import styles from "./signup.module.scss"
import { useCities } from "../../../hooks/useCities"
import { useEffect, useState } from "react"
import { SelectFormik } from "../../pure/SelectFormik/SelectFormik"

const initialValues = {
    username: "",
    password: "",
    city: ""
}

const initialCities = [
    { 
        value: "", 
        name: "Seleccionar"
    }
];

export const LoginForm = () => {
    const { isLoading, onLogin } = useAuth();
    const { isLoading: isLoadingCities, getCitiesForSelectFormik } = useCities();
    const [cities, setCities] = useState(initialCities);

    useEffect(() => {
        getCitiesForSelectFormik()
            .then(res => {
                setCities([ ...initialCities, ...res]);
            });
    }, [])

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
                city: Yup.number()
                    .required("Este campo es requerido")
            })}
            onSubmit={ onLogin }
        >
            <Form className={ styles["login-form-container"] } autoComplete="off">
                <h1>Iniciar sesión</h1>
                <InputFormik
                    label="Nombre"
                    name="username"
                />
                <InputFormik
                    label="Contraseña"
                    type="password"
                    name="password"
                />
                <SelectFormik
                    label="Ciudad"
                    name="city"
                    options={ cities }
                />
                <input 
                    type="submit" 
                    value="Ingresar"
                    className={ styles["submit"] }
                />
                <div className={ styles["extra-options-container"] }>
                    <Link>Olvidé mi contraseña</Link>
                    <Link to="/signup" className={ styles["signup"] }>
                        Registrarse
                    </Link>
                </div>
            </Form>
        </Formik>
    )
}
