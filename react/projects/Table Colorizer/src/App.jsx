import { useState } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState('')
  const [selectedBoxes, setSelectedBoxes] = useState([])

  const handleColor = () => {
    const num = parseInt(inputValue)
    if (num >= 1 && num <= 9 && !selectedBoxes.includes(num)) {
      setSelectedBoxes([...selectedBoxes, num])
    }
    setInputValue('')
  }

  const handleClear = () => {
    setSelectedBoxes([])
    setInputValue('')
  }

  const getBoxClass = (num) => {
    return selectedBoxes.includes(num) ? 'bxs red' : 'bxs'
  }

  return (
    <>
      
        <input
          type="number"
          min="1"
          max="9"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter number 1-9"
        />
      

      <div className="btns">
        <div className="color" onClick={handleColor}>Color me</div>
        <div className="clear" onClick={handleClear}>Clear me</div>
      </div>

      <div className="row1">
        <div className={getBoxClass(1)}>1</div>
        <div className={getBoxClass(2)}>2</div>
        <div className={getBoxClass(3)}>3</div>
      </div>
      <div className="row2">
        <div className={getBoxClass(4)}>4</div>
        <div className={getBoxClass(5)}>5</div>
        <div className={getBoxClass(6)}>6</div>
      </div>
      <div className="row3">
        <div className={getBoxClass(7)}>7</div>
        <div className={getBoxClass(8)}>8</div>
        <div className={getBoxClass(9)}>9</div>
      </div>
    </>
  )
}

export default App
