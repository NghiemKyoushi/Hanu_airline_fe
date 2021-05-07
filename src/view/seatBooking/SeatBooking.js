import axios from "axios";
import React from "react";
import { withRouter } from "react-router";
import { Link } from "react-scroll";
import { get } from "react-scroll/modules/mixins/scroller";
import {deleteCookie, formatDate, getCookie, setCookie} from '../../utils/fetchData/fetchData';
import "./seatBooking.scss";
class SeatBooking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      business: [],
      premiumEconomy: [],
      economy: [],
      form: [],
      showFlightInfo: ""
      
      // test: [9, 6, 7, 8],
    };
    this.handleChange = this.handleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e){
    e.preventDefault();
    if( getCookie("saveseat").split().length >0){
      deleteCookie("saveseat")
      const {form} = this.state;
      setCookie("saveseat", form,100 );
      console.log(form.length);
      if(form.length > 0){
        this.props.history.push(`/choosetype/${this.props.match.params.id}`);

      }else{
        alert("Choose seat to next step");
      }
    }else {
      const {form} = this.state;
      setCookie("saveseat", form,100 );
      if(form.length > 0){
        this.props.history.push(`/choosetype/${this.props.match.params.id}`);
      }else{
        alert("Choose seat to next step");
      }
    }
   
  }

  handleChange(e){
    // e.preventDefault();
    // const {name} = e.target;
    const checkedArray= [];
    let value;
    if(e.target.type !=='checkbox'){
      value = e.target.value;
    }else{
      const checkeds = document.getElementsByTagName('input');
      for(let i = 0 ; i < checkeds.length ; i++){
        if(checkeds[i].checked ){
          checkedArray.push(checkeds[i].id);
          // console.log("fjfjfjf",checkeds[i].id);
        
        }
      }
      // const {form} = this.state;
      // this.state.form = checkedArray;
      console.log("form", checkedArray);
      this.setState({
        form: checkedArray
      })

    }
  }

  async componentDidMount() {
    const id = Number(this.props.match.params.id);
    //inform của máy bay 
    const apiFlight = `http://hanuairline.azurewebsites.net/flight/getById/${id}`;
    const getDataFight = await axios.get(apiFlight);
    // this.setState({
    //   showFlightInfo: getDataFight.data
    // })

    const apiSeat = `http://hanuairline.azurewebsites.net/flight/seats-and-status/${id}`;
    const fetchDatSeat =  await axios.get(apiSeat);
    // console.log(fetchDatSeat.data[1]);

    const business = [];
    const premiumEconomy = [];
    const economy = [];
    // const api =
    //   `http://hanuairline.azurewebsites.net/aircraftSeat/admin/getByAircraftId/${id}`;

    // const getData = await axios.get(api, {
    //   headers: {
    //     authorization:
    //       "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjE5NDI4OTQ5LCJleHAiOjE2MjAyOTI5NDl9.LP1g-LPjTE64Amj7m_ZuDseHFQ7niya47Pb-Phvedq0DPkd9xoCOeeq1W1vY5fJ0W_yn3bgL_htnDz5p5MLd7g",
    //   },
    // });

    // const getData = await axios({
    //   method: "GET",
    //   api,
    //   headers:{ }
    // });
    const data = fetchDatSeat.data[1];
    const mapData = data.map((item, index) => {
      if (item.travelClass_id === 1) {
        business.push(data[index]);
      } else if (
        item.travelClass_id === 2
      ) {
        premiumEconomy.push(data[index]);
      } else if (item.travelClass_id === 3) {
        economy.push(data[index]);
      }
    });

    // business.map(seat => {
    //   if(seat.status === "BOOKED"){
    //     document.querySelector(`#${seat.id}`).disabled = true
    //   }
    // })
    // premiumEconomy.map(seat => {
    //   if(seat.status === "BOOKED"){
    //     document.querySelector(`#${seat.id}`).disabled = true
    //   }
    // })
    // economy.map(seat => {
    //   if(seat.status === "BOOKED"){
    //     document.querySelector(`#${seat.id}`).disabled = true
    //   }
    // })
    this.setState({
      business: business,
      premiumEconomy: premiumEconomy,
      economy: economy,
      showFlightInfo: getDataFight.data
    });
  }

  render() {
    const { business, premiumEconomy, economy, showFlightInfo } = this.state;
    console.log("bussssss", economy)
    console.log("data seat : ", showFlightInfo.id);

    return ( 
      <> 
{
 (showFlightInfo) ? (<>
  

                <form className="FlightDetailForm">
                  <div>
                <div style={{
                  height: "20px",
                  marginTop: "50px",
                  marginBottom: "40px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}><button className = "FlightDetail" >Flight Details</button>
                </div>
                  <div className = "aircraftForm">
                  <div className="container1">
                    <div className="ticket-form">
                      <div className="aircraft">Airway Name</div>
                      <div className="aircraft-name">{showFlightInfo.aircraft.name}</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft-1">Airway</div>
                      <div className="aircraft-2">
                        <div className = "ticket-from-to">{showFlightInfo.airway.departureAirport.city}</div>
                        <div className = "t-in-ticket">❯❯❯</div>
                        <div className = "ticket-from-to">{showFlightInfo.airway.arrivalAirport.city}</div>
                      </div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Airport</div>
                      <div className="aircraft-name">{showFlightInfo.airway.departureAirport.city}</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Gate</div>
                      <div className="aircraft-name">{showFlightInfo.departureGate.name}</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Departure Time</div>
                      <div className="aircraft-name">{formatDate(showFlightInfo.departureTime)}</div>
                    </div>
                    <div className="ticket-form">
                      <div className="status">Status</div>
                      <div className="status-ok">{showFlightInfo.status}</div>
                    </div>
                  </div>
                  <div className="container2">
                    <div className="ticket-form">
                      <div className="aircraft">Discount Rate</div>
                      <div className="aircraft-name">0%</div>
                    </div>
                    <div className="blank">
                      <div className="blank1"></div>
                      <div className="blank2"></div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Arrival Airport</div>
                      <div className="aircraft-name">{showFlightInfo.airway.arrivalAirport.city}</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Arrival Gate</div>
                      <div className="aircraft-name">{showFlightInfo.arrivalGate.name}</div>
                    </div>
                    <div className="ticket-form">
                      <div className="aircraft">Arrival Time</div>
                      <div className="aircraft-name">{formatDate(showFlightInfo.arrivalTime)}</div>
                    </div>
                  </div>
                  </div>
                  </div>
                </form>
 </>) : "" 
}
       
                
                
              <form className = "SeatForm">
                <div>
              <div style={{
                  height: "20px",
                  marginTop: "50px",
                  marginBottom: "40px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}><button className = "FlightDetail" >Available Seat</button></div>
                <div className = "available-seat-form">
                 <div className="container1">
                    <div className="seat-form">
                      <div className="round1"></div>
                      <div className="round-note">Business Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round2"></div>
                      <div className="round-note">Economy Flex Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round3"></div>
                      <div className="round-note">Economy Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round4"></div>
                      <div className="round-note">Confirmed Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round5"></div>
                      <div className="round-note">Selected Seat</div>
                    </div>
                    <div className="seat-form">
                      <div className="round6">Exit</div>
                      <div className="round-note">Exit Row</div>
                    </div>
                  </div>
      <div class="plane">
        <ol class="cabin fuselage">
          <li class="row row--1">
            <ol class="seats" type="A">
              {business.map((bus, index) => {
                if (bus.status === "AVAILABLE"){
                  return (
                  <li class="seat2" key={index}>
                    <input type="checkbox" id={bus.id} onChange ={this.handleChange}/>
                    <label for={bus.id}>{bus.id}</label>
                  </li>
                );
                }else if(bus.status === "BOOKED"){
                  <li class="seat2" key={index}>
                    <input type="checkbox" id={bus.id} disabled onChange ={this.handleChange} />
                    <label for={bus.id}>{bus.id}</label>
                  </li>
                }
                
              })}
            </ol>
          </li>
        </ol>
        <div class="exit exit--front fuselage"></div>
        <ol class="cabin fuselage">
          <li class="row row--2">
            <ol class="seats" type="A">
           
              {premiumEconomy.map((pre, index) => {
                if(pre.status === "AVAILABLE"){
                  return (
                  <li class="seat" key={index}>
                    <input type="checkbox" id={pre.id} onChange ={this.handleChange}/>
                    <label for={pre.id}>{pre.id}</label>
                  </li>
                );
                }else if(pre.status === "BOOKED"){
                  return (
                  <li class="seat" key={index}>
                    <input type="checkbox" id={pre.id} disabled onChange ={this.handleChange}/>
                    <label for={pre.id}>{pre.id}</label>
                  </li>
                );
                }
                
              })}
            </ol>
          </li>
        </ol>
        <div class="exit exit--back fuselage">
          <br />
          <li class="row row--3">
            <ol class="seats" type="A">
              {/* {economy.map((eco, index) => {
                if(eco.status === "BOOKED"){
                  return (
                  <li class="seat3" key={index}>
                    <input type="checkbox" id={eco.id} value={eco.id} disabled onChange ={this.handleChange}/>
                    <label for={eco.id}>{eco.id}</label>
                  </li>
                );
                }
                
              })} */}

              {
                economy.map((eco, index) => {
            
                if(eco.status === "AVAILABLE"){

                  return (
                  <li class="seat3" key={index}>
                    <input type="checkbox" id={eco.id} value={eco.id} onChange ={this.handleChange}/>
                    <label for={eco.id}>{eco.id}</label>
                  </li>
                );
                }else if(eco.status === "BOOKED"){
                  return (
                  <li class="seat3" key={index}>
                    <input type="checkbox" id={eco.id} value={eco.id} disabled onChange ={this.handleChange}/>
                    <label for={eco.id}>{eco.id}</label>
                  </li>
                );
                }
                
              })

              }
           </ol>
          </li>
        </div>
        </div>
        </div>
        </div>
        </form>                 
        <div>

                 <button className="confirm-ticket" onClick={this.onSubmit}>Confirm</button>

                  <button className="cancel-ticket" onClick={()=> this.props.history.push('/mybook')}>Cancel</button>

                </div>
      </>
    );
  }
}
export default withRouter(SeatBooking);

