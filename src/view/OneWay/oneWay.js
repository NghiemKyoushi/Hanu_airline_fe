import React from "react";
import axios from "axios";
import CardViewTimeFlight from '../../components/cardViewTimeFlight/cardViewTimeFlight';
import {nextDayOfDepartureTime,formatDate} from '../../utils/fetchData/fetchData';
import {setCookie, getCookie} from '../../utils/fetchData/fetchData';
class OneWay extends React.Component {
  constructor(props){
    super(props);

    this.state= {
      oneWayFlight: [],
      dataSearch: this.props.dataSearch
    }
    // this.clickChooseDay = this.clickChooseDay.bind(this);
  }

  // clickChooseDay(e){
  //   e.preventDefault();
  
  // }
async componentDidMount(){
   let storedAry = getCookie("arrFlightOneWay").split(",");
 
   console.log(storedAry);
   const containerResult = [];
   storedAry.map( async (flight) =>
    {
     let flight_Number = Number(flight);
     console.log("nummmmmmmmm",typeof flight_Number);

    let apiSearchOne1 = `http://hanuairline.azurewebsites.net/flight/getById/${flight_Number}`;
    let fetchData = await axios.get(apiSearchOne1);

    console.log(apiSearchOne1);
    containerResult.push(fetchData.data);
    console.log("oneway",containerResult);
   })

   this.setState({
     oneWayFlight: containerResult
   })
   console.log("aaaaaaaaaaaaaa",this.state.oneWayFlight);
   

  }
  render() {
    const {oneWayFlight} = this.state;
    console.log("1 wayyyyyyyyy",oneWayFlight);

    return (
      <>
        {/* <div style={{
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
        {
          (oneWayFlight) ? (<><button className = "eachday" >{ formatDate(oneWayFlight[0].departureTime)} </button>
                   <button className = "eachday" >{nextDayOfDepartureTime(oneWayFlight[0].departureTime, 1)} </button>
                   <button className = "eachday" >{nextDayOfDepartureTime(oneWayFlight[0].departureTime, 2)} </button>
                   <button className = "eachday" >{nextDayOfDepartureTime(oneWayFlight[0].departureTime, 3)} </button>
                   <button className = "eachday" >{nextDayOfDepartureTime(oneWayFlight[0].departureTime, 4)} </button>
                   <button className = "eachday" >{nextDayOfDepartureTime(oneWayFlight[0].departureTime, 5)} </button>
                   <button className = "eachday" >{nextDayOfDepartureTime(oneWayFlight[0].departureTime, 1)} </button></>): ""
        }
                   
        </div>

        <form class="FlightForm" id="flight">
          <div class="promotionMenu">
            <div class="promotion">
              <nav>
                <ul>
                {
                  (oneWayFlight) ? (
                    oneWayFlight.map( (flight, index) => {
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
        </form> */}
      </>
    );
  }
}
export default OneWay;