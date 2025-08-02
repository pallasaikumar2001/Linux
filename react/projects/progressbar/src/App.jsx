import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div 
      contentEditable="true"
      onInput={(e)=>setCount(Number(e.target.innerText))}
      style={{border:"1px solid black",width:"150px",height:"50px"}}></div>
      
      <div style={{height:"30px",width:"400px",border:"1px solid black"}}>
        <div style={{height:"100%",width:`${400*count/100}px`,maxWidth:"400px", backgroundColor:"green"}}></div>
      </div>
      <div style={{height:"30px",width:"400px",border:"1px solid black"}}>
        <div style={{height:"100%",width:`${400*2*count/100}px`,maxWidth:"400px", backgroundColor:"green"}}></div>
      </div>
      <div style={{height:"30px",width:"400px",border:"1px solid black"}}>
        <div style={{height:"100%",width:`${400*3*count/100}px`,maxWidth:"400px", backgroundColor:"green"}}></div>
      </div>
      <div style={{height:"30px",width:"400px",border:"1px solid black"}}>
        <div style={{height:"100%",width:`${400*4*count/100}px`,maxWidth:"400px", backgroundColor:"green"}}></div>
      </div>
    </div>
  )
}

export default App
