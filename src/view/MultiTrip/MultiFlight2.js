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
class MultiFlight2 extends React.Component {
  
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
        
        <div className = "RoadTrip">
          <div className = "Flight">Flight 1</div>
          <div className = "frominroad">Ha Noi</div>
          <div className = "tinroad">❯❯❯</div>
          <div className = "toinroad">Da Nang</div>
        </div>

        <div className = "day">
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
                   <button className = "eachday" >01/01/0101 </button>
        </div>

        <form className="FlightForm" id="flight">
          <div className="promotionMenu">
            <div className="promotion">
              <nav>
                <ul>
                  <li>
                    <div className="promorion3">
                      <div className="from">Da Nang</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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
                      <div className="from">Ha Noi</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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
                      <div className="from">Ha Noi</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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
                      <div className="from">HCM City</div>
                      <div className="t">to</div>
                      <div className="from">Ha Noi</div>
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

        
        <div className = "RoadTrip">
          <div className = "Flight"> Flight 2</div>
          <div className = "frominroad">HCM City</div>
          <div className = "tinroad">❯❯❯</div>
          <div className = "toinroad">Ha Noi</div>
        </div>
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
                      <div className="from">Ha Noi</div>
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
                      <div className="from">Ha Noi</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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
                      <div className="from">Ha Noi</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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
                      <div className="from">Ha Noi</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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


        <div className = "RoadTrip">
          <div className = "Flight">Flight 3</div>
          <div className = "frominroad">HCM City</div>
          <div className = "tinroad">❯❯❯</div>
          <div className = "toinroad">Ha Noi</div>
        </div>
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
                      <div className="from">Ha Noi</div>
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
                      <div className="from">Ha Noi</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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
                      <div className="from">Ha Noi</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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
                      <div className="from">Ha Noi</div>
                      <div className="t">to</div>
                      <div className="from">HCM City</div>
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
export default MultiFlight2;
