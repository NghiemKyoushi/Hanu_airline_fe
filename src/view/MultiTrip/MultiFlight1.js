import React from "react";
import { withRouter } from "react-router";
import axios from 'axios';
import MultiFlight2 from './MultiFlight2';

class MultiFlight1 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numberFlight: [],

      departureAirportOrCity: "",
      arrivalAirportOrCity: "",
      departureTime: "",
      arrivalTime:"",
      childNumber: 0,
      adultNumber: 0,
      travelClassId: "1",

      dataSearch:[],
      dataFetch: [],
      checkFetch: false,

    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);

    // this.createLength = this.createLength.bind(this)
  }

  async submitSearch(e){
    e.preventDefault();
    console.log("search")

    const { departureAirportOrCity, arrivalAirportOrCity, departureTime, arrivalTime, travelClassId, childNumber,adultNumber } = this.state;
   
    const departureAirportOrCity1 = document.querySelectorAll("#departureAirportOrCity");
    // for(let i = 0; i < departureAirportOrCity1.length; i ++){
    //   console.log(departureAirportOrCity1[i]);
    // }
    const arrivalAirportOrCity1 = document.querySelectorAll("#arrivalAirportOrCity");

    const departureTime1 = document.querySelectorAll("#departureTime");
    //  for(let i = 0; i < departureTime1.length; i ++){
    //    console.log(departureTime1[i].value);
    //  }

     const childNumber1 = document.querySelectorAll("#childNumber");
     const adultNumber1 = document.querySelectorAll("#adultNumber");
     const travelClassId1 = document.querySelectorAll("#travelClassId1");
    //  for(let i =0; i< travelClassId1.length; i++){
    //    console.log(travelClassId1[i].value);
    //  }

    for (let i = 0; i < this.props.match.params.id; i ++){
        const body1 = {
        departureAirportOrCity: departureAirportOrCity1[i].value,
        arrivalAirportOrCity: arrivalAirportOrCity1[i].value,
        departureTime: departureTime1[i].value,
        arrivalTime:departureTime1[i].value,
        numberOfTraveler: Number(childNumber1[i].value) + Number(adultNumber1[i].value), 
        travelClassId: travelClassId1[i].value
      }
      this.state.dataSearch.push(body1);
    }

    console.log("data search: ", this.state.dataSearch);

    //FETCH DATA

    for(let i = 0; i < this.props.match.params.id; i ++ ){
      try{
        const apiSearchOne= "http://hanuairline.azurewebsites.net/flight/search-one";
        const searchFlight = await axios.post(apiSearchOne,this.state.dataSearch[i]);
      this.state.dataFetch.push(searchFlight.data);
      console.log(this.state.dataFetch);
      this.setState({
        checkFetch: true
      })
      }catch(e){
        alert("false ff");
        this.setState({
          checkFetch: false
        })
      }
     

    }
    

      // const body1 = {
      //   departureAirportOrCity: departureAirportOrCity,
      //   arrivalAirportOrCity: arrivalAirportOrCity,
      //   departureTime: departureTime,
      //   arrivalTime:departureTime,
      //   numberOfTraveler: Number(childNumber) + Number(adultNumber), 
      //   travelClassId: travelClassId
      // }
      // console.log("body 1", body1);   
    
    // console.log("bodysearch", body)
    
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  componentDidMount() {
    
    
    
    // this.state.numberFlight.map( flight => {
    //   console.log(flight);
    // })
  }
  render() {
    this.state.numberFlight.length = Number(this.props.match.params.id);
    for (let i = 1; i <= this.props.match.params.id; i++) {
      this.state.numberFlight.push(i);
    }
    const {numberFlight, checkFetch, dataFetch} = this.state;

    return (
      <>
      {
        (checkFetch) ? (<>
        {
          dataFetch.map( (flight, index) => {
            {/* flight.map((flight2, index)=>{ */}
              return <MultiFlight2 flight={flight} key ={index}/>
            {/* }) */}
          })
        }
        </>) : (<><div
          style={{
            height: "20px",
            marginTop: "10px",
            borderRadius: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button className="bookButton">Booking</button>
        </div>
    
        

        {
          (numberFlight.length )
          ?( numberFlight.map((number, index) => {
              return (
                
                  
                  <form className="MultiForm">
                    <div key = {index}>
                  <div className="FlightinMulti">Flight {number}</div>
                  <div className = "form-in-multi">
                    <div className="container1">
                      <div className="location">
                        <div>
                          <div className="place">Flying from</div>
                          <input
                            id ="departureAirportOrCity"
                            // name="departureAirportOrCity"
                            className="departuretime1"
                            placeholder="City or airport . . ."
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                      <div className="flighttime1">
                        <div className="place">Departing</div>
                        <input
                          id = "departureTime"
                          className="time_departure_inMul"
                          type="date"
                          // id="date"
                          required
                          // onChange={this.handleChange}
                        />
                        <div className="flighttime2"></div>
                        <div className="place">Aldults (18+)</div>
                        <input
                          id="adultNumber"
                          className="ageSelect"
                          type="number"
                          min="0"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="age">
                        <div className="flighttime1">
                          <div className="flighttime2">
                            <select className="buttonClass-in-multi "  name = "travelClassId" id="travelClassId1" >
                              <option
                                className="oneway1"
                                name="travelClassId"
                                value="1"
                              >
                                Bussiness
                              </option>
                              <option
                                className="oneway1"
                                name="travelClassId"
                                value="2"
                              >
                                Economy flex
                              </option>
                              <option
                                className="oneway1"
                                name="travelClassId"
                                value="3"
                              >
                                Economy
                              </option>
                            </select>
                            <div className="place-in-multi" min="0" step="1">
                              Children (0-17)
                            </div>
                            <input
                              id="childNumber"
                              className="ageSelect-in-multi"
                              type="number"
                              min="0"
                              onChange={this.handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="container2">
                      <div className="location">
                        <div>
                          <div className="place"> Flying to</div>
                          <input
                          id = "arrivalAirportOrCity"
                            className="departuretime1"
                            placeholder="City or airport . . ."
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                  </form>
                  
                
              );
            }))
          : ""}

     

        <button className="searchButton-in-multi" onClick={this.submitSearch}>
          Search
        </button></>) 
        
      }
        
      </>
    );
  }
}
export default withRouter(MultiFlight1);
