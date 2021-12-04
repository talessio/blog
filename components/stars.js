import styles from "./stars.module.css"
import React from "react"

const StarRating = ({ value, onStarClick, readOnly }) => {
    const [hover, setHover] = React.useState(0)
    return (
        <div className={styles.rating}>
            {[...Array(5)].map((star, index) => {
                index += 1
                if (readOnly != true) {
                    return (
                        <button
                            type={styles.button}
                            key={index}
                            className={index <= (hover || value) ? "on" : "off"}
                            onClick={() => onStarClick(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => (setHover(value))}
                        >
                            <span
                                className={styles.star}
                                id='star'
                            >
                                ★
                            </span>
                        </button>
                    )
                } else {
                    return (
                        <span className={styles.starReadOnly}>
                            <span
                                className={index <= (hover || value) ? "on" : "off"}
                                id='star'
                            >
                                ★
                            </span>
                        </span>
                    )
                }
            })}
        </div >

    )
}

export default (StarRating);
