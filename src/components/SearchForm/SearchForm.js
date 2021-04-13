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
           <div className = "place"></div>
           <input className ="departuretime" placeholder ="  Departure airport or city . . ."
         /></div>
         
         </div>
         <div className="flighttime">
         <label></label>
         <input className="time_departure" type="date" id="date"/>
         <input className="time_departure" type="date" id="date"/>

         </div>
         <div className="age">
         <label></label>
         <input placeholder="    Adult" className="ageSelect" type="number"/>
         <input placeholder="    Children" className="ageSelect" type="number"/>

         </div>
         </div>
         <div className ="container2">
         <div className="buttonClass">
         <button className ="oneway">Bussiness</button>
         <button className ="oneway">Economy flex</button>
         <button className ="oneway">Economy</button>
         </div>
         <div className="location">
         <div > <div className = "place"></div>
         <input className ="departuretime" placeholder ="  Arrival airport or city . . ."
         /></div> 
         </div>
         <button className="searchButton">Search Fights</button>
         </div>
        </form>
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