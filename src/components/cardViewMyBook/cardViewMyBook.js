import React from "react";
import { Button } from "@material-ui/core";
import { formatDate, formatTime } from "../../utils/fetchData/fetchData";
import { Link, withRouter } from 'react-router-dom';
import {getCookie,deleteCookie,setCookie} from '../../utils/fetchData/fetchData';
class CardViewMyBook extends React.Component {
  constructor(props){
    super(props);
    this.state={
      // idFLight: this.props.idFLight
    }
    this.deleteButton = this.deleteButton.bind(this);

  }

  deleteButton(e){
    e.preventDefault();
    const id = this.props.idFlight;
    let arrFlight = [];
    arrFlight = getCookie("addBook").split(",");
    console.log("addBook",  arrFlight);
    // console.log("laoi",typeof (this.state.idFLight));
   let findID  = arrFlight.find( flight => 
      // if(Number(flight) == id ){
      //   arrFlight.pop(flight);
      //   console.log("ssssssssssss")
      // }
      // console.log( typeof Number(flight));
       Number(flight) === id
    );
     arrFlight.pop(findID)
    deleteCookie("addBook");
    setCookie("addBook", arrFlight, 100);
    window.location.reload();
    // console.log("addBook2", arrFlight);


  }

  render() {
    console.log("recieved props", Number(this.props.idFLight));
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
          <div className = "oneway-economy">
            <button className="oneway_pr">One way</button>
            <button className="oneway_pr">Economy</button>
          </div>
          <button className="BookNow"><Link style = {{textDecoration:"none" }} to= {`/seatbooking/${(this.props.idFLight)}`}> Book Now </Link></button>
          <button className="BookNow" style={{backgroundColor: "red"}} onClick={this.deleteButton}> Delete </button>

        </div>
      </>
    );
  }
}
export default withRouter( CardViewMyBook);