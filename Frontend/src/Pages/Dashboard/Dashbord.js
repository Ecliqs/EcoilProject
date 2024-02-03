import React, { useEffect, useMemo, useRef, useState } from "react";
// import '../../Style.css'
// import '../../Responsive.css'
import '../Dashboard/dstyles.css'

// import '../../Components/RequestForOilCollection'
import RequestForOilCollection from "../../Components/RequestForOilCollection";
import pro1 from "../../Images/p1.jpg"
import pro2 from "../../Images/p4.jpg"
import pro3 from "../../Images/p3.webp"

import Chart from "react-apexcharts";
import { Link, useNavigate } from "react-router-dom";
import OilChart from "../../Components/OilChart";
import Summary from "../../Components/Summary";
import Products from "../../Components/Products";
import { useAuthUser, useIsAuthenticated, useSignOut } from "react-auth-kit";
import GreenPointsChart from "../../Components/GreenPointsChart";
import ScrollSpy from "react-ui-scrollspy";
import ProgressTruck from "../../Components/ProgressTruck";
import Logo from "../../Images/roundlogo.png"

function useIsInViewport(ref) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) =>
        setIsIntersecting(entry.isIntersecting),
      ),
    [],
  );

  useEffect(() => {
    observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, [ref, observer]);

  return isIntersecting;
}


