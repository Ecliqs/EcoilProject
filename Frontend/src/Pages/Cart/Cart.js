import React, { useEffect, useState } from 'react'
import { useAuthUser, useIsAuthenticated, useSignOut } from 'react-auth-kit';
import { Link, useNavigate } from 'react-router-dom'
import '../Dashboard/dstyles.css'
import AddressModal from '../../Components/AddressModal';
import axios from 'axios';
import ProductCart from '../../Components/ProductCart';
import Auth1 from '../../Auth1';
import GlobalFunction from '../../GlobalFunction';
import Logo from "../../Images/roundlogo.png"


function Cart() {

    const [loggedin, setLoggedin] = useState(false);
    const [user, setUser] = useState([]);
    const [addressList, setAddressList] = useState([]);
    const navigate = useNavigate()
    const isAuthenticated = useIsAuthenticated()
    const auth = useAuthUser()
    const signOut = useSignOut()
    const [addressLoading, setAddressLoading] = useState(false)
    const [cart, setCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    const [remaining, setRemaining] = useState(0)
    const [selectedAddressId, setSelectedAddressId] = useState(0)
    const [orderPlaced, setOrderPlaced] = useState(false)

    const { http } = Auth1()
    const { fixNumber } = GlobalFunction()



    const url = process.env.REACT_APP_API_URL
    const serverUrl = process.env.REACT_APP_APP_SERVER


    // get user addresses
    const getUserAddresses = () => {
        setAddressLoading(true)
        axios.get(`${url}/user-address?user_id=${auth().id}`)
            .then(res => {
                console.log("user Address", res.data)
                setAddressList(res.data.userAddresses)
                setAddressLoading(false)

            })
            .catch(err => {
                console.log(err)
                setAddressLoading(false)
            })
    }

    //  get cart products
    const getCartProducts = () => {
        axios.get(`${url}/cart?user_id=${auth().id}`)
            .then(res => {
                console.log("cart", res.data)
                setCart(res.data.cart)
            })
            .catch(err => {
                console.log(err)
            })

    }

    const reloadCart = () => {
        getCartProducts()
        getTotalPrice()
        getCarbonPointsStatus()
    }

    useEffect(() => {
        if (isAuthenticated()) {
            setLoggedin(true)
            var user = auth()
            setUser(user)
            console.log("dashboard", user);
            // setAddressList( [user.address])
            getUserAddresses()
            getCartProducts()
            getTotalPrice()
            getCarbonPointsStatus()

        }
        else {
            navigate("/login")
        }
    }, [])

    const logout = () => {
        signOut()
        navigate("/")
    }

    // remove Address
    const removeAddress = (id) => {
        axios.delete(`${url}/user-address/${id}`)
            .then(res => {
                console.log(res.data)
                getUserAddresses()
                setSelectedAddressId(0)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getTotalPrice = () => {
        axios.get(`${url}/cart/total?user_id=${auth().id}`)
            .then(res => {
                console.log(res.data)
                setTotalPrice(res.data.total)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const getCarbonPointsStatus = () => {
        http.post(`${serverUrl}/WebData/carbonCreditStats`)
            .then(res => {
                console.log("Total GREEN POINTS", res.data)
                if (res.data.status == "Success") {
                    //add fixNumber function berfore setting
                    //   setTotal(fixNumber(res.data.data.totoal_carbon))
                    //   setRedeemed(fixNumber(res.data.data.credit_used))
                    setRemaining(fixNumber(res.data.data.remaining_carbon))

                }

            })
            .catch(err => console.log(err))
    }

    const handleAddressClick = (id) => {
        setSelectedAddressId(id)
    }

    const [orderErrors, setOrderErrors] = useState("");
    const [placeOrderText, setPlaceOrderText] = useState("Place Order");

    const creditUsed = () => {
        var credit_used = totalPrice
        var formData = new FormData();
        formData.append("credit_used", credit_used);
        http.post(`${serverUrl}/WebData/carbonCreditUsed`, formData)
            .then(res => {
                console.log("credit updated", res.data)
                if (res.data.status == "Success") {
                    getCarbonPointsStatus()
                }
            })
            .catch(err => console.log(err))
    }

    const handlePlaceOrder = () => {

        if (selectedAddressId == 0) {
            setOrderErrors("Please select an address");
            return;
        }
        else {
            setOrderErrors("");
        }

        if (totalPrice == 0) {
            setOrderErrors("Please add products to cart");
            return;
        }
        else {
            setOrderErrors("");
        }

        axios.post(`${url}/cart/place-order`, { user_id: auth().id, address_id: selectedAddressId })
            .then(res => {
                console.log("Order placed", res.data)
                setPlaceOrderText("Order Placed")
                setOrderPlaced(true)
                creditUsed()
                reloadCart()
            })
            .catch(err => {
                console.log(err)
            })





    }

    return (
        <>

            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
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
                            <li>
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
                            </li>
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
                <div id="layoutSidenav_nav">
                    <nav
                        className="sb-sidenav accordion sb-sidenav-dark"
                        id="sidenavAccordion"
                    >
                        <div className="sb-sidenav-menu">
                            <div className="nav">
                                <div className="sb-sidenav-menu-heading"></div>
                                <Link to="/dashboard" className="nav-link">
                                    <div className="sb-nav-link-icon">
                                        <i className="fas fa-tachometer-alt" />
                                    </div>
                                    Dashboard
                                </Link>

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
                            <h1 className="mt-4 dashboard-heading" style={{ color: "#000000", textAlign: "left" }}>Dashboard</h1>
                            {/* <ol className="breadcrumb mb-4">
                  <li className="breadcrumb-item">
                    <a href="index.html">Dashboard</a>
                  </li>
                  <li className="breadcrumb-item active">List of products</li>
                </ol> */}

                            <div class="process-path pt-5 pb-4" id="section1">
                                <div class="max-width">
                                    <div class="container p-0">
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <h2 class="requestoil-collection">My Cart</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* design the cart page */}
                            <div className="row">
                                <div className='col-md-8'>
                                    <ProductCart reloadCart={reloadCart} getTotalPrice={getTotalPrice} cart={cart} />
                                </div>

                                <div className='col-md-4'>
                                    <div >
                                        {/* bootstrap card */}
                                        <div className="card">
                                            <div className="card-header">
                                                <h6> Select An Address </h6>

                                            </div>
                                            <div className="card-body">
                                                <div className="row">

                                                    {(addressList && addressList.length) ?
                                                        <>
                                                            {addressList.map((address, index) => (
                                                                <div className="row" style={{ display: "flex", alignItems: "end" }}>
                                                                    <div className="col-md-8 mt-2">
                                                                        {/* radio */}
                                                                        <label onClick={() => handleAddressClick(address.id)}>
                                                                            <input type="radio" name="address" />
                                                                            <span>{" " + address.address1}</span>
                                                                            <span>{", " + address.address2}</span>
                                                                            <span>{", " + address.city}</span>
                                                                            <span>{", " + address.state}</span>
                                                                            <span>{", Pin Code:" + address.pincode}</span>
                                                                            <span>{", Landmark: " + address.landmark}</span>
                                                                            <span>{", " + address.country}</span>
                                                                            <span> {", Phone: " + address.phone} </span>
                                                                        </label>
                                                                    </div>

                                                                    <div className="col-md-4">
                                                                        <button onClick={() => removeAddress(address.id)} className='btn btn-danger btn-sm' style={{ fontSize: "10px" }}>Delete Address</button>
                                                                    </div>
                                                                </div>


                                                            ))}


                                                        </>
                                                        :
                                                        <>
                                                            <div className='text-muted small'>
                                                                You don't have any address.
                                                            </div>
                                                        </>}

                                                    <AddressModal getAddress={getUserAddresses} />
                                                    {/* <div className="col-md-12 mt-2 " style={{textAlign: "right"}}>
                                                       <button className='btn btn-primary btn-track'> Add Address</button>
                                                    </div> */}


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='mt-4'>
                                        <div className="card">
                                            <div className="card-header">
                                                <h6> Order Summary </h6>
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-md-12" style={{ fontSize: "16px", textAlign: "center" }}>
                                                        <table className="table">
                                                            <tbody>
                                                                <tr>
                                                                    <td style={{ textAlign: "left" }}> Remaining Points </td>
                                                                    <td style={{ textAlign: "right" }}> {remaining} </td>
                                                                </tr>
                                                                <tr>
                                                                    <td style={{ textAlign: "left" }}>
                                                                        Total Price
                                                                    </td>
                                                                    <td style={{ textAlign: "right" }}> {totalPrice} </td>
                                                                </tr>
                                                            </tbody>

                                                        </table>
                                                    </div>

                                                    <div className="col-md-12" style={{ textAlign: "center" }}>
                                                        {totalPrice > remaining ?
                                                            <>
                                                                <div className='text-danger'>
                                                                    You have insufficient points to place order!
                                                                </div>
                                                            </> :
                                                            <button onClick={handlePlaceOrder} className="btn btn-primary btn-track">
                                                                {placeOrderText}
                                                            </button>
                                                        }

                                                        {/* bootstrap dismissable alert */}


                                                        {orderPlaced &&
                                                            <div className="alert alert-success alert-dismissible fade show" role="alert">
                                                                <strong>Success!</strong> Your order has been placed.
                                                                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                            </div>
                                                        }

                                                        {orderErrors ? <div className='text-danger'>{orderErrors}</div> : null}
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>


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

export default Cart