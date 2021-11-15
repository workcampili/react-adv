import { createContext, ReactElement, CSSProperties } from 'react';

import useProduct from '../hooks/useProduct';
import { InitialValues, onChangeArgs, Product, ProductContextProps, ProductCardHandlers } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css'

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext



export interface Props {
    product: Product,
    // children?: ReactElement | ReactElement[] ;
    children: (args: ProductCardHandlers) => JSX.Element
    className?: string
    style?: CSSProperties
    onChange?: (args: onChangeArgs) => void;
    value?: number
    initialValues?: InitialValues
}

export const ProductCard = ({ children, product, className, style, value, initialValues, onChange }: Props) => {

    const { counter, maxCount, increaseBy, reset, isMaxCountReached }
        = useProduct({ onChange, product, value, initialValues });

    return (
        <Provider value={{
            counter,
            product,
            maxCount,
            increaseBy,

        }}>
            <div className={`${styles.productCard}  ${className}`}
                style={style}>
                {
                    children({
                        count: counter,
                        isMaxCountReached,
                        maxCount: initialValues?.maxCount,
                        product,
                        increaseBy,
                        reset
                    })
                }
            </div>
        </Provider>
    )
}
