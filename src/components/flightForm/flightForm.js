import React from "react";
import CardViewFlight from "../../components/cardViewFlight/cardViewFlight";
import { Button } from "@material-ui/core";

class FlightForm extends React.Component {
  render() {
    return (
      <>
        <form class="FlightForm" id="flight">
          <div class="promotionMenu">
            <div class="promotion">
              <div
                style={{
                  height: "20px",
                  marginTop: "100px",
                  marginBottom: "40px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button variant="contained" color="primary" size="large">
                  Flight
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
                        className="time_departure_pr"
                        type="date"
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
                        type="date"
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
                        type="date"
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
                        type="date"
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

export default FlightForm;
