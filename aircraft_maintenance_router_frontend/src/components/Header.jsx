import "../CSS/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        {/* <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link
                class="nav-link active menus"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>

            {/* <li class="nav-item">
          <Link class="nav-link active menus" to="/flightdetails">Flight-Details</Link>
        </li> */}

            <li class="nav-item dropdown">
              <Link
                class="nav-link active dropdown-toggle menus"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Flight-Details
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/flightdetails">
                    Show Full Details
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/flightdetailsbyflightid">
                    Show By Flight ID
                  </Link>
                </li>
              </ul>
            </li>

            {/* <li class="nav-item">
          <Link class="nav-link active menus" to="/maintenancedetails">Maintenance-Details</Link>
        </li> */}

            <li class="nav-item dropdown">
              <Link
                class="nav-link active dropdown-toggle menus"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Maintenance-Details
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/maintenancedetails">
                    Show Full Details
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/maintenancedetailsbymaintenanceid">
                    Show By Maintenance ID
                  </Link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link active dropdown-toggle menus"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Add-Details
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/addflightdetails">
                    Flight Details
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/addmaintenancedetails">
                    Maintenance Details
                  </Link>
                </li>
              </ul>
            </li>

            <li class="nav-item dropdown">
              <Link
                class="nav-link active dropdown-toggle menus"
                to="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Delete-Details
              </Link>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link class="dropdown-item" to="/deleteflightdetails">
                    Flight Details
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/deletemaintenancedetails">
                    Maintenance Details
                  </Link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <Link class="nav-link active menus" to="/updatestatus">
                Update-Maintenance-Status
              </Link>
            </li>
          </ul>
          {/* <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
        </div>
      </div>
    </nav>
  );
};
export default Header;
