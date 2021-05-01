import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import { get } from "react-scroll/modules/mixins/scroller";
import "./seatBooking.scss";
class SeatBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      premiumEconomy: [],
      economy: [],
      test: [9, 6, 7, 8],
    };
  }
  async componentDidMount() {
    const business = [];
    const premiumEconomy = [];
    const economy = [];
    const api =
      "http://hanuairline.azurewebsites.net/aircraftSeat/admin/getByAircraftId/33";

    const getData = await axios.get(api, {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjE5NDI4OTQ5LCJleHAiOjE2MjAyOTI5NDl9.LP1g-LPjTE64Amj7m_ZuDseHFQ7niya47Pb-Phvedq0DPkd9xoCOeeq1W1vY5fJ0W_yn3bgL_htnDz5p5MLd7g",
      },
    });

    // const getData = await axios({
    //   method: "GET",
    //   api,
    //   headers:{ }
    // });
    const data = getData.data;
    const mapData = data.map((item, index) => {
      if (item.travelClass.description === "BUSINESS CLASS CLASSIC") {
        business.push(data[index]);
      } else if (
        item.travelClass.description === "PREMIUM ECONOMY CLASS CLASSIC"
      ) {
        premiumEconomy.push(data[index]);
      } else if (item.travelClass.description === "ECONOMY CLASS CLASSIC") {
        economy.push(data[index]);
      }
    });
    this.setState({
      business: business,
      premiumEconomy: premiumEconomy,
      economy: economy,
    });
  }

  render() {
    const { business, premiumEconomy, economy } = this.state;
    // console.log("bussssss",typeof business)
    console.log("data seat : ", business);

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
                }}><button className = "FlightDetail" >Flight Details</button></div>
                <form className="aircraftForm">
                  <div className="container1">
                    <div className="ticket-form">
                      <div className="aircraft">Aircaft Name</div>
                      <div className="aircraft-name">HANUB78N1</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft-1">Airway</div>
                      <div className="aircraft-2">
                        <div className = "ticket-from-to">HCM City</div>
                        <div className = "t-in-ticket">❯❯❯</div>
                        <div className = "ticket-from-to">Ha Noi</div>
                      </div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Airport</div>
                      <div className="aircraft-name">Tan Son Nhat</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Gate</div>
                      <div className="aircraft-name">A1</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Time</div>
                      <div className="aircraft-name">DD/MM/YYYY</div>
                    </div>
                    <div className="ticket-form">
                      <div className="status">Status</div>
                      <div className="status-ok">OK</div>
                    </div>
                  </div>
                  <div className="container2">
                    <div className="ticket-form">
                      <div className="aircraft">Discount Rate</div>
                      <div className="aircraft-name">50%</div>
                    </div>
                    <div className="blank">
                      <div className="blank1"></div>
                      <div className="blank2"></div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Airport</div>
                      <div className="aircraft-name">Tan Son Nhat</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Gate</div>
                      <div className="aircraft-name">A1</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Time</div>
                      <div className="aircraft-name">DD/MM/YYYY</div>
                    </div>
                  </div>
                </form>
                
                <div style={{
                  height: "20px",
                  marginTop: "50px",
                  marginBottom: "40px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}><button className = "FlightDetail" >Available Seat</button></div>
              <form className = "available-seat-form">
                 <div className="container1">
                    <div className="seat-form">
                      <div className="round1"></div>
                      <div className="round-note">Business Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round2"></div>
                      <div className="round-note">Economy Flex Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round3"></div>
                      <div className="round-note">Economy Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round4"></div>
                      <div className="round-note">Confirmed Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round5"></div>
                      <div className="round-note">Selected Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round6">Exit</div>
                      <div className="round-note">Exit Row</div>
                    </div>
                  </div>
      <div class="plane">
        <ol class="cabin fuselage">
          <li class="row row--1">
            <ol class="seats" type="A">
              {business.map((bus, index) => {
                return (
                  <li class="seat2" key ={index}>
                    <input type="checkbox" id="1B" />
                    <label for="1B">{bus.id}</label>
                  </li>
                );
              })}
            </ol>
          </li>
        </ol>
        <div class="exit exit--front fuselage"></div>
        <ol class="cabin fuselage">
          <li class="row row--2">
            <ol class="seats" type="A">

            {premiumEconomy.map((pre, index) => {
                return (
                  <li class="seat" key ={index}>
                    <input type="checkbox" id="1B" />
                    <label for="1B">{pre.id}</label>
                  </li>
                );
              })}
            </ol>
          </li>
        </ol>
        <div class="exit exit--back fuselage">
          <br />
          <li class="row row--3">
            <ol class="seats" type="A">
            {economy.map((eco, index) => {
                return (
                  <li class="seat3" key ={index}>
                    <input type="checkbox" id="1B" />
                    <label for="1B">{eco.id}</label>
                  </li>
                );
              })}
              <li class="seat3">
                <input type="checkbox" id="2A" />
                <label for="2A">2A</label>
              </li>
              <li class="seat3">
                <input type="checkbox" id="2B" />
                <label for="2B">2B</label>
              </li>
              <li class="seat3">
                <input type="checkbox" id="2C" />
                <label for="2C">2C</label>
              </li>
              <li class="seat3">
                <input type="checkbox" id="2D" />
                <label for="2D">2D</label>
              </li>
              <li class="seat3">
                <input type="checkbox" id="2E" />
                <label for="2E">2E</label>
              </li>
              <li class="seat3">
                <input type="checkbox" id="2F" />
                <label for="2F">2F</label>
              </li>
              <li class="seat3">
                <input type="checkbox" id="2D" />
                <label for="2D">2D</label>
              </li>
              <li class="seat3">
                <input type="checkbox" id="2E" />
                <label for="2E">2E</label>
              </li>
              <li class="seat3">
                <input type="checkbox" id="2F" />
                <label for="2F">2F</label>
              </li>
            </ol>
          </li>
        </div>
      </div>
      </form>
               <div className = "button-seat">
                  <button className="confirm-ticket">Confirm</button>
                  <button className="cancel-ticket">Cancel</button>
                </div>
      </>
    );
  }
}
export default withRouter(SeatBooking);

{
  /* business.map( (business, index) =>(
                <li class="seat2">
                <input type="checkbox" id="1A" />
                <label for="1A">1A</label>
              </li>
              )) */
}
{
  /* <li class="seat2">
                <input type="checkbox" id="1A" />
                <label for="1A">1A</label>
              </li>
              <li class="seat2">
                <input type="checkbox" id="1B" />
                <label for="1B">1B</label>
              </li>
              <li class="seat2">
                <input type="checkbox" id="1C" />
                <label for="1C">1C</label>
              </li>
              <li class="seat2">
                <input type="checkbox" id="1D" />
                <label for="1D">1D</label>
              </li> */
}
