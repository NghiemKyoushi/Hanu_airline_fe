import React from "react";
import { withRouter } from "react-router";
// import './ticketChooseType.css';
class TicketPrice extends React.Component {

    constructor(props){

        super(props);
        this.state={
            // sendType: 
        }
        // this.chooseType = this.chooseType.bind(this);
        // this.confirm= this.chooseType.bind(this);
    }

    // chooseType(e){
    //     e.preventDefault();
    //     const personType ={
    //         seatName: this.props.seatName,
    //         personType:e.target.value
    //     } ;
    //     this.props.putType(personType);
        
    //    console.log("value", personType);
    //     const type = document.querySelectorAll(".adult-in-ticket");
    //     //  clearAll(type);
   
    //     function clearAll(buttons){
    //        buttons.forEach((b) =>{
    //        b.classList.remove("type")
    //      })
    //    }
    //    e.target.classList.toggle("type");
    // }

  render() {
      const {seatName, departureCity, arrivalCity,ticketID, price, type} = this.props;
      console.log("props")
    return (
      <>
        <form className="ticket" id ={seatName}>
          <div className="container1">
            <div className="ticket-form">
              <div className="ticket-field">Ticket ID</div>
              <div className="ticket-field-detail">{ticketID}</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Airway</div>
              <div className="ticket-field-detail-2">
                <div className = "ticket-from-to">{departureCity}</div>
                <div className = "t-in-ticket">❯❯❯</div>
                <div className = "ticket-from-to">{arrivalCity}</div>
              </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field">Seat</div>
              <div className="ticket-field-detail">{seatName}</div>
            </div>
          </div>

          <div className="container2">
            <div className="ticket-form">
              <div className="ticket-field">Price</div>
              <div className="ticket-field-detail">{price}</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Type</div>
                <div className="ticket-field-detail-2">
                  {/* <button className="adult-in-ticket" onClick = {this.chooseType} value = "ADULT">Adult</button> */}
                  <button className="adult-in-ticket" disabled>{type}</button>
                  </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Status</div>
              <div className="ticket-field-status">Available</div>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export default withRouter(TicketPrice);