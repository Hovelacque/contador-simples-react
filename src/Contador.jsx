import { useState } from "react"

export default function Contador({ title }) {
    const [count, setCount] = useState(0);

    return (
        <button onClick={() => {
            setCount(count + 1)
        }}>{title}: {count}</button>
    )
}