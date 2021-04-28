import React from "react";
import { Button } from "@material-ui/core";
import { formatDate, formatTime } from "../../utils/fetchData/fetchData";
class CardViewFlight extends React.Component {
  render() {
    // console.log("recieved props", this.props);
    const {
      departureAirport_city,
      arrivalAirport_city,
      price,
      departureTime,
      time,
    } = this.props;
    return (
      <>
        <div className="promorion3">
          <button className="from">{departureAirport_city}</button>
          <div className="t">to</div>
          <button className="from">{arrivalAirport_city}</button>

          <input
            className="time_departure_pr"
            id="date"
            value={formatDate(departureTime)}
          />

          <div className="price">{price} VNĐ</div>
          <div className = "oneway-economy">
            <button className="oneway_pr">One way</button>
            <button className="oneway_pr">Economy</button>
          </div>
          <button className="BookNow">Book Now</button>
        </div>
      </>
    );
  }
}
export default CardViewFlight;
