import React from "react";
import CardViewTimeFlight from '../../components/cardViewTimeFlight/cardViewTimeFlight';
import {nextDayOfDepartureTime,formatDate} from '../../utils/fetchData/fetchData';

class MultiFlight2 extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      flight: this.props.flight,
      dataSearch: this.props.dataSearch
    }
  }
  render() {
    const {flight} = this.state;
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
                }}><button className = "bookButton" >Booking</button>
        </div>
        
        <div className = "RoadTrip">
        {
          (flight) ? (<> <div className = "departingFlight">Departing Flight</div>
          <div className = "frominroad">{flight[0].airway.departureAirport.city}</div>
          <div className = "tinroad">❯❯❯</div>
          <div className = "toinroad">{flight[0].airway.arrivalAirport.city}</div>

          </>) : ""
        }
        </div>

        <div className = "day">
        {
          (flight) ? (<>
                   <button className = "eachday" >{ formatDate(flight[0].departureTime)}</button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(flight[0].departureTime, 1)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(flight[0].departureTime, 2)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(flight[0].departureTime, 3)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(flight[0].departureTime, 4)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(flight[0].departureTime, 5)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(flight[0].departureTime, 6)}</button>
          </>): (<></>)
        }
        </div>

        
        <form class="FlightForm" id="flight">
          <div class="promotionMenu">
            <div class="promotion">
              <nav>
                <ul>
                {
                  (flight) ? (
                    flight.map( (flight, index) => {
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
export default MultiFlight2;
