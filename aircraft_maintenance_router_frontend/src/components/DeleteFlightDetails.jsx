import { useState } from "react";
import "../CSS/DeleteFlightDetails.css";

const DeleteFlightDetails = () => {
  const [flight_id, setFlight_id] = useState("");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFlight_id(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:8081/hisproject/deleteflightdetails/${flight_id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        setMessage("Flight details deleted successfully");
      } else {
        setMessage("Error deleting flight details");
      }
    } catch (error) {
      console.error("Error deleting flight details:", error);
      setMessage("Error deleting flight details");
    }
  };

  return (
    <div className="container">
    <div className="container mt-5 deleted1">
      <h2>Delete Flight Details</h2>
      <form onSubmit={handleDelete}>
        <div className="mb-3 ">
          <label htmlFor="flight_id" className="form-label">
            Flight ID:
          </label>
          <input
            type="text"
            className="form-control deleteflightfield"
            id="flight_id"
            name="flight_id"
            value={flight_id}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-danger deletebutton">
          Delete Flight Details
        </button>
      </form>

      {message && <p className="mt-3">{message}</p>}
    </div>
    </div>
  );
};
export default DeleteFlightDetails;
