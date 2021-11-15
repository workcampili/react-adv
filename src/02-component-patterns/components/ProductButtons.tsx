import { CSSProperties, useCallback, useContext } from "react"
import { ProductContext } from "./ProductCard"
import styles from '../styles/styles.module.css'

export interface Props {
    className?: string,
    style?: CSSProperties
}

export const ProductButtons = ({ className, style }: Props) => {

    //TODO: maxCount
    const { increaseBy, counter, maxCount } = useContext(ProductContext)


    // TODO: isMaxReached = useCallback(() => { }   , [counter,maxCount])  
    //true if count === maxCount
    //false if count < maxCount 

    const isMaxReached = useCallback(() => {
        if (maxCount && counter >= maxCount) {
            return true
        }
        return false;
    }, [counter, maxCount])



    return (
        <div className={`${styles.buttonsContainer} ${className}`}
            style={style}
        >
            <button
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            > - </button>
            <div className={styles.countLabel}>{counter}</div>
            <button
                className={`${styles.buttonAdd} ${isMaxReached() && styles.disabled}`}
                onClick={() => increaseBy(1)}
            > + </button>
        </div>
    )
}