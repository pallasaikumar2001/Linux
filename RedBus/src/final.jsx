// src/Final.jsx
import { useLocation, useNavigate } from 'react-router-dom'

function Final() {
  const location = useLocation()
  const navigate = useNavigate()
  const selectedSeats = location.state?.selectedSeats || []

  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <h2>Final Selection</h2>

      <div style={{ display:"flex", alignItems:"center", columnGap:"1rem"}}>
        <p style={{ fontSize: '18px', margin: 0 }}>Number of Seats:</p>
        <h3>{selectedSeats.length}</h3>
      </div>

      {selectedSeats.length > 0 && (
        <div style={{ display: "flex", alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
          <p style={{ fontSize: '18px', margin: 0 }}>Seats:</p>
          {selectedSeats.map((seat, index) => (
            <h3 key={index} style={{ margin: '5px' }}>{seat}</h3>
          ))}
        </div>
      )}

      <div className="btns" style={{ display: "flex", columnGap: "2rem" }}>
        <button
          onClick={() => navigate('/', { state: { selectedSeats } })}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'rgb(240, 168, 34)',
            color: 'black',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Modify Selection
        </button>

        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'blue',
            color: 'white',
            borderRadius: "5px",
            border: 'none'
          }}
        >
          Finish
        </button>
      </div>
    </div>
  )
}

export default Final
