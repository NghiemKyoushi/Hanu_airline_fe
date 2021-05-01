import React from "react";
import { Button } from "@material-ui/core";
import { formatDate, formatTime } from "../../utils/fetchData/fetchData";
import { Link } from 'react-router-dom';

class CardViewFlight extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    console.log("recieved props", Number(this.props.idFlight));
    const {
      departureAirport_city,
      arrivalAirport_city,
      price,
      departureTime,
      idFLight
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
          <div>
            <button className="oneway_pr">One way</button>
            <button className="oneway_pr">Economy</button>
          </div>
          <button className="BookNow"><Link style = {{textDecoration:"none" }} to= {`/seatbooking/${ Number(this.props.idFlight)}`}> Booking Now </Link></button>
        </div>
      </>
    );
  }
}
export default CardViewFlight;
