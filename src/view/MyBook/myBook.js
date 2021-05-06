import React from "react";
import { Button } from "@material-ui/core";
import  axios from 'axios';
import { withRouter } from "react-router";
import {setCookie, getCookie} from '../../utils/fetchData/fetchData';
import  CardViewMyBook from '../../components/cardViewMyBook/cardViewMyBook'
class MyBook extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      flightAdd:[] 
    }
  }
  componentDidMount(){

    console.log("myBook", getCookie("addBook"));

    let storedAry = getCookie("addBook").split(",");
    let containerResult = [];
    const mapData = storedAry.map((flight) => {
      let flight_Number = Number(flight);
      console.log("nummmmmmmmm", flight_Number);
      if (flight_Number > 0) {
        let apiSearchOne1 = `http://hanuairline.azurewebsites.net/flight/getById/${flight_Number}`;
        let fetchData = axios.get(apiSearchOne1);
        console.log("daaaaaa", apiSearchOne1)
        return fetchData;
      }
    });
    Promise.all(mapData).then((values) => {
      this.setState({
        flightAdd: values,
      });
    });

  }
  render() {

    console.log( "sssssssssssssss",this.state.flightAdd);

    const {flightAdd} = this.state;
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
                  My flight
                </Button>
              </div>
              <nav>
                <ul>
                {( flightAdd )
                    ? flightAdd.map((flight, index) => {
                        return (
                          <li key={index}>
                            <CardViewMyBook
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
            </div>
          </div>
        </form>



        <form class="BookedTicket" id="flight">
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
                        className="time_departure_pr"
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
                        className="time_departure_pr"
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
                        className="time_departure_pr"
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
                        className="time_departure_pr"
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
      </>
    );
  }
}

export default withRouter(MyBook);
