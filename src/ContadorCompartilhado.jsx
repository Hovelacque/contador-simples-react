import { useState } from "react"

export default function ContadorCompatilhado({ title = 'Contador Compartilhado', count, change }) {
    return (
        <button onClick={change}>{title}: {count}</button>
    )
}