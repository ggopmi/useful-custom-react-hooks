import {useState} from 'react'

export default function useToggle(defValue) {
    const [value, setValue] = useState(defValue)

    const toggleValue = 
        (value) => setValue((currentValue) => typeof value === "boolean" ? value : !currentValue)

    return [value, toggleValue]
}