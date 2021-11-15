import { useEffect, useRef, useState } from "react"
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product,
    onChange?: (args: onChangeArgs) => void
    value?: number
    initialValues?: InitialValues
}

const useProduct = ({ product, value = 0, initialValues, onChange }: useProductArgs) => {

    const [counter, setCounter] = useState<number>(initialValues?.count || value)
    const isMounted = useRef(false)


    const increaseBy = (value: number) => {

        if (initialValues?.maxCount && counter + value > initialValues.maxCount) return

        const newValue = Math.max(counter + value, 0)
        setCounter(newValue)

        onChange && onChange({ count: newValue, product })
    }

    const reset = () => {
        setCounter(initialValues?.count || value)
    }

    useEffect(() => {
        if (!isMounted.current) return;
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, []);

    return {
        counter,
        // isMaxCountReached: initialValues?.maxCount && counter >= initialValues.maxCount,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseBy,
        reset
    }

}

export default useProduct;