import React, { useEffect, useState } from "react";
import Slider from "react-slick";
// import InstagramEmbed from 'react-instagram-embed';
import Simg1 from "../Images/Serviceimg/12.jpg"
import Simg2 from "../Images/Serviceimg/Greenfuelsupply.jpg"
import Simg3 from "../Images/Serviceimg/Usedcookingoil.jpg"
import ServiceImg3 from "../Images/Icon/track.png"
import axios from "axios";
import Moment from "moment";
import { Link } from "react-router-dom";


function NewsFeed() {

    const [newsfeeds, setNewsfeeds] = useState([])
    const [slidesToShow, setSlidesToShow] = useState(3)

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1
    };

    function getNewsfeeds() {
        const url = process.env.REACT_APP_API_URL
        axios.get(`${url}/newsfeeds`)
            .then(res => {
                console.log(res.data.newsfeeds)
                setNewsfeeds(res.data.newsfeeds)
                if (res.data.newsfeeds.length < 3) {
                    setSlidesToShow(res.data.newsfeeds.length)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getNewsfeeds()
    }, [])

    const formatDate = (d1) => {
        const d2 = Moment(d1).format("MMM D, yyyy")
        return d2
    }

    return (
        <div>
            {/* <div className="container mt-5 mb-5">
        <div className="row">
        <Slider {...News}>
              <div>
                <h3>1</h3>
              </div>
              <div>
                <h3>2</h3>
              </div>
              <div>
                <h3>3</h3>
              </div>
              <div>
                <h3>4</h3>
              </div>
              <div>
                <h3>5</h3>
              </div>
              <div>
                <h3>6</h3>
              </div>
          </Slider>
        </div>
      </div> */}

            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className="heading text-center mb-5">
                            <h4> News & Blogs </h4>
                        </div>
                        <Slider {...settings}>                            
                            
                            {newsfeeds &&
                            newsfeeds.map((item, key) =>
                             <div key={key} className=" p-2">
                                <div style={{ width: "100%", height: "220px", backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>

                                </div>
                                
                                <div className="blog-text mt-2 text-left">
                                    <h4>
                                        {item.name}
                                    </h4>
                                    <p>
                                        {formatDate(item.created_at)}
                                    </p>
                                    <p>
                                        {item.s_description}
                                    </p>

                                    <Link to={`/news-and-blogs/${item.id}`}>READ MORE
                                        <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </div>
                             )}                           
                             
                           

                        </Slider>


                        <div className="mt-5">
                            <Link to="/news-and-blogs" class="btn btn-sumbits">Read More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsFeed;
