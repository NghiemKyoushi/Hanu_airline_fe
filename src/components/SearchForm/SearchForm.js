import React from "react";
import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  TextField,
} from "@material-ui/core";
import Box from "@material-ui/core/Box";
import './SearchForm.css'
class SearchForm extends React.Component {
  render() {
    return (
      <>
        <form className="form">
         
         <div className ="container1">
         <div className="buttonClass">
         <button className ="oneway">One way</button>
         <button className ="oneway">Road Trip</button>
         <button className ="oneway">Multi-city</button>
         </div>
         <div className="location">
         <div >
           <div className = "place">Flying from</div>
           <input className ="departuretime" placeholder ="  City or airport . . ."
         /></div>
         
         </div>
         <div className="flighttime1">
         <div className = "place">Departing</div>
         <input className="time_departure" type="date" id="date" required/>
         <div className="flighttime2"></div>
         <div className = "place">Aldults (18+)</div>
         <input className="ageSelect" type="number"/>
         
         </div>
         <div className="age">
         <div className="flighttime1">
         <div className = "place">Returning</div>
         <input className="time_departure" type="date" id="date" required/>
         <div className="flighttime2"></div>
         <div className = "place">Children (0-17)</div>
         <input  className="ageSelect" type="number"/>
         </div>
         </div>
         </div>
         
         <div className ="container2">
         <div className="buttonClass">
         <button className ="oneway">Bussiness</button>
         <button className ="oneway">Economy flex</button>
         <button className ="oneway">Economy</button>
         </div>
         <div className="location">
         <div > <div className = "place"> Flying to</div>
         <input className ="departuretime" placeholder ="  City or airport . . ."
         /></div> 
         </div>
         <button className="searchButton">Search</button>
         </div>
        </form>

        <form class = "promotionForm">
        <div class = "promotionMenu">
          <div class = "promotion">
            <div style={{height: "20px", marginTop: "30px", marginBottom: "40px", borderRadius: "60px", display: "flex",justifyContent: "center", alignItems: "center"}}>
            <Button  variant="contained" color="primary" size ="large">Promotion</Button>
            </div>
            <nav>
                <ul>
                <li><div className ="promorion3">
                    <button className ="from">Ha Noi</button>
                      <div className = "t">to</div>
                      <button className ="from">HCM City</button>
                        <input className="time_departure_pr" type="date" id="date"/>
                        <div className ="price">Price</div>
                        <div>
                          <button className ="oneway_pr">One way</button>
                          <button className ="oneway_pr">Economy</button>
                        </div>
                          <button className="BookNow">Book Now</button>
                    </div>
                    </li>
                    <li><div className ="promorion3">
                    <button className ="from">Ha Noi</button>
                      <div className = "t">to</div>
                      <button className ="from">HCM City</button>
                        <input className="time_departure_pr" type="date" id="date"/>
                        <div className ="price">Price</div>
                        <div>
                          <button className ="oneway_pr">One way</button>
                          <button className ="oneway_pr">Economy</button>
                        </div>
                          <button className="BookNow">Book Now</button>
                    </div>
                    </li>
                    <li><div className ="promorion3">
                    <button className ="from">Ha Noi</button>
                      <div className = "t">to</div>
                      <button className ="from">HCM City</button>
                        <input className="time_departure_pr" type="date" id="date"/>
                        <div className ="price">Price</div>
                        <div>
                          <button className ="oneway_pr">One way</button>
                          <button className ="oneway_pr">Economy</button>
                        </div>
                          <button className="BookNow">Book Now</button>
                    </div>
                    </li>
                    <li><div className ="promorion3">
                    <button className ="from">Ha Noi</button>
                      <div className = "t">to</div>
                      <button className ="from">HCM City</button>
                        <input className="time_departure_pr" type="date" id="date"/>
                        <div className ="price">Price</div>
                        <div>
                          <button className ="oneway_pr">One way</button>
                          <button className ="oneway_pr">Economy</button>
                        </div>
                          <button className="BookNow">Book Now</button>
                    </div>
                    </li>
                </ul>
            </nav>
            <button className="more">More</button>
          </div>
        </div>
        </form>

<form class = "FlightForm">
        <div class = "promotionMenu">
          <div class = "promotion">
          <div style={{height: "20px", marginTop: "100px", marginBottom: "40px", borderRadius: "60px", display: "flex",justifyContent: "center", alignItems: "center"}}>
            <Button  variant="contained" color="primary" size ="large">Flight</Button>
            </div>
            <nav>
                <ul>
                <li><div className ="promorion3">
                    <button className ="from">Ha Noi</button>
                      <div className = "t">to</div>
                      <button className ="from">HCM City</button>
                        <input className="time_departure_pr" type="date" id="date"/>
                        <div className ="price">Price</div>
                        <div>
                          <button className ="oneway_pr">One way</button>
                          <button className ="oneway_pr">Economy</button>
                        </div>
                          <button className="BookNow">Book Now</button>
                    </div>
                    </li>
                    <li><div className ="promorion3">
                    <button className ="from">Ha Noi</button>
                      <div className = "t">to</div>
                      <button className ="from">HCM City</button>
                        <input className="time_departure_pr" type="date" id="date"/>
                        <div className ="price">Price</div>
                        <div>
                          <button className ="oneway_pr">One way</button>
                          <button className ="oneway_pr">Economy</button>
                        </div>
                          <button className="BookNow">Book Now</button>
                    </div>
                    </li>
                    <li><div className ="promorion3">
                    <button className ="from">Ha Noi</button>
                      <div className = "t">to</div>
                      <button className ="from">HCM City</button>
                        <input className="time_departure_pr" type="date" id="date"/>
                        <div className ="price">Price</div>
                        <div>
                          <button className ="oneway_pr">One way</button>
                          <button className ="oneway_pr">Economy</button>
                        </div>
                          <button className="BookNow">Book Now</button>
                    </div>
                    </li>
                    <li><div className ="promorion3">
                    <button className ="from">Ha Noi</button>
                      <div className = "t">to</div>
                      <button className ="from">HCM City</button>
                        <input className="time_departure_pr" type="date" id="date"/>
                        <div className ="price">Price</div>
                        <div>
                          <button className ="oneway_pr">One way</button>
                          <button className ="oneway_pr">Economy</button>
                        </div>
                          <button className="BookNow">Book Now</button>
                    </div>
                    </li>
                </ul>
            </nav>
            <button className="more">More</button>
          </div>
        </div>
        </form>

        <div class = "promotionMenu">
          <div class = "promotion">
          <div style={{height: "20px", marginTop: "180px", marginBottom: "30px", borderRadius: "60px", display: "flex",justifyContent: "center", alignItems: "center"}}>
            <Button  variant="contained" color="primary" size ="large">Ticket</Button>
            </div>
            <form class = "form_check">
            <div ><input className ="TicketID" placeholder ="  Ticket ID _ " />
            <button className="check">check status</button></div>
            
            </form>
            
          </div>
        </div>
      </>
    );
  }
}
export default SearchForm;


