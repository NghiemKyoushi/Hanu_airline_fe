import React from "react";
import {Button} from '@material-ui/core';
import axios from 'axios';
import TicketPrice from "../../components/ticketPrice/ticketPrice";
class TicketForm extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      id: '',
      ticket: ""
    })
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }
  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }
 async onSubmit(e){
    e.preventDefault();
    const {id} = this.state;
    const apiTicket= `http://hanuairline.azurewebsites.net/ticket/getById/${id}`;
    const fetchData = await axios.get(apiTicket);
    this.setState({
      ticket: fetchData.data
    })
    console.log(fetchData.data);
  }


  render() {
    const {ticket} = this.state;
    return (
      <>
        <div class="promotionMenu" id="ticket">
          <div class="promotion">
            <div
              style={{
                backgroundColor: "#026987",
                padding: "50px 0 50px 0",
                height: "20px",
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained" color="primary" size="large">
                Ticket
              </Button>
            </div>
            <div className = "bgFormCheck">
            {
              (ticket) ? (<>

              <TicketPrice
                  seatName={ticket.aircraftSeat.id}
                  departureCity={ticket.flight.airway.departureAirport.city}
                  arrivalCity={ticket.flight.airway.arrivalAirport.city}
                  price={ticket.flight.minPrice}
                  type={ticket.type}
                  ticketID={ticket.id}
                  status={ticket.status}
              /></>) : (
                <form class="form_check">
              <div>
                <input className="TicketID" name ='id' placeholder="Ticket ID _ "  onChange= {this.onChange}/>
                <button className="check" onClick={this.onSubmit}>check status</button>
              </div>
            </form>
              )
            }
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default TicketForm;
