import React, { useEffect, useState } from 'react'
import RoundLogo from "../Images/roundlogo.png"
import Download from "../Images/download.jpg"
import Download2 from "../Images/download2.jpg"
import { Link, useNavigate } from 'react-router-dom'
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit'

import "../App.css"
import "../index.css"
import "../Responsive.css"
import "../Style.css"




function Navbar() {

    const [loggedin, setLoggedin] = useState(false)
    const [user, setUser] = useState([])

    const isAuthenticated = useIsAuthenticated()
    const signOut = useSignOut()
    const navigate = useNavigate()
    const auth = useAuthUser()



    useEffect(() => {

        if (isAuthenticated()) {
            setLoggedin(true)
            setUser(auth())
        }
        else {
            setLoggedin(false)
        }

    }, [isAuthenticated])

    const logout = () => {
        signOut()
        navigate("/")
    }

    // get width of the window
    const width = window.innerWidth
    console.log("window Width: ", width)

    const [displaySubMenu, setDisplaySubMenu] = useState(false)
    const [displaySubMenu2, setDisplaySubMenu2] = useState(false)
    const handleProfileSubMenu = () => {
        setDisplaySubMenu(!displaySubMenu)
        setDisplaySubMenu2(false)
    }

    const handleDropApp = () => {
        setDisplaySubMenu2(!displaySubMenu2)
        setDisplaySubMenu(false)
    }

    return (
        <>
            {/* nav */}
            <nav className="navbar navbar-expand-lg navbar-light" id="nav" >
                <div className="container nav-contant" >
                    <div
                        className="header-logo text-lg-start text-center"
                        id="header-logo-padding"
                    >
                        <Link to="/">
                            <img src={RoundLogo} id="img-size-change" />
                        </Link>
                    </div>
                    <button
                        className="btn btn-primarys d-lg-none d-block"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasExample"
                        aria-controls="offcanvasExample"
                    >
                        <i className="fa fa-align-left" aria-hidden="true" />
                    </button>
                    <div
                        className="collapse navbar-collapse navs"
                        id="navbarSupportedContent"
                        style={{ width: "100%" }}
                    >

                        <ul className="navbar-nav ml-auto">

                        <li className="dropdown nav-link" data-dropdown="dropdown">
                                <Link
                                    to="/about-us"
                                    className="dropdown-toggle"
                                    data-hover="dropdown"
                                >
                                    About Us
                                </Link>
                                <ul className="sub-menu dropdown-menu">
                                   
                                    <li className="nav-item nav-item1">
                                        <Link className="nav-link-2" to="/news-and-blogs">
                                            News & Blogs
                                        </Link>
                                    </li>
                                    
                                </ul>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/impact-we-create">
                                    Impact We Create
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sustainable-fuel">
                                    Sustainable Fuel
                                </Link>
                            </li>
                            {/* bio Disel */}
                            <li className="nav-item">
                                <Link className="nav-link" to="/traceability-of-used-cooking-oil">
                                    Traceability of Oil
                                </Link>
                            </li>

                            <li className="dropdown nav-link" data-dropdown="dropdown">
                                <Link
                                    to="/services"
                                    className="dropdown-toggle"
                                    data-hover="dropdown"
                                >
                                    Our Services
                                </Link>
                                <ul className="sub-menu dropdown-menu">
                                    {/* <li className="nav-item nav-item1">
                                        <Link className="nav-link-2" to="/services">
                                            All Services
                                        </Link>
                                    </li> */}
                                    <li className="nav-item nav-item1">
                                        <Link className="nav-link-2" to="/used-cooking-oil-collection">
                                            UCO Collection
                                        </Link>
                                    </li>
                                    <li className="nav-item nav-item1">
                                        <Link className="nav-link-2" to="/green-fuel-biodiesel-supply">
                                        Green Fuel (Biodiesel) Supply
                                        </Link>
                                    </li>
                                    <li className="nav-item nav-item1">
                                        <Link className="nav-link-2" to="/food-business-compliance-solution">
                                            Food Compliance Solution
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/redeem-your-green-points">
                                    Redeem Your Green Points
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contact-us">
                                    Contact Us
                                </a>
                            </li>



                        </ul>


                    </div>
                    <div className="button d-flex button-design-header">
                        {width >= 1400 ?
                            <>
                                <Link to="/#requestforoilcollection">
                                    <button className="btn btn-header">Book Now</button>
                                </Link>
                                {loggedin == false ?
                                    <Link to="/login">
                                        <button className="btn btn-header">Vendor Login</button>
                                    </Link>
                                    :
                                    <div className="dropdown button-dropdown" style={{ marginRight: "2px" }}>
                                        <button
                                            className="btn dropdown-toggle btn-header-2"
                                            type="button"
                                            data-toggle="dropdown"
                                        >
                                            {user?.name?.substring(0, 10)} <span className="caret" />
                                        </button>
                                        <ul className="sub-menu dropdown-menu">
                                            <li className='nav-item nav-item1'>
                                                <Link to="/dashboard" className='nav-link-2'>
                                                    Dashboard
                                                </Link>
                                            </li>
                                            <li className='nav-item nav-item1'>
                                                <a to="#" onClick={logout} className='nav-link-2'>
                                                    Logout
                                                </a>
                                            </li>


                                        </ul>
                                    </div>

                                }

                                <div className="dropdown button-dropdown">
                                    <button
                                        className="btn dropdown-toggle btn-header-2"
                                        type="button"
                                        data-toggle="dropdown"
                                    >
                                        Download Our App <span className="caret" />
                                    </button>
                                    <ul className="dropdown-menu">
                                        <a target='_blank' href="https://play.google.com/store/apps/details?id=com.arises.knp&pcampaignid=web_share">
                                            <img src={Download} alt="" className="download-app-btn" />
                                        </a>
                                        <a target='_blank' href="https://apps.apple.com/app/id1599833626">
                                            <img
                                                src={Download2}
                                                alt=""
                                                className="download-app-btn"
                                            />
                                        </a>
                                    </ul>
                                </div>
                            </>
                            :
                            <>
                                <div
                                    className="collapse navbar-collapse navs"
                                    id="navbarSupportedContent"
                                    style={{ width: "100%" }}
                                >


                                    <ul className="navbar-nav ml-auto">

                                        <li className="dropdown nav-link" data-dropdown="dropdown">
                                            <Link
                                                to="#"
                                                className="dropdown-toggle"
                                                data-hover="dropdown"
                                            >
                                                More Items
                                            </Link>
                                            <ul className="sub-menu dropdown-menu">
                                                <li className="nav-item nav-item1">
                                                    <Link to="/contact-us">
                                                        <button className="btn btn-header"> Book Now </button>
                                                    </Link>
                                                </li>
                                                <li className="nav-item nav-item1">
                                                    {loggedin == false ?
                                                        <Link to="/login">
                                                            <button className="btn btn-header">Vendor Login</button>
                                                        </Link>
                                                        :
                                                        <>
                                                            <button onClick={handleProfileSubMenu} className='btn btn-header'>{user.name}</button>
                                                            {displaySubMenu &&
                                                                <div className="nav-item nav-item1" style={{ padding: "12px" }}>
                                                                    <div>
                                                                        <Link className="nav-link-2" to={"/dashboard"}>Dashboard
                                                                        </Link>
                                                                    </div>

                                                                    <div style={{ marginTop: "12px" }}>
                                                                        <a className="nav-link-2" href="#" onClick={logout}>Logout
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </>


                                                    }
                                                </li>
                                                <li className="nav-item nav-item1">
                                                    <button onClick={handleDropApp} className='btn btn-header'>Download Our App</button>
                                                    {displaySubMenu2 &&
                                                        <div className="nav-item nav-item1" style={{ padding: "12px" }}>
                                                            <div>
                                                                <a target='_blank' href="https://play.google.com/store/apps/details?id=com.arises.knp&pcampaignid=web_share">
                                                                    <img src={Download} alt="" className="download-app-btn" />
                                                                </a>

                                                            </div>

                                                            <div style={{ marginTop: "12px" }}>
                                                                <a target='_blank' href="https://apps.apple.com/app/id1599833626">
                                                                    <img
                                                                        src={Download2}
                                                                        alt=""
                                                                        className="download-app-btn"
                                                                    />
                                                                </a>
                                                            </div>
                                                        </div>
                                                    }
                                                </li>

                                            </ul>
                                        </li>





                                    </ul>


                                </div>
                            </>
                        }
                    </div>
                </div>
            </nav>
            {/* nav end */}
            {/* mobile nav */}
            <div
                className="offcanvas offcanvas-start starts"
                tabIndex={-1}
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
            >
                <div className="offcanvas-header">
                    <img src={RoundLogo} />
                    <button
                        type="button"
                        className="btn-close text-reset pb-3"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <i className="fa fa-times mb-3" aria-hidden="true" />
                    </button>
                </div>
                <div className="offcanvas-body text-left">
                    <ul className="respondiv-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about-us">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/impact-we-create">
                                Impact we create
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/sustainable-fuel">

                                Sustainable Fuel
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/traceability-of-used-cooking-oil">
                                Traceability of Oil
                            </a>
                        </li>
                        
                        <li className="nav-item dropdown" >
                                <a className="nav-link dropdown-toggle"  href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span color='#000' style={{ color: "black", }}>
                                    Our Services
                                    </span>
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="/used-cooking-oil-collection"> UCO Collection </a></li>
                                    <li><a className="dropdown-item" href="/green-fuel-biodiesel-supply"> Green Fuel (Biodiesel) Supply </a></li>
                                    <li><a className="dropdown-item" href="/food-business-compliance-solution"> Food Compliance Solution </a></li>

                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="/services"> All Services </a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                            <a className="nav-link" href="/redeem-your-green-points">
                                Redeem Your Green Points
                            </a>

                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/contact-us">
                                Contact Us
                            </a>
                        </li>
                    </ul>
                    <div className="responsive-button-style">
                        <a href="/#requestforoilcollection">
                            <button className="btn btn-header">Book Now</button>
                        </a>
                        {/* {loggedin && loggedin &&
                            <Link to="/login">
                                <button className="btn btn-header btn-header-2">Vendor Login</button>
                            </Link>
                        } */}

{loggedin == false ?
                                                        <a href="/login">
                                                            <button className="btn btn-header">Vendor Login</button>
                                                        </a>
                                                        :
                                                        <>
                                                            <button onClick={handleProfileSubMenu} className='btn btn-header'>{user.name}</button>
                                                            {displaySubMenu &&
                                                                <div className="nav-item nav-item1" style={{ padding: "12px" }}>
                                                                    <div>
                                                                        <Link className="nav-link-2" to={"/dashboard"}>Dashboard
                                                                        </Link>
                                                                    </div>

                                                                    <div style={{ marginTop: "12px" }}>
                                                                        <a className="nav-link-2" href="#" onClick={logout}>Logout
                                                                        </a>
                                                                    </div>
                                                                </div>
                                                            }
                                                        </>


                                                    }
                    </div>
                   
                    <div className="dropdown button-dropdown">
                        <button
                            className="btn btn-header dropdown-toggle"
                            type="button"
                            data-toggle="dropdown "
                        >
                            Download Our App <span className="caret" />
                        </button>
                        <ul className="dropdown-menu">
                            <a href="https://play.google.com/store/apps/details?id=com.arises.knp&pcampaignid=web_share">
                                <img src={Download} alt="" className="download-app-btn" />
                            </a>
                            <a href="https://apps.apple.com/app/id1599833626">
                                <img src={Download2} alt="" className="download-app-btn" />
                            </a>
                        </ul>
                    </div>
                </div>
                
            </div>
            {/* end mobile nav */}
        </>
    )
}

export default Navbar