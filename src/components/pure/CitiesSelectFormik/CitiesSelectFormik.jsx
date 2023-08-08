import { useEffect, useState } from "react"
import { useCities } from "../../../hooks/useCities";
import { SelectFormik } from "../SelectFormik/SelectFormik"
import PropTypes from "prop-types"

const initialCities = [
    { 
        value: "", 
        name: "Seleccionar"
    }
];

export const CitiesSelectFormik = ({ label="Ciudad", name }) => {
    const { isLoading, getCitiesForSelectFormik } = useCities();
    const [cities, setCities] = useState(initialCities);

    useEffect(() => {
        getCitiesForSelectFormik()
            .then(res => {
                setCities([ ...initialCities, ...res]);
            });
    }, [])

    return (
        <SelectFormik
            label={ label }
            name={ name }
            options={ cities }
        />
    )
}

CitiesSelectFormik.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired
}
