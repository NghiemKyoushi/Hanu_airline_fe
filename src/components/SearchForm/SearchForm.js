import React from "react";
// import {
//   AppBar,
//   Button,
//   Toolbar,
//   Typography,
//   TextField,
// } from "@material-ui/core";
// import Box from "@material-ui/core/Box";
import "./SearchForm.css";
import { ClearAll } from "@material-ui/icons";
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typeFlight: "",
      departureAirportOrCity: "",
      arrivalAirportOrCity: "",
      departureTime: "",
      arrivalTime:"",
      childNumber: 0,
      adultNumber: 0,
      travelClassId: "",

      //choose type of flight
      oneWay: false,
      roadTrip: false,
      multiCity: false

    };

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clickTypeFlight = this.clickTypeFlight.bind(this);

  }

  async clickTypeFlight(e){
    e.preventDefault();
    console.log("eeeeeee", e.target);
    this.setState({
      typeFlight: e.target.value
    })

     if(e.target.value == "oneWay"){
       console.log("aaaaaaaaaaa")
       this.setState({
        oneWay: true,
        roadTrip: false,
        multiCity: false,
      })
    }else if(e.target.value == "roadTrip"){
      this.setState({
        roadTrip: true,
        oneWay: false,
        multiCity: false,
      })
    }else if(e.target.value == "multiCity"){
      this.setState({
        multiCity: true,
        oneWay: false,
        roadTrip: false,
      })
    }
    const typeFlight = document.querySelectorAll(".oneway");
     typeFlight.forEach((b) => {
        clearAll(typeFlight);
    });

     function clearAll(buttons){
        buttons.forEach((b) =>{
        b.classList.remove("typeFlight")
      })
    }
    e.target.classList.toggle("typeFlight")

  }
// thieu cai nay
  submitSearch(e){
    e.preventDefault();
    // console.log("search")

    const { departureAirportOrCity, arrivalAirportOrCity, departureTime, arrivalTime, travelClassId, childNumber,adultNumber } = this.state;
   
    if(this.state.oneWay){

      const body1 = {
        departureAirportOrCity: departureAirportOrCity,
        arrivalAirportOrCity: arrivalAirportOrCity,
        departureTime: departureTime,
        arrivalTime:departureTime,
        numberOfTraveler: Number(childNumber) + Number(adultNumber), 
        travelClassId: travelClassId
      }
      console.log("body 1", body1)
      this.props.setDataSearch(body1)

    }else if(this.state.roadTrip){
      const body2 = {
        departureAirportOrCity: departureAirportOrCity,
        arrivalAirportOrCity: arrivalAirportOrCity,
        departureTime: departureTime,
        arrivalTime:arrivalTime,
        numberOfTraveler: Number(childNumber) + Number(adultNumber), 
        travelClassId: travelClassId
      }
      this.props.setDataSearch(body2)

    }
    
    // console.log("bodysearch", body)
    
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
 async onClick(e){
    e.preventDefault();
    console.log("jdjd=djdjdj")
    await this.setState({
      travelClassId: e.target.value
    })

    console.log("travel classID: ", this.state.travelClassId);
   
    const travelClass = document.querySelectorAll(".oneway");
     travelClass.forEach((b) => {
        clearAll(travelClass);
    });

     function clearAll(buttons){
        buttons.forEach((b) =>{
        b.classList.remove("travelClass")
      })
    }
    e.target.classList.toggle("travelClass")
  }
  render() {
    const {oneWay, roadTrip, multiCity} = this.state;
    return (
      <>
        <div style={{
                  height: "20px",
                  marginTop: "50px",
                  marginBottom: "40px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}><button className = "bookButton" >Booking</button></div>
        <form className="form">
          <div className="container1">
            <div className="buttonClass">
              <button className="oneway" value= "oneWay" onClick={this.clickTypeFlight} >One way</button>
              <button className="oneway" value="roadTrip" onClick={this.clickTypeFlight} >Road Trip</button>
              <button className="oneway" value = "multiCity" onClick={this.clickTypeFlight} >Multi-city</button>
            </div>
            <div className="location">
              <div>
                <div className="place">Flying from</div>
                <input
                name ="departureAirportOrCity"
                  className="departuretime1"
                  placeholder="City or airport . . ."
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <div className="flighttime1">
              <div className="place">Departing</div>
              <input
              name="departureTime"
                className="time_departure"
                type="date"
                id="date"
                required
                onChange={this.handleChange}
              />
              <div className="flighttime2"></div>
              <div className="place">Aldults (18+)</div>
              <input
              name ="adultNumber"
                className="ageSelect"
                type="number"
                min="0"
                onChange={this.handleChange}
              />
            </div>
            <div className="age">
           
              <div className="flighttime1">
              {
              (roadTrip) ? (<><div className="place">Returning</div>
                <input
                name ="arrivalTime"
                  className="time_departure"
                  type="date"
                  id="date"
                  required
                  onChange={this.handleChange}
                /></>) : <div className="place"></div>
            }
                
                <div className="flighttime2"></div>
                <div className="place" min="0" step="1">
                  Children (0-17)
                </div>
                <input
                name ="childNumber"
                  className="ageSelect"
                  type="number"
                  min="0"
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>

          <div className="container2">
            <div className="location">
              <div>
                <div className="place1"> Flying to</div>
                <input
                name ="arrivalAirportOrCity"
                  className="departuretime2"
                  placeholder="City or airport . . ."
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <select className="buttonClass_Bus">
              <option className="oneway " name = "travelClassId" value ="1" onClick={this.onClick}>Bussiness</option>
              <option className="oneway" name = "travelClassId" value ="2" onClick={this.onClick} >Economy flex</option>
              <option className="oneway" name = "travelClassId" value ="3" onClick={this.onClick}>Economy</option>
            </select>
            <button className="searchButton" onClick = {this.submitSearch}>Search</button>
          </div>
        </form>
      </>
    );
  }
}
export default SearchForm;
