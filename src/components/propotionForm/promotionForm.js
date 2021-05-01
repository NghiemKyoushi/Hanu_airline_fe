import React from "react";
import CardViewFlight from "../../components/cardViewFlight/cardViewFlight";
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
                  marginBottom: "40px",
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
                      if(index >5 ){
                        return (
                      <li  key ={index}>
                        <CardViewFlight departureAirport_city = {flight.airway.departureAirport.city} arrivalAirport_city = {flight.airway.arrivalAirport.city} price ={flight.minPrice} departureTime={flight.departureTime} idFlight={flight.id} />
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

export default PromotionForm;
