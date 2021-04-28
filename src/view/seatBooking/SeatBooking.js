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
      <div class="plane">
        <div class="cockpit">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: "40px",
            }}
          >
            <div
              className="color_class"
              style={{ backgroundColor: "yellow" }}
            ></div>
            <h4>Business</h4>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: "40px",
            }}
          >
            <div
              className="color_class"
              style={{ backgroundColor: "blue" }}
            ></div>
            <h4>Economy Flex</h4>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              height: "40px",
            }}
          >
            <div
              className="color_class"
              style={{ backgroundColor: "Highlight" }}
            ></div>
            <h4>Economy</h4>
          </div>
        </div>
        <ol class="cabin fuselage">
          <li class="row row--1">
            <ol class="seats" type="A">
              {business.map((bus, index) => {
                return (
                  <li class="seat2" key ={index}>
                    <input type="checkbox" id={bus.id} />
                    <label for={bus.id}>{bus.id}</label>
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
                    <input type="checkbox" id={pre.id} />
                    <label for={pre.id}>{pre.id}</label>
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
                    <input type="checkbox" id={eco.id} />
                    <label for={eco.id}>{eco.id}</label>
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
