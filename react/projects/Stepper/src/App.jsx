import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count,setCount]=useState(0)
  
  const handleNext=()=>{
    setCount(prevCount=>(prevCount<4 ? prevCount+1: prevCount));
    console.log(count+1, "- stage completed")
  }
  const handlePrevious=()=>{
    setCount(prevCount=>(prevCount>0 ? prevCount-1 : prevCount))
    console.log(count-1, "- stage is completed")
  }

  const getBackgroundColor=(step)=>{
    if(count===step)return "aqua"
    if (count>step)return "green"
    return "transparent";
  }

  return (
    <div className='container'>
      <div className="bar">
        <div className="one">
          <div className="line">
            <div className="b1" style={{backgroundColor:getBackgroundColor(0)}}>1</div>
            <div className="l1"></div>
          </div>
          <div className="s1">Contact Details</div>
        </div>
        <div className="two">
          <div className="line">
            <div className="b2" style={{backgroundColor:getBackgroundColor(1)}}>2</div>
            <div className="l1"></div>
          </div>
          <div className="s1">Shipping Address </div>
        </div>
        <div className="three">
          <div className="line">
            <div className="b3" style={{backgroundColor:getBackgroundColor(2)}}>3</div>
            <div className="l1"></div>
          </div>
          <div className="s1">Payment </div>
        </div>
        <div className="four">
          <div className="b3" style={{backgroundColor:getBackgroundColor(3)}}>4</div>          
          <div className="s1">Payment</div>
        </div>
      </div>
      {count===0 && <h2>Add contact details for further communication.</h2>}
      {count===1 && <h2>Add shipping address for successful delivery.</h2>}
      {count===2 && <h2>Complete Payment to complete the order</h2>}
      {count===3 && <h2>Ready to get delivered</h2>}
      {count===4 && <h2>Order Delivered successfully!!</h2>}
      <div className="btns">
        <button className='prev' onClick={handlePrevious} disabled={count<=0}>Previous</button>
        <button className='next' onClick={handleNext} disabled={count>=4}>Next</button>
      </div>
    </div>
  )
}

export default App
