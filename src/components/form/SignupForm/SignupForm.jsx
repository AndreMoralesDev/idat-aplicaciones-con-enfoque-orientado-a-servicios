import * as Yup from "yup"
import { Formik, Form } from "formik"
import { useAuth } from "../../../hooks/useAuth";
import styles from "./signup.module.scss"
import { Link } from "react-router-dom";
import { InputFormik } from "../../pure/InputFormik/InputFormik";
import { SelectFormik } from "../../pure/SelectFormik/SelectFormik";
import { useEffect, useState } from "react";
import { useCities } from "../../../hooks/useCities";

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

export const SignupForm = () => {
    const { isLoading, onSignup } = useAuth();
    const { isLoading: isLoadingCities, getCitiesForSelectFormik } = useCities();
    const [cities, setCities] = useState(initialCities);

    const handleSubmit = (values , { resetForm }) => {
        onSignup(values);
        resetForm();
    }

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
                    .typeError("Ciudad inválida")
                    .required("Este campo es requerido")
            })}
            onSubmit={ handleSubmit }
        >
            <Form className={ styles["signup-form-container"] } autoComplete="off">
                <h1>Registrarse</h1>
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
