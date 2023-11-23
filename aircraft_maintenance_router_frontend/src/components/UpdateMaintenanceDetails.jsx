import { useState } from "react";
import "../CSS/UpdateMaintenanceDetails.css";

const UpdateMaintenanceDetails = () => {
  const [maintenance_id, setMaintenance_id] = useState("");
  const [status_in_percent, setStatus_in_percent] = useState("");
  const [message, setMessage] = useState("");

  const handleMaintenance_idChange = (e) => {
    setMaintenance_id(e.target.value);
  };

  const handleStatus_in_percentChange = (e) => {
    setStatus_in_percent(e.target.value);
  };

  const handleUpdateStatus = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8081/hisproject/updatemaintenancestatus/${maintenance_id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ status_in_percent: status_in_percent }),
        }
      );

      if (response.ok) {
        setMessage("Status Uploaded successfully");
      } else {
        setMessage("Error updating status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      setMessage("Error updating status");
    }
  };

  return (
    <div className="container mt-5 updatediv">
      <h3>Update Maintenance Status</h3>
      <form onSubmit={handleUpdateStatus} className="updateform">
        <div className="mb-3">
          <label htmlFor="maintenance_id" className="form-label">
            Maintenance ID:
          </label>
          <input
            type="text"
            className="form-control idfield"
            id="maintenance_id"
            name="maintenance_id"
            value={maintenance_id}
            onChange={handleMaintenance_idChange}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="status_in_percent" className="form-label">
            Status in Percent:
          </label>
          <input
            type="text"
            className="form-control statusfield"
            id="status-in_percent"
            name="status_in_percent"
            value={status_in_percent}
            onChange={handleStatus_in_percentChange}
          />
        </div>

        <button type="submit" className="btn btn-primary updatebutton">
          Update Status
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
  );
};
export default UpdateMaintenanceDetails;
