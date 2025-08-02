import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [userinput,setUserInput]=useState(1)
  return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center", width:"100vw", height:"100vh", backgroundColor:"white",color:"black",rowGap:"1rem"}}>
      <h1>Count is :  {count}</h1>
      <div style={{display:"flex",alignItems:"center"}}>
        <h1>enter the number :</h1>
        <div
          contentEditable="true"
          onInput={(e) => setUserInput(Number(e.target.innerText))}
          style={{border: "1px solid black", width: "150px",height:"50px", textAlign: "center"}}
        >
        </div>
      </div>
      <div onClick={()=>setCount(count+userinput)}>Increase</div>
      <div onClick={()=>setCount(count-userinput)}>Decrease</div>
      <div onClick={()=>setCount(0)}>Reset</div>
    </div>
  )
}

export default App
