/* eslint-disable react/prop-types */
import styles from "./button.module.scss"

export const Button = ({ children, shadow=false, className="", ...props }) => {
    return (
        <button 
            type="button"
            className={`
                ${ styles ["button"] } 
                ${ shadow ? styles["shadow"] : "" } 
                ${ className }
            `}
            { ...props }
        >
            { children }
        </button>
    )
}
