import { useState } from 'react'
import './App.css'

function App() {
  const [pin, setPin] = useState("Please Enter your PIN")
  const [editing, setEditing] = useState(false)
  const [balance,setbalance]=useState(1000)
  

  //Row-1

  const handleInputChange = (e) => {
    setPin(e.target.value)
  }

  const handleBlur = () => {
    setEditing(false)
  }
  const handlepinbarclick=()=>{
    setEditing(true)
    setPin("")
  }
  const handlesubmit=()=>{
    if(pin!=="1234"){
      alert("Wrong PIN")
    }else{
      alert("Login Successful")
    }
  }


  //Row-2
  
  const handleBalance=()=>{
    alert(`Your corrent balance is ${balance}`)
  } 

  const handleDeposite = () => {
    const amount = prompt("Enter amount to deposit:")
    const numericAmount = parseFloat(amount)
  
    if (!isNaN(numericAmount) && numericAmount > 0) {
      const newBalance=balance+numericAmount
      setbalance(newBalance)
      alert(`Deposit successful! Your current balance is: ${newBalance}`)
    } else {
      alert("Invalid amount entered.")
    }
  }

  const handlewithdraw=()=>{
    const amount = prompt("Enter the amount to withdraw:")
    const numericAmount = parseFloat(amount)

    if (!isNaN(numericAmount) && numericAmount > 0) {
      if (numericAmount <= balance) {
        const newBalance = balance - numericAmount
        setbalance(newBalance)
        alert(`Withdraw successful! Your current balance is: ${newBalance}`)
      } else {
        alert("Insufficient Balance")
      }
    } else {
      alert("Invalid amount entered.")
    }
  }
  

  return (
    <div className="container">
      <div className="row-1">
        <h3>Enter PIN: </h3>
        {
          editing ? (
            <input
              type="text"
              value={pin}
              onChange={handleInputChange}
              onBlur={handleBlur}
              autoFocus
              className="pinbar"
            />
          ) : (
            <div
              className="pinbar"
              onClick={handlepinbarclick}
            >
              {pin}
            </div>
          )
        }
        <button onClick={handlesubmit}>Submit</button>
      </div>
      <div className="row-2">
        <div className="check" onClick={handleBalance}>Check Balance</div>
        <div className="deposite" onClick={handleDeposite}>Deposite</div>
        <div className="withdraw" onClick={handlewithdraw}>Withdraw</div>
        <div className="logout">Logout</div>
      </div>
    </div>
  )
}

export default App
