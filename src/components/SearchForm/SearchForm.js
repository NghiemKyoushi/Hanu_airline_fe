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
import { withRouter } from "react-router";
import  {setCookie, deleteCookie} from '../../utils/fetchData/fetchData';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      typeFlight: "",
      departureAirportOrCity: "",
      arrivalAirportOrCity: "",
      departureTime: "",
      arrivalTime:"",
      childNumber: 0,
      adultNumber: 0,
      travelClassId: "1",
      numberFlight: 0,

      //choose type of flight
      oneWay: false,
      roadTrip: true,
      multiCity: false,
      //value of travel class

    };

    this.handleChange = this.handleChange.bind(this);
    // this.onChange = this.onChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);
    this.clickTypeFlight = this.clickTypeFlight.bind(this);
    this.setValueTravelClass = this.setValueTravelClass.bind(this);

  }

  setValueTravelClass(e){
    console.log("kdkdkd")
    this.setState({
      travelClassId: e.target.value
    })
  }
  async clickTypeFlight(e){
    e.preventDefault();
    await this.setState({
      typeFlight: e.target.value
    })

     if(this.state.typeFlight === "oneWay"){
      console.log("target",e.target.value)
       this.setState({
        oneWay: true,
        roadTrip: false,
        multiCity: false,
      })
    }else if(this.state.typeFlight === "roadTrip"){
      console.log("target",e.target.value)

      this.setState({
        roadTrip: true,
        oneWay: false,
        multiCity: false,
      })
    }else if(this.state.typeFlight === "multi_city"){
      console.log("target",e.target.value)
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
    // console.log("search");
    deleteCookie("arrFlightOneWay");
    deleteCookie("departureTime");
    deleteCookie("arrivalTime");


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
      this.props.setDataSearchOneWay(body1);
      

    }else if(this.state.roadTrip){
      const body2 = {
        departureAirportOrCity: departureAirportOrCity,
        arrivalAirportOrCity: arrivalAirportOrCity,
        departureTime: departureTime,
        arrivalTime:arrivalTime,
        numberOfTraveler: Number(childNumber) + Number(adultNumber), 
        travelClassId: travelClassId
      }
      this.props.setDataSearchRoadTrip(body2)

    }else if(this.state.multiCity){
      
      this.props.history.push(`/multiCity/${this.state.numberFlight}`)
    }
    
    // console.log("bodysearch", body)
    
  }
  handleChange(e) {
    console.log("ahaha")
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
 
  render() {
    const {oneWay, roadTrip, multiCity} = this.state;
    console.log("type", oneWay, roadTrip, multiCity);
    return (
      <>
      {
        (oneWay || roadTrip) ? (<> 
        <form className = "searchForm">
        <div> 
        
          <div className="form">
          <div className="container1">
            <div className="buttonClass">
              <button className="oneway" value= "oneWay" onClick={this.clickTypeFlight} >One way</button>
              <button className="oneway" value="roadTrip" onClick={this.clickTypeFlight} >Road Trip</button>
              <button className="oneway" value = "multi_city" onClick={this.clickTypeFlight} >Multi-city</button>
            </div>

            {/* adjust follow flight type */}
            {/* {
              (multiCity) ? (<div>

              </div>): (<div>
                
              </div>)
            } */}
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
            
            <select className="buttonClass_Bus" name ="travelClassId" onChange={this.handleChange} value ={this.state.travelClassId}>
              <option className="oneway"  value ="1">Bussiness</option>
              <option className="oneway"  value ="2" >Economy flex</option>
              <option className="oneway"  value ="3" >Economy</option>
            </select>
            <button className="searchButton" onClick = {this.submitSearch}>Search</button>
          </div>
          </div>
          </div> 
        </form></>): (<>
         
        <form className="searchForm">
        <div class="form-in-multiTrip">
          <div className="container1">
            <div className="buttonClass">
            <button className="oneway" value= "oneWay" onClick={this.clickTypeFlight} >One way</button>
              <button className="oneway" value="roadTrip" onClick={this.clickTypeFlight} >Road Trip</button>
              <button className="oneway" value = "multi_city" onClick={this.clickTypeFlight} >Multi-city</button>
            </div>
            
            <div className="flighttime1">
              <div className="flighttime2"></div>
              <div className="place">Number of flights</div>
              <input
              name ="numberFlight"
                className="ageSelect-in-multiTrip"
                type="number"
                min="0"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="container2">
            <button className="searchButton-in-multiTrip" onClick = {this.submitSearch}>Search</button>
          </div>
          </div>
        </form></>
        )}


       
      </>
    );
  }
}
export default withRouter(SearchForm) ;