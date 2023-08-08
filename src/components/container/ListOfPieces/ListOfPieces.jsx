import PropTypes from "prop-types"
import styles from "./list-of-pieces.module.scss"

export const ListOfPieces = ({ pieces }) => {
    return (
        <table className={ styles["list-of-pieces-container"] }>
            <thead>
                <tr>
                    <th>A</th>
                    <th>B</th>
                    <th>C</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                { pieces.length > 0
                    ? pieces.map((piece, index) => (
                        <tr key={ index }>
                            <td>{ piece.a }</td>
                            <td>{ piece.b }</td>
                            <td>{ piece.c }</td>
                            <td>{ piece.abc }</td>
                        </tr>
                    )) : (
                        <tr>
                            <td colSpan={4}>Sin resultados</td>
                        </tr>
                    )}
            </tbody>
        </table>
    )
}

ListOfPieces.propTypes = {
    pieces: PropTypes.array.isRequired
}
