import React from "react";
import { ClearAll } from "@material-ui/icons";
import { withRouter } from "react-router";
import  {setCookie, deleteCookie} from '../../utils/fetchData/fetchData';
import './SearchForm.css'
class FlightPrintForm extends React.Component {
  render() {
    return (
      <form className = "1">
        <div class="box">
          <ul class="left">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          
          <ul class="right">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
          <div class="ticket-print">
            <span class="airline-print">HanuAirline</span>
            <span class="airline-print airlineslip">HanuAirline</span>
            <span class="boarding">Ticket</span>
            <div class="content">
              <span class="jfk">HAN</span>
              <span class="plane-print">❯❯❯</span>
              <span class="sfo">SG</span>
              
              <span class="jfk jfkslip">HAN</span>
              <span class="plane-print planeslip">❯❯❯</span>
              <span class="sfo sfoslip">SG</span>
              <div class="sub-content-print">
                <span class="watermark">HanuAirline</span>
                <span class="pass-name">PASSENGER NAME<div><span>Thi Ngan Do</span></div></span>
                <span class="flight-print">FLIGHT N&deg;<div><span>HSNUB78N1</span></div></span>
                <span class="gate-print">GATE<div><span>A1</span></div></span>
                <span class="seat-print">SEAT<div><span>D0-33</span></div></span>
                <span class="departuretime-print">DEPARTURE TIME<div><span>10:00PM || 20,MARCH 2021</span></div></span>
                <span class="arrivaltime">ARRIVAL TIME<div><span>12:00PM || 20,MARCH 2021</span></div></span>
                    
                <span class="flight-print flightslip">FLIGHT N&deg;<div><span>HSNUB78N1</span></div></span>
                  <span class="seat-print seatslip">SEAT<div><span>D0-33</span></div></span>
                <span class="pass-name nameslip">PASSENGER NAME<div><span>Thi Ngan Do</span></div></span>
              </div>
            </div>
            <div class="barcode"></div>
            <div class="barcode slip"></div>
          </div>
        </div>
      </form>
    );
  }
}
export default FlightPrintForm;