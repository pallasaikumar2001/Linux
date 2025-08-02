import { useState } from 'react'
import './App.css';
import "tailwindcss";

function App() {

  return (
    <>
      <div className="container">
        <div className="smalls flex flex-col gap-y-[2rem]">
          <img className='w-[4vw]' src="images/Image (1).jpg" alt="" />
          <img className='w-[4vw]' src="images/IMG_20250618_162028 (1).jpg" alt="" />
          <img className='w-[4vw]' src="images/IMG_20250618_162028.jpg" alt="" />
        </div>
        <div className="big"></div>

      </div>      
    </>
  )
}

export default App
