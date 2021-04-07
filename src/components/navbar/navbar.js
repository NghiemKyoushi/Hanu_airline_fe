import React from "react";

import {AppBar, Button, makeStyles, Toolbar,Typography } from "@material-ui/core";
import FlightIcon from '@material-ui/icons/Flight';
// const useStyles = makeStyles((theme) => ({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }));
class NavBar extends React.Component{
    constructor(props){
        super(props)

    }
    render(){
        // const classes = useStyles();
        return(
               <div style={{ background: '#ffff', width: "500px",display: "flex", height: "45px", margin: "auto", borderRadius: "50px", alignItems:'flex-start', boxShadow: "1.1px 1.1px 4px" }} >
                   <Toolbar style={{marginTop: "-10px"}}>
                   <Button variant="contained" style={{ background: '#ffff', borderRadius: "40px" }}  >Home</Button>
                   <Button variant="contained" style={{marginLeft: 1.5,background: '#ffff',borderRadius: "40px"}}>Promotion</Button>
                   <Button variant="contained" style={{marginLeft: 1.5,background: '#ffff',borderRadius: "40px"}}>Flight</Button>
                   <Button variant="contained" style={{marginLeft: 1.5,background: '#ffff',borderRadius: "40px"}}>Ticket</Button>
                   <Button variant="contained" style={{marginLeft: 1.5,background: '#ffff',borderRadius: "40px"}}>Contact</Button>

                   </Toolbar>
               </div>
        )
    }
}

export default NavBar;