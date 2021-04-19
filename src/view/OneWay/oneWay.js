import React from "react";
// import {
//   AppBar,
//   Button,
//   Toolbar,
//   Typography,
//   TextField,
// } from "@material-ui/core";
// import Box from "@material-ui/core/Box";
import "./SearchForm.css";
import { ClearAll } from "@material-ui/icons";
class OneWay extends React.Component {
  
  render() {
    return (
      <>
        <div style={{
                  height: "20px",
                  marginTop: "50px",
                  marginBottom: "40px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}><button className = "bookButton" >Booking</button></div>
         <div className = "departingFlight">Departing Flight</div>

        <div className = "day">
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
        </div>

        <form class="FlightForm" id="flight">
          <div class="promotionMenu">
            <div class="promotion">
              <nav>
                <ul>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_pr"
                        type="time"
                        id="date"
                      />
                      <div className="price">Price</div>
                      <div>
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">Book Now</button>
                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_pr"
                        type="time"
                        id="date"
                      />
                      <div className="price">Price</div>
                      <div>
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">Book Now</button>
                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_pr"
                        type="time"
                        id="date"
                      />
                      <div className="price">Price</div>
                      <div>
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">Book Now</button>
                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_pr"
                        type="time"
                        id="date"
                      />
                      <div className="price">Price</div>
                      <div>
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">Book Now</button>
                    </div>
                  </li>
                </ul>
              </nav>
              <button className="more">More</button>
            </div>
          </div>
        </form>
      </>
    );
  }
}
export default OneWay;