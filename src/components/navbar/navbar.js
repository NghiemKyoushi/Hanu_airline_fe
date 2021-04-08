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
               <div style={{ background: '#ffff', width: "768px",display: "flex", height: "55px", margin: "auto", borderRadius: "50px", alignItems:'flex-start', boxShadow: "1.1px 1.1px 4px" }} >
                   <Toolbar style={{marginTop: "-10px"}}>
                   <Button variant="contained" style={{margin: "15px 0px 10px -17px", background: '#ffff', borderRadius: "40px", height: "45px", width: "150px" }}  >Home</Button>
                   <Button variant="contained" style={{margin: "15px 0px 10px 1px", background: '#ffff', borderRadius: "40px", height: "45px", width: "150px"}}>Promotion</Button>
                   <Button variant="contained" style={{margin:  "15px 0px 10px 1px", background: '#ffff', borderRadius: "40px", height: "45px", width: "150px"}}>Flight</Button>
                   <Button variant="contained" style={{margin:  "15px 0px 10px 1px", background: '#ffff', borderRadius: "40px", height: "45px", width: "150px"}}>Ticket</Button>
                   <Button variant="contained" style={{margin: "15px 0px 10px 1px", background: '#ffff', borderRadius: "40px", height: "45px", width: "150px"}}>Contact</Button>

                   </Toolbar>
               </div>
        )
    }
}

export default NavBar;