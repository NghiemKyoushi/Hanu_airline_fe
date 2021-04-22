import React from "react";
import { withRouter } from "react-router";

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

    };
    this.handleChange = this.handleChange.bind(this);
    this.submitSearch = this.submitSearch.bind(this);

    // this.createLength = this.createLength.bind(this)
  }

  submitSearch(e){
    e.preventDefault();
    // console.log("search")

    const { departureAirportOrCity, arrivalAirportOrCity, departureTime, arrivalTime, travelClassId, childNumber,adultNumber } = this.state;
   

      const body1 = {
        departureAirportOrCity: departureAirportOrCity,
        arrivalAirportOrCity: arrivalAirportOrCity,
        departureTime: departureTime,
        arrivalTime:departureTime,
        numberOfTraveler: Number(childNumber) + Number(adultNumber), 
        travelClassId: travelClassId
      }
      console.log("body 1", body1);   
    
    // console.log("bodysearch", body)
    
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  componentDidMount() {
    this.state.numberFlight.length = Number(this.props.match.params.id);

    for (let i = 1; i <= this.props.match.params.id; i++) {
      this.state.numberFlight.push(i);
    }
  }
  render() {
    const {numberFlight} = this.state;

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
          <button className="bookButton">Booking</button>
        </div>
    
        

        {(numberFlight[0] !== " ")
          ? numberFlight.map((number, index) => {
              return (
                <>
                  <div className="FlightinMulti">Flight {number }</div>

                  <form className="form-in-multi">
                    <div className="container1">
                      <div className="location">
                        <div>
                          <div className="place">Flying from</div>
                          <input
                            name="departureAirportOrCity"
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
                          name="adultNumber"
                          className="ageSelect"
                          type="number"
                          min="0"
                          onChange={this.handleChange}
                        />
                      </div>
                      <div className="age">
                        <div className="flighttime1">
                          <div className="flighttime2">
                            <select className="buttonClass-in-multi" name ="travelClassId" onChange={this.handleChange} value ={this.state.travelClassId}>
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
                              name="childNumber"
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
                            name="arrivalAirportOrCity"
                            className="departuretime1"
                            placeholder="City or airport . . ."
                            onChange={this.handleChange}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </>
              );
            })
          : ""}

        {/* <div className="FlightinMulti">Flight 2</div>

        <form className="form-in-multi">
          <div className="container1">
            <div className="location">
              <div>
                <div className="place">Flying from</div>
                <input
                  name="departureAirportOrCity"
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
                name="adultNumber"
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
                    <option
                      className="oneway1"
                      name="travelClassId"
                      value="1"
                      onClick={this.onClick}
                    >
                      Bussiness
                    </option>
                    <option
                      className="oneway1"
                      name="travelClassId"
                      value="2"
                      onClick={this.onClick}
                    >
                      Economy flex
                    </option>
                    <option
                      className="oneway1"
                      name="travelClassId"
                      value="3"
                      onClick={this.onClick}
                    >
                      Economy
                    </option>
                  </select>
                  <div className="place-in-multi" min="0" step="1">
                    Children (0-17)
                  </div>
                  <input
                    name="childNumber"
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
                  name="arrivalAirportOrCity"
                  className="departuretime1"
                  placeholder="City or airport . . ."
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </form>

        <div className="FlightinMulti">Flight 3</div>

        <form className="form-in-multi">
          <div className="container1">
            <div className="location">
              <div>
                <div className="place">Flying from</div>
                <input
                  name="departureAirportOrCity"
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
                name="adultNumber"
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
                    <option
                      className="oneway1"
                      name="travelClassId"
                      value="1"
                      onClick={this.onClick}
                    >
                      Bussiness
                    </option>
                    <option
                      className="oneway1"
                      name="travelClassId"
                      value="2"
                      onClick={this.onClick}
                    >
                      Economy flex
                    </option>
                    <option
                      className="oneway1"
                      name="travelClassId"
                      value="3"
                      onClick={this.onClick}
                    >
                      Economy
                    </option>
                  </select>
                  <div className="place-in-multi" min="0" step="1">
                    Children (0-17)
                  </div>
                  <input
                    name="childNumber"
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
                  name="arrivalAirportOrCity"
                  className="departuretime1"
                  placeholder="City or airport . . ."
                  onChange={this.handleChange}
                />
              </div>
            </div>
          </div>
        </form> */}

        <button className="searchButton-in-multi" onClick={this.submitSearch}>
          Search
        </button>
      </>
    );
  }
}
export default withRouter(MultiFlight1);
