import React, { useState } from "react";

const MaintenanceDetailsByMaintenanceId = () => {
  const [maintenance_id, setMaintenance_id] = useState("");
  const [maintenanceData, setMaintenanceData] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:8081/hisproject/maintenancedetails/${maintenance_id}`
      );
      const result = await response.json();
      setMaintenanceData(result);
    } catch (error) {
      console.error("Error fetching flight data:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Maintenance Details Search</h2>
      <div className="mb-3">
        <label htmlFor="flightId" className="form-label">
          Enter Maintenance ID:
        </label>
        <input
          type="text"
          className="form-control"
          id="flightId"
          value={maintenance_id}
          onChange={(e) => setMaintenance_id(e.target.value)}
        />
      </div>
      <button className="btn btn-primary" onClick={handleSearch}>
        Search Details
      </button>

      {maintenanceData && (
        <div className="mt-3">
          <h3>Maintenance Details</h3>
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
              {maintenanceData.map((item) => (
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
                        style={{ width: `${item.status_in_percent}%` ,
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
      )}
    </div>
  );
};

export default MaintenanceDetailsByMaintenanceId;
