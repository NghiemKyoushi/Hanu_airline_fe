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
class MultiFlight1 extends React.Component {
  
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
                }}><button className = "bookButton" >Booking</button>
        </div>

        <div className = "FlightinMulti">Flight 1</div>

        <form className="form-in-multi">
          <div className="container1">
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
                <div className="flighttime2">
                <select className="buttonClass-in-multi">
                  <option className="oneway1" name = "travelClassId" value ="1" onClick={this.onClick}>Bussiness</option>
                  <option className="oneway1" name = "travelClassId" value ="2" onClick={this.onClick} >Economy flex</option>
                  <option className="oneway1" name = "travelClassId" value ="3" onClick={this.onClick}>Economy</option>
            </select>
                  <div className="place-in-multi" min="0" step="1">
                        Children (0-17)
                      </div>
                      <input
                      name ="childNumber"
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
                name ="arrivalAirportOrCity"
                  className="departuretime1"
                  placeholder="City or airport . . ."
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </form>

        <div className = "FlightinMulti">Flight 2</div>

        <form className="form-in-multi">
          <div className="container1">
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
                <div className="flighttime2">
                <select className="buttonClass-in-multi">
                  <option className="oneway1" name = "travelClassId" value ="1" onClick={this.onClick}>Bussiness</option>
                  <option className="oneway1" name = "travelClassId" value ="2" onClick={this.onClick} >Economy flex</option>
                  <option className="oneway1" name = "travelClassId" value ="3" onClick={this.onClick}>Economy</option>
            </select>
                  <div className="place-in-multi" min="0" step="1">
                        Children (0-17)
                      </div>
                      <input
                      name ="childNumber"
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
                name ="arrivalAirportOrCity"
                  className="departuretime1"
                  placeholder="City or airport . . ."
                  onChange={this.handleChange}
                />
              </div>
            </div>
            
          </div>
        </form>

        <div className = "FlightinMulti">Flight 3</div>

        <form className="form-in-multi">
          <div className="container1">
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
                <div className="flighttime2">
                <select className="buttonClass-in-multi">
                  <option className="oneway1" name = "travelClassId" value ="1" onClick={this.onClick}>Bussiness</option>
                  <option className="oneway1" name = "travelClassId" value ="2" onClick={this.onClick} >Economy flex</option>
                  <option className="oneway1" name = "travelClassId" value ="3" onClick={this.onClick}>Economy</option>
            </select>
                  <div className="place-in-multi" min="0" step="1">
                        Children (0-17)
                      </div>
                      <input
                      name ="childNumber"
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
                name ="arrivalAirportOrCity"
                  className="departuretime1"
                  placeholder="City or airport . . ."
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </form>

        <button className="searchButton-in-multi" onClick = {this.submitSearch}>Search</button>
      </>
    );
  }
}
export default MultiFlight1;
