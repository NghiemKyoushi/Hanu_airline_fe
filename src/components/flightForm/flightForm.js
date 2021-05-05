import React from "react";
import CardViewFlight from "../../components/cardViewFlight/cardViewFlight";
import { Button } from "@material-ui/core";

class FlightForm extends React.Component {
  render() {
    const {allFlight} = this.props;

    return (
      <>
        <form class="FlightForm" id="flight">
          <div class="flightMenu">
            <div class="promotion">
              <div
                style={{
                  marginTop: "30px",
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
                {
                      (allFlight) ? (
                        allFlight.map((flight, index) => {
                      if(index < 4){
                        return (
                      <li key = {index}>
                        <CardViewFlight  departureAirport_city = {flight.airway.departureAirport.city} arrivalAirport_city = {flight.airway.arrivalAirport.city} price ={flight.minPrice} departureTime={flight.departureTime} idFlight={flight.id} />
                      </li>
                    );
                      }
                    
                  })
                      ) : 
                      ""
                  }
                </ul>
              </nav>
              
            </div>
          </div>
        </form>
        <button className="more-flight">More</button>
      </>
    );
  }
}

export default FlightForm;
