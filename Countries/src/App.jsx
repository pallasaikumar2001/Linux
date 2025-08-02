import { useState } from 'react'
import './App.css'
import data from './countries.json'

function App() {
  const [count, setCount] = useState(0)
  const [region,setRegion]=useState("")

  const filteredData =
    region === "All" || region === ""
      ? data
      : data.filter((item) => item.region === region)

  
  return (
    <>
      <div>
        <h1>Filter by Region</h1>
        <select name="" id="" onChange={(e)=>setRegion(e.target.value)} className='text-white bg-gray-700 p-2 rounded' defaultValue="All">
          <option value="All">All</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Europe">Europe</option>
          <option value="Australia">Australia</option>
          <option value="Americas">Americas</option>
        </select>
      </div>
      <div className='flex flex-wrap gap-[20px] w-full justify-center'>
      {filteredData.map((item)=>{
        return <div> 
          <img src={item.flags.png} className='w-[450px] h-[300px]'/>
          <h3>{item.name.common}</h3>
          <h3>{Object.values(item.currencies || {})[0]?.name || 'No currency data'}</h3>
        </div>
      })}
      </div>
    </>
  )
}

export default App
