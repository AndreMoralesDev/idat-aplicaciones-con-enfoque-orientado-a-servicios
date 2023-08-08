import { useAuthStore } from "../store/useAuthStore";
import { URL_PIECES } from "../utils/endpoints";
import { useFetch } from "./useFetch";

export const usePieces = () => {
    const { isLoading, get, post } = useFetch();
    const user = useAuthStore(state => state.user);

    const getAllPieces = async () => {
        const res = await get(URL_PIECES);

        if (res.error) {
            // Mensaje de error, no se pudieron agregar las piezas
            return []
        }

        return res.data;
    }

    const getPiecesWithFilters = async ({ startDate, endDate, cityId }) => {
        const queryParams = new URLSearchParams();
        queryParams.append("startDate", startDate);
        queryParams.append("endDate", endDate);
        queryParams.append("ciudadId", cityId);
        const url = `${URL_PIECES}/filtrar?${queryParams.toString()}`;

        // Falta refactorizar
        const res = await fetch(url);
        // const res = await get({ url });
        if (!res.ok) {
            /// Mensaje de error
            return []
        }
       
        const json = await res.json();
        return json;
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
        const res = await post({ url: URL_PIECES, options: { body } });

        if (res.error) {
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