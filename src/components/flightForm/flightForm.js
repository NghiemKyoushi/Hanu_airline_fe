import React from "react";
import CardViewFlight from "../../components/cardViewFlight/cardViewFlight";
import { Button } from "@material-ui/core";

class FlightForm extends React.Component {
  render() {
    const {allFlight} = this.props;

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
                      <li>
                        <CardViewFlight departureAirport_city = {flight.airway.departureAirport.city} arrivalAirport_city = {flight.airway.arrivalAirport.city} price ={flight.minPrice} departureTime={flight.departureTime} />
                      </li>
                    );
                      }
                    
                  })
                      ) : 
                      ""
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

export default FlightForm;
