import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import FlightDetails from "./components/FlightDetails";
import FlightDetailsByFlightId from "./components/FlightDetailsByFlightId";
import MaintenanceDetails from "./components/MaintenanceDetails";
import MaintenanceDetailsByMaintenanceId from "./components/MaintenanceDetailsByMaintenanceId";
import AddFlightDetails from "./components/AddFlightDetails";
import AddMaintenanceDetails from "./components/AddMaintenanceDetails";
import DeleteFlightDetails from "./components/DeleteFlightDetails";
import DeleteMaintenanceDetails from "./components/DeleteMaintenanceDetails";
import UpdateMaintenanceDetails from "./components/UpdateMaintenanceDetails";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/flightdetails" element={<FlightDetails/>}/>
          <Route path="/flightdetailsbyflightid" element={<FlightDetailsByFlightId/>}/>
          <Route path="/maintenancedetails" element={<MaintenanceDetails/>}/>
          <Route path="/maintenancedetailsbymaintenanceid" element={<MaintenanceDetailsByMaintenanceId/>}/>
          <Route path="/addflightdetails" element={<AddFlightDetails/>}/>
          <Route path="/addmaintenancedetails" element={<AddMaintenanceDetails/>}/>
          <Route path="/deleteflightdetails" element={<DeleteFlightDetails/>}/>
          <Route path="/deletemaintenancedetails" element={<DeleteMaintenanceDetails/>}/>
          <Route path="/updatestatus" element={<UpdateMaintenanceDetails/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