function Dashboard() {
  const [loggedin, setLoggedin] = useState(false);
  const [user, setUser] = useState([]);
  const navigate = useNavigate()
  const isAuthenticated = useIsAuthenticated()
  const auth = useAuthUser()
  const signOut = useSignOut()

  if (!isAuthenticated()) {
    navigate("/login")
  }

  const ref1 = useRef(null)
  const ref2 = useRef(null)
  const ref3 = useRef(null)
  const ref4 = useRef(null)

  const isInViewport1 = useIsInViewport(ref1);
  const isInViewport2 = useIsInViewport(ref2);
  const isInViewport3 = useIsInViewport(ref3);
  const isInViewport4 = useIsInViewport(ref4);

  console.log('isInViewport1: ', isInViewport1);
  console.log('isInViewport2: ', isInViewport2);
  console.log('isInViewport3: ', isInViewport3);
  console.log('isInViewport4: ', isInViewport4);

  useEffect(() => {
    if (isAuthenticated()) {
      setLoggedin(true)
      var user = auth()
      setUser(user)
      console.log("dashboard", user.id);

    }
    else {
      // navigate("/login")
      window.location.href = "/login"
    }
  }, [])

  const logout = () => {
    signOut()
    // navigate("/")
    window.location.href = "/login"
  }


  const [state, setState] = useState(
    {
      options: {
        chart: {
          id: "basic-bar"
        },
        stroke: {
          curve: "straight"
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
        }
      ]
    },
  );

  const [activeSpy, setActiveSpy] = useState(1);
  return (

    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark" style={{ position: "sticky" }}>
        {/* Navbar Brand*/}
        <a className="navbar-brand ps-3" href="/">
          <img src={Logo} alt="Logo" style={{ width: "50px" }} />
        </a>
        {/* <a class="navbar-brand ps-3" href="index.html">Start Bootstrap</a> */}
        {/* Sidebar Toggle*/}
        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars" />
        </button>
        <ul className="navbar-nav ms-auto ms-md-auto me-3 me-lg-4">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              id="navbarDropdown"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="fas fa-user fa-fw" />
              <span> {user.name} </span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdown"
              data-bs-popper="static"
              style={{ right: "0px", top: "30px" }}
            >
              {/* <li>
                <a className="dropdown-item" href="#!">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#!">
                  Activity Log
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li> */}
              <li >
                <button to="#" onClick={logout} className="dropdown-item"  >
                  Logout
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav" style={{ position: "relative" }}  >
          <nav
            className="sb-sidenav accordion sb-sidenav-dark"
            id="sidenavAccordion"
            style={{ height: "calc(100vh - 56px)", position: "sticky", top: "56px" }}
          >
            <div className="sb-sidenav-menu" >
              <div className="nav">
                <div className="sb-sidenav-menu-heading"></div>
                <Link to="/dashboard" className="nav-link">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt" />
                  </div>
                  Dashboard
                </Link>
                <Link to={"/dashboard/cart"} className="nav-link" >
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-shopping-cart" />
                  </div>
                  My Cart
                </Link>

                <div className="sb-sidenav-menu-heading" style={{ textAlign: "left" }}>Addons</div>
                <a href="#" className={`nav-link ${activeSpy === 1 ? "active-scroll-spy" : ""}`} onClick={() => setActiveSpy(1)} style={{ textAlign: "left" }} data-to-scrollspy-id="section1">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-info-circle" />
                  </div>
                  Track Your Oil
                </a>
                <a href="#section2" className={`nav-link ${activeSpy === 2 ? "active-scroll-spy" : ""}`} onClick={() => setActiveSpy(2)} style={{ textAlign: "left" }} data-to-scrollspy-id="section2">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-line-chart" />
                  </div>
                  Carbon Footprint Information
                </a>
                <a href="#section3" className={`nav-link ${activeSpy === 3 ? "active-scroll-spy" : ""}`} onClick={() => setActiveSpy(3)} style={{ textAlign: "left" }} data-to-scrollspy-id="section3">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-shopping-cart" />
                  </div>
                  List of products
                </a>
                <a href="#section4" className={`nav-link ${activeSpy === 4 ? "active-scroll-spy" : ""}`} onClick={() => setActiveSpy(4)} style={{ textAlign: "left" }} data-to-scrollspy-id="section4">
                  <div className="sb-nav-link-icon">
                    <i className="fas fa-table" />
                  </div>
                  Request For Oil Collection
                </a>
              </div>
            </div>
            <div className="sb-sidenav-footer">
              <div className="small">Logged in as:</div>
              {user.name}
            </div>
          </nav>
        </div>
        <div id="layoutSidenav_content">
          <main>

            <div className="container-fluid px-4">

              <ScrollSpy >

                <div ref={ref1} id="section1" >
                  <h1 className="mt-4 dashboard-heading" style={{ color: "#000000", textAlign: "left" }}>Dashboard</h1>

                  <ProgressTruck />
                </div>

                <div  className="graphic" >
                  <div className="max-width">
                    <div className="container">
                      <div className="row justify-content-center align-items-end">
                        <div className="col-lg-12 py-5" />
                        <div className="col-lg-6 p-2">
                          <OilChart inViewPort={isInViewport2} />
                        </div>
                        <div className="col-lg-6 p-2">
                          <GreenPointsChart inViewPort={isInViewport2} />
                          {/* <div className="card">
                          <div
                            className="card-header"
                            style={{ textAlign: "center" }}
                          >
                            Green Points Generated Data
                          </div>
                          <div className="card-body">
                            <Chart
                              options={state.options}
                              series={state.series}
                              type="area"
                              height="350"
                            />
                          </div>
                        </div> */}
                        </div>
                      </div>
                      {/* <div className="row">
                      <div className="col-lg-6 p-2">
                        
                      </div>
                      <div className="col-lg-6 p-2">
                        <div
                          className="p-5"
                          style={{
                            border: "1px solid rgba(0, 0, 0, 0.175)",
                            marginTop: "-20px",
                            background: "rgba(0, 0, 0, 0.1)"
                          }}
                        >
                          <div className="row" style={{ textAlign: "center" }}>
                            <div className="col-lg-6">
                              <div>Total Green Points till now </div>
                              <div className="graph-points"> 500 </div>
                            </div>
                            <div className="col-lg-6">
                              <div>
                                Green Points in <b>last 3 weeks</b>
                              </div>
                              <div className="graph-points"> 500 </div>
                            </div>
                          </div>
                          <br />
                          <select id="green_points_select" className="form-control">
                            <option>All Time</option>
                            <option>Last 12 months</option>
                            <option>Last 9 months</option>
                            <option>Last 6 months</option>
                            <option>Last 3 months</option>
                            <option>Last 1 month</option>
                            <option>Last 3 weeks</option>
                            <option>Last 2 weeks</option>
                            <option>Last 1 week</option>
                            <option value="custom">Custom Date Range</option>
                          </select>
                          <div
                            id="green_points_date_range"
                            style={{ marginTop: 20, display: "none" }}
                          >
                            <div>Select your date range</div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginTop: 12
                              }}
                            >
                              <div>
                                From: <input type="date" />
                              </div>
                              <div>
                                To: <input type="date" />
                              </div>
                              <div>
                                <button className="btn btn-sm btn-primary">
                                  Search
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                      {/* <div class="row mt-5 mb-5">
                    <div class="col-lg-12 text-end">
                      <a href="#section3">
                        <button type="button" class="btn btn-for-redeem-now">
                          Redeem Your Green Points
                        </button>
                      </a>
                    </div>
                  </div> */}
                    </div>
                  </div>

                
                </div>

                <div ref={ref2} id="section2" >
                <Summary />
                </div>



                <div ref={ref3} id="section3"style={{ marginTop: "22px"}}>
                  <Products />
                </div>

                <div ref={ref4} id="section4">
                  {isAuthenticated() && <RequestForOilCollection />}

                </div>

              </ScrollSpy>




            </div>

          </main>

          <div className="mt-5 mb-5">
            {/* <RequestForOilCollection /> */}
          </div>

          <footer className="py-4 bg-light mt-auto">
            <div className="container-fluid px-4">
              <div className="d-flex align-items-center justify-content-between small">
                <div className="text-muted">Copyright © Your Website 2023</div>
                <div>
                  <a href="#">Privacy Policy</a>·
                  <a href="#">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>

  )
}

export default Dashboard