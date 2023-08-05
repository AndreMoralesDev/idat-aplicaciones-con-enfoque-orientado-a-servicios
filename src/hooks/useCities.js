import { URL_CITIES } from "../utils/endpoints";
import { useFetch } from "./useFetch"

export const useCities = () => {
    const { isLoading, get } = useFetch();

    const getAllCities = async () => {
        const res = await get({ url: URL_CITIES });
        if (res.error) {
            // Mensaje de error
            return []
        }
        return res.data;
    }

    const getCitiesForSelectFormik = async () => {
        const res = await get({ url: URL_CITIES });
        if (res.error) {
            // Mensaje de error
            return []
        }

        const cityFormat = (city) =>
            city[0].toUpperCase() + city.toLowerCase().slice(1);

        const selectFormat = res.data.map(({ id, nombre }) => ({
            value: id,
            name: cityFormat(nombre)
        }));

        return selectFormat;
    }

    return {
        isLoading,
        getAllCities,
        getCitiesForSelectFormik
    }
}