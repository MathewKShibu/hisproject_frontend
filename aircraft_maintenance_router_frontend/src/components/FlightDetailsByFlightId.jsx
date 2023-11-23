import React, { useState } from "react";

const FlightDetailsByFlightId = () => {
  const [flight_id, setFlight_id] = useState("");
  const [flightData, setFlightData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/hisproject/flightdetails/${flight_id}`
      );
      const result = await response.json();
      setFlightData(result);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Flight Search</h2>
      <div className="mb-3">
        <label htmlFor="flightId" className="form-label">
          Enter Flight ID:
        </label>
        <input
          type="text"
          className="form-control"
          id="flightId"
          value={flight_id}
          onChange={(e) => setFlight_id(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search Flight
      </button>

      {flightData && (
        <div className="mt-3">
          <h3>Flight Details</h3>
          <table className="table">
            <thead>
              <tr>
                <th>Flight_id</th>
                <th>Flight_number</th>
                <th>aircraft_type</th>
                <th>depature_location</th>
                <th>destination_location</th>
              </tr>
            </thead>
            <tbody>
              {flightData.map((item) => (
                <tr key={item.flight_id}>
                  <td>{item.flight_id}</td>
                  <td>{item.flight_number}</td>
                  <td>{item.aircraft_type}</td>
                  <td>{item.depature_location}</td>
                  <td>{item.destination_location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default FlightDetailsByFlightId;
