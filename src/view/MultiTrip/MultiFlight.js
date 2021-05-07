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
class MultiFlight extends React.Component {
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
        <div style={{
                  height: "20px",
                  marginTop: "50px",
                  marginBottom: "40px",
                  borderRadius: "60px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}><button className = "bookButton" >Booking</button></div>
        <form className="searchForm">
        <div class="form-in-multiTrip">
          <div className="container1">
            <div className="buttonClass">
              <button className="oneway" value= "oneway" onClick={this.clickTypeFlight} >One way</button>
              <button className="oneway" value="roadtrip" onClick={this.clickTypeFlight} >Road Trip</button>
              <button className="oneway" value = "multi_city" onClick={this.clickTypeFlight} >Multi-city</button>
            </div>
            
           
          </div>
          <div className="container2">
            <button className="searchButton-in-multiTrip" onClick = {this.submitSearch}>Search</button>
          </div>          
          </div>
        </form>
      </>
    );
  }
}
export default MultiFlight;
