import styles from "./stars.module.css"
import React, { useState } from "react"

const StarRating = () => {
    const [rating, setRating] = useState(0)
    const [hover, setHover] = useState(0)
    return (
        <div className={styles.rating}>
            {[...Array(5)].map((star, index) => {
                index += 1
                return (
                    <button
                    type={styles.button}
                    key={index}
                    className={index <= (hover || rating) ? "on" : "off"}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                    >
                        <span
                            className={styles.star}
                            id='star'
                            >
                            ★
                        </span>
                    </button>
                )
            })}
        </div>
    )
}

// const FinalRate = () => {
//     const finalIndex = 6
//     return (
//         finalIndex
//     )
// }

export default (StarRating);