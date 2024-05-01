import { useState } from 'react'
import Contador from './Contador'
import ContadorCompatilhado from './ContadorCompartilhado'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Contador title='Contador 1 simples' />
      <Contador title='Contador 2 simples' />
      <br />
      <label>Contador compartilhado</label>
      <br />
      <label>{count}</label>
      <br />
      <ContadorCompatilhado count={count} change={() => setCount(count + 1)} />
      <ContadorCompatilhado count={count} change={() => setCount(count + 1)} />
    </>
  )
}

export default App
