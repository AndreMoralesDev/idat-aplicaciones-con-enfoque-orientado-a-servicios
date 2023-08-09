import PropTypes from "prop-types"
import styles from "./list-of-pieces.module.scss"

export const ListOfPieces = ({ pieces }) => {
    return pieces.map((piece, index) => (
        <article key={ index } className={ styles["list-of-pieces-container"]  }>
            <h3>{ piece.nombre }</h3>
            <table className={ styles["list-of-pieces-table"] }>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>C</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{ piece.a }</td>
                        <td>{ piece.b }</td>
                        <td>{ piece.c }</td>
                        <td>{ piece.abc }</td>
                    </tr>
                </tbody>
            </table>
        </article>
    ))
}

ListOfPieces.propTypes = {
    pieces: PropTypes.array.isRequired
}
