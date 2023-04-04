import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import PriceList from './components/PriceList/PriceList'
import Dashboard from './components/Dashboard/Dashboard'

function App() {
  
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <NavBar></NavBar>
    <h1 className='text-center font-bold text-5xl my-2'>Hello,I'm Designed With Tailwind</h1>
    <PriceList></PriceList>
    <Dashboard></Dashboard>
        
    </div>
  )
}

export default App
