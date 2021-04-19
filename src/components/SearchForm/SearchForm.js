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
      travelClassId: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clickTypeFlight = this.clickTypeFlight.bind(this);

  }

  clickTypeFlight(e){
    e.preventDefault();
    console.log("eeeeeee", e.target);
  }

  submitSearch(e){
    e.preventDefault();
    // console.log("search")

    const { departureAirportOrCity, arrivalAirportOrCity, departureTime, arrivalTime, travelClassId, childNumber,adultNumber } = this.state;
   
    const body = {
      departureAirportOrCity: departureAirportOrCity,
      arrivalAirportOrCity: arrivalAirportOrCity,
      departureTime: departureTime,
      arrivalTime:arrivalTime,
      numberOfTraveler: Number(childNumber) + Number(adultNumber), 
      travelClassId: travelClassId
    }
    // console.log("bodysearch", body)
    this.props.setDataSearch(body)
    
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
    return (
      <>
        <form className="form">
          <div className="container1">
            <div className="buttonClass">
              <button className="oneway" value= "oneway" onClick={this.clickTypeFlight} >One way</button>
              <button className="oneway" value="roadtrip" onClick={this.clickTypeFlight} >Road Trip</button>
              <button className="oneway" value = "multi_city" onClick={this.clickTypeFlight} >Multi-city</button>
            </div>
            <div className="location">
              <div>
                <div className="place">Flying from</div>
                <input
                name ="departureAirportOrCity"
                  className="departuretime"
                  placeholder="  City or airport . . ."
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
                <div className="place">Returning</div>
                <input
                name ="arrivalTime"
                  className="time_departure"
                  type="date"
                  id="date"
                  required
                  onChange={this.handleChange}
                />
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
            <div className="buttonClass">
              <button className="oneway " name = "travelClassId" value ="1" onClick={this.onClick}>Bussiness</button>
              <button className="oneway" name = "travelClassId" value ="2" onClick={this.onClick} >Economy flex</button>
              <button className="oneway" name = "travelClassId" value ="3" onClick={this.onClick}>Economy</button>
            </div>
            <div className="location">
              <div>
                <div className="place"> Flying to</div>
                <input
                name ="arrivalAirportOrCity"
                  className="departuretime"
                  placeholder="  City or airport . . ."
                  onChange={this.handleChange}
                />
              </div>
            </div>
            <button className="searchButton" onClick = {this.submitSearch}>Search</button>
          </div>
        </form>
      </>
    );
  }
}
export default SearchForm;
