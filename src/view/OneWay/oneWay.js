import React from "react";
import axios from "axios";
import CardViewTimeFlight from "../../components/cardViewTimeFlight/cardViewTimeFlight";
import {
  nextDayOfDepartureTime,
  formatDate,
} from "../../utils/fetchData/fetchData";
import { setCookie, getCookie } from "../../utils/fetchData/fetchData";
class OneWay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      oneWayFlight: null,
      // dataSearch: this.props.dataSearch
    };
    // this.clickChooseDay = this.clickChooseDay.bind(this);
  }

  // clickChooseDay(e){
  //   e.preventDefault();

  // }
  componentDidMount() {
    let storedAry = getCookie("arrFlightOneWay").split(",");
    let containerResult = [];
    const mapData = storedAry.map((flight) => {
      let flight_Number = Number(flight);
      console.log("nummmmmmmmm", flight_Number);
      if (flight_Number > 0) {
        let apiSearchOne1 = `http://hanuairline.azurewebsites.net/flight/getById/${flight_Number}`;
        let fetchData = axios.get(apiSearchOne1);
        return fetchData;
      }
    });
    Promise.all(mapData).then((values) => {
      this.setState({
        oneWayFlight: values,
      });
    });
  }
  render() {
    const { oneWayFlight } = this.state;
    console.log("1 wayyyyyyyyy", oneWayFlight);

    return (
      <>
        <div
          style={{
            height: "20px",
            marginTop: "50px",
            marginBottom: "40px",
            borderRadius: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="bookButton">Booking</button>
        </div>
        <div className="departingFlight">Departing Flight</div>

        {/* <div className="day">
          {oneWayFlight ? (
            <>
              <button className="eachday">
                {formatDate(oneWayFlight[0].data.departureTime)}{" "}
              </button>
              <button className="eachday">
                {nextDayOfDepartureTime(oneWayFlight[0].data.departureTime, 1)}{" "}
              </button>
              <button className="eachday">
                {nextDayOfDepartureTime(oneWayFlight[0].data.departureTime, 2)}{" "}
              </button>
              <button className="eachday">
                {nextDayOfDepartureTime(oneWayFlight[0].data.departureTime, 3)}{" "}
              </button>
              <button className="eachday">
                {nextDayOfDepartureTime(oneWayFlight[0].data.departureTime, 4)}{" "}
              </button>
              <button className="eachday">
                {nextDayOfDepartureTime(oneWayFlight[0].data.departureTime, 5)}{" "}
              </button>
              <button className="eachday">
                {nextDayOfDepartureTime(oneWayFlight[0].data.departureTime, 1)}{" "}
              </button>
            </>
          ) : (
            ""
          )}
        </div> */}

        <form class="FlightForm" id="flight">
          <div class="promotionMenu">
            <div class="promotion">
              <nav>
                <ul>
                  {oneWayFlight
                    ? oneWayFlight.map((flight, index) => {
                        return (
                          <li key={index}>
                            <CardViewTimeFlight
                              departureAirport_city={
                                flight.data.airway.departureAirport.city
                              }
                              arrivalAirport_city={
                                flight.data.airway.arrivalAirport.city
                              }
                              price={flight.data.minPrice}
                              departureTime={flight.data.departureTime}
                              idFLight = {flight.data.id}
                            />
                          </li>
                        );
                      })
                    : ""}
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
