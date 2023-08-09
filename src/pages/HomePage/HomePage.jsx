import {  useState } from "react"
import { Link } from "react-router-dom"
import { ListOfPieces } from "../../components/container/ListOfPieces/ListOfPieces";
import { PiecesFilterForm } from "../../components/form/PiecesFilterForm/PiecesFilterForm";
import { Button } from "../../components/pure/Button/Button"
import { usePieces } from "../../hooks/usePIeces";
import { useAuthStore } from "../../store/useAuthStore"
import styles from "./home-page.module.scss"

export const HomePage = () => {
    const unsetUser = useAuthStore(state => state.unsetUser);
    const { isLoading, getPiecesWithFilters } = usePieces();
    const [pieces, setPieces] = useState([]);

    const filterPieces = async ({ startDate, endDate, cityId }) => {
        const results = await getPiecesWithFilters({ startDate, endDate, cityId })
        setPieces(results);
    }

    return (
        <section className={ styles["home-page-container"] }>
            <PiecesFilterForm onSubmit={ filterPieces } />
            <ListOfPieces pieces={ pieces }/>
            <Button 
                onClick={ ()=> unsetUser() }
                className={ styles["logout"] }
            >
                Logout
            </Button>
        </section>
    )
}
