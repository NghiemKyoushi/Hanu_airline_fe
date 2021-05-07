import React from "react";
import {nextDayOfDepartureTime,formatDate} from '../../utils/fetchData/fetchData';
import CardViewTimeFlight from '../../components/cardViewTimeFlight/cardViewTimeFlight';
import {setCookie, getCookie} from '../../utils/fetchData/fetchData';
import axios from "axios";

class RoadTrip extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      departure_Time: null,
      arrival_Time: null,
      dataSearch: this.props.dataSearch
    }
    // this.clickChooseDay = this.clickChooseDay.bind(this);
  }

 async componentDidMount(){
     //  arr = getCookie("arrFlightOneWay");
     // storedAry = getCookie('arrFlightOneWay').split(",");
      // console.log(getCookie("departureTime"));
      // console.log(typeof getCookie("arrivalTime"));
      
      let storedAry = getCookie("departureTime").split(",");
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
        departure_Time: values,
      });
    });


    let storedAry1 = getCookie("arrivalTime").split(",");
    const mapData1 = storedAry.map((flight) => {
      let flight_Number = Number(flight);
      console.log("nummmmmmmmm", flight_Number);
      if (flight_Number > 0) {
        let apiSearchOne1 = `http://hanuairline.azurewebsites.net/flight/getById/${flight_Number}`;
        let fetchData = axios.get(apiSearchOne1);
        return fetchData;
      }
    });
    Promise.all(mapData1).then((values) => {
      this.setState({
        arrival_Time: values,
      });
    });


      // const idDepart = Number(getCookie("arrivalTime"));


      // const apiSearchOne1 = `http://hanuairline.azurewebsites.net/flight/getById/${idDepart}`;
      // const fetchData1 = await axios.get(apiSearchOne1);
      // this.setState({
      //   departure_Time: fetchData1.data
      // })
      // console.log("roadtrip1",fetchData1.data);

      // const idArrival = Number(getCookie("arrivalTime"));

      // const apiSearchOne = `http://hanuairline.azurewebsites.net/flight/getById/${idArrival}`;
      // const fetchData = await axios.get(apiSearchOne);
      // this.setState({
      //   arrival_Time: fetchData.data
      // })
      // console.log("roadtrip",fetchData.data)



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
          <div className = "frominroad">{departure_Time[0].data.airway.departureAirport.city}</div>
          <div className = "tinroad">❯❯❯</div>
          <div className = "toinroad">{departure_Time[0].data.airway.arrivalAirport.city}</div>

          </>) : ""
        }
          
        </div>
{/* 
        <div className = "day">
        {
          (departure_Time) ? (<>
                   <button className = "eachday" >{ formatDate(departure_Time[0].data.departureTime)}</button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].data.departureTime, 1)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].data.departureTime, 2)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].data.departureTime, 3)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].data.departureTime, 4)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].data.departureTime, 5)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(departure_Time[0].data.departureTime, 6)}</button>
          </>): (<></>)
        }
                  
        </div> */}

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
                        <CardViewTimeFlight departureAirport_city = {flight.data.airway.departureAirport.city} arrivalAirport_city = {flight.data.airway.arrivalAirport.city} price ={flight.data.minPrice} departureTime={flight.data.departureTime} />
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
          <div className = "frominroad">{arrival_Time[0].data.airway.departureAirport.city}</div>
          <div className = "tinroad">❯❯❯</div>
          <div className = "toinroad">{arrival_Time[0].data.airway.arrivalAirport.city}</div>

          </>) : ""
        }
          
        </div>
        {/* <div className = "day">
        {
          (arrival_Time) ? (<>
                  <button className = "eachday" >{ formatDate(arrival_Time[0].data.departureTime)}</button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].data.departureTime, 1)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].data.departureTime, 2)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].data.departureTime, 3)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].data.departureTime, 4)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].data.departureTime, 5)} </button>
                   <button className = "eachday" >{ nextDayOfDepartureTime(arrival_Time[0].data.departureTime, 6)}</button>
          </>): (<></>)
        }
        </div> */}
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
                        <CardViewTimeFlight departureAirport_city = {flight.data.airway.departureAirport.city} arrivalAirport_city = {flight.data.airway.arrivalAirport.city} price ={flight.data.minPrice} departureTime={flight.data.departureTime} />
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
