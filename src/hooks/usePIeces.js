import { useAuthStore } from "../store/useAuthStore";
import { URL_PIECES } from "../utils/endpoints";
import { useFetch } from "./useFetch";

export const usePieces = () => {
    const { isLoading, get, post } = useFetch();
    const user = useAuthStore(state => state.user);

    const getAllPieces = async () => {
        const { error, data } = await get(URL_PIECES);

        if (error) {
            // Mensaje de error, no se pudieron agregar las piezas
            return []
        }

        return data.data;
    }

    const getPiecesWithFilters = async ({ startDate, endDate, cityId }) => {
        const queryParams = new URLSearchParams();
        queryParams.append("startDate", startDate);
        queryParams.append("endDate", endDate);

        if (cityId === "-1") {
            // Si el usuario seleccionó ver todas las ciudades
            const url = `${URL_PIECES}/todes?${queryParams.toString()}`;

            const { error, data } = await get({ url });
            if (error) {
                /// Mensaje de error
                return []
            }

            // En el formato de respuesta no existe un estándar, si hay resultados regresa un array caso contrario, un objeto con data vacía
             return Array.isArray(data) ? data : data.data;
        } else {
            // En caso haya especificado la ciudad
            queryParams.append("ciudadId", cityId);
            const url = `${URL_PIECES}/filtrar?${queryParams.toString()}`;
            const { error, data } = await get({ url });

            if (error) {
                /// Mensaje de error
                return []
            }

            return data;
        }
    }

    const addPieces = async ({ a = 0, b = 0, c = 0, fecha="" }) => {
        const body = {
            a: parseInt(a),
            b: parseInt(b),
            c: parseInt(c),
            fecha,
            trabajador: {
                id: user.id
            },
            ciudad: {
                id: user.id_ciudad
            }
        };
        const { error } = await post({ url: URL_PIECES, options: { body } });

        if (error) {
            // Mensaje de error, no se pudieron agregar las piezas
        } else {
            // Mensaje de éxito, piezas agregadas
            console.log("Pieza agregada")
        }
    }

    return {
        getAllPieces,
        isLoading,
        addPieces,
        getPiecesWithFilters
    }
}