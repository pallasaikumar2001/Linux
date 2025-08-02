import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [incre,setIncre]=useState(1)
  const [editing,setEditing]=useState(false)

  const incrementer=()=> setCount(count+Number(incre))
  const decrementer=()=> setCount(count-Number(incre))
  const resetter=()=>{
    setCount(0);
    setIncre(1);
  }

  const handleInputChange=(e)=>{
    const value=e.target.value
    if(!isNaN(value)){
      setIncre(Number(value))
    }
  }
  const handleBlur=()=>{
    setEditing(false)
  }

  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center", justifyContent:"flex-start"}}>
      <div className='display'>{count}</div>
      <div style={{display:"flex", columnGap:"1rem", justifyContent:"center"}}>
        <div onClick={decrementer} style={{border:"1px solid black",width:"50px",padding:"10px",backgroundColor: "aqua", borderRadius:"10px"}}>-</div>
        <div onClick={incrementer} style={{border:"1px solid black",width:"50px",padding:"10px",backgroundColor: "aqua", borderRadius:"10px"}}>+</div>
      </div>

      {editing ? (
        <input 
        type="number"
        value={incre}
        onChange={handleInputChange}
        onBlur={handleBlur}
        autoFocus
        style={{border:"2px solid blue",padding:"0.5rem",width: "100px"}}
        />
      ):(
        <div style={{display:"flex",alignItems:"center"}}>
          <p>Increment/Decrement by :</p>
          <div onClick={() => setEditing(true)} style={{ border: "1px solid black",width: "70px", margin: "0.5rem", cursor: "pointer", textAlign:"center" }}>{incre}</div>
        </div>
      )}
      <div onClick={resetter}style={{border:"1px solid black",padding:"10px",height:"35px",width:"100px", backgroundColor:"aqua",borderRadius:"10px"}}>Reset</div>
    </div>
  )
}

export default App
