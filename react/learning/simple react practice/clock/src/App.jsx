import { useState } from 'react'


function App () {

  const[count,setCount]=useState(0);
  const incrementer=2;
  const handleIncrease=()=>{
    console.log("handleClick called",count)
   return  setCount(count+incrementer)
  }

  const handleDecrease=()=>{
    console.log("handleClick called",count)
   return  setCount(count-incrementer)
  }

  const handleReset=()=>{
    setCount(0)
  }
  return <>
   <div style={{color:"white",textAlign:"center",backgroundColor:"red",height:"100px", borderRadius:"20px", margin: "1rem"}}>{count}</div>
   <div onClick={handleIncrease} style={{color: 'blue', background:"aliceBlue", height: "50px",width:"150px",textAlign:"center", border:"1px solid black",margin:"1rem"}}>increase counter</div>
   <div onClick={handleDecrease}  style={{color: 'green', background:"lightBlue", height: "50px",width:"150px",textAlign:"center", border:"1px solid black",margin:"1rem"}}>decrease counter</div>

   <div onClick={handleReset}  style={{color: 'orange', background:"", height: "50px",width:"150px",textAlign:"center", border:"1px solid black",margin:"1rem"}}>Reset</div>
   
  </>
}

export default App
