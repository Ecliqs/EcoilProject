import { Suspense, lazy, useEffect } from "react";
import { AuthProvider } from "react-auth-kit";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
  Navigate,
} from "react-router-dom";
import Test from "./Test";

// import "./index.css";
// import "./Style.css";
import "./Responsive.css";
import PreLoader from "./Components/PreLoader";
import PrivateRoutes from "./Utils/PrivateRoutes";
import PublicRoutes from "./Utils/PublicRoutes";
import Register from "./Pages/Register/Register";
import Navbar from "./Components/Navbar";
import ScrollToTopButton from "./Components/ScrollToTopButton";

const Home = lazy(() => import("./Pages/Home/Home"))
const AboutUs = lazy(() => import("./Pages/AboutUs/AboutUs"))
const ImpactWeCreate = lazy(() => import("./Pages/ImpactWeCreate/ImpactWeCreate"))
const Biodiesel = lazy(() => import("./Pages/Biodiesel/Biodiesel"))
const Process = lazy(() => import("./Pages/Process/Process"))
const Redeem = lazy(() => import("./Pages/Redeem/Redeem"))
const Services = lazy(() => import("./Pages/Services/Services"))
const Contact = lazy(() => import("./Pages/Contact/Contact"))
const Login = lazy(() => import("./Pages/Login/Login"))
const Service1 = lazy(() => import("./Pages/Services/Service1.js"))
const Service2 = lazy(() => import("./Pages/Services/Service2.js"))
const Service3 = lazy(() => import("./Pages/Services/Service3.js"))
const Dashboard = lazy(() => import("./Pages/Dashboard/Dashbord.js"))
const OilChart = lazy(() => import("./Components/OilChart"))
const Cart = lazy(() => import("./Pages/Cart/Cart.js"))
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy/PrivacyPolicy.js"))
const ResponsiveModal = lazy(() => import("./Components/ReponsiveModal.js"))
const NewsAndBlogs = lazy(() => import("./Pages/NewsAndBlogs/NewsAndBlogs.js"))
const NewsAndBlogsDetails = lazy(() => import("./Pages/NewsAndBlogs/NewsAndBlogDetails.js"))



function App() {

  useEffect(() => {
    if (localStorage.getItem("ecoil-user")) {
      var user = localStorage.getItem("ecoil-user");
      var user = JSON.parse(user)
      console.log(user.id);

    }

  }, [])


  return (
    <div className="App">

      <Router >
        <Suspense fallback={<div>
          Loading...
        </div>}>
          <Routes >
            
            <Route path="/" element={<Home />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="impact-we-create" element={<ImpactWeCreate />} />
            <Route path="sustainable-fuel" element={<Biodiesel />} />
            <Route path="traceability-of-used-cooking-oil" element={<Process />} />
            <Route path="redeem-your-green-points" element={<Redeem />} />
            <Route path="services" element={<Services />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="/news-and-blogs" element={<NewsAndBlogs />} />
            <Route path="/news-and-blogs/:id" element={<NewsAndBlogsDetails />} />
            
            <Route path="used-cooking-oil-collection" element={<Service1 />} />
            <Route path="green-fuel-biodiesel-supply" element={<Service2 />} />
            <Route path="food-business-compliance-solution" element={<Service3 />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />}  />
            
            <Route element={<PrivateRoutes />}>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/cart" element={<Cart />} />
            </Route>

            <Route element={<PublicRoutes />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
            </Route>


            <Route path="/oil-chart" element={<OilChart />} />
            <Route path="/test" element={<Test />} />

            <Route path="/responsive-modal" element={<ResponsiveModal />}></Route>
          </Routes>
          <ScrollToTopButton/>
        </Suspense>
      </Router>

    </div>
  );
}

export default App;
