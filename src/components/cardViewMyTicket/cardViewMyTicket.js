import React from "react";
import { Button } from "@material-ui/core";
import { formatDate, formatTime } from "../../utils/fetchData/fetchData";
import { Link, withRouter } from 'react-router-dom';
import {getCookie,deleteCookie,setCookie} from '../../utils/fetchData/fetchData';
class CardViewMyTicket extends React.Component {
  constructor(props){
    super(props);
    this.state={
      // idFLight: this.props.idFLight
    }

  }


  render() {
    // console.log("recieved props", Number(this.props.idFLight));
    const {
      departureAirport_city,
      arrivalAirport_city,
      price,
      departureTime,
      idFLight,
      idTicket
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

          <div className="price">ID: {idTicket}</div>
          <div className = "oneway-economy">
            <button className="oneway_pr">One way</button>
            <button className="oneway_pr">Economy</button>
          </div>
          <button className="BookNow">View</button>

        </div>
      </>
    );
  }
}
export default withRouter( CardViewMyTicket);