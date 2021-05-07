import React from "react";
import { Button } from "@material-ui/core";
import  axios from 'axios';
import { withRouter } from "react-router";
import {setCookie, getCookie} from '../../utils/fetchData/fetchData';
import  CardViewMyBook from '../../components/cardViewMyBook/cardViewMyBook';
import CardViewMyTicket from '../../components/cardViewMyTicket/cardViewMyTicket';
class MyBook extends React.Component {

  constructor(props){
    super(props);
    this.state= {
      flightAdd:[] ,
      myTicket: []
    }
  }
 async componentDidMount(){

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

    // ticket booked
    const userId = getCookie("userId");
    const apiTicket = `http://hanuairline.azurewebsites.net/ticket/getByUserId/${userId}`;
    const fetchTicket = await axios.get(apiTicket);
    this.setState({
      myTicket: fetchTicket.data
    })

  }
  render() {

    console.log( "sssssssssssssss",this.state.flightAdd);
    console.log("ticket",this.state.myTicket)

    const {flightAdd,myTicket} = this.state;
    return (
      <>
        <form class="FlightForm" id="flight">

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
                {( myTicket )
                    ? myTicket.map((flight, index) => {
                        return (
                          <li key={index}>
                            <CardViewMyTicket
                              departureAirport_city={
                                flight.flight.airway.departureAirport.city
                              }
                              arrivalAirport_city={
                                flight.flight.airway.arrivalAirport.city
                              }
                              price={flight.flight.price}
                              departureTime={flight.flight.departureTime}
                              // idFLight = {flight.flight.id}
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
        <button className="more-fl">More</button>
      </>
    );
  }
}

export default withRouter(MyBook);
