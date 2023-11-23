import { useState } from "react";
import "../CSS/DeleteMaintenanceDetails.css";

const DeleteMaintenanceDetails = () => {
  const [maintenance_id, setMaintenance_id] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMaintenance_id(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8081/hisproject/deletemaintenancedetails/${maintenance_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setMessage("Maintenance details deleted successfully");
      } else {
        setMessage("Error deleting Maintenance details");
      }
    } catch (error) {
      console.error("Error deleting Maintenance details:", error);
      setMessage("Error deleting Maintenance details");
    }
  };

  return (
    <div className="container">
      <div className="container mt-5 deletemaindiv">
        <h3 className="deletemainh3">Delete Maintenance Details</h3>
        <form onSubmit={handleDelete}>
          <div className="mb-3 ">
            <label htmlFor="maintenance_id" className="form-label idtext">
              Maintenance ID:
            </label>
            <input
              type="text"
              className="form-control deleteflightfieldmain"
              id="maintenance_id"
              name="maintenance_id"
              value={maintenance_id}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="btn btn-danger deletebuttonmain">
            Delete Maintenance Details
          </button>
        </form>

        {message && <p className="mt-3">{message}</p>}
      </div>
    </div>
  );
};
export default DeleteMaintenanceDetails;
