import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import star from "./assets/star.svg"

function App() {
  return (
    <>
    <img
      src={star}
      alt="star"
      style={{
        height: "40px",
        width: "40px",
        filter: "grayscale(100%)",
        transition: "filter 0.3s ease-in-out",
        cursor: "pointer",
        color:"gold"
      }}
      
      onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%) sepia(1) hue-rotate(10deg) saturate(10) brightness(1.2)"}
      onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"}
    />
    <img
      src={star}
      alt="star"
      style={{
        height: "40px",
        width: "40px",
        filter: "grayscale(100%)",
        transition: "filter 0.3s ease-in-out",
        cursor: "pointer",
        color:"gold"
      }}
      
      onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%) sepia(1) hue-rotate(10deg) saturate(10) brightness(1.2)"}
      onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"}
    />
    <img
      src={star}
      alt="star"
      style={{
        height: "40px",
        width: "40px",
        filter: "grayscale(100%)",
        transition: "filter 0.3s ease-in-out",
        cursor: "pointer",
        color:"gold"
      }}
      
      onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%) sepia(1) hue-rotate(10deg) saturate(10) brightness(1.2)"}
      onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"}
    />
    <img
      src={star}
      alt="star"
      style={{
        height: "40px",
        width: "40px",
        filter: "grayscale(100%)",
        transition: "filter 0.3s ease-in-out",
        cursor: "pointer",
        color:"gold"
      }}
      
      onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%) sepia(1) hue-rotate(10deg) saturate(10) brightness(1.2)"}
      onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"}
    />
    <img
      src={star}
      alt="star"
      style={{
        height: "40px",
        width: "40px",
        filter: "grayscale(100%)",
        transition: "filter 0.3s ease-in-out",
        cursor: "pointer",
        color:"gold"
      }}
      
      onMouseEnter={(e) => e.currentTarget.style.filter = "grayscale(0%) sepia(1) hue-rotate(10deg) saturate(10) brightness(1.2)"}
      onMouseLeave={(e) => e.currentTarget.style.filter = "grayscale(100%)"}
    />
    </>
  )
}


export default App
