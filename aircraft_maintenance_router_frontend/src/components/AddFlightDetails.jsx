import { useState } from "react";
import "../CSS/AddFlightDetails.css";

const AddFlightDetails = () => {

  const initialFlightDetails = {
    flight_number: "",
    aircraft_type: "",
    depature_location: "",
    destination_location: "",
  };

  const [flightDetails, setFlightDetails] = useState({
    flight_number: "",
    aircraft_type: "",
    depature_location: "",
    destination_location: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlightDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (!flightDetails.flight_number.trim()) {
      errors.flight_number = "Flight Number is required";
    }
    if (!flightDetails.aircraft_type.trim()) {
      errors.aircraft_type = "Aircraft type is required";
    }
    if (!flightDetails.depature_location.trim()) {
      errors.depature_location = "Depature location is required";
    }
    if (!flightDetails.destination_location.trim()) {
      errors.destination_location = "Destination location is required";
    }
    //return errors;
    setErrors(errors);
    return Object.keys(errors).length===0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   // const validationErrors = validateForm();

    // if (Object.keys(validationErrors).length > 0) {
    //   setErrors(validationErrors);
    //   return;
    // }
    const isValid=validateForm();
    if(!isValid)
    {
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:8081/hisproject/addflightdetails",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(flightDetails),
        }
      );

      const result = await response.json();

      console.log(result);
      if(result!=null)
      {
        alert("Added Successfully");
      }
      else
      {
        alert("Data Not Added");
      }
    } catch (error) {
      console.error("Error adding flight details:", error);
    }
  };

  const handleClear = () => {
    setFlightDetails(initialFlightDetails);
    setErrors({});
  };

  return (
    <div className="container mt-5">
      <h2>Add Flight Details</h2>
      <form onSubmit={handleSubmit}>

        <div className="mb-3 ">
          <label htmlFor="flight_number" className="form-label">
            Flight Number:
          </label>
          <input
            type="text"
            className={`form-control  field ${
              errors.flight_number ? "is-invalid" : "" 
            }`}
            id="flight_number"
            name="flight_number"
            value={flightDetails.flight_number}
            onChange={handleChange}
          />
          {errors.flight_number && (
            <div className="invalid-feedback">{errors.flight_number}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="aircraft_type" className="form-label">
            Aircraft Type:
          </label>
          <input
            type="text"
            className={`form-control field ${
              errors.aircraft_type ? "is-invalid" : ""
            }`}
            id="aircraft_type"
            name="aircraft_type"
            value={flightDetails.aircraft_type}
            onChange={handleChange}
          />
          {errors.aircraft_type && (
            <div className="invalid-feedback">{errors.aircraft_type}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="depature_location" className="form-label">
            Depature Location:
          </label>
          <input
            type="text"
            className={`form-control field ${
              errors.depature_location ? "is-invalid" : ""
            }`}
            id="depature_location"
            name="depature_location"
            value={flightDetails.depature_location}
            onChange={handleChange}
          />
          {errors.depature_location && (
            <div className="invalid-feedback">{errors.depature_location}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="destination_location" className="form-label">
            Destination Location:
          </label>
          <input
            type="text"
            className={`form-control field ${
              errors.destination_location ? "is-invalid" : ""
            }`}
            id="destination_locationn"
            name="destination_location"
            value={flightDetails.destination_location}
            onChange={handleChange}
          />
          {errors.destination_location && (
            <div className="invalid-feedback">
              {errors.destination_location}
            </div>
          )}
        </div>

        <button type="submit" className="btn btn-primary submitbutton" >
          Submit
        </button>

        <button type="button" className="btn btn-secondary clearbutton" onClick={handleClear}>
          Clear
        </button>

      </form>
    </div>
  );
};
export default AddFlightDetails;
