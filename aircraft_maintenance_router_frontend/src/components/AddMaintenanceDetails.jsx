import { useState } from "react";
import "../CSS/AddMaintenanceDetails.css";

const AddMaintenanceDetails = () => {
  const initialFlightDetails = {
    flight_id: "",
    maintenance_type: "",
    maintenance_date: "",
    maintenance_estimate_time: "",
    status_in_percent: ""
  };

  const [MaintenanceDetails, setMaintenanceDetails] = useState({
    flight_id: "",
    maintenance_type: "",
    maintenance_date: "",
    maintenance_estimate_time: "",
    status_in_percent: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMaintenanceDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!MaintenanceDetails.flight_id.trim()) {
      errors.flight_id = "Flight ID is required";
    }
    if (!MaintenanceDetails.maintenance_type.trim()) {
      errors.maintenance_type = "Maintenance type is required";
    }
    if (!MaintenanceDetails.maintenance_date.trim()) {
      errors.maintenance_date = "Maintenance Date is required";
    }
    if (!MaintenanceDetails.maintenance_estimate_time.trim()) {
      errors.maintenance_estimate_time = "Estimate time is required";
    }
    if (!MaintenanceDetails.status_in_percent.trim()) {
      errors.status_in_percent = "Status is required";
    }
    //return errors;
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const validationErrors = validateForm();

    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }
    const isValid = validateForm();
    if (!isValid) {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8081/hisproject/addmaintenancedetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(MaintenanceDetails),
        }
      );

      const result = await response.json();
      if (result != null) {
        alert("Maintenance details added succesfully");
      } else {
        alert("Details not added");
      }

      console.log(result);
    } catch (error) {
      console.error("Error adding Maintenance details:", error);
    }
  };

  const handleClear = () => {
    setMaintenanceDetails(initialFlightDetails);
    setErrors({});
  };

  return (
    <div className="container mt-5">
      <h2>Add Maintenance Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3 ">
          <label htmlFor="flight_id" className="form-label">
            Flight ID:
          </label>
          <input
            type="text"
            className={`form-control  field ${
              errors.flight_id ? "is-invalid" : ""
            }`}
            id="flight_id"
            name="flight_id"
            value={MaintenanceDetails.flight_id}
            onChange={handleChange}
          />
          {errors.flight_id && (
            <div className="invalid-feedback">{errors.flight_id}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="maintenance_type" className="form-label">
            Maintenance Type:
          </label>
          <input
            type="text"
            className={`form-control field ${
              errors.maintenance_type ? "is-invalid" : ""
            }`}
            id="maintenance_type"
            name="maintenance_type"
            value={MaintenanceDetails.maintenance_type}
            onChange={handleChange}
          />
          {errors.maintenance_type && (
            <div className="invalid-feedback">{errors.maintenance_type}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="maintenance_date" className="form-label">
            Maintenance Date:
          </label>
          <input
            type="text"
            className={`form-control field ${
              errors.maintenance_date ? "is-invalid" : ""
            }`}
            id="maintenance_date"
            name="maintenance_date"
            value={MaintenanceDetails.maintenance_date}
            onChange={handleChange}
          />
          {errors.maintenance_date && (
            <div className="invalid-feedback">{errors.maintenance_date}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="maintenance_estimate_time" className="form-label">
            Maintenance Estimate Time:
          </label>
          <input
            type="text"
            className={`form-control field ${
              errors.maintenance_estimate_time ? "is-invalid" : ""
            }`}
            id="maintenance_estimate_time"
            name="maintenance_estimate_time"
            value={MaintenanceDetails.maintenance_estimate_time}
            onChange={handleChange}
          />
          {errors.maintenance_estimate_time && (
            <div className="invalid-feedback">
              {errors.maintenance_estimate_time}
            </div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="status_in_percent" className="form-label">
            Status In Percent:
          </label>
          <input
            type="text"
            className={`form-control field ${
              errors.status_in_percent ? "is-invalid" : ""
            }`}
            id="status_in_percent"
            name="status_in_percent"
            value={MaintenanceDetails.status_in_percent}
            onChange={handleChange}
          />
          {errors.status_in_percent && (
            <div className="invalid-feedback">{errors.status_in_percent}</div>
          )}
        </div>

        <button type="submit" className="btn btn-primary submitbutton1">
          Submit
        </button>

        <button
          type="button"
          className="btn btn-secondary clearbutton1"
          onClick={handleClear}
        >
          Clear
        </button>
      </form>
    </div>
  );
};
export default AddMaintenanceDetails;
