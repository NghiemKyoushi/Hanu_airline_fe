import { ThreeSixtySharp } from "@material-ui/icons";
import axios from "axios";
import React from "react";

import TicketPrice from "../../components/ticketPrice/ticketPrice";
import {getCookie} from '../../utils/fetchData/fetchData';
class ChooseType1 extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      count: 0
    }
    this.confirmButton = this.confirmButton.bind(this);
    // this.onChange= this.onChange.bind(this);
  }

  // onChange(e){
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })

  // }

 async confirmButton(){
   let arrTicket = [];
   const ticketProps = this.props.ticketPrice.map((ticket) => {
     arrTicket.push(ticket.data[0]);
   })

    const body = {
      price: 10000,
      currency: "USD",
      method: "paypal",
      intent: "sale",
      description: "empty",
      ticketPayloads:arrTicket ,
    }
    console.log("bodyPay",body)
    try{
      const api = "http://hanuairline.azurewebsites.net/payment/pay";
      const fetchData = await axios.post(api, body);
       console.log(fetchData.data.substring(9));
      
        window.location = fetchData.data.substring(9);
      
    }catch(e){
      alert("fail")
    }
   

  }
  render() {
    const { ticketPrice, airway } = this.props;
    let {count} = this.state;

    console.log(this.props);
    let arrPrice = [];
  
    ticketPrice.map(ticket =>{
      arrPrice.push(ticket.data[0].totalPrice);
    })
    for(let i=0; i< arrPrice.length; i++){
      count += arrPrice[i];
    }
    // this.setState({
    //   count: count
    // })
 

    return (
      <>
        <div
          style={{
            height: "20px",
            marginTop: "50px",
            marginBottom: "40px",
            borderRadius: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="bookButton">Ticket</button>
        </div>
        {ticketPrice
          ?( ticketPrice.map((ticket, index) => {
            return (
              <div key={index}>
                <TicketPrice
                  seatName={ticket.data[0].aircraftSeat_id}
                  departureCity={airway[0].flight.airway.departureAirport.city}
                  arrivalCity={airway[0].flight.airway.arrivalAirport.city}
                  price={ticket.data[0].totalPrice}
                  type={ticket.data[0].type}
                  ticketID={ticket.data[0].id}
                />
                
              </div>)
            }))
          : ""}

        <div className="total">
          <div className="total-price">Total price</div>
          <div className="total-price-detail" name= "count" value = {count}>{count}</div>
        </div>

        <div
          style={{
            height: "20px",
            marginTop: "50px",
            marginBottom: "40px",
            borderRadius: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="PaymentButton">Payment Method</button>
        </div>
        <div className="button-ticket">
          <button className="confirm-ticket" onClick={this.confirmButton}>Confirm</button>
          <button className="cancel-ticket">Cancel</button>
        </div>
      </>
    );
  }
}
export default ChooseType1;
