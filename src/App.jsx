import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './assets/Navbar'
import Employees from './assets/employees'
import Clients from './assets/Clients'
import Footer from './assets/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <Navbar/>
        <Employees/>
        <Clients/>
        <Footer/>
       </div>
    </>
  )
}

export default App
