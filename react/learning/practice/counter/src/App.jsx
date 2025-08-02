import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode]=useState(false)
  const incrementer=()=>{
    return setCount(count+1)
  }
  const decrementer=()=>{
    return setCount(count-1)
  }
  const resetter=()=>{
    return setCount(0)
  }
  const toggleDarkMode=()=>{
    setDarkMode(!darkMode)
  }
  const appStyle={
    backgroundColor:darkMode ? "#121212":"#ffffff",
    color: darkMode ? "#ffffff":"#000000",
    transition: "all 2s ease",
    height: "100vh",
    width: "100vw",
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
  }
  const boxStyle = {
    border:darkMode? "2px solid white":"2px solid black",
    padding: "1rem",
    margin: "1rem",
    width: "50%",
    borderRadius: "20px",
    textAlign: "center",
  }
  return (
    <div style={appStyle}>
      <div style={{...boxStyle}}>{count}</div>
      <div onClick={incrementer} style={boxStyle}> <h3>Incrementer</h3> </div>
      <div onClick={decrementer} style={boxStyle}><h3>Decrementer</h3></div>
      <div onClick={resetter} style={boxStyle}><h3>Reset</h3></div>
      <div className='button toggle' onClick={toggleDarkMode} style={boxStyle}>Toggle {darkMode ? "Light":"Dark"}</div>
    </div>
  )
}

export default App
