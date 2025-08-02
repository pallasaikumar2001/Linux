// src/App.jsx
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./App.css";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  // Restore selected seats if coming back from Final.jsx
  const [selectedSeats, setSelectedSeats] = useState(
    location.state?.selectedSeats || []
  );
  const [inp, setInp] = useState(selectedSeats.length || 0);

  const seats = [];
  for (let i = 0; i < 14; i++) {
    let row = [];
    let left = [];
    for (let j = 0; j < 3; j++) {
      left.push(`${i + 1}${String.fromCharCode(65 + j)}`);
    }
    row.push(left);

    let right = [];
    for (let k = 0; k < 3; k++) {
      right.push(`${i + 1}${String.fromCharCode(68 + k)}`);
    }
    row.push(right);

    seats.push(row);
  }

  const toggleSeat = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : prev.length < Number(inp)
        ? [...prev, seat]
        : prev
    );
  };

  return (
    <div className="container" style={{ display: "flex", columnGap: "2rem" }}>
      <div className="Bus">
        {/* Seat input */}
        <div
          style={{ display: "flex", alignItems: "center", columnGap: "10px", height:"40px"}}
        >
          <p>No of Seats:</p>
          <input
            type="number"
            min="1"
            max="30"
            value={inp}
            onChange={(e) => {
              setInp(e.target.value);
              setSelectedSeats([]); 
            }}
            placeholder="Enter number of seats"
            style={{ height: "30px", width: "170px", backgroundColor:"rgb(181, 222, 235)", paddingLeft:"10px", border:"0px", borderRadius:"10px"}}
          />
        </div>

        {/* Headers */}
        <div
          className="columns"
          style={{
            display: "flex",
            columnGap: "80px",
            position: "relative",
            left: "30px",
            height:"40px"
          }}
        >
          <div style={{ display: "flex", columnGap: "35px" }}>
            <h3>A</h3>
            <h3>B</h3>
            <h3>C</h3>
          </div>
          <div style={{ display: "flex", columnGap: "35px" }}>
            <h3>D</h3>
            <h3>E</h3>
            <h3>F</h3>
          </div>
        </div>

        {/* Seat grid */}
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexDirection: "column"}}>
            {[...Array(14)].map((_, i) => (
              <h3 key={i} style={{marginBottom:i===7 ? "40px":"13px"}}>{i + 1}</h3>
            ))}
          </div>
          <div style={{ backgroundColor: "white", padding: "10px" }}>
            {seats.map((item, rowIndex) => (
              <div
                key={rowIndex}
                style={{
                  display: "flex",
                  gap: "50px",
                  justifyContent: "center",
                  marginBottom: rowIndex === 7 ? "40px" : "5 px"
                }}
              >
                {item.map((section, colIndex) => (
                  <div key={colIndex} style={{ display: "flex" }}>
                    {section.map((seat, seatIndex) => (
                      <div
                        key={seatIndex}
                        onClick={() => toggleSeat(seat)}
                        style={{
                          height: "40px",
                          width: "30px",
                          border: "1px solid black",
                          borderRadius: "10px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "12px",
                          margin: "5px",
                          cursor: "pointer",
                          backgroundColor: selectedSeats.includes(seat)
                            ? "orange"
                            : "rgb(229, 226, 226)",
                          color: selectedSeats.includes(seat)
                            ? "white"
                            : "black",
                          transition: "0.2s",
                        }}
                        title={`Click to ${
                          selectedSeats.includes(seat) ? "deselect" : "select"
                        } ${seat}`}
                      ></div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div style={{ textAlign: "center", marginTop: "20px", position:"relative", top:"40%"}}>
        <button
          style={{
            height: "50px",
            width: "150px",
            backgroundColor:
              selectedSeats.length === Number(inp) && selectedSeats.length > 0
                ? "rgb(0, 132, 255)"
                : "gray",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "5px",
          }}
          disabled={
            selectedSeats.length !== Number(inp) || selectedSeats.length === 0
          }
          onClick={() => navigate("/final", { state: { selectedSeats } })}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
