import React, { useState, useEffect } from "react";

const MaintenanceDetails = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Spring Boot backend
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://localhost:8081/hisproject/maintenancedetails"
      );
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Flight Details</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Maintenance_id</th>
            <th>Flight_id</th>
            <th>Maintenance_type</th>
            <th>Maintenance_date</th>
            <th>Maintenance_estimate_time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.maintenance_id}>
              <td>{item.maintenance_id}</td>
              <td>{item.flight_id}</td>
              <td>{item.maintenance_type}</td>
              <td>{item.maintenance_date}</td>
              <td>{item.maintenance_estimate_time}</td>
              <td>
                <div className="progress">
                  <div
                    className="progress-bar"
                    style={{width: `${item.status_in_percent}%`, 
                    backgroundColor:'rgb(74, 182, 79)'}}
                  >
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MaintenanceDetails;
