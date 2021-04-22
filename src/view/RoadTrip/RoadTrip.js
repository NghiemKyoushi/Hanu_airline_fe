import React from "react";
import {nextDayOfDepartureTime,formatDate} from '../../utils/fetchData/fetchData';
import CardViewTimeFlight from '../../components/cardViewTimeFlight/cardViewTimeFlight';
class RoadTrip extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      departure_Time: this.props.departure_Time,
      arrival_Time: this.props.arrival_Time,
      dataSearch: this.props.dataSearch
    }
    // this.clickChooseDay = this.clickChooseDay.bind(this);
  }
  render() {
    const {departure_Time, arrival_Time} = this.state;
    console.log("ssss", departure_Time );
    console.log("wwwwwwww",arrival_Time);
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
        {
          (departure_Time) ? (<> <div className = "departingFlight">Departing Flight</div>
          <div className = "frominroad">{departure_Time[0].airway.departureAirport.city}</div>
          <div className = "tinroad">❯❯❯</div>
          <div className = "toinroad">{departure_Time[0].airway.arrivalAirport.city}</div>

          </>) : ""
        }
          
        </div>

        <div className = "day">
        {
          (departure_Time) ? (<>
                   <button className = "eachday" >{ formatDate(departure_Time[0].departureTime)}</button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].departureTime, 1)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].departureTime, 2)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].departureTime, 3)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].departureTime, 4)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].departureTime, 5)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].departureTime, 6)}</button>
          </>): (<></>)
        }
                  
        </div>

        <form className="FlightForm" id="flight">
          <div className="promotionMenu">
            <div className="promotion">
              <nav>
                <ul>
                {
                  (departure_Time) ? (
                    departure_Time.map( (flight, index) => {
                      return (
                        <li key = {index}>
                        <CardViewTimeFlight departureAirport_city = {flight.airway.departureAirport.city} arrivalAirport_city = {flight.airway.arrivalAirport.city} price ={flight.minPrice} departureTime={flight.departureTime} />
                        </li>
                      )
                    })
                  ): ""
                }
                </ul>
              </nav>
              <button className="more">More</button>
            </div>
          </div>
        </form>

        
        <div className = "RoadTrip">
        {
          (arrival_Time) ? (<>
          <div className = "departingFlight">Returning Flight</div>
          <div className = "frominroad">{arrival_Time[0].airway.departureAirport.city}</div>
          <div className = "tinroad">❯❯❯</div>
          <div className = "toinroad">{arrival_Time[0].airway.arrivalAirport.city}</div>

          </>) : ""
        }
          
        </div>
        <div className = "day">
        {
          (arrival_Time) ? (<>
                  <button className = "eachday" >{ formatDate(arrival_Time[0].departureTime)}</button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].departureTime, 1)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].departureTime, 2)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].departureTime, 3)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].departureTime, 4)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].departureTime, 5)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].departureTime, 6)}</button>
          </>): (<></>)
        }
        </div>
        <form class="FlightForm" id="flight">
          <div class="promotionMenu">
            <div class="promotion">
              <nav>
                <ul>

                {
                  (arrival_Time) ? (
                    arrival_Time.map( (flight, index) => {
                      return (
                        <li key = {index}>
                        <CardViewTimeFlight departureAirport_city = {flight.airway.departureAirport.city} arrivalAirport_city = {flight.airway.arrivalAirport.city} price ={flight.minPrice} departureTime={flight.departureTime} />
                        </li>
                      )
                    })
                  ): ""
                }
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
export default RoadTrip;
