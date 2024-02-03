import React from "react"
import footerlogo from "../Images/roundlogo.png" 
import download from "../Images/download.jpg" 
import download2 from "../Images/download2.jpg" 
import { Link } from "react-router-dom"

function Footer() {
  return(
    <div>
      <footer className="footer pt-5" style={{backgroundImage: "linear-gradient(to left, #02c002, rgb(255 164 0))"}}>
    <div className="max-width">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 px-3">
            <div className="footer-logo">
              <div className="img-container" style={{textAlign: "center"}}>
                <img src={footerlogo} alt="logo" style={{width: "120px"}} />
              </div>
              <p className="py-3 footer-p">
                ECOIL is a game-changing startup that is at the forefront of
                creating a greener future.
              </p>
            </div>
            <div className="footer-icon text-left">
              <p>
                <i className="fa fa-map-marker px-2" aria-hidden="true"></i>
                B-004,Plot no. 132,Rajendra Nagar, Sirsi road, Jaipur, Rajasthan-302021
              </p>
              <p>
                <a href="mailto:ecoil.purchase@gmail.com" className="link-white">
                  <i className="fa-solid fa-envelope px-2" aria-hidden="true"></i>
                ecoil.purchase@gmail.com
                </a>
                
              </p>
              <p>
                <a href="tel:18008903841" className="link-white">
                  <i className="fa fa-phone px-2" aria-hidden="true"></i>
                18008903841
                </a>
                
              </p>
            </div>
            {/* <div className="social-icon text-left">
              <a target="_blank" href="https://www.facebook.com/ecoilenergy">
              <i className="fa-brands fa-facebook"></i>
              </a>
              <a target="_blank" href="https://www.instagram.com/ecoil_energy/">
              <i className="fa-brands fa-instagram"></i>
              </a>
              <a target="_blank" href="https://twitter.com/EcoilEnergy">
              <i className="fa-brands fa-twitter"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/ecoil-energy/">
              <i className="fa-brands fa-linkedin"></i>
              </a>
              <a target="_blank" href="https://wa.me/9983635111">
              <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div> */}
          </div>
          <div className="col-lg-2 col-6">
            <div className="link-heading text-left">
              <h4>Quick Links</h4>
              <hr />
              <ul className="text-left">
                <li><Link to="/about-us" className="link-white">About</Link></li>
                <li><Link to="/services" className="link-white">Services</Link></li>
                {/* <li><a herf="#">Price Discovery</a></li>
                <li><a herf="#">Blog</a></li> */}
                <li><Link to="/contact-us" className="link-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="link-heading text-left">
              <h4>Useful Links</h4>
              <hr />
              <ul>
                <li><Link to="/privacy-policy" className="link-white">Privacy Policy</Link></li>
                {/* <li><a herf="#">Terms and Conditions</a></li>
                <li><a herf="#">Disclaimer</a></li> */}
                <li><Link to="/impact-we-create" className="link-white">Impact We Create</Link></li>
                <li><Link to="/services" className="link-white">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 px-lg-5 px-2 text-left">
            <div className="link-heading">
              <h4>Work Hours</h4>
              <hr />
            </div>
            <div className="time">
              <h6>
                <i className="fa-regular fa-clock"></i> 9 AM- 6 PM Monday-Saturday
              </h6>
              {/* <p>
                  Lorem ipsum dolor sit amet, consectectur adipiscing elit, sed
                  do eiusmod tempor
                </p> */}
              <div className="btn">
                <Link to="/contact-us">
                <button className="btn btn-service">MAKE APPOINTMENT</button>
                </Link>
              </div>
            </div>
             {/* Download app button Start */}
            <div className="download-app-wrap d-flex">
              <div className="col-sms-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=com.arises.knp&pcampaignid=web_share"><img src={download} alt="" style={{width: "100%"}} /></a>
              </div>
              <div className="col-sms-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 m-2">
                <a target="_blank" href="https://apps.apple.com/app/id1599833626"><img src={download2} alt="" style={{width: "100%"}} /></a>
              </div>
            </div>
             {/* Download app button End */}

             <div className="social-icon text-left mt-5">
              <a target="_blank" href="https://www.facebook.com/ecoilenergy?mibextid=ZbWKwL">
              <i className="fa-brands fa-facebook"></i>
              </a>
              <a target="_blank" href="https://instagram.com/ecoil_energy?igshid=MzRlODBiNWFlZA==">
              <i className="fa-brands fa-instagram"></i>
              </a>
              <a target="_blank" href="https://x.com/EcoilEnergy?t=rvLwYzhjFVxKIrPhwq-ClQ&s=09">
              <i className="fa-brands fa-x-twitter"></i>
              </a>
              <a target="_blank" href="https://www.linkedin.com/company/ecoil-energy/">
              <i className="fa-brands fa-linkedin"></i>
              </a>
              <a target="_blank" href="https://wa.me/9352809044">
              <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <hr className="my-3" />

          <div className="col-lg-12">
            <center>
              <p className="copy-right">
                &copy; 2023 Ecoil. Designed by
                <a target="_blank" href="https://www.starpactglobal.com"> Starpact Global Services </a>
                 and
                 <a target="_blank" href="https://www.ecliqs.com"> Ecliqs Consulting </a>
                 
              </p>
            </center>
          </div>
        </div>
      </div>
    </div>
      </footer>
    </div>
  )
  
}

export default Footer

