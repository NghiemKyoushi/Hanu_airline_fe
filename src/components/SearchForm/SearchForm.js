import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  TextField,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import "./SearchForm.css";
class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  //  async componentDidMount(){

  //   const apiGetFlight = ""
  //   }

  render() {
    return (
      <>
        <form className="form">
          <div className="container1">
            <div className="buttonClass">
              <button className="oneway">One way</button>
              <button className="oneway">Road Trip</button>
              <button className="oneway">Multi-city</button>
            </div>
            <div className="location">
              <div>
                <div className="place">Flying from</div>
                <input
                  className="departuretime"
                  placeholder="  City or airport . . ."
                />
              </div>
            </div>
            <div className="flighttime1">
              <div className="place">Departing</div>
              <input
                className="time_departure"
                type="date"
                id="date"
                required
              />
              <div className="flighttime2"></div>
              <div className="place">Aldults (18+)</div>
              <input className="ageSelect" type="number" />
            </div>
            <div className="age">
              <div className="flighttime1">
                <div className="place">Returning</div>
                <input
                  className="time_departure"
                  type="date"
                  id="date"
                  required
                />
                <div className="flighttime2"></div>
                <div className="place">Children (0-17)</div>
                <input className="ageSelect" type="number" />
              </div>
            </div>
          </div>

          <div className="container2">
            <div className="buttonClass">
              <button className="oneway">Bussiness</button>
              <button className="oneway">Economy flex</button>
              <button className="oneway">Economy</button>
            </div>
            <div className="location">
              <div>
                {" "}
                <div className="place"> Flying to</div>
                <input
                  className="departuretime"
                  placeholder="  City or airport . . ."
                />
              </div>
            </div>
            <button className="searchButton">Search</button>
          </div>
        </form>
      </>
    );
  }
}
export default SearchForm;
