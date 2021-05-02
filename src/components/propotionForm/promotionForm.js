import React from "react";
import CardViewTimeFlight from "../../components/cardViewTimeFlight/cardViewTimeFlight";
import { Button } from "@material-ui/core";
import { formatDate } from "../../utils/fetchData/fetchData";
class PromotionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
      const {allFlight} = this.props;
    console.log("propsFlight",  allFlight);
    return (
      <>
        <form class="promotionForm" id="promotion">
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
                  Promotion
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
                        <CardViewTimeFlight departureAirport_city = {flight.airway.departureAirport.city} arrivalAirport_city = {flight.airway.arrivalAirport.city} price ={flight.minPrice} departureTime={flight.departureTime} />
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
        <button className="more">More</button>
      </>
    );
  }
}

export default PromotionForm;
