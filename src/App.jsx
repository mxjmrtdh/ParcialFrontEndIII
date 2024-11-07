import { useState } from 'react'
import './App.css'
import Formulario from './Components/Formulario'
import TarjetaColorElegido from './Components/TarjetaColorElegido'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Formulario></Formulario>
      {/* <TarjetaColorElegido></TarjetaColorElegido> */}
    </>
  )
}

export default App
