import axios from 'axios';
import moment from 'moment';
import React, { useEffect, useState } from 'react'
import Chart from "react-apexcharts";
import Auth1 from '../Auth1';
import Loader from "../Images/Loader/loader.gif"


function OilChart({inViewPort}) {

  const [categories, setCategories] = useState([])
  const [series, setSeries] = useState([])
  const [totalWeight, setTotalWeight] = useState(0)
  const [timeWeight, setTimeWeight] = useState(0)
  const [showDateRange, setShowDateRange] = useState(false)
  const [timeText, setTimeText] = useState("All Time")
  const [customFrom, setCustomFrom] = useState("")
  const [customTo, setCustomTo] = useState("")
  const [customDateError, setCustomDateError] = useState(false)
  const [customDateErrorText, setCustomDateErrorText] = useState("")
  const [loading, setLoading] = useState(false)

  const { http } = Auth1()

  

  const handleCustomeDateSearch = () => {
    setCustomDateError(false)
    if (customFrom == "" || customTo == "") {
      setCustomDateError(true)
      setCustomDateErrorText("Please select a from & to date")
    }
    else {
      var from = moment(customFrom).format("YYYY-MM-DD")
      var to = moment(customTo).format("YYYY-MM-DD")

      setTimeText("From " + moment(customFrom).format("DD-MM-YYYY") + " To " + moment(customTo).format("DD-MM-YYYY"))
      getData(from, to)
    }
  }

  const handleSelect = (e) => {
    var to = moment(new Date).format('YYYY-MM-DD')
    var from = ""

    setShowDateRange(false)

    switch (e.target.value) {
      case "Last 1 week":
        from = moment(to).subtract(1, 'week').format('YYYY-MM-DD')
        setTimeText(e.target.value)
        getData(from, to)
        break;
      case "Last 2 weeks":
        from = moment(to).subtract(2, 'week').format('YYYY-MM-DD')
        setTimeText(e.target.value)
        getData(from, to)
        break;
      case "Last 3 weeks":
        from = moment(to).subtract(3, 'week').format('YYYY-MM-DD')
        setTimeText(e.target.value)
        getData(from, to)
        break;
      case "Last 1 month":
        from = moment(to).subtract(1, 'month').format('YYYY-MM-DD')
        setTimeText(e.target.value)
        getData(from, to)
        break;
      case "Last 3 months":
        from = moment(to).subtract(3, 'month').format('YYYY-MM-DD')
        setTimeText(e.target.value)
        getData(from, to)
        break;
      case "Last 6 months":
        from = moment(to).subtract(6, 'month').format('YYYY-MM-DD')
        setTimeText(e.target.value)
        getData(from, to)
        break;
      case "Last 9 months":
        from = moment(to).subtract(9, 'month').format('YYYY-MM-DD')
        setTimeText(e.target.value)
        getData(from, to)
        break;
      case "Last 12 months":
        from = moment(to).subtract(12, 'month').format('YYYY-MM-DD')
        setTimeText(e.target.value)
        getData(from, to)
        break;
      case "All Time":
        from = ""
        setTimeText(e.target.value)
        getData(from, to)

        break;
      case "custom":
        // 
        setShowDateRange(true)
        break;


      default:
        break;
    }

    // alert(to)
  }

  const url = process.env.REACT_APP_APP_SERVER

  const getData = (dateFrom, dateUpto, start = 0) => {
    const formData = new FormData()
    setLoading(true)

    formData.append("dateFrom", dateFrom)
    formData.append("dateUpto", dateUpto)
    http.post(`${url}/WebData/getOilSoldDetails`, formData)
      .then(res => {
        if (res.data.status === "Success") {
          var data = res.data.data
          // data.map(item => item.sold_date = moment(item.sold_date).format("YYYY-MM-DD"))
          data.sort((a, b) => new Date(a.sold_date) - new Date(b.sold_date))
          var c = []
          var s = []
          var t = 0
          data.map(item => {
            // setCategories([...categories, item.sold_date])
            // setSeries([...series, item.sold_weight])
            c.push(item.sold_date)
            s.push(item.sold_weight)
            t = t + +item.sold_weight
          })
          setCategories(c)
          setSeries(s)
          if (start == 1) {
            setTotalWeight(t)
          }

          setTimeWeight(t)
          setLoading(false)
          

          // console.log("actual data", data);
        }
        // console.log(res.data)
      })
      .catch(err => {
        console.log(err)
        setLoading(false)
      });
  }

  useEffect(() => {
    var to = moment(new Date).format('YYYY-MM-DD')
    var from = ""
    var vendorId = 565    
    
    getData(from, to, 1)
  }, [])

  useEffect(() => {
    console.log("Oil Chart>>>>", inViewPort)
    var to = moment(new Date).format('YYYY-MM-DD')
    var from = ""
    
    if(inViewPort)
    {
      if(categories.length == 0 && series.length == 0)
      {
        getData(from, to, 1)
      }
    }
  }, [inViewPort])

  useEffect(() => {
    console.log("categories", categories)
    console.log("series", series)
    setState({
      options: {
        chart: {
          id: "basic-bar"
        },
        stroke: {
          curve: "straight"
        },
        xaxis: {
          categories: categories
        }
      },
      series: [
        {
          name: "Weight",
          data: series
        }
      ]
    },)
  }, [categories, series])


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
          categories: categories
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val + "kg"
            }
          }
        }
      },
      series: [
        {
          name: "series-1",
          data: series
        }
      ]
    },
  );

  return (
    <div>

      <div className="card">
        <div
          className="card-header"
          style={{ textAlign: "center" }}
        >
          Oil Diposed Data
        </div>
        <div className="card-body">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            height="350"
          />
        </div>
      </div>

      <div
        className="p-5"
        style={{
          border: "1px solid rgba(0, 0, 0, 0.175)",
          marginTop: "-20px",
          background: "rgba(0, 0, 0, 0.1)"
        }}
      >
        <div className="row" style={{ textAlign: "center" }}>
          <div className="col-lg-5" >
            <div>Total Oil disposed </div>
            <div>
              <b>
                till now
              </b>
            </div>
            <div className="graph-points">
              {loading ?
                <div style={{ textAlign: "center" }}>
                  <img src={Loader} width={30} />
                </div> :
                <>
                  {totalWeight.toFixed(2)}kg
                </>
              }

            </div>
          </div>
          <div className="col-lg-7" >
            <div>
              <div>
                Oil disposed in
              </div>
              <b>{timeText}</b>
            </div>
            <div className="graph-points">
              {loading ?
                <div style={{ textAlign: "center" }}>
                  <img src={Loader} width={30} />
                </div> :
                <>
                  {timeWeight.toFixed(2)}kg
                </>
              }

            </div>
          </div>
        </div>

        {/* if loading is true then show the loader */}


        <br />
        <select id="oil_dispose_select" onChange={handleSelect} className="form-control">
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
        {showDateRange &&
          <div
            id="oil_dispose_date_range"
            style={{ marginTop: 20, }}
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
                From: <input type="date" value={customFrom} onChange={(e) => setCustomFrom(e.target.value)} />
              </div>
              <div>
                To: <input type="date" value={customTo} onChange={(e) => setCustomTo(e.target.value)} />
              </div>
              <div>
                <button className="btn btn-sm btn-primary" onClick={handleCustomeDateSearch}>
                  Search
                </button>
              </div>

            </div>
            {customDateError &&
              <div className='text-danger'>
                {customDateErrorText}
              </div>
            }
          </div>}

      </div>


    </div>
  )
}

export default OilChart