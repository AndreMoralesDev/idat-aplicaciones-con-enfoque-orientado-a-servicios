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

export const CitiesSelectFormik = ({ label="Ciudad", name, all = false }) => {
    const { isLoading, getCitiesForSelectFormik } = useCities();
    const [cities, setCities] = useState(initialCities);

    useEffect(() => {
        getCitiesForSelectFormik()
            .then(res => {
                if (all) {
                    setCities([
                        ...initialCities,
                        { name: "Todos", value: -1 },
                        ...res
                    ])
                } else setCities([ ...initialCities, ...res]);
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
    name: PropTypes.string.isRequired,
    all: PropTypes.bool
}
