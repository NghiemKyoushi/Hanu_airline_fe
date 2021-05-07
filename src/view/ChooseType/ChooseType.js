import React from "react";
import TicketChooseType from "../../components/tichketChooseType/ticketChooseType";
import axios from "axios";

import { getCookie } from "../../utils/fetchData/fetchData";
import { withRouter } from "react-router";
import ChooseType1 from './ChooseType1';
class ChooseType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      airway: "",
      seat: [],
      receiveType: [],
      ticketPrice: []
    };
    this.putType = this.putType.bind(this);
    this.confirmButton = this.confirmButton.bind(this);
  }
  async confirmButton(e) {
    e.preventDefault();
    const { receiveType } = this.state;

    let arrseat = [];
    arrseat = getCookie("saveseat").split(",");
    console.log(receiveType.length, "kk", arrseat.length);
    if (receiveType.length < arrseat.length) {
      alert("Please choose type for all flight");
    } else if (receiveType.length === arrseat.length) {
      //flight id
      const flightId = this.props.match.params.id;
      //userId
      const userID = getCookie("userId");
      //airway ID
      const apiFlight = `http://hanuairline.azurewebsites.net/flight/getById/${this.props.match.params.id}`;
      const getDataFight = await axios.get(apiFlight);
      console.log(getDataFight.data.airway.id);

      try{
        const mapData = receiveType.map((type) => {
          const body = {
            flightId: flightId,
            userId: userID,
            airwayId: getDataFight.data.airway.id,
            getTicketPricePayloads: [
              {
                seatId: type.seatName,
                ticketType: type.personType,
              },
            ],
          };
          console.log("body", body)
          let api = "http://hanuairline.azurewebsites.net/ticket/getTicketsPrices";
  
          let fetchData = axios.post(api, body);
          return fetchData
        });
        Promise.all(mapData).then((values)=> {
          this.setState({
            ticketPrice: values
          })
        })
  
      }catch(e){
        alert("Access fail")
      }
    }
  }
  putType(type) {
    let { receiveType } = this.state;
    let arrseat = [];
    arrseat = getCookie("saveseat").split(",");

    const checkExist = receiveType.find(
      (item) => item.seatName === type.seatName
    );
    if (checkExist) {
      receiveType.map((personType) => {
        if (personType.seatName === type.seatName) {
          personType.personType = type.personType;
          // }else{
          //   receiveType.push(type);
          // }
        }
      });
    } else {
      receiveType.push(type);
      console.log("llllllllllll");
    }
    console.log("receive type", this.state.receiveType);
  }
  async componentDidMount() {
    console.log("cchooooooooooooooooooooooooo");
    const id = this.props.match.params.id;
    console.log(this.props);
    const apiSearchAirway = `http://hanuairline.azurewebsites.net/ticket/getByFlightId/${id}`;
    const fetchData = await axios.get(apiSearchAirway);

    // console.log("airway", fetchData.data);
    let seat = [];
    seat = getCookie("saveseat").split(",");
    console.log("seat", seat);

    this.setState({
      airway: fetchData.data,
      seat: seat,
    });
  }
  render() {
    const { airway, seat, ticketPrice } = this.state;
    // seatName ={seat} departureCity = {airway[0].flight.airway.departureAirport.city} arrivalCity ={airway[0].flight.airway.arrivalAirport.city}
    console.log("airrrrrrrrrr", ticketPrice);
    return (
      <>
      {
        (ticketPrice.length > 0) ? (<>

        <ChooseType1 ticketPrice= {ticketPrice} airway ={airway} />
        </>) : (
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
        {airway && seat.length > 0
          ? seat.map((seat, index) => {
              return (
                <div key={index}>
                  <TicketChooseType
                    putType={this.putType}
                    seatName={seat}
                    departureCity={
                      airway[0].flight.airway.departureAirport.city
                    }
                    arrivalCity={airway[0].flight.airway.arrivalAirport.city}
                  />
                </div>
              );
            })
          : ""}
        <div className="button-ticket">
          <button className="confirm-ticket" onClick={this.confirmButton}>
            Confirm
          </button>
          <button className="cancel-ticket" onClick={()=> this.props.history.push(`/seatbooking/${this.props.match.params.id}`)} >Cancel</button>
        </div>
          </>
        )
      }
       
      </>
    );
  }
}
export default withRouter(ChooseType);
    {/* <form className="ticket">
          <div className="container1">
            <div className="ticket-form">
              <div className="ticket-field">Ticket ID</div>
              <div className="ticket-field-detail">198</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Airway</div>
              <div className="ticket-field-detail-2">
                <div className = "ticket-from-to">HCM City</div>
                <div className = "t-in-ticket">❯❯❯</div>
                <div className = "ticket-from-to">Ha Noi</div>
              </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field">Seat</div>
              <div className="ticket-field-detail">H98</div>
            </div>
          </div>

          <div className="container2">
            <div className="ticket-form">
              <div className="ticket-field">Price</div>
              <div className="ticket-field-detail">3 000 000 VND</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Type</div>
                <div className="ticket-field-detail-2">
                  <button className="adult-in-ticket">Adult</button>
                  <button className="adult-in-ticket">Children</button>
                  </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Status</div>
              <div className="ticket-field-status">Available</div>
            </div>
          </div>
        </form>

        <form className="ticket">
          <div className="container1">
            <div className="ticket-form">
              <div className="ticket-field">Ticket ID</div>
              <div className="ticket-field-detail">198</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Airway</div>
              <div className="ticket-field-detail-2">
                <div className = "ticket-from-to">HCM City</div>
                <div className = "t-in-ticket">❯❯❯</div>
                <div className = "ticket-from-to">Ha Noi</div>
              </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field">Seat</div>
              <div className="ticket-field-detail">H98</div>
            </div>
          </div>

          <div className="container2">
            <div className="ticket-form">
              <div className="ticket-field">Price</div>
              <div className="ticket-field-detail">3 000 000 VND</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Type</div>
                <div className="ticket-field-detail-2">
                  <button className="adult-in-ticket">Adult</button>
                  <button className="adult-in-ticket">Children</button>
                  </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Status</div>
              <div className="ticket-field-status">Available</div>
            </div>
          </div>
        </form>

        <form className="ticket">
          <div className="container1">
            <div className="ticket-form">
              <div className="ticket-field">Ticket ID</div>
              <div className="ticket-field-detail">198</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Airway</div>
              <div className="ticket-field-detail-2">
                <div className = "ticket-from-to">HCM City</div>
                <div className = "t-in-ticket">❯❯❯</div>
                <div className = "ticket-from-to">Ha Noi</div>
              </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field">Seat</div>
              <div className="ticket-field-detail">H98</div>
            </div>
          </div>

          <div className="container2">
            <div className="ticket-form">
              <div className="ticket-field">Price</div>
              <div className="ticket-field-detail">3 000 000 VND</div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Type</div>
                <div className="ticket-field-detail-2">
                  <button className="adult-in-ticket">Adult</button>
                  <button className="adult-in-ticket">Children</button>
                  </div>
            </div>
            <div className="ticket-form">
              <div className="ticket-field-1">Status</div>
              <div className="ticket-field-status">Available</div>
            </div>
          </div>
        </form> */}