// <div
// className="container1"
// style={{ display: "flex", flexDirection: "column" }}
// >
// <Toolbar style={{ marginTop: "-10px" }}>
//   <Button
//     variant="contained"
//     style={{ background: "#ffff", borderRadius: "40px" }}
//   >
//     Home
//   </Button>
//   <Button
//     variant="contained"
//     style={{
//       marginLeft: 1.5,
//       background: "#ffff",
//       borderRadius: "40px",
//     }}
//   >
//     Promotion
//   </Button>
//   <Button
//     variant="contained"
//     style={{
//       marginLeft: 1.5,
//       background: "#ffff",
//       borderRadius: "40px",
//     }}
//   >
//     Flight
//   </Button>
// </Toolbar>
// <Toolbar>
// <TextField
//   InputLabelProps={{
// shrink: true,
// }}

//   label="Departure airport or city"
//   variant="filled"
//   color="primary"
  
//   style={{ backgroundColor: "#848f91", width: "250px", margin: "auto",borderRadius:"100px" }}
// />
// </Toolbar>


// <div className="Date" style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center" }}>
// <TextField
//   id="outlined-secondary"
//   label="Departure time"
//   variant="filled"
//   color="secondary"
//   type="date"
//   InputLabelProps={{
// shrink: true,
// }}
//   style={{  width: "160px", borderRadius:"30px", textDecoration:"none" }}
// />
// <TextField
// InputLabelProps={{
// shrink: true,
// }}
//   id="outlined-secondary"
//   label="Arrival time"
//   variant="filled"
//   color="secondary"
//   type="date"
//   style={{  width: "160px"}}
// />
// </div>

// <div className= "age">
// <TextField

//   id="outlined-secondary"
//   label="Adult"
//   // variant="filled"
//   color="secondary"
//   type="number"
//   style={{  width: "60px"}}
// />
// <TextField

// id="outlined-secondary"
// label="Children"
// // variant="filled"
// color="secondary"
// type="number"
// style={{  width: "60px"}}
// />
// </div>
// </div>
// <div
// className="container2"
// style={{ display: "flex", flexDirection: "column" }}
// >
// <Toolbar style={{ marginTop: "-10px" }}>
//   <Button
//     variant="contained"
//     style={{ background: "#ffff", borderRadius: "40px" }}
//   >
//     Home
//   </Button>
//   <Button
//     variant="contained"
//     style={{
//       marginLeft: 1.5,
//       background: "#ffff",
//       borderRadius: "40px",
//     }}
//   >
//     Promotion
//   </Button>
//   <Button
//     variant="contained"
//     style={{
//       marginLeft: 1.5,
//       background: "#ffff",
//       borderRadius: "40px",
//     }}
//   >
//     Flight
//   </Button>
// </Toolbar>
// <TextField
//   id="outlined-secondary"
//   label="Arrival airport or city"
//   variant="filled"
//   color="secondary"
//   style={{ color: "#ffff", width: "250px", margin: "auto" }}
// />
// <Toolbar>
// <Button size="large" style={{backgroundColor: "#e6cb1c" ,margin: "auto", width:"170px", heigh: "1500px", borderRadius: "60px" }}>Search</Button>

// </Toolbar>
// </div>