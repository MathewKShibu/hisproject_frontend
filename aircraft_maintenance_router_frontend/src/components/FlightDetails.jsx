import React, { useState, useEffect } from 'react';
import "../CSS/FlightDetails.css"

const FlightDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Spring Boot backend
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8081/hisproject/flightdetails');
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="container mt-5" className="flightdetailsdiv">
      <h2>Flight Details</h2>
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
          {data.map(item => (
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
  );
};

export default FlightDetails;
