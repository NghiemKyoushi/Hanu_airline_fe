import React from "react";
import { Button } from "@material-ui/core";

import { withRouter } from "react-router";

class MyBook extends React.Component {
  render() {
    return (
      <>
        <form class="FlightForm1" id="flight">
          <div class="promotionMenu">
            <div class="promotion">
              <div
                style={{
                  height: "20px",
                  marginTop: "30px",
                  marginBottom: "10px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" color="primary" size="large">
                  My flight
                </Button>
              </div>
              <nav>
                <ul>
                <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_fl"
                        type="date"
                        id="date"
                      />
                      <div className="price1">
                        <div className="price-flight">Price</div>
                        <div className="price-promotion">50%</div>
                      </div>
                      <div className = "oneway1">
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">Buy Ticket</button>
                      <button className="Delete"> Delete</button>
                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_fl"
                        type="date"
                        id="date"
                      />
                      <div className="price1">
                        <div className="price-flight">Price</div>
                        <div className="price-promotion">50%</div>
                      </div>
                      <div className = "oneway1">
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">Buy Ticket</button>
                      <button className="Delete"> Delete</button>                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_fl"
                        type="date"
                        id="date"
                      />
                      <div className="price1">
                        <div className="price-flight">Price</div>
                        <div className="price-promotion">50%</div>
                      </div>
                      <div className = "oneway1">
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">Buy Ticket</button>
                      <button className="Delete"> Delete</button>                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_fl"
                        type="date"
                        id="date"
                      />
                      <div className="price1">
                        <div className="price-flight">Price</div>
                        <div className="price-promotion">50%</div>
                      </div>
                      <div className = "oneway1">
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">Buy Ticket</button>
                      <button className="Delete"> Delete</button>                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </form>
        <button className="more-fl">More</button>



        <form class="BookedTicket" id="flight">
          <div class="promotionMenu">
            <div class="promotion">
              <div
                style={{
                  height: "20px",
                  marginBottom: "20px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" color="primary" size="large">
                  Booked Ticket
                </Button>
              </div>
              <nav>
                <ul>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_fl"
                        type="date"
                        id="date"
                      />
                      <div className="ticket-id">Ticket ID</div>
                      <div className = "oneway1">
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">View</button>
                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_fl"
                        type="date"
                        id="date"
                      />
                      <div className="ticket-id">Ticket ID</div>
                      <div className = "oneway1">
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">View</button>
                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_fl"
                        type="date"
                        id="date"
                      />
                      <div className="ticket-id">Ticket ID</div>
                      <div className = "oneway1">
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">View</button>
                    </div>
                  </li>
                  <li>
                    <div className="promorion3">
                      <button className="from">Ha Noi</button>
                      <div className="t">to</div>
                      <button className="from">HCM City</button>
                      <input
                        className="time_departure_fl"
                        type="date"
                        id="date"
                      />
                      <div className="ticket-id">Ticket ID</div>
                      <div className = "oneway1">
                        <button className="oneway_pr">One way</button>
                        <button className="oneway_pr">Economy</button>
                      </div>
                      <button className="BookNow">View</button>
                    </div>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </form>
        <button className="more-fl">More</button>
      </>
    );
  }
}

export default withRouter(MyBook);
