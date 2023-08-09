import { URL_CITIES } from "../utils/endpoints";
import { useFetch } from "./useFetch"

export const useCities = () => {
    const { isLoading, get } = useFetch();

    const getAllCities = async () => {
        const { error, data } = await get({ url: URL_CITIES });
        if (error) {
            // Mensaje de error
            return []
        }
        return data.data;
    }

    const getCitiesForSelectFormik = async () => {
        const { error, data } = await get({ url: URL_CITIES });
        if (error) {
            // Mensaje de error
            return []
        }
        
        const selectFormat = data.data.map(({ id, nombre }) => ({
            value: id,
            name: nombre
        }));

        return selectFormat;
    }

    return {
        isLoading,
        getAllCities,
        getCitiesForSelectFormik
    }
